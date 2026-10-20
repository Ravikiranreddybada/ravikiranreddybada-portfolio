// Single source for all site content.
// Source: ~/Documents/S-Prep/profile (docs 00-18 + resume-source/content.py).
// Every claim follows docs/10-claims-guardrails.md. Do not add numbers that are not there.

export const person = {
  name: 'Bada Ravi Kiran Reddy',
  shortName: 'Ravi Kiran',
  role: 'AI Engineer',
  title: 'Data Science Intern at BLP Industry.AI',
  headline: 'I build AI systems that ship to real clients.',
  sub: 'Streaming data pipelines, grounded LLM agents and 3D digital twins for airports in Bengaluru and Sydney.',
  email: 'badaravikiranreddy@gmail.com',
  links: {
    github: 'https://github.com/Ravikiranreddybada',
    linkedin: 'https://linkedin.com/in/ravikiranreddybada',
  },
  photo: '/profile-sm.jpg',
}

export const about = [
  'Final-year B.Tech CSE (AI & ML) student at NIIT University, now on a six-month internship at BLP Industry.AI in Bengaluru.',
  'The job works like forward-deployed engineering. I build end to end for airport clients: Kafka pipelines, FastAPI services, grounded agents, React dashboards, deployment. Then I demo it to the client.',
  'I care about systems that are reliably right, not demos that only look good. Every number an agent says must trace back to a tool call.',
]

// Numbers safe to quote (docs 03, 04, 07, 12).
export const proof = [
  { value: '48,679', label: 'flight-ops messages replayed through Kafka, zero duplicates on re-run' },
  { value: '110+', label: 'airport cameras served through MediaMTX with zero transcoding' },
  { value: '281', label: 'AHUs in the Sydney T1 chiller plant digital twin' },
  { value: '22', label: 'agent tools across 5 MCP servers in Sahay' },
  { value: '2nd / 96', label: 'Abstruse cryptic hunt / CTF at siNUsoid vX' },
]

export const experience = {
  company: 'BLP Industry.AI',
  role: 'Data Science Intern',
  place: 'Bengaluru, on-site',
  dates: 'Jul 2026 - Jan 2027',
  note: 'Forward-deployed style: real client projects, built end to end, demoed live to clients.',
  projects: [
    {
      id: 'bial',
      client: 'Bengaluru International Airport',
      name: 'Terminal operations and video analytics',
      stack: ['Python', 'FastAPI', 'Kafka', 'PostgreSQL', 'WebSockets', 'MediaMTX', 'React 19'],
      points: [
        'Kafka (KRaft) pipeline for the airport operational feed. Keyed by flight id, routed to 24 PostgreSQL tables with idempotent upserts. 48,679 messages across 23 types; a second full replay made zero new rows.',
        'Ported an ~750-line JavaScript queue analytics engine to a Python asyncio task. Live zone states, wait-time alerts and overcrowding triggers pushed to the dashboard over WebSockets.',
        'Camera ROI console: draw detection polygons over a live RTSP preview, switch between raw camera and analytics output. 110+ cameras via MediaMTX, browser never sees camera credentials.',
        'Multi-tenant video management system: ONVIF discovery, a Go subnet probe agent, PostgreSQL row-level security, WebRTC with LL-HLS fallback. Designed for a 500-camera target on one CPU server.',
      ],
    },
    {
      id: 'sydney',
      client: 'Sydney Airport, Terminal 1',
      name: 'Chiller plant digital twin (team of 2)',
      stack: ['React Three Fiber', 'TypeScript', 'FastAPI', 'Gemini', 'Firestore', 'Cloud Run'],
      points: [
        'Plant Assistant on Gemini function calling with 6 tools. Rule: every figure must come from a tool result, or the agent says the data is not available. It can also fly the 3D camera to equipment.',
        'Voice mode on Gemini Live. The server mints a short-lived, single-use token that locks model, prompt and tools, so the API key never reaches the browser.',
        'Daily data-quality ingest against a 15,000-row-per-call API: cursor paging, overlap and de-duplicate, then flag missing, stale and out-of-range tags per asset.',
        'Owned the UI/UX and the 3D plant, rebuilt from official drawing sheets: 8 chillers, 7 cooling-tower cells, 20 pumps, 281 AHUs. Deployed on Cloud Run and Firebase Hosting.',
      ],
    },
    {
      id: 'sandbox',
      client: 'Internal tool, CV / video-analytics team',
      name: 'Sandbox-RTSP camera mirror',
      stack: ['Docker SDK', 'MediaMTX', 'FFmpeg', 'FastAPI', 'PostgreSQL'],
      points: [
        'Mirrors each production camera as its own Docker container on its real IP and port, across 8 isolated subnets, looping recorded footage. DeepStream pipelines get tested off-site on the same URLs.',
        'Stop a camera from the UI to test reconnect logic with a clean TCP drop. Chose one container per camera because MediaMTX routes by path only.',
      ],
    },
  ],
}

