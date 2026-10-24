/** Explanatory views of the implemented Smart RAG architecture, not deployment maps. */
export const smartRagDiagrams = [
  {
    title: 'The app at a glance',
    image: '/images/projects/smart-rag/app-architecture.svg',
    alt: 'The Next.js workspace sends authenticated requests to FastAPI and LangGraph, which use authorized company evidence and return streamed answers with citations.',
    description: 'The web workspace is the front door. FastAPI handles authenticated requests, LangGraph coordinates the work, and the evidence layer connects answers to documents. This is a logical architecture view; it does not imply a particular hosting setup.',
    mermaid: `flowchart TB
      Person["Person using the workspace"] --> UI["Next.js workspace<br/>Ask · Documents · Tables · Graph"]
      Auth["Supabase Auth"] -->|User session| UI
      UI -->|Authenticated request| API["FastAPI<br/>Authorization and streaming"]
      API --> Agent["LangGraph<br/>Routing and orchestration"]
      Agent --> Hybrid["Hybrid search<br/>Semantic + keyword + exact terms"]
      Agent --> Graph["LightRAG<br/>Relationship evidence"]
      Agent --> Tables["Structured table analysis"]
      Hybrid --> Canonical["Canonical document passages<br/>Supabase / PostgreSQL"]
      Graph -->|Resolve source mappings| Canonical
      Tables --> Provenance["Table results with source provenance"]
      Canonical --> Answer["Grounded answer and citations"]
      Provenance --> Answer
      Answer -->|Stream through FastAPI| UI
      UI --> Reader["Original PDF page and figure inspection"]`,
  },
  {
    title: 'From question to inspectable answer',
    image: '/images/projects/smart-rag/answer-workflow.svg',
    alt: 'A company-document question is routed, retrieved, checked for access, grounded and verified before an answer with inspectable citations is returned; insufficient evidence leads to a refusal.',
    description: 'This follows the company-document path. Semantic search finds related meaning; keyword and exact-term search preserve specific wording. The system combines candidates, checks usable evidence, and verifies the answer. General and web questions use separate routes.',
    mermaid: `flowchart TB
      Q["Company-document question"] --> Route["Profile and route the request"]
      Route --> Dense["Semantic search"]
      Route --> Terms["Keyword and exact-term search"]
      Dense --> Fuse["Combine ranked candidates<br/>Reciprocal rank fusion"]
      Terms --> Fuse
      Fuse --> Access["Recheck access to evidence"]
      Access --> Enough{"Usable evidence?"}
      Enough -->|No| Stop["Insufficient authorized evidence"]
      Enough -->|Yes| Draft["Generate a grounded draft"]
      Draft --> Verify["Verify support and citation links"]
      Verify --> Supported{"Supported answer?"}
      Supported -->|No| Stop
      Supported -->|Yes| Stream["Stream answer with citations"]
      Stream --> Inspect["Open a citation<br/>Read the original page and passage"]`,
  },
  {
    title: 'How the knowledge graph stays grounded',
    image: '/images/projects/smart-rag/knowledge-graph.svg',
    alt: 'Canonical document passages become mapped LightRAG sources. Extracted entities and relationships form the graph, and graph results must resolve back to authorized canonical passages before becoming evidence.',
    description: 'The graph helps discover relationships across documents. It is not a replacement for the source text: graph results must resolve through source mappings to canonical passages and pass access checks. Mapping records alone are not citations.',
    mermaid: `flowchart TB
      subgraph Indexing["Build the graph"]
        Docs["Processed documents"] --> Passages["Canonical passages<br/>Stable document and chunk identities"]
        Passages --> Sources["One mapped LightRAG source<br/>per canonical passage"]
        Sources --> Extract["Extract entities and relationships"]
        Extract --> Network["Knowledge graph<br/>Entities connected by relationships"]
      end
      subgraph Querying["Use graph evidence"]
        Question["Question or selected entity"] --> Explore["Retrieve related entities<br/>and connected evidence"]
        Explore --> Resolve["Resolve graph sources<br/>back to canonical passages"]
        Resolve --> Gate{"Valid, authorized evidence?"}
        Gate -->|Yes| Evidence["Canonical passages available<br/>for answers and inspection"]
        Gate -->|No| Exclude["Exclude unsupported or inaccessible evidence"]
      end
      Network --> Explore
      Sources -.->|Source identity mappings| Resolve
      Passages -.->|Original text remains the authority| Gate`,
  },
] as const;
