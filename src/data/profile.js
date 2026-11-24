// Canonical portfolio content.
// Sources: S-Prep/resume/source/projects/*.md, resume/about-me.md and resume/main/ai-ml.json.
// Keep every metric and claim traceable to those files.

export const person = {
  name: 'Bada Ravi Kiran Reddy', shortName: 'Ravi Kiran', role: 'AI/ML Engineer',
  title: 'AI/ML Engineering Intern at BLP Industry.AI',
  sub: 'Real-time vision, grounded agents, probabilistic forecasting and digital twins for decisions that matter.',
  email: 'badaravikiranreddy@gmail.com', photo: '/profile-sm.jpg',
  links: { github: 'https://github.com/Ravikiranreddybada', linkedin: 'https://linkedin.com/in/ravikiranreddybada', portfolio: 'https://ravikiranreddy.online' },
}

export const about = [
  'I am a B.Tech CSE (AI & ML) student at NIIT University and a paid AI/ML Engineering Intern at BLP Industry.AI, shipping production systems for airport operations.',
  'My work spans the full path from model and data contracts to APIs, deployment, observability and the interface an operator actually uses.',
  'I design for evidence. Forecasts carry uncertainty, agent answers trace to tools, write actions require confirmation and production pipelines have deterministic replay.',
]

export const proof = [
  { value: '113', label: 'airport camera streams mirrored for deterministic CV regression testing' },
  { value: 'A$72,072', label: 'annual energy savings identified from an 8-month BMS audit' },
  { value: '36 / 36', label: 'Kairos copilot eval cases passing correctness, grounding and security gates' },
  { value: '123', label: 'tests behind Sahay across PostgreSQL, Redis and remote MCP' },
  { value: '2nd / 96', label: 'finish in the Abstruse cryptic hunt and CTF at siNUsoid vX' },
]

export const experience = {
  company: 'BLP Industry.AI', role: 'AI/ML Engineering Intern', place: 'Bengaluru, India (on-site)', dates: 'Jul 2026 - Present',
  note: 'Production engineering across computer vision, time-series data, digital twins and grounded AI for airport clients.',
  projects: [
    {
      id: 'bial', client: 'Bengaluru International Airport', name: 'Terminal operations and video analytics',
      stack: ['Python', 'FastAPI', 'Kafka', 'TimescaleDB', 'MongoDB', 'DeepStream', 'YOLO', 'MediaMTX', 'Docker'],
      points: [
        'Engineered a real-time pipeline from 113 RTSP cameras through NVIDIA DeepStream, YOLO detection, multi-object tracking and Kafka to TimescaleDB, serving occupancy, wait-time and overcrowding analytics over FastAPI and WebSockets.',
        'Designed the ROI-sync service that ingests BIAL\'s Solace AODB feed into MongoDB and dynamically subdivides check-in zones per airline from live desk allocations, enabling per-airline wait-time SLAs and processing-rate KPIs.',
        'Built a deterministic replay environment that mirrors all 113 production cameras on their real IPs across 8 subnets, enabling off-site DeepStream regression testing that caught 3 silent defects before deployment.',
      ],
    },
    {
      id: 'sydney', client: 'Sydney Airport T1', name: 'Chiller plant digital twin and AI assistant',
      stack: ['Python', 'FastAPI', 'BigQuery', 'Firestore', 'Gemini', 'Groq', 'React 19', 'Three.js', 'Cloud Run'],
      points: [
        'Analysed 8 months of 15-minute BMS telemetry and produced 6 Energy Conservation Measures, including a weather-responsive 6.0 °C to 8.5 °C CHW setpoint reset, identifying A$72,072 in annual savings.',
        'Developed a Plant Assistant with a Gemini 2.5 Flash to Flash-Lite to Groq fallback chain, server-side tools over audit evidence, and Gemini Live voice mode so every stated figure remains grounded in verified data.',
        'Shipped the production twin on Google Cloud: a non-root Dockerised FastAPI and WebSocket service on Cloud Run with Firestore, serving a React 19 and React Three Fiber app on Firebase Hosting behind a hardened CSP.',
      ],
    },
  ],
}

