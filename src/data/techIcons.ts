/**
 * Maps technology/tag names to CDN logo URLs (Simple Icons: cdn.simpleicons.org).
 * Used for project detail page tag pills with icons.
 */
const CDN_BASE = 'https://cdn.simpleicons.org';

export const techIconMap: Record<string, string> = {
  'LangGraph': `${CDN_BASE}/langchain`,
  'GPT-4o': `${CDN_BASE}/openai`,
  'FastAPI': `${CDN_BASE}/fastapi`,
  'Next.js': `${CDN_BASE}/nextdotjs`,
  'React': `${CDN_BASE}/react`,
  'TypeScript': `${CDN_BASE}/typescript`,
  'Supabase': `${CDN_BASE}/supabase`,
  'PostgreSQL': `${CDN_BASE}/postgresql`,
  'LangChain': `${CDN_BASE}/langchain`,
  'Pydantic': `${CDN_BASE}/pydantic`,
  'Docker': `${CDN_BASE}/docker`,
  'Tailwind CSS': `${CDN_BASE}/tailwindcss`,
  'shadcn/ui': `${CDN_BASE}/react`,
  'OpenAI': `${CDN_BASE}/openai`,
  'Python': `${CDN_BASE}/python`,
  'Node.js': `${CDN_BASE}/nodedotjs`,
};

/** Returns CDN URL for a technology tag, or undefined if no icon is mapped. */
export function getTechIconUrl(tag: string): string | undefined {
  return techIconMap[tag];
}
