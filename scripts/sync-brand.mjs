#!/usr/bin/env node
/**
 * Copies brand/ into public/ so the site serves exactly what the brand guide
 * describes. brand/ is the only place these files are edited; public/brand/ and
 * public/favicon.svg are generated and git-ignored.
 *
 * Produces:
 *   public/brand/*.svg                      every logo file
 *   public/brand/colors.json                color tokens
 *   public/brand/leafworks-brand-assets.zip all of the above, for "download all"
 *   public/favicon.svg                      the mark, switching ink for dark tabs
 *
 * Dependency-free: the zip is written by hand (stored, not deflated). The files
 * are a few kilobytes of SVG and JSON, so compression would save nothing that
 * matters and would add a dependency to the build.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'brand');
const OUT = join(ROOT, 'public', 'brand');

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

const files = [
  ...readdirSync(join(SRC, 'logo'))
    .filter((f) => f.endsWith('.svg'))
    .sort()
    .map((f) => ({ name: `logo/${f}`, out: f, data: readFileSync(join(SRC, 'logo', f)) })),
  { name: 'tokens/colors.json', out: 'colors.json', data: readFileSync(join(SRC, 'tokens', 'colors.json')) },
  { name: 'README.md', out: null, data: readFileSync(join(SRC, 'README.md')) },
];

for (const f of files) {
  if (f.out) writeFileSync(join(OUT, f.out), f.data);
}

writeFileSync(join(OUT, 'leafworks-brand-assets.zip'), zip(files.map((f) => ({ name: `leafworks-brand/${f.name}`, data: f.data }))));

// Favicon: the positive mark, re-inked white when the browser UI is dark.
// A tab strip is the one place the site cannot choose its own background.
const mark = readFileSync(join(SRC, 'logo', 'leafworks-mark-positive.svg'), 'utf8');
const favicon = mark.replace(
  /(<svg[^>]*>)/,
  '$1<style>g{fill:#000}@media (prefers-color-scheme:dark){g{fill:#fff}}</style>'
);
writeFileSync(join(ROOT, 'public', 'favicon.svg'), favicon);

process.stdout.write(`sync-brand: ${files.filter((f) => f.out).length} files + zip + favicon\n`);

// ── zip (store only) ─────────────────────────────────────────────────────────

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i++) {
    c ^= buf[i];
    for (let k = 0; k < 8; k++) c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
  }
  return ~c >>> 0;
}

function zip(entries) {
  const locals = [];
  const centrals = [];
  let offset = 0;
  // Fixed timestamp (1980-01-01) so an unchanged brand/ produces an identical zip.
  const time = 0;
  const date = (0 << 9) | (1 << 5) | 1;

  for (const { name, data } of entries) {
    const nameBuf = Buffer.from(name, 'utf8');
    const crc = crc32(data);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(0, 8); // stored
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(date, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(data.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28);
    locals.push(local, nameBuf, data);

    const central = Buffer.alloc(46);
    central.writeUInt32LE(0x02014b50, 0);
    central.writeUInt16LE(20, 4); // version made by
    central.writeUInt16LE(20, 6); // version needed
    central.writeUInt16LE(0x0800, 8);
    central.writeUInt16LE(0, 10);
    central.writeUInt16LE(time, 12);
    central.writeUInt16LE(date, 14);
    central.writeUInt32LE(crc, 16);
    central.writeUInt32LE(data.length, 20);
    central.writeUInt32LE(data.length, 24);
    central.writeUInt16LE(nameBuf.length, 28);
    central.writeUInt32LE(offset, 42);
    centrals.push(central, nameBuf);

    offset += local.length + nameBuf.length + data.length;
  }

  const centralSize = centrals.reduce((n, b) => n + b.length, 0);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);

  return Buffer.concat([...locals, ...centrals, end]);
}
