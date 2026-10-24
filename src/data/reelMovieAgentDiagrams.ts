/** Architecture diagrams for the Reel GraphRAG movie assistant. */
export const reelMovieAgentDiagrams = [
  {
    title: 'Complete System Connection',
    image: '/images/projects/reel-movie-agent/system-overview.svg',
    alt: 'Reel architecture connecting a Next.js frontend on Vercel to FastAPI and LangGraph on AWS, Supabase, LightRAG PostgreSQL, OpenAI, LangSmith, TMDB, and CMU MovieSummaries',
    width: 1600,
    height: 900,
    mermaid: `flowchart TB
  User([User in a web browser])

  subgraph Vercel [Vercel]
    Frontend["Next.js 16 and React 19<br/>login · chat · history · sources · graph"]
  end

  subgraph AWS [AWS EC2]
    Caddy["Caddy<br/>HTTPS reverse proxy"]
    Backend["FastAPI<br/>REST · SSE · authorization · persistence"]
    Agent["LangGraph in-process agent<br/>route · converse · retrieve · generate"]
    RAG[("LightRAG PostgreSQL<br/>Apache AGE · pgvector · cache")]
    Caddy --> Backend
    Backend --> Agent
    Agent --> RAG
  end

  subgraph Supabase [Supabase]
    Auth["Supabase Auth<br/>sessions · JWTs · JWKS"]
    AppDB[("Supabase PostgreSQL<br/>conversations · checkpoints · movie projection")]
  end

  OpenAI["OpenAI<br/>routing · reranking · generation · embeddings"]
  LangSmith["LangSmith<br/>agent traces"]
  TMDB["TMDB<br/>poster enrichment"]
  CMU[("CMU MovieSummaries")]

  User -->|open application| Frontend
  User -->|sign in| Auth
  Frontend -->|"Bearer JWT · REST + SSE"| Caddy
  Frontend -->|browser auth client| Auth
  Backend -->|verify JWT through JWKS| Auth
  Backend -->|owned chat SQL| AppDB
  Agent -->|checkpoints and movie facts| AppDB
  Agent -->|LLM and embedding requests| OpenAI
  Agent -.->|traces| LangSmith
  CMU -.->|ingestion| RAG
  CMU -.->|ingestion| AppDB
  TMDB -.->|poster URLs| AppDB`,
  },
  {
    title: 'Deterministic Agent Workflow',
    image: '/images/projects/reel-movie-agent/agent-workflow.svg',
    width: 280,
    height: 388,
    description: 'The LangGraph router separates conversational requests from factual questions and recommendations. Grounded requests retrieve evidence before generating a response.',
    alt: 'A deterministic LangGraph route chooses chitchat or grounded retrieval before generating the final streamed response',
    mermaid: `stateDiagram-v2
  [*] --> route
  route --> converse: chitchat
  route --> retrieve: factual or recommendation
  retrieve --> generate
  converse --> [*]
  generate --> [*]`,
  },
  {
    title: 'Chat Request Lifecycle',
    image: '/images/projects/reel-movie-agent/chat-lifecycle.svg',
    width: 1581,
    height: 1303,
    description: 'Follow a chat request through authentication, conversation ownership, agent routing, retrieval, generation, and streamed events. On a small screen, scroll the diagram horizontally to read the interactions.',
    alt: 'Sequence from the Next.js frontend through FastAPI, Supabase, LangGraph, LightRAG, and OpenAI to a streamed cited answer',
    mermaid: `sequenceDiagram
  autonumber
  participant FE as Next.js frontend
  participant API as FastAPI backend
  participant DB as Supabase PostgreSQL
  participant G as LangGraph agent
  participant RAG as LightRAG PostgreSQL
  participant AI as OpenAI

  FE->>API: POST /chat with JWT and message
  API->>API: Verify JWT and apply rate limits
  API->>DB: Create or verify owned conversation
  API-->>FE: SSE meta
  API->>G: stream events with thread ID
  G->>AI: Classify intent
  alt Chitchat
    G->>AI: Generate conversational reply
  else Movie question or recommendation
    G->>RAG: Local and hybrid retrieval
    G->>AI: Rerank passages
    G->>DB: Load typed movie facts
    G->>AI: Generate grounded answer
    G->>G: Validate movie citations
  end
  loop Generated content
    G-->>API: Token event
    API-->>FE: SSE token
  end
  API-->>FE: SSE sources and graph
  API->>DB: Save assistant answer
  API-->>FE: SSE done`,
  },
] as const;
