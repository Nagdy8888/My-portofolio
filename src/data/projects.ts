import { imageAnalysisAgentDiagrams } from "./imageAnalysisAgentDiagrams";

export type ProjectCategory =
  | "Machine Learning"
  | "Data Analysis"
  | "Process Engineering"
  | "Automation"
  | "AI Agent"
  | "n8n";

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  featured: boolean;
  github?: string;
  liveUrl?: string;
  categories: ProjectCategory[];
  keyResult?: string;
  problem?: string;
  approach?: string;
  results?: string;
  tools?: string[];
  image?: string;
  screenshots?: string[];
  /** Optional Mermaid diagram definitions (title + raw mermaid code) for architecture/flow sections */
  diagrams?: { title: string; mermaid: string }[];
}

/** Maps category to CSS badge class (e.g. "Machine Learning" -> "badge-ml") */
export function categoryToBadgeClass(category: ProjectCategory): string {
  const map: Record<ProjectCategory, string> = {
    "Machine Learning": "badge-ml",
    "Data Analysis": "badge-data",
    "Process Engineering": "badge-process",
    "Automation": "badge-automation",
    "AI Agent": "badge-ai-agent",
    "n8n": "badge-n8n",
  };
  return map[category];
}

export const projects: Project[] = [
  {
    slug: "chemical-process-ml",
    title: "Chemical Process ML Model",
    shortDescription: "Predictive model to optimize chemical reaction yield using regression algorithms.",
    fullDescription: "Built a predictive Python model to optimize reaction yield using regression algorithms and preprocessing techniques. Applied feature engineering and model evaluation to identify optimal process parameters for maximizing chemical output.",
    tags: ["Python", "Scikit-learn", "Regression", "Preprocessing"],
    featured: true,
    categories: ["Machine Learning"],
    keyResult: "Optimized reaction yield using regression",
    problem: "Identifying optimal process parameters for chemical reactions to maximize output yield.",
    approach: "Built a predictive Python model using regression algorithms and preprocessing techniques, with feature engineering and model evaluation to surface the most influential parameters.",
    results: "Achieved a model that correlates process inputs with reaction yield, enabling data-driven optimization of chemical process parameters.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/images/projects/chemical-process-ml.svg",
  },
  {
    slug: "anomaly-detection-multiphase-flow",
    title: "Anomaly Detection in Multiphase Flow",
    shortDescription: "ML system detecting air leakage and blockage faults using 29 sensor variables.",
    fullDescription: "Developed an ML-based anomaly detection system for a multiphase air-water flow facility using 29 sensor variables. Performed data cleaning, feature engineering, and model comparison to identify normal vs abnormal operation and classify two fault types (air leakage and air blockage), improving detection accuracy.",
    tags: ["Python", "Classification", "Feature Engineering", "Anomaly Detection"],
    featured: true,
    categories: ["Machine Learning"],
    keyResult: "Classified 2 fault types across 29 sensors",
    problem: "Multiphase air-water flow facilities need early detection of faults (air leakage and air blockage) to avoid operational and safety issues.",
    approach: "Used 29 sensor variables to build an ML-based anomaly detection system: data cleaning, feature engineering, and model comparison to distinguish normal vs abnormal operation and classify the two fault types.",
    results: "Improved detection accuracy for air leakage and air blockage, enabling faster response to abnormal conditions in the facility.",
    tools: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    image: "/images/projects/anomaly-detection.svg",
  },
  {
    slug: "gas-eur-prediction",
    title: "Gas EUR Prediction",
    shortDescription: "Regression model predicting gas recovery for 507 simulated horizontal wells.",
    fullDescription: "Built a regression model to predict gas Estimated Ultimate Recovery (EUR) for 507 simulated horizontal multistage fractured wells using geological, drilling, and completion attributes. Performed data preprocessing, feature engineering, and model evaluation to achieve high correlation with actual EUR values, while analyzing feature importance to identify the most influential well parameters.",
    tags: ["Python", "Regression", "Feature Importance", "Reservoir Engineering"],
    featured: true,
    categories: ["Machine Learning"],
    keyResult: "High correlation with actual EUR for 507 wells",
    problem: "Predicting Estimated Ultimate Recovery (EUR) for horizontal multistage fractured wells is critical for reservoir planning and investment decisions.",
    approach: "Built a regression model using geological, drilling, and completion attributes for 507 simulated wells. Applied preprocessing, feature engineering, and model evaluation, plus feature importance analysis.",
    results: "Achieved high correlation with actual EUR values and identified the most influential well parameters for reservoir performance forecasting.",
    tools: ["Python", "Scikit-learn", "Pandas", "Seaborn"],
    image: "/images/projects/gas-eur.svg",
  },
  {
    slug: "steel-electrical-load-prediction",
    title: "Steel Electrical Load Prediction",
    shortDescription: "Multi-class model predicting electricity load levels for 35k+ steel production cycles.",
    fullDescription: "Developed a multi-class classification model to predict electricity load levels (Light, Medium, Maximum) for 35k+ steel production cycles using historical consumption data, time-based features, grid measurements, and power factor indicators. Performed feature engineering on timestamp variables, reactive power metrics, and usage patterns to improve predictive accuracy.",
    tags: ["Python", "Classification", "Time-Series", "Energy Optimization"],
    featured: true,
    categories: ["Machine Learning"],
    keyResult: "Predicted load levels for 35k+ production cycles",
    problem: "Steel production requires effective load management; predicting electricity load levels (Light, Medium, Maximum) supports scheduling and energy-saving strategies.",
    approach: "Built a multi-class classification model using historical consumption data, time-based features, grid measurements, and power factor indicators. Feature engineering on timestamps, reactive power, and usage patterns improved accuracy.",
    results: "Enabled prediction of load levels across 35k+ production cycles, supporting optimized production scheduling and better load management.",
    tools: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    image: "/images/projects/steel-load.svg",
  },
  {
    slug: "n8n-ai-social-workflow",
    title: "n8n AI-Driven Social Media Workflow",
    shortDescription: "Fully automated multi-agent workflow for content creation, search, and posting across Instagram, TikTok, X, and YouTube.",
    fullDescription: "Developed a fully automated AI-driven social media workflow using multi-agent architecture in n8n. The system integrates Telegram input, OpenAI models, web search (Tavily), and creative tools to generate, edit, and optimize content. It automates posting across platforms (Instagram, TikTok, X, YouTube), logs activity, and streamlines creative workflows. Designed for scalability, efficiency, and hands-free social media management.",
    tags: ["n8n", "OpenAI", "Multi-Agent", "Automation", "Telegram"],
    featured: true,
    categories: ["n8n", "AI Agent"],
    keyResult: "End-to-end automation from Telegram input to multi-platform posting",
    problem: "Managing multiple social channels with consistent, optimized content is time-consuming and repetitive.",
    approach: "Built a multi-agent n8n workflow: Telegram trigger (text/photo) → Ultimate Media Agent (orchestrator) → specialized agents (Creative, Web Search, Social Media, Posting), each with OpenAI models and platform-specific tools. Content flows through edit/generate, search, and post pipelines with logging and error handling.",
    results: "Hands-free social media management: single input (Telegram) drives content creation, search, and posting across Instagram, TikTok, X, and YouTube, with activity logging and scalable agent design.",
    tools: ["n8n", "OpenAI", "Telegram", "Tavily", "Apify (YouTube/Instagram/TikTok)", "Image/Video tools"],
    image: "/images/projects/n8n-social-workflow.png",
  },
  {
    slug: "n8n-slack-knowledge-workflow",
    title: "n8n Slack & Knowledge Management Workflow",
    shortDescription: "AI-powered workflow integrating Slack, Google Calendar, Gmail, and Postgres with vector search over Google Drive documents.",
    fullDescription: "Developed an AI-powered workflow integrating Slack, Google Calendar, Gmail, and Postgres DB using n8n. The solution automates scheduling, database queries, and email responses, while connecting Google Drive files to a vector database for AI-assisted document search. Features include smart meeting scheduling, contextual memory for Slack chats, and automated document parsing (PDF, Excel, CSV, TXT). Delivered a scalable, efficient system that streamlines team collaboration and knowledge management.",
    tags: ["n8n", "AI Agent", "Google APIs", "Vector Database", "Supabase"],
    featured: true,
    categories: ["n8n", "AI Agent"],
    keyResult: "Unified Slack, Calendar, Gmail, and document search in one AI-driven system",
    problem: "Teams need a single interface to schedule meetings, query data, handle email, and search across documents without switching tools.",
    approach: "Built an n8n workflow with a central AI agent triggered by Slack. Dedicated sub-agents handle Google Calendar (create/update/delete events, get events), Gmail (send messages), and Postgres (chat memory, SQL). Google Drive file triggers ingest PDF, Excel, CSV, and TXT into Supabase vector store with OpenAI embeddings and text chunking for semantic search.",
    results: "Scalable system for team collaboration: smart scheduling, contextual Slack memory, automated email, and AI-assisted document search over Drive files, with database setup and document metadata tables.",
    tools: ["n8n", "OpenAI", "Slack", "Google Calendar", "Gmail", "PostgreSQL", "Supabase", "Google Drive"],
    image: "/images/projects/n8n-slack-knowledge-workflow.png",
  },
  {
    slug: "n8n-rag-ai-workflow",
    title: "n8n RAG AI Workflow with Chat Interface",
    shortDescription: "End-to-end RAG workflow with chat UI, Google Drive ingestion, and automated embedding storage in Supabase for real-time document search.",
    fullDescription: "Developed an end-to-end Retrieval-Augmented Generation (RAG) AI workflow with a chat interface in n8n. Integrated Google Drive file ingestion, preprocessing (CSV, Excel, text), and automated embedding storage into a vector database (Supabase). Built tools for seamless file uploads, database updates, and AI-driven query handling. This solution enables efficient knowledge retrieval, real-time document search, and intelligent automation for scalable AI applications.",
    tags: ["RAG", "Vector Database", "Data Integration", "n8n", "OpenAI API"],
    featured: true,
    categories: ["n8n", "AI Agent"],
    keyResult: "Real-time document search and AI-driven answers over ingested Drive files",
    problem: "Organizations need to query internal documents (PDFs, Excel, CSV, text) through natural language without manual indexing or switching tools.",
    approach: "Built an n8n RAG workflow: chat message trigger → AI Agent with Postgres chat memory, list/get document tools, and SQL execution. Google Drive triggers (file created/updated) run a pipeline: set file ID, delete old doc rows, insert metadata, download file, switch by type (PDF, Excel, CSV, text), extract content, aggregate/insert tabular data where needed, then recursive text splitter → OpenAI embeddings → Supabase vector store. Database setup nodes create documents table, metadata table, and tabular rows table.",
    results: "Efficient knowledge retrieval and real-time document search over Drive content; seamless file uploads and DB updates; scalable RAG with Supabase vectors and OpenAI embeddings.",
    tools: ["n8n", "OpenAI", "Supabase", "Google Drive", "PostgreSQL", "Embeddings", "RAG"],
    image: "/images/projects/n8n-rag-workflow.png",
  },
  {
    slug: "image-analysis-agent",
    title: "Image Analysis Agent",
    shortDescription: "AI-powered product image tagging with LangGraph, GPT-4o vision, 8 parallel taggers, and search over structured tags in Supabase.",
    fullDescription: "AI-powered image tagging for product imagery. Upload images, get structured tags (season, theme, colors, objects, and more) via LangGraph and OpenAI GPT-4o, store results in Supabase, and search or browse them in a modern web UI. Full-stack agent with single and bulk upload, real-time analysis, and cascading filter search.",
    tags: ["LangGraph", "GPT-4o", "FastAPI", "Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "LangChain", "Pydantic", "Docker", "Tailwind CSS", "shadcn/ui", "AI Agent", "Computer Vision", "Prompt Engineering"],
    featured: true,
    categories: ["AI Agent"],
    github: "https://github.com/Nagdy8888/image-analysis-agent",
    keyResult: "Structured tags across 8 categories with confidence scores, parallel taggers, and AND search",
    problem: "Product companies manage thousands of images that need consistent, structured tagging across categories like season, theme, colors, objects, mood, occasion, design elements, and product type. Manual tagging is slow and does not scale; existing tools lack confidence scores, validation, or structured taxonomy.",
    approach: "Built a full-stack AI agent with a LangGraph DAG pipeline (12 nodes): preprocessor resizes and validates the image, a GPT-4o vision call produces a structured description, then 8 parallel taggers run on the text using a controlled taxonomy. A validator checks tags against the taxonomy, a confidence filter applies thresholds, and an aggregator produces the final TagRecord. Results are persisted in PostgreSQL (Supabase) with a flattened search index for fast multi-category AND queries. Frontend: single upload with real-time analysis, bulk upload with background processing and polling, search page with cascading filters.",
    results: "Structured tags across 8 categories with per-tag confidence scores and needs-review flagging. Parallel tagger execution via LangGraph Send API reduces latency. Search with AND logic using PostgreSQL array containment and cascading filter options. Bulk upload with background processing and live polling. Full Docker deployment with one command.",
    tools: ["LangGraph", "LangChain", "OpenAI GPT-4o", "Pydantic", "Python", "FastAPI", "Supabase", "PostgreSQL", "Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Docker"],
    image: "/images/projects/image-analysis-agent/01-home-before-upload.png",
    screenshots: [
      "/images/projects/image-analysis-agent/01-home-before-upload.png",
      "/images/projects/image-analysis-agent/02-analyzing.png",
      "/images/projects/image-analysis-agent/03-analysis-result.png",
      "/images/projects/image-analysis-agent/04-search-page.png",
      "/images/projects/image-analysis-agent/05-search-filters.png",
    ],
    diagrams: imageAnalysisAgentDiagrams.filter((d) => d.title === "System Overview"),
  },
];
