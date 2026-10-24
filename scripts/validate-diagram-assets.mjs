import { readFile } from 'node:fs/promises';
import { JSDOM } from 'jsdom';
import { readDiagramCatalog } from './diagram-catalog.mjs';

const { window } = new JSDOM('<!doctype html><html><body></body></html>');
globalThis.window = window;
globalThis.document = window.document;
const { default: mermaid } = await import('mermaid');
const assets = JSON.parse(await readFile(new URL('../src/data/diagramAssets.json', import.meta.url), 'utf8'));
let failed = false;
for (const diagram of await readDiagramCatalog()) {
  try {
    await mermaid.parse(diagram.mermaid);
    const metadata = assets[diagram.publicPath];
    if (!metadata || metadata.sourceHash !== diagram.sourceHash) throw new Error('Missing or stale SVG; run npm run diagrams:render');
    const svg = await readFile(new URL(`../public${diagram.publicPath}`, import.meta.url), 'utf8');
    if (!svg.includes('<svg') || /Syntax error in text/i.test(svg)) throw new Error('Invalid rendered SVG');
    const box = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/\s+/).map(Number);
    if (!box || Math.ceil(box[2]) !== metadata.width || Math.ceil(box[3]) !== metadata.height) throw new Error('SVG dimension manifest mismatch');
    console.log(`PASS source + rendered SVG: ${diagram.publicPath}`);
  } catch (error) {
    failed = true;
    console.error(`FAIL ${diagram.filename} diagram ${diagram.index + 1}: ${error.message}`);
  }
}
window.close();
process.exitCode = failed ? 1 : 0;
