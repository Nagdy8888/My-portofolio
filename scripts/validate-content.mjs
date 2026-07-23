import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const sourceRoot = path.join(root, 'src');
const publicRoot = path.join(root, 'public');
const sourceExtensions = new Set(['.astro', '.css', '.js', '.mjs', '.ts', '.tsx']);
const assetPattern = /["'`](\/[^"'`?#]+\.(?:avif|gif|ico|jpe?g|png|pdf|svg|webp|woff2?))["'`]/gi;
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function hasExactPath(relativePath) {
  const segments = relativePath.split('/').filter(Boolean);
  let current = publicRoot;

  for (const segment of segments) {
    const entries = await readdir(current, { withFileTypes: true }).catch(() => []);
    const exactEntry = entries.find((entry) => entry.name === segment);
    if (!exactEntry) return false;
    current = path.join(current, exactEntry.name);
  }

  return true;
}

for (const file of await walk(sourceRoot)) {
  const content = await readFile(file, 'utf8');
  const relativeSource = path.relative(root, file);

  for (const match of content.matchAll(assetPattern)) {
    const publicPath = match[1];
    if (!await hasExactPath(publicPath)) {
      errors.push(`${relativeSource}: missing public asset ${publicPath}`);
    }
  }

  if (/GitHub\s*[-–—]\s*Coming Soon/i.test(content)) {
    errors.push(`${relativeSource}: remove the public "GitHub - Coming Soon" placeholder`);
  }
}

if (errors.length > 0) {
  console.error('Content validation failed:\n');
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('Content validation passed: all referenced public assets exist with exact casing.');
}
