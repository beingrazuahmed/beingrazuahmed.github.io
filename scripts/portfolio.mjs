#!/usr/bin/env node
// Local-only maintenance helpers. No network requests, credentials, or writes.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dataFiles = ['data.js', 'extra-data.js', 'coursework-data.js', 'v2-data.js'];
const read = name => fs.readFileSync(path.join(root, name), 'utf8');

function loadData() {
  const context = vm.createContext({ window: {} }, {
    codeGeneration: { strings: false, wasm: false }
  });
  for (const file of dataFiles) {
    new vm.Script(read(file), { filename: file }).runInContext(context, { timeout: 2000 });
  }
  const data = context.window.MRA_V2;
  if (!data || !Array.isArray(data.people) || !data.people.length) {
    throw new Error('v2-data.js did not expose a non-empty MRA_V2.people array.');
  }
  return data;
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/gs)]
    .map(match => [match[1].toLowerCase(), match[3]]));
}

function localPath(value) {
  if (!value || /^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return null;
  const clean = decodeURIComponent(value.split(/[?#]/)[0]);
  const resolved = path.resolve(root, clean.replace(/^\/+/, ''));
  if (!resolved.startsWith(root + path.sep)) throw new Error(`Path outside repository: ${value}`);
  return resolved;
}

function check() {
  const errors = [];
  const expect = (condition, message) => { if (!condition) errors.push(message); };
  const verifyFile = (value, owner) => {
    try {
      const file = localPath(value);
      if (file) expect(fs.existsSync(file) && fs.statSync(file).isFile(), `${owner}: missing ${value}`);
    } catch (error) { errors.push(`${owner}: ${error.message}`); }
  };
  const files = fs.readdirSync(root);
  const scripts = files.filter(file => file.endsWith('.js')).concat('scripts/portfolio.mjs');
  for (const script of scripts) {
    const result = spawnSync(process.execPath, ['--check', path.join(root, script)], {
      encoding: 'utf8', timeout: 10000
    });
    expect(result.status === 0, `${script}: ${result.error?.message || result.stderr.trim()}`);
  }

  const pages = files.filter(file => file.endsWith('.html'));
  for (const page of pages) {
    const html = read(page);
    const orderedScripts = [];
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi)) {
      const attrs = attributes(match[1]);
      if (attrs.src) {
        verifyFile(attrs.src, page);
        orderedScripts.push(attrs.src.split(/[?#]/)[0]);
      }
      if (attrs.type === 'application/ld+json') {
        try { JSON.parse(match[2]); }
        catch (error) { errors.push(`${page}: invalid JSON-LD: ${error.message}`); }
      }
    }
    for (const match of html.matchAll(/<(link|img)\b([^>]*)>/gi)) {
      const attrs = attributes(match[2]);
      if (match[1].toLowerCase() === 'img') verifyFile(attrs.src, page);
      else if ((attrs.rel || '').split(/\s+/).includes('stylesheet')) verifyFile(attrs.href, page);
    }
    if (orderedScripts.includes('v2-app.js')) {
      const required = [...dataFiles, 'v2-app.js'];
      const indexes = required.map(file => orderedScripts.indexOf(file));
      expect(indexes.every((index, i) => index >= 0 && (i === 0 || index > indexes[i - 1])),
        `${page}: data scripts must load in order before v2-app.js`);
    }
  }

  let data;
  try { data = loadData(); }
  catch (error) { errors.push(error.message); }
  const ids = new Set();
  let profileCount = 0;
  const stringArrays = ['roles', 'profileBadges', 'currentPositions', 'biographyParagraphs',
    'researchInterests', 'careerHistory', 'awards', 'externalAffiliations', 'relationshipPath', 'shared'];
  const objectArrays = ['links', 'education', 'researchTraining', 'careerTimeline',
    'collaborationStats', 'sharedPublications', 'sharedAccepted', 'sharedEditorial',
    'sharedConferences', 'sharedDataset', 'sharedInPreparation'];
  for (const person of data?.people || []) {
    if (!person || typeof person !== 'object') { errors.push('Invalid Network person record.'); continue; }
    expect(typeof person.id === 'string' && /^[a-z0-9-]+$/.test(person.id), 'Missing or invalid person ID.');
    expect(!ids.has(person.id), `Duplicate person ID: ${person.id}`);
    ids.add(person.id);
    expect(typeof person.name === 'string' && person.name.trim(), `${person.id}: missing name`);
    for (const key of [...stringArrays, ...objectArrays]) {
      if (person[key] === undefined) continue;
      const array = person[key];
      expect(Array.isArray(array), `${person.id}.${key}: expected an array`);
      if (!Array.isArray(array)) continue;
      expect(array.every(item => stringArrays.includes(key)
        ? typeof item === 'string'
        : item !== null && typeof item === 'object' && !Array.isArray(item)),
      `${person.id}.${key}: invalid item type`);
    }
    if (person.portrait) verifyFile(person.portrait, person.id);
    for (const key of ['cardPortraitPosition', 'profilePortraitPosition']) {
      if (person[key] === undefined) continue;
      const value = person[key];
      expect(typeof value === 'string' && /^(?:\d+(?:\.\d+)?%|left|center|right)\s+(?:\d+(?:\.\d+)?%|top|center|bottom)$/.test(value)
        && [...value.matchAll(/(\d+(?:\.\d+)?)%/g)].every(match => Number(match[1]) <= 100),
      `${person.id}.${key}: invalid focal position`);
    }
    if (person.profilePage) {
      profileCount++;
      verifyFile(person.profilePage, person.id);
      try {
        const file = localPath(person.profilePage);
        expect(Boolean(file), `${person.id}: profilePage must be a local route`);
        if (file && fs.existsSync(file)) {
          const html = fs.readFileSync(file, 'utf8');
          const body = attributes(html.match(/<body\b([^>]*)>/i)?.[1] || '');
          // The original mentor route uses the renderer's default person ID.
          const renderedPerson = body['data-person'] || 'shamim-reza';
          expect(body['data-page'] === 'network-profile' && renderedPerson === person.id,
            `${person.profilePage}: profile route does not match ${person.id}`);
        }
      } catch (error) { errors.push(`${person.id}: ${error.message}`); }
    }
  }
  if (errors.length) throw new Error(`Portfolio validation failed:\n${errors.map(error => `- ${error}`).join('\n')}`);
  console.log(`PASS: ${scripts.length} JavaScript files, ${pages.length} HTML pages, ${ids.size} Network records, ${profileCount} profile routes.`);
  console.log('PASS: data load order, JSON-LD, local bootstrap assets, portrait files and focal positions.');
  console.log('Browser layout, interactions, external links and content accuracy still require task-specific review.');
}

try {
  const [command = 'help', id, ...extra] = process.argv.slice(2);
  if (extra.length || (id && command !== 'person')) throw new Error('Unexpected arguments. Run with help for usage.');
  if (command === 'check') check();
  else if (command === 'people') {
    console.log(JSON.stringify(loadData().people.map(({ id, name, roles, profilePage }) =>
      ({ id, name, roles, profilePage })), null, 2));
  } else if (command === 'person') {
    if (!id) throw new Error('Supply an exact person ID. Run people to list IDs.');
    const person = loadData().people.find(person => person.id === id);
    if (!person) throw new Error(`Unknown person ID: ${id}. Run people to list IDs.`);
    console.log(JSON.stringify(person, null, 2));
  } else if (command === 'help' || command === '--help' || command === '-h') {
    console.log('Usage: node scripts/portfolio.mjs <check|people|person ID>');
    console.log('All commands are read-only and require no package installation.');
  } else throw new Error(`Unknown command: ${command}. Run with help for usage.`);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
