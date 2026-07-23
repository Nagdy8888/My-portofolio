/** Static architecture visuals for the Image Analysis Agent project. */
export const imageAnalysisAgentDiagrams = [
  {
    title: 'System Overview',
    image: '/images/projects/image-analysis-agent/system-overview.svg',
    alt: 'Architecture showing Next.js clients, FastAPI, a LangGraph tagging pipeline, OpenAI GPT-4o, and Supabase PostgreSQL',
    width: 1600,
    height: 900,
    mermaid: `flowchart LR
  subgraph frontend [Frontend - Next.js]
    Upload[Single Image Upload]
    Bulk[Bulk Upload]
    Search[Search and Filters]
    Results[Analysis Results]
  end

  subgraph backend [Backend - FastAPI]
    API[REST API Routes]
    Tasks[Background Task Runner]
  end

  subgraph agent [AI Agent - LangGraph]
    Preprocess[Preprocessor] --> Vision[Vision Node]
    Vision --> Taggers[8 Parallel Taggers]
    Taggers --> Validate[Taxonomy Validator]
    Validate --> Confidence[Confidence Filter]
    Confidence --> Aggregate[Aggregator]
  end

  subgraph services [Data and Model Services]
    GPT[OpenAI GPT-4o]
    DB[(Supabase PostgreSQL)]
  end

  Upload --> API
  Bulk --> API
  Search --> API
  API --> Preprocess
  Tasks --> Preprocess
  Vision --> GPT
  Taggers --> GPT
  Aggregate --> DB
  API --> DB
  API --> Results`,
  },
] as const;
