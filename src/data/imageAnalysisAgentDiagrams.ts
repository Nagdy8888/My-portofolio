/** Mermaid diagram definitions for the Image Analysis Agent project. */

export const imageAnalysisAgentDiagrams: { title: string; mermaid: string }[] = [
  {
    title: "System Overview",
    mermaid: `flowchart TB
  subgraph Frontend["Frontend — Next.js"]
    UP[ImageUploader]
    BULK[BulkUploader]
    SEARCH[SearchPage]
    RESULT[DashboardResult]
  end

  subgraph Backend["Backend — FastAPI"]
    API[REST API Routes]
    BG[Background Task Runner]
  end

  subgraph Agent["AI Agent — LangGraph"]
    direction TB
    PRE[Preprocessor] --> VIS[Vision Node]
    VIS --> FAN{"Fan-out (Send API)"}
    FAN --> T1[Season Tagger]
    FAN --> T2[Theme Tagger]
    FAN --> T3[Color Tagger]
    FAN --> T4[Object Tagger]
    FAN --> T5[Mood Tagger]
    FAN --> T6[Occasion Tagger]
    FAN --> T7[Design Tagger]
    FAN --> T8[Product Tagger]
    T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 --> VAL[Validator]
    VAL --> CONF[Confidence Filter]
    CONF --> AGG[Aggregator]
  end

  subgraph DB["Database — Supabase"]
    PG[(PostgreSQL)]
  end

  subgraph LLM["LLM Provider"]
    GPT[OpenAI GPT-4o]
  end

  UP -->|POST /analyze| API
  BULK -->|POST /bulk-upload| API
  SEARCH -->|GET /search| API
  API --> Agent
  BG --> Agent
  VIS -->|multimodal prompt| GPT
  T1 & T2 & T3 & T4 & T5 & T6 & T7 & T8 -->|text prompt| GPT
  API --> PG
  RESULT -.->|poll /bulk-status| API`,
  },
  {
    title: "Single Image Flow",
    mermaid: `sequenceDiagram
  actor User
  participant UI as Next.js
  participant API as FastAPI
  participant Graph as LangGraph
  participant GPT as GPT-4o
  participant DB as Supabase

  User->>UI: Select image & click Analyze
  UI->>API: POST /analyze (FormData)
  API->>API: Validate file & save to disk
  API->>Graph: ainvoke(state)
  Graph->>Graph: Preprocessor (resize, encode)
  Graph->>GPT: Vision prompt (base64 image)
  GPT-->>Graph: Structured description
  par 8 taggers in parallel
    Graph->>GPT: Tagger prompt (text)
    GPT-->>Graph: JSON tags + confidence
  end
  Graph->>Graph: Validate against taxonomy
  Graph->>Graph: Apply confidence thresholds
  Graph->>Graph: Aggregate into TagRecord
  Graph-->>API: Final state
  API->>DB: Upsert tag_record
  API-->>UI: JSON response
  UI->>User: Render DashboardResult`,
  },
  {
    title: "Bulk Upload Flow",
    mermaid: `sequenceDiagram
  actor User
  participant UI as Next.js
  participant API as FastAPI
  participant BG as Background Task
  participant Graph as LangGraph
  participant DB as Supabase

  User->>UI: Select multiple images
  UI->>API: POST /bulk-upload (FormData)
  API->>API: Generate batch_id, store in BATCH_STORAGE
  API-->>UI: { batch_id }
  API->>BG: asyncio.create_task(process_batch)
  loop Every 2 seconds
    UI->>API: GET /bulk-status/{batch_id}
    API-->>UI: { processed, total, status }
  end
  loop For each image
    BG->>Graph: ainvoke(state)
    Graph->>DB: Upsert result
    BG->>BG: Update BATCH_STORAGE counters
  end
  UI->>API: GET /bulk-status/{batch_id}
  API-->>UI: { status: "completed" }
  UI->>User: Show completion summary`,
  },
  {
    title: "Search & Filter Flow",
    mermaid: `sequenceDiagram
  actor User
  participant UI as Next.js
  participant API as FastAPI
  participant DB as Supabase

  User->>UI: Open Search page
  UI->>API: GET /filters
  API->>DB: SELECT DISTINCT tags
  DB-->>API: Available filter values
  API-->>UI: Filter options
  UI->>User: Render FilterSidebar

  User->>UI: Select filters & click Search
  UI->>API: GET /search?season=...&theme=...
  API->>DB: WHERE search_index @> ARRAY[...]
  DB-->>API: Matching records
  API-->>UI: Results JSON
  UI->>User: Render SearchResults grid

  User->>UI: Click image card
  UI->>User: Open DetailModal with full tags`,
  },
  {
    title: "Data Model",
    mermaid: `erDiagram
  IMAGE_TAGS {
    text id PK
    text image_url
    text vision_description
    jsonb raw_tags
    jsonb validated_tags
    jsonb flagged_tags
    text[] search_index
    boolean needs_review
    text processing_status
    timestamptz created_at
    timestamptz updated_at
  }`,
  },
];