export const work = [
  {
    id: 'kairos',
    name: 'Kairos',
    kind: 'Supply-chain forecasting and decision copilot',
    blurb:
      'Sales history in, store × SKU demand forecasts with uncertainty out, then inventory decisions, then a LangGraph copilot whose every number traces to a tool call.',
    metrics: [
      { value: '39%', label: 'lower WAPE than seasonal naive (0.324 vs 0.53)' },
      { value: '82.8%', label: 'held-out coverage of 80% conformal intervals' },
      { value: '13', label: 'read-only copilot tools, also an MCP server' },
    ],
    details: [
      'Five models (seasonal naive, damped ETS, Croston-TSB, LightGBM Tweedie, ensemble) picked per demand segment by rolling-origin backtest.',
      'Champion / challenger gates with a Diebold-Mariano test, SHAP drivers per forecast, PSI drift health.',
      'Safety stock, EOQ, reorder worklist and a Monte-Carlo supplier-delay twin.',
      'Text-to-SQL sandbox with an AST guard; hybrid RAG (BM25 + dense + RRF) with citations.',
    ],
    note: 'Measured on a synthetic retail dataset (4 stores × 12 SKUs × 730 days).',
    stack: ['Python', 'LightGBM', 'statsmodels', 'LangGraph', 'DuckDB', 'MCP', 'FastAPI'],
    shot: '/shots/kairos.jpg',
    github: 'https://github.com/Ravikiranreddybada/kairos',
    live: 'https://kairos-web-mu.vercel.app',
  },
  {
    id: 'sahay',
    name: 'Sahay',
    kind: 'Multi-agent healthcare care assistant',
    blurb:
      'Orders, lab reports, claims and refunds. Built to be reliably right instead of confidently wrong, and designed for 100K daily users.',
    metrics: [
      { value: '22', label: 'tools across 5 MCP servers' },
      { value: '3', label: 'languages in rule-based emergency triage' },
      { value: '0', label: 'cross-user leaks allowed by the CI release gate' },
    ],
    details: [
      '11-node LangGraph agent with human confirmation before any action that changes data.',
      'Fast and strong model tiers, circuit breaker, fallback model, offline engine on full outage.',
      'Emergency triage in English, Hinglish and Devanagari with zero LLM calls.',
      'Counterfactual-invariance suite: gender, age, name or language must not change the decision.',
    ],
    note: 'Eval runs use the offline engine; real-model numbers are not measured yet.',
    stack: ['LangGraph', 'MCP', 'FastAPI', 'PostgreSQL', 'Redis', 'Next.js'],
    shot: '/shots/sahay.jpg',
    github: 'https://github.com/Ravikiranreddybada/sahay',
    live: 'https://sahay-web-nu.vercel.app',
  },
  {
    id: 'chat3d',
    name: 'Chat-to-3D',
    kind: 'Plant builder: spec in, 3D chilled-water plant out',
    blurb:
      'The LLM never writes code. It fills a schema-validated plant spec from chat or a DXF / PDF drawing, and a deterministic engine builds the plant.',
    metrics: [
      { value: '~100 ms', label: 'build for the largest plant: 105 objects, 218 pipes' },
      { value: 'A*', label: 'pipe routing with obstacle avoidance' },
      { value: '85', label: 'test files, plus Playwright end-to-end' },
    ],
    details: [
      '5 plant templates and 25 equipment designs; same spec always gives the same plant.',
      'Builds in a Web Worker; guards catch contradicting counts and unsupported systems without a model call.',
      'Fastify + Zod backend with tenants, JWT / JWKS and a WebSocket hub.',
    ],
    feature: { value: '1,443', label: 'pipe fittings placed in one deterministic build' },
    note: 'Repository not public yet.',
    stack: ['TypeScript', 'React Three Fiber', 'Fastify', 'Zod', 'PostgreSQL', 'Claude API'],
  },
]