export const work = [
  {
    id: 'kairos', name: 'Kairos', kind: 'Supply-chain decision intelligence',
    blurb: 'Probabilistic demand forecasts become inventory policy, stress-tested decisions and grounded answers for planners.',
    metrics: [
      { value: '0.324', label: 'WAPE for champion LightGBM vs 0.53 seasonal naive' },
      { value: '82.8%', label: 'coverage on 80% conformal prediction intervals' },
      { value: '105', label: 'tests with ruff and mypy clean' },
    ],
    details: [
      'Backtests five forecasting models by demand segment, then applies conformal intervals, WLS reconciliation and SHAP explanations.',
      'Optimises safety stock, reorder point and EOQ, with a Monte Carlo supply twin and four-eyes approval ledger.',
      'Runs a LangGraph copilot with 13 typed tools, hybrid RAG, guarded text-to-SQL and numeric grounding verification.',
    ],
    note: 'Forecast metrics come from the reproducible synthetic benchmark dataset.',
    stack: ['Python', 'LightGBM', 'SHAP', 'LangGraph', 'DuckDB', 'MCP', 'FastAPI', 'Kubernetes'], shot: '/shots/kairos.jpg',
    github: 'https://github.com/Ravikiranreddybada/kairos', live: 'https://kairos-web-mu.vercel.app',
  },
  {
    id: 'sahay', name: 'Sahay', kind: 'Grounded multi-agent healthcare assistant',
    blurb: 'A safety-first care assistant for orders, reports, claims, vaccination and family records, designed to serve 1 lakh daily users.',
    metrics: [
      { value: '22', label: 'tools across 5 authenticated MCP servers' },
      { value: '141', label: 'counterfactual fairness evaluation runs' },
      { value: '₹2.3', label: 'cost per conversation' },
    ],
    details: [
      'Uses an 11-node LangGraph runtime with durable checkpoints, bounded loops and human confirmation for every write.',
      'Adds deterministic multilingual emergency triage, a 9-criterion verifier and a 13-rule OWASP LLM threat pack.',
      'Gates delivery with 78 golden and 24 held-out cases, OpenTelemetry GenAI tracing and 123 tests.',
    ],
    note: 'Scale is an architecture target: designed to serve 1 lakh daily users.',
    stack: ['LangGraph', 'MCP', 'FastAPI', 'PostgreSQL', 'Redis', 'OpenTelemetry', 'Terraform', 'Next.js'], shot: '/shots/sahay.jpg',
    github: 'https://github.com/Ravikiranreddybada/sahay', live: 'https://sahay-web-nu.vercel.app',
  },
]

export const skills = [
  { group: 'Agents and LLMs', items: ['LangGraph', 'LangChain', 'MCP', 'Tool calling', 'Hybrid RAG', 'LLM evaluation', 'Claude API', 'Gemini'] },
  { group: 'ML and data', items: ['scikit-learn', 'LightGBM', 'PyTorch', 'TensorFlow', 'pandas', 'NumPy', 'SHAP', 'statsmodels', 'OpenCV'] },
  { group: 'Data and backend', items: ['Python', 'SQL', 'FastAPI', 'Kafka', 'PostgreSQL', 'TimescaleDB', 'MongoDB', 'Redis', 'Firestore', 'DuckDB'] },
  { group: 'Frontend and 3D', items: ['TypeScript', 'JavaScript', 'React 19', 'Next.js', 'Three.js', 'React Three Fiber', 'Tailwind CSS'] },
  { group: 'MLOps and cloud', items: ['Docker', 'Kubernetes', 'GitHub Actions', 'Terraform', 'MLflow', 'OpenTelemetry', 'GCP', 'AWS'] },
  { group: 'Engineering tools', items: ['Git', 'Claude Code', 'OpenAI Codex', 'Cursor', 'Ollama', 'Prometheus', 'Grafana'] },
]

export const education = { school: 'NIIT University', place: 'Neemrana, Rajasthan', degree: 'B.Tech, Computer Science and Engineering (AI & ML)', dates: '2023 - 2027' }
export const achievements = [
  { title: '2nd place out of 96', text: 'Abstruse cryptic hunt and CTF, siNUsoid vX, NIIT University, 2026' },
  { title: 'AWS Certified Cloud Practitioner', text: 'Amazon Web Services, Jun 2025' },
]
