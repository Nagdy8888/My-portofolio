import { readFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';

export const renderTheme = {
  theme: 'base', securityLevel: 'strict', fontFamily: 'Segoe UI, sans-serif',
  themeVariables: {
    primaryColor: '#edf2ef', primaryTextColor: '#17313e', primaryBorderColor: '#216556',
    lineColor: '#53656b', secondaryColor: '#c4ecd7', tertiaryColor: '#f8faf9',
    clusterBkg: '#edf2ef', clusterBorder: '#d6dfda', edgeLabelBackground: '#f8faf9',
    actorBkg: '#edf2ef', actorBorder: '#216556', actorTextColor: '#17313e',
    signalColor: '#17313e', signalTextColor: '#17313e', labelBoxBkgColor: '#f8faf9',
    labelBoxBorderColor: '#d6dfda', labelTextColor: '#17313e', loopTextColor: '#17313e',
  },
};

const collections = [
  ['reelMovieAgentDiagrams.ts', 'reel-movie-agent', ['system-overview', 'agent-workflow', 'chat-lifecycle']],
  ['smartRagDiagrams.ts', 'smart-rag', ['app-architecture', 'answer-workflow', 'knowledge-graph']],
  ['imageAnalysisAgentDiagrams.ts', 'image-analysis-agent', ['system-overview']],
];

export async function readDiagramCatalog() {
  const entries = [];
  for (const [filename, folder, names] of collections) {
    const source = await readFile(new URL(`../src/data/${filename}`, import.meta.url), 'utf8');
    const definitions = [...source.matchAll(/mermaid:\s*`([\s\S]*?)`/g)];
    if (definitions.length !== names.length) throw new Error(`Update diagram catalog for ${filename}: found ${definitions.length}, expected ${names.length}`);
    for (const [index, name] of names.entries()) {
      const mermaid = definitions[index][1].replace(/\r\n/g, '\n').trim();
      const sourceHash = createHash('sha256').update(JSON.stringify(renderTheme) + mermaid).digest('hex');
      entries.push({ filename, index, name, mermaid, sourceHash, publicPath: `/images/projects/${folder}/${name}.svg` });
    }
  }
  return entries;
}