export const earlier = [
  {
    name: 'AgentPilot',
    kind: 'Agent platform with a ReAct loop written from scratch',
    stack: ['FastAPI', 'Pinecone', 'MongoDB', 'Groq'],
    shot: '/shots/agentpilot.jpg',
    github: 'https://github.com/Ravikiranreddybada/agentpilot',
    live: 'https://agentpilot-liard.vercel.app',
  },
  {
    name: 'DermaSmart',
    kind: 'Skin analysis: OpenCV gate, MobileNetV2 classifier, malignant-case intercept',
    stack: ['TensorFlow', 'OpenCV', 'FastAPI', 'Gemini'],
    shot: '/shots/dermasmart.jpg',
    github: 'https://github.com/Ravikiranreddybada/dermasmart',
    live: 'https://dermasmart.vercel.app',
  },
  {
    name: 'MergeMind',
    kind: 'GitHub PR agent with two human-approval gates',
    stack: ['FastAPI', 'SSE', 'Next.js', 'GitHub API'],
    shot: '/shots/mergemind.jpg',
    github: 'https://github.com/Ravikiranreddybada/MergeMind',
    live: 'https://merge-mind-eight.vercel.app',
  },
]

export const workflow = {
  tools: ['Claude Code', 'OpenAI Codex', 'Cursor', 'Ollama'],
  steps: [
    { verb: 'Spec', text: 'Design docs and decision logs before code. VMS has 41 recorded decisions; Kairos and Sahay have 22 ADRs each.' },
    { verb: 'Rules', text: 'CLAUDE.md files set hard project rules, plus custom skills for UI, data viz and testing.' },
    { verb: 'Hand off', text: 'Handoff docs let a fresh agent session continue without re-deriving context.' },
    { verb: 'Verify', text: 'Type checks, lint, tests, eval gates and browser checks before anything is called done.' },
  ],
  line: 'Agent-assisted, human-designed and verified. I own the spec and the decisions.',
}

export const skills = [
  {
    group: 'GenAI and agents',
    items: ['LangGraph', 'Tool calling', 'MCP servers', 'Hybrid RAG', 'LLM evals', 'Guardrails', 'Claude API', 'Gemini + Live', 'Groq'],
  },
  {
    group: 'ML and data science',
    items: ['pandas', 'NumPy', 'scikit-learn', 'LightGBM', 'statsmodels', 'Time-series forecasting', 'SHAP', 'TensorFlow', 'OpenCV', 'PyTorch'],
  },
  {
    group: 'Data and backend',
    items: ['Python', 'SQL', 'FastAPI', 'asyncio', 'Kafka', 'PostgreSQL', 'SQLAlchemy', 'Redis', 'DuckDB', 'Firestore', 'BigQuery'],
  },
  {
    group: 'Video infrastructure',
    items: ['RTSP', 'ONVIF', 'MediaMTX', 'WebRTC (WHEP)', 'LL-HLS', 'FFmpeg', 'DeepStream ROI config'],
  },
  {
    group: 'Frontend and 3D',
    items: ['TypeScript', 'React 19', 'Next.js', 'Three.js', 'React Three Fiber', 'Tailwind', 'Zustand', 'GSAP'],
  },
  {
    group: 'Ops and cloud',
    items: ['Docker', 'GitHub Actions', 'MLflow', 'Prometheus', 'Grafana', 'OpenTelemetry', 'GCP', 'AWS', 'Vercel'],
  },
]

export const education = {
  school: 'NIIT University',
  place: 'Neemrana, Rajasthan',
  degree: 'B.Tech, Computer Science and Engineering (AI & ML)',
  dates: '2023 - 2027',
}

export const achievements = [
  { title: '2nd place of 96', text: 'Abstruse, 2-day cryptic hunt / CTF, siNUsoid vX, NIIT University, 2026' },
  { title: 'AWS Certified Cloud Practitioner', text: 'Amazon Web Services, Jun 2025' },
  { title: 'Live client demos', text: 'Multiple demos to airport clients at BLP Industry.AI' },
]
