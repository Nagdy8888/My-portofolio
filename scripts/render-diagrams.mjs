import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { readDiagramCatalog, renderTheme } from './diagram-catalog.mjs';

// Render publication assets, without controlling an interactive browser session.
const workspace = new URL('../', import.meta.url);
const diagrams = await readDiagramCatalog();
const temporary = join(tmpdir(), 'mustafa-portfolio-mermaid');
await mkdir(temporary, { recursive: true });
const config = join(temporary, 'theme.json');
await writeFile(config, JSON.stringify(renderTheme));
let browser = process.env.MERMAID_BROWSER_PATH;
if (!browser && process.platform === 'win32') {
  for (const candidate of [
    join(process.env.ProgramFiles ?? 'C:/Program Files', 'Google/Chrome/Application/chrome.exe'),
    join(process.env['ProgramFiles(x86)'] ?? 'C:/Program Files (x86)', 'Microsoft/Edge/Application/msedge.exe'),
  ]) {
    try { await access(candidate); browser = candidate; break; } catch { /* Try the next installed browser. */ }
  }
}
const puppeteer = join(temporary, 'browser.json');
await writeFile(puppeteer, JSON.stringify(browser ? { executablePath: browser } : {}));
const manifest = {};
for (const diagram of diagrams) {
  const input = join(temporary, `${diagram.filename}-${diagram.name}.mmd`);
  await writeFile(input, diagram.mermaid);
  const output = new URL(`public${diagram.publicPath}`, workspace);
  await mkdir(new URL('./', output), { recursive: true });
  const result = spawnSync(process.execPath, [
    fileURLToPath(new URL('node_modules/@mermaid-js/mermaid-cli/src/cli.js', workspace)),
    '-i', input, '-o', fileURLToPath(output),
    '-c', config, '-p', puppeteer, '-b', 'transparent', '-w', '1400',
  ], { stdio: 'inherit' });
  if (result.status !== 0) process.exit(result.status ?? 1);
  const svg = await readFile(output, 'utf8');
  const viewBox = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/\s+/).map(Number);
  if (!viewBox || viewBox.length !== 4 || !viewBox.every(Number.isFinite)) throw new Error(`Invalid SVG dimensions: ${diagram.publicPath}`);
  manifest[diagram.publicPath] = { width: Math.ceil(viewBox[2]), height: Math.ceil(viewBox[3]), sourceHash: diagram.sourceHash };
  console.log(`Rendered ${diagram.publicPath}`);
}
await writeFile(new URL('src/data/diagramAssets.json', workspace), JSON.stringify(manifest, null, 2) + '\n');
