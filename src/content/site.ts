export const lab = {
  shortName: 'AI-SEA Lab',
  name: 'AI Systems Engineering & Assurance Lab',
  affiliation: 'UTS Data Science Institute',
  faculty: 'Faculty of Engineering and IT',
  mission: 'Advancing the engineering, reliability and trustworthiness of intelligent systems in real-world environments.',
  aim: 'The AI Systems Engineering & Assurance Lab (AI-SEA Lab) is part of the Data Science Institute under the Faculty of Engineering and IT at the University of Technology Sydney (UTS). The lab focuses on the engineering, reliability and trustworthiness of intelligent systems, with the aim of helping teams move AI from prototype to dependable, accountable, real-world operation.',
  approach: 'AI-SEA Lab solves problems that emerge when intelligent systems are deployed in real operating environments. We deploy advanced techniques from software and systems engineering, evaluation methodology, and assurance and governance practice to help organisations design, test and monitor AI systems that can be trusted in production.',
  partnership: 'AI-SEA Lab aims to work with industry, government and research partners to translate engineering and assurance research into deployable practice, helping teams move generative AI prototypes into dependable, accountable, real-world operation.',
  programme: 'From GenAI Prototypes to Production-Ready Systems',
  address: 'Level 12, Building 2, University of Technology Sydney',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Research', href: '/research/' },
  { label: 'People', href: '/people/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Contact', href: '/contact/' },
];

export const researchAreas = [
  'AI systems engineering and architecture',
  'Reliability and robustness evaluation',
  'Monitoring and observability for deployed AI systems',
  'Assurance cases and governance frameworks',
  'Human oversight and accountability',
  'Evaluation design for generative AI systems',
  'Failure analysis and incident response',
  'Deployment readiness assessment',
  'Responsible scaling of GenAI prototypes to production',
];

export const researchThemes = [
  {
    title: 'Systems engineering',
    summary: 'Designing, integrating and operating intelligent systems in real-world environments.',
    detail: 'How should intelligent components be integrated into software and workflows? We are interested in system architecture, interfaces, observability and the decisions that make systems easier to operate and maintain.',
  },
  {
    title: 'Reliability and evaluation',
    summary: 'Measuring how intelligent systems behave under changing conditions.',
    detail: 'How can teams measure performance when data, users and deployment conditions change? We are interested in evaluation design, failure analysis and monitoring over the system lifecycle.',
  },
  {
    title: 'Assurance and governance',
    summary: 'Building evidence to support decisions about when and how systems can be used.',
    detail: 'What evidence gives people grounds to deploy, supervise or retire an intelligent system? We are interested in traceability, human oversight and how teams communicate limitations and uncertainty.',
  },
];

export const programmeTopics = [
  { title: 'Assess readiness', detail: 'Define intended use, acceptance criteria and failure modes before deployment.' },
  { title: 'Evaluate in context', detail: 'Design tests around realistic tasks, operating conditions and human oversight.' },
  { title: 'Monitor after release', detail: 'Track changes in behaviour and define when to investigate, intervene or roll back.' },
];

export const recruitment = {
  intro: 'AI-SEA Lab welcomes applications for PhD research, capstone projects, honours projects and master projects across our research areas. If you are interested, please contact:',
  contactName: 'Dr Yifei Dong',
  contactEmail: 'yifei.dong@uts.edu.au',
};

export type Profile = {
  name: string;
  role: string;
  category: 'Core Members' | 'PhD Students' | 'Master of Research Students' | 'Collaborators';
  bio?: string | string[];
  photo?: string;
  profileUrl?: string;
  // Year the person started as a PhD/Master of Research student. Only set for the
  // 'PhD Students' / 'Master of Research Students' categories; used to order them on the
  // People page (earliest entry year first).
  entryYear?: number;
};
export type Publication = { title: string; authors: string; venue: string; year: number; url?: string };
// `funder` should be the actual organisation name only for public/government funders (grants,
// CRCs, university schemes); for commercial/industry partners, use a generic sector description
// instead (e.g. "Industry partner, property management sector") to avoid publishing client
// identities without consent. Never include dollar values or technical implementation details.
export type Project = { title: string; funder: string; period: string; role: string; description: string; url?: string };

// Add one entry per person. `photo` is optional and should point to a file
// placed in `public/people/` (for example `/people/jane-smith.jpg`). `bio`
// is a short one- or two-sentence description; leave it out if not confirmed yet.
export const people: Profile[] = [
  {
    name: 'Distinguished Professor Fang Chen',
    role: 'Founder, AI-SEA Lab; Executive Director, Data Science Institute',
    category: 'Core Members',
    bio: [
      'Distinguished Professor Fang Chen is a globally recognised and award-winning leader in artificial intelligence and data science. She is the Executive Director of the Data Science Institute at the University of Technology Sydney (UTS), where she drives transformative research and innovation at the intersection of academia, government and industry. Her career has encompassed senior leadership roles at Intel, Motorola and CSIRO, as well as serving as Dean of Faculty at Beijing Jiaotong University.',
      'Her research is internationally recognised across artificial intelligence, machine learning and data science; human-machine interaction and behaviour analytics; responsible and human-centred AI; visual and interactive analytics; and AI for sustainability and societal impact. Her work delivers data-driven solutions across transportation, water, energy, agriculture, telecommunications, health, financial services, real estate, education and retail.',
      'Distinguished Professor Chen serves on several influential boards and expert panels, including the Australian Federal Industry Science and Innovation Australia (IISA) Board and the NSW Government AI Review Committee, which established the AI assurance framework. She is Chair of the ACM Intelligent User Interfaces Steering Committee.',
    ],
    photo: '/people/fang-chen.jpg',
    profileUrl: 'https://profiles.uts.edu.au/Fang.Chen',
  },
  {
    name: 'Dr YiFei Dong',
    role: 'Founder, AI-SEA Lab; Research Fellow, Data Science Institute',
    category: 'Core Members',
    bio: [
      'Dr Yifei Dong is a Research Fellow at the Data Science Institute, University of Technology Sydney. His research spans generative AI, LLM-based agents, explainable AI and multimodal systems, with a focus on developing and evaluating intelligent systems for reliable use in practice. He works with collaborators across healthcare, education, government and industry.',
      'Dr Dong holds a PhD in Computer Science from UNSW Sydney and brings approximately a decade of fintech industry experience, including CTO roles. As a Lead Chief Investigator or Chief Investigator, he has helped secure over AUD 2.4 million in competitive research funding. His industry experience informs his work on translating AI research into systems that meet real organisational needs.',
      'Dr Dong supervises higher degree research students and serves as the School HDR Coordinator (Candidature) for the School of Computer Science. In this role, he supports students and supervisors through candidature milestones and contributes to graduate research governance.',
    ],
    photo: '/people/yifei-dong.jpg',
    profileUrl: 'https://profiles.uts.edu.au/Yifei.Dong',
  },
  {
    name: 'Dr Kun Yu',
    role: 'Founder, AI-SEA Lab; Senior Lecturer, Data Science Institute',
    category: 'Core Members',
    bio: [
      'Dr Kun Yu is a Senior Lecturer at the Data Science Institute, University of Technology Sydney. His research focuses on human-machine interaction and human cognition analytics, and he leads the Human Behaviour Analytics (HBA) team at the Data Science Institute. He holds a PhD in Electrical Engineering from UNSW Sydney and has been granted over 20 global patent families in his field.',
      'Prior to joining UTS, Dr Yu spent six years as a senior research scientist at the Nokia Research Center specialising in human-machine interaction, alongside six years of cognitive science research experience. He currently leads the Learning & Education Analytics project at UTS, and serves as an Editor for ACM Transactions on Interactive Intelligent Systems.',
    ],
    photo: '/people/kun-yu.jpg',
    profileUrl: 'https://profiles.uts.edu.au/Kun.Yu',
  },
  {
    name: 'Megan (Ying) Zhou',
    role: 'Core Member & Primary Contact, AI-SEA Lab',
    category: 'Core Members',
    bio: [
      'Megan (Ying) Zhou is a Core Member and Primary Contact of the AI Systems Engineering and Assurance Lab, bringing over 20 years of industry experience in enterprise software engineering, quality assurance, intelligent automation, and AIOps solutions.',
      'She has held software engineering, quality assurance, consultant and leadership roles at Microsoft R&D Centre, CA Technologies, Broadcom, and Robotic Cell Technology. Her professional experience spans enterprise software testing, AIOps, application performance monitoring, AI-driven automation, and autonomous solutions development, and she has contributed to industry projects involving AI agent platforms, intelligent infrastructure, and autonomous monitoring systems.',
      'Megan holds a Master of Engineering in Computer Science and Engineering Management and a Bachelor of Engineering in Computer Science. She also completed the Artificial Intelligence: Implications for Business Strategy certificate programme offered by MIT Sloan School of Management and MIT CSAIL in 2018. Her academic experience includes serving as an Adjunct Lecturer at Minzu University of China, teaching computer organisation and automatic control.',
      'As a Core Member and Primary Contact of the AI-SEA Lab, Megan contributes to industry engagement, collaborative research and the translation of AI assurance research into practical engineering solutions.',
    ],
    photo: '/people/megan-zhou.png',
  },
  {
    name: 'Yuhong Shi',
    role: 'Research Assistant, UTS',
    category: 'Core Members',
    bio: [
      'Yuhong Shi is a Research Assistant at the University of Technology Sydney (UTS) with experience in AI system engineering, large language models, and applied machine learning. Her technical expertise includes model benchmarking, AI architecture design, natural language processing, and semantic retrieval.',
      'She has contributed to the design, development, and evaluation of AI systems across multiple domains, including education and healthcare.',
    ],
    photo: '/people/yuhong-shi.jpg',
  },
  {
    name: 'Megan (Ying) Zhou',
    role: 'PhD Researcher, AI-SEA Lab',
    category: 'PhD Students',
    entryYear: 2027,
    bio: [
      'Megan (Ying) Zhou is a PhD researcher at the AI Systems Engineering and Assurance Lab, specialising in LLM Agent Assurance, AI Systems Framework, and Software Quality Assurance.',
      'Her doctoral research focuses on the assurance of Large Language Model (LLM)-based agents, with particular interests in reliability, safety, robustness, behavioural evaluation, and systematic verification. Her work aims to develop practical approaches for the trustworthy deployment of agentic AI systems in real-world industry environments.',
      'Megan brings over 20 years of enterprise software engineering and quality assurance experience to her research, drawing on her industry background in AIOps, intelligent automation and autonomous systems to ground her work in practical, deployable assurance methods for agentic AI.',
    ],
    photo: '/people/megan-zhou.png',
  },
  {
    name: 'Yuhong Shi',
    role: 'PhD Candidate, UTS',
    category: 'PhD Students',
    entryYear: 2024,
    bio: [
      'Yuhong Shi is a PhD candidate at the University of Technology Sydney (UTS) and a recipient of a CSIRO Next Generation Graduates Program scholarship. Her research focuses on large language models (LLMs), agentic AI, synthetic data generation, and causal inference.',
      'She is particularly interested in developing trustworthy AI systems, with an emphasis on data privacy, system reliability, and AI evaluation and assurance.',
    ],
    photo: '/people/yuhong-shi.jpg',
  },
  {
    name: 'Torsten Olivi Tiltack',
    role: 'PhD Candidate, UTS',
    category: 'PhD Students',
    entryYear: 2025,
    bio: [
      'Torsten Olivi Tiltack is a PhD candidate at the University of Technology Sydney, supervised by Dr Yifei Dong and Dr Kun Yu. His research focuses on trustworthy AI, evidence traceability and accountability in human–AI workflows.',
      'He investigates how scientific claims and their supporting evidence can remain traceable and open to scrutiny as content is transformed, revised and published. His work combines evidence synthesis, protocol specification and software development, drawing on his background in software development and journalism.',
    ],
    photo: '/people/torsten-tiltack.jpeg',
  },
  {
    name: 'YiRan Guo',
    role: 'PhD Candidate, UTS',
    category: 'PhD Students',
    entryYear: 2026,
    bio: [
      'Yiran Guo is a PhD student at the University of Technology Sydney (UTS), supervised by Yifei Dong and Kun Yu. He completed his undergraduate studies in Computing Science at UTS, focusing on artificial intelligence and data analysis.',
      'His research interests include large language models, AI agents, and recommender systems. He is currently exploring research directions in LLM-based agents and their applications.',
    ],
    photo: '/people/yiran-guo.jpg',
  },
  {
    name: 'Ranzheng Lin',
    role: 'PhD Student, UTS',
    category: 'PhD Students',
    entryYear: 2026,
    bio: [
      'Ranzheng Lin is a PhD student at the University of Technology Sydney, working on the engineering and assurance of AI-enabled systems. Her research interests include trustworthy AI, large language models, knowledge representation and reasoning, and security for intelligent and distributed systems. She is particularly interested in developing AI systems that are reliable, transparent, and suitable for complex, high-stakes settings.',
      'Her research explores AI assurance and security, including a platform for evaluating machine-learning model watermarking against attacks, as well as blockchain-based identity verification and AI-driven trust management in distributed systems. She has also researched large language models for multimodal interaction and medical decision support. Ranzheng has authored first-author papers accepted at international conferences.',
      'She holds a Bachelor of Engineering in Software Engineering from Xiamen University and has experience with the development of end-to-end AI and data systems.',
    ],
    photo: '/people/ranzheng-lin.jpg',
  },
  {
    name: 'Remya Sasi Valsala',
    role: 'PhD Candidate, UTS',
    category: 'PhD Students',
    entryYear: 2025,
    bio: [
      'Remya Sasi Valsala is a first-year PhD candidate in Artificial Intelligence at the University of Technology Sydney (UTS). Her research focuses on the development of a Multimodal AI Framework for Integrated Lung Disease Diagnosis, aiming to improve clinical decision-making through the integration of medical imaging and patient data.',
      'Before beginning her doctoral studies, she completed a Master of Artificial Intelligence and Data Analytics and a Bachelor of Computer Science. She is particularly interested in research-driven learning and enjoys exploring innovative concepts in artificial intelligence, machine learning, and their applications in healthcare.',
    ],
    photo: '/people/remya-valsala.jpeg',
  },
  {
    name: 'Zehui Cao',
    role: 'PhD Student, UTS',
    category: 'PhD Students',
    entryYear: 2027,
    bio: [
      'Zehui Cao is a PhD student at the University of Technology Sydney (UTS) and a data scientist and data engineer with nine years of experience across multiple consulting firms. She holds a Master of Engineering Management from Dalian University of Technology and an MSc in Data Science from the University of Sydney.',
      'She currently works at Capgemini Consulting, delivering projects for Johnson & Johnson on AWS-based data pipelines and dashboards, with extensive experience in data migration, warehousing and analytics across SQL, Python, PySpark and big data platforms, along with Databricks and AWS certifications. Her research interests lie in large language models and agents for data development.',
    ],
    photo: '/people/zehui-cao.jpg',
  },
  {
    name: 'Peng Qian',
    role: 'Master of Research Student, Data Science Institute, UTS',
    category: 'Master of Research Students',
    entryYear: 2026,
    bio: [
      'Peng Qian is a research master\u2019s student at the Data Science Institute at the University of Technology Sydney (UTS). Peng\u2019s research interests include natural language processing (NLP) and multimodal large language models (MLLM), with a current focus on how combining clinical text and medical images affects what LLMs can do in medicine.',
    ],
    photo: '/people/peng-qian.png',
  },
  {
    name: 'Nick Qi',
    role: 'Collaborator; Technology Director, FloatX; Director, AIMS Financial Group',
    category: 'Collaborators',
    bio: [
      'Nicholas Qi is a technology leader and AI researcher with over 18 years of experience in enterprise architecture, digital transformation, cloud platforms and emerging technologies, with a background spanning Deloitte, Optus, NSW Health and the financial services sector.',
      'He is pursuing a PhD at UTS researching multi-agent AI systems, personalised learning and AI reliability, focused on making autonomous AI agents safer and more effective in real-world environments. His interest centres on bridging AI prototypes and reliable enterprise deployment through robust architecture, governance, security and scalability.',
      'Nicholas is also the founder and organiser of NextGenius, a Sydney-based AI and technology community of over 3,000 professionals, researchers and industry leaders.',
    ],
    photo: '/people/nick-qi.jpg',
  },
  {
    name: 'Professor Tieling Zhang',
    role: 'Collaborator; Leader, Engineering Asset Management and Systems Engineering Research Group, University of Wollongong',
    category: 'Collaborators',
    bio: [
      'Tieling Zhang received a PhD degree in engineering. He has strong research expertise in data processing and modelling, system reliability engineering, condition-based maintenance and operation of wind turbines, and complex system simulation and optimisation.',
      'He has published over 100 peer-reviewed research articles in these fields, 8 book chapters, and completed more than 20 major research projects funded by government and industry agencies. As team leader and/or project leader, his team has secured research funding of over AUD 7.0 million. He holds 6 patents (USA, EU, China) and is a recipient of three best paper awards from three international conferences.',
      'Professor Zhang has taught at both undergraduate and postgraduate level in mechanical engineering, covering the Master of Engineering Asset Management and Master of Engineering Management programmes. He serves as leader of the Engineering Asset Management and Systems Engineering Research Group at the Faculty of Engineering and Information Sciences, University of Wollongong.',
      'He is an invited referee for over 60 international journals, and a reviewer/technical committee member for many international conferences. He serves on the editorial board of Information and the International Journal of Systems Engineering, is academic editor for two journals (Machines and Information), and has been guest editor for three special issues across three international journals.',
    ],
    photo: '/people/tieling-zhang.png',
    profileUrl: 'https://scholars.uow.edu.au/tieling-zhang',
  },
  {
    name: 'Professor RenPing Liu',
    role: 'Collaborator; Professor and Head of Discipline, Network & Cybersecurity, UTS',
    category: 'Collaborators',
    bio: [
      'Ren Ping Liu is a Professor and Head of Discipline of Network & Cybersecurity at the University of Technology Sydney (UTS). Since joining UTS in 2016, Professor Liu has received 28 research grants (leading 14) totalling over $10 million. As a research leader, a certified network professional, and a full stack web developer, he has delivered networking and cybersecurity solutions to a number of government agencies and industry customers. His research interests include wireless networking, IoT, and cybersecurity. He has supervised over 50 PhD students, and has over 300 research publications.',
      'Professor Liu was the founding Research Program Leader of Digital Agrifood Technologies in Food Agility CRC, a $50 million initiative to empower Australia\'s food industry through digital transformation. He was the co-founder and CTO of Ultimo Digital Technologies Pty Ltd, developing IoT and blockchain. Prior to that he was a Principal Scientist and Research Leader at CSIRO, where he led wireless networking research activities contributing to large scale industrial research projects valued over $100 million.',
      'Professor Liu was the winner of the 2020 NSW iAwards for leading the blockchain project BeFAQT, and the winner of the 2025 QLD iAwards for co-leading the Mud Crab Traceability project CrabTrace. He was awarded the Australian Engineering Innovation Award 2012 and the CSIRO Chairman\u2019s Medal for his contribution to the Wireless Backhaul project. Professor Liu was the founding chair of the IEEE NSW VTS Chapter and a Senior Member of IEEE. He has served as committee chair for numerous IEEE conferences.',
    ],
    photo: '/people/renping-liu.jpg',
    profileUrl: 'https://profiles.uts.edu.au/RenPing.Liu',
  },
  {
    name: 'Dr Xu Wang',
    role: 'Collaborator; Course Director, B.Cyber (IDeA), UTS',
    category: 'Collaborators',
    bio: [
      'Dr Xu Wang received his PhD degree from the University of Technology Sydney (UTS) in 2020. He led the establishment of the UTS Cyber Precinct and is currently the Course Director for the B.Cyber (IDeA).',
      'Xu developed and currently coordinates 43010 Cyber Threat Intelligence and Incident Response, and has previously taught 41900/42000 Cryptography, 48436/32309 Digital Forensics, and 41092 Network Fundamentals. His main research interests include AI security & privacy, blockchain, cyber, and IoT.',
      'Industry recognition: SMODS (Secure Multi-Organisational Data Sharing Platform for Emergency Response) won the 2026 NSW iAwards; Best Cyber Technician/Specialist Under 35 from the 2026 Defence & National Security Workforce Awards; CrabTrace (Crab Harvest and Regulation) won the 2025 QLD iAwards.',
      'Academic recognition: "Split Unlearning" received the Distinguished Paper Award at ACM CCS 2025 (Taipei); "Survey on Blockchain for the Internet of Things" received the Best Review Paper from Computer Communications and was recognised as an ESI Highly Cited Paper.',
    ],
    photo: '/people/xu-wang.jpg',
    profileUrl: 'https://profiles.uts.edu.au/Xu.Wang',
  },
  // add more people here
];
export const publications: Publication[] = [
  {
    title: 'Can GNNs Learn Link Heuristics? A Concise Review and Evaluation of Link Prediction Methods',
    authors: 'Liang S, Ding Y, Li Z, Liang B, Zhang S, Wang Y, Chen F',
    venue: 'IEEE Transactions on Big Data',
    year: 2026,
  },
  {
    title: 'TAPE: Trend-Aware Perturbation Enhancement for Sparse Stepwise Non-stationary Time Series',
    authors: 'Di S, Li Z, Chen F, Liang B',
    venue: 'Lecture Notes in Computer Science: Data Science: Foundations and Applications',
    year: 2026,
    url: 'https://doi.org/10.1007/978-981-92-1926-1_37',
  },
  {
    title: 'Governing the Moving Target: A Hierarchical Taxonomy and Framework for Generative AI as a Complex Adaptive System',
    authors: 'Chua D, Vella A, Moreira C, Chen F',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.6467681',
  },
  {
    title: 'Temporal Data Explainability in Remote Sensing for Agriculture: A Systematic Review',
    authors: 'Zheng B, Liang B, Liang S, Chen F',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.6105227',
  },
  {
    title: 'Perioperative Intravenous Antibiotic Regimens and Surgical Site Infection After Colorectal Surgery: Clinical Associations and External Evaluation of Risk Prediction Models',
    authors: 'Cui J, Lim ECN, Zhu Z, Zheng B, Liang B, Chen H, Zhang J, Chen F, Zhou J',
    venue: 'Infectious Disease Reports',
    year: 2026,
    url: 'https://doi.org/10.3390/idr18050113',
  },
  {
    title: 'Risk Evaluation for Agentic AI: A Survey of Benchmarks, Methods, and Open Problems',
    authors: 'Jin Z, Zhu Z, Chen H, Zhang J, Chen F, Zhou J',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.7221020',
  },
  {
    title: 'Ethical Boundaries for Large Language Models in Mental-Health Care: A Review of Psychological Safety, Relational Governance and Human Escalation',
    authors: 'Lim ECN, Chen F, Lim CED',
    venue: 'Journal of Mind and Medical Sciences',
    year: 2026,
    url: 'https://doi.org/10.3390/jmms13040024',
  },
  {
    title: 'SAND-CBM: Image-Side Basis Reconstruction for Concept Bottleneck Models',
    authors: 'Jin Z, Zhu Z, Zhang J, Wang X, Chen F',
    venue: 'Proceedings of the 35th ACM International Conference on Information and Knowledge Management',
    year: 2026,
  },
  {
    title: 'Explainable Deep Learning for Greenhouse Horticulture: Feature and Temporal Interpretability in Crop Yield and Energy Optimization',
    authors: 'Li Y, Zheng B, Chu VW, Zhou J, Chen F, Chavan S, He J, Xu M, Chen Z, Tissue D',
    venue: 'AgriEngineering',
    year: 2026,
    url: 'https://doi.org/10.3390/agriengineering8060213',
  },
  {
    title: 'Intuitionistic Network Fuzzy Sets',
    authors: 'Nawaz M, Merigó JM, Chen F',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.7309687',
  },
  {
    title: 'Reproducibility Companion Paper: Enhancing Model Interpretability with Local Attribution over Global Exploration',
    authors: 'Zhu Z, Jin Z, Zhang J, Chen F, Zhou J, John V, Spiess F',
    venue: 'Proceedings of the 33rd ACM International Conference on Multimedia',
    year: 2025,
    url: 'https://doi.org/10.1145/3746027.3759203',
  },
  {
    title: 'GRADIOOD: A Framework for Out-of-Distribution Sample Identification Using Signed Gradients for Robust Models',
    authors: 'Alotaibi D, Zhou J, Dong Y, Chen F',
    venue: 'Communications in Computer and Information Science: Data Science and Machine Learning',
    year: 2026,
    url: 'https://doi.org/10.1007/978-981-95-6888-8_5',
  },
  {
    title: 'GRAG4PM: Graph Retrieval Augmented Generation Framework Adapted for Process Mining',
    authors: 'Su X, Liang B, Li Z, Dong Y, Wang J, Chen F',
    venue: 'Applied Sciences',
    year: 2026,
    url: 'https://doi.org/10.3390/app16105152',
  },
  {
    title: 'An Adaptive Multi-Agent Framework for Semantic-Aware Process Mining',
    authors: 'Su X, Liang B, Li Z, Dong Y, Wang J, Chen F',
    venue: 'Computers',
    year: 2025,
    url: 'https://doi.org/10.3390/computers14110481',
  },
  {
    title: 'Multi-Population Ensemble Genetic Programming via Cooperative Coevolution and Multi-View Learning for Classification',
    authors: 'Khorshidi MS, Yazdanjue N, Gharoun H, Nikoo MR, Chen F, Gandomi AH',
    venue: 'IEEE Transactions on Emerging Topics in Computational Intelligence',
    year: 2026,
    url: 'https://doi.org/10.1109/tetci.2026.3668624',
  },
  {
    title: 'Enhancing collaborative learning through AI-powered feedback systems',
    authors: 'Qi X, Zhou J, Dong Y',
    venue: 'International Journal of Data Science and Analytics',
    year: 2026,
    url: 'https://doi.org/10.1007/s41060-025-00882-0',
  },
  {
    title: 'Large language models in education: a systematic review of empirical applications, benefits, and challenges',
    authors: 'Shi Y, Yu K, Dong Y',
    venue: 'Computers and Education: Artificial Intelligence',
    year: 2026,
    url: 'https://doi.org/10.1016/j.caeai.2025.100529',
  },
  {
    title: 'Technology-Enabled (P)rehabilitation for Patients Undergoing Cancer Surgery: A Systematic Review and Meta-Analysis',
    authors: 'Tsoukalas TR, Bai Z, Jeon C, Huynh R, Gu E, Alexander K, Yu K, White K, Wilson K, Wolsley K, Steffens D',
    venue: 'Cancers',
    year: 2026,
    url: 'https://doi.org/10.3390/cancers18020296',
  },
  {
    title: 'Advancing Patient-AI Conversations with Recursive Learning Memory Using Relational Frame Theory',
    authors: 'Goyal R, Dong Y, Yu K, Chen F',
    venue: 'Studies in Health Technology and Informatics: MEDINFO 2025',
    year: 2025,
    url: 'https://doi.org/10.3233/shti250919',
  },
  {
    title: 'Shadow trading detection: A graph-based surveillance approach',
    authors: 'Stenfors A, Guo T, Li B, Hewage K, Mere P, Chen F',
    venue: 'Finance Research Letters',
    year: 2025,
    url: 'https://doi.org/10.1016/j.frl.2025.108524',
  },
  {
    title: 'GenForge: A Multi-population Genetic Programming framework with Semantic-Preserving Feature Partitioning for classification and regression tasks',
    authors: 'Khorshidi MS, Yazdanjue N, Gharoun H, Nikoo MR, Chen F, Gandomi AH',
    venue: 'Software Impacts',
    year: 2026,
    url: 'https://doi.org/10.1016/j.simpa.2026.100812',
  },
  {
    title: 'Generating with Fairness: A Modality-Diffused Counterfactual Framework for Incomplete Multimodal Recommendations',
    authors: 'Li J, Wang S, Zhang Q, Yu S, Chen F',
    venue: 'Proceedings of the ACM on Web Conference 2025',
    year: 2025,
    url: 'https://doi.org/10.1145/3696410.3714606',
  },
  {
    title: 'Imitation Learning: Progress, Taxonomies and Challenges',
    authors: 'Zheng B, Verma S, Zhou J, Tsang IW, Chen F',
    venue: 'IEEE Transactions on Neural Networks and Learning Systems',
    year: 2024,
    url: 'https://doi.org/10.1109/tnnls.2022.3213246',
  },
  {
    title: 'Shadow Gene Guidance: A Novel Approach for Elevating Genetic Programming Classifications and Boosting Predictive Confidence',
    authors: 'Gharoun H, Khorshidi MS, Yazdanjue N, Chen F, Gandomi AH',
    venue: 'Proceedings of the Genetic and Evolutionary Computation Conference Companion',
    year: 2024,
    url: 'https://doi.org/10.1145/3638530.3664175',
  },
  {
    title: 'Enhancing Classification Through Multi-view Synthesis in Multi-Population Ensemble Genetic Programming',
    authors: 'Khorshidi MS, Yazdanjue N, Gharoun H, Yazdani D, Nikoo MR, Chen F, Gandomi AH',
    venue: 'Proceedings of the Genetic and Evolutionary Computation Conference Companion',
    year: 2024,
  },
  {
    title: 'Automatic Accident Detection, Segmentation and Duration Prediction Using Machine Learning',
    authors: 'Grigorev A, Mihaita AS, Saleh K, Chen F',
    venue: 'IEEE Transactions on Intelligent Transportation Systems',
    year: 2024,
    url: 'https://doi.org/10.1109/tits.2023.3323636',
  },
  {
    title: 'A Hierarchical and Disentangling Interest Learning Framework for Unbiased and True News Recommendation',
    authors: 'Wang S, Wang W, Zhang X, Wang Y, Liu H, Chen F',
    venue: 'Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining',
    year: 2024,
    url: 'https://doi.org/10.1145/3637528.3671944',
  },
  {
    title: 'Traffic Incident Duration Prediction: A Systematic Review of Techniques',
    authors: 'Grigorev A, Mihaita AS, Chen F',
    venue: 'Journal of Advanced Transportation',
    year: 2024,
    url: 'https://doi.org/10.1155/atr/3748345',
  },
  {
    title: 'Explaining Imitation Learning Through Frames',
    authors: 'Zheng B, Zhou J, Liu C, Li Y, Chen F',
    venue: 'IEEE Intelligent Systems',
    year: 2024,
    url: 'https://doi.org/10.1109/mis.2024.3404988',
  },
  {
    title: 'Chain of Thought Prompting in Vision-Language Model for Vision Reasoning Tasks',
    authors: 'Ou J, Zhou J, Dong Y, Chen F',
    venue: 'Lecture Notes in Computer Science: AI 2024: Advances in Artificial Intelligence',
    year: 2024,
    url: 'https://doi.org/10.1007/978-981-96-0351-0_22',
  },
  {
    title: 'Semantic-Preserving Feature Partitioning for multi-view ensemble learning',
    authors: 'Khorshidi MS, Yazdanjue N, Gharoun H, Nikoo MR, Chen F, Gandomi AH',
    venue: 'Information Fusion',
    year: 2025,
    url: 'https://doi.org/10.1016/j.inffus.2025.103152',
  },
  {
    title: 'Leveraging Neural Networks and Calibration Measures for Confident Feature Selection',
    authors: 'Gharoun H, Yazdanjue N, Khorshidi MS, Chen F, Gandomi AH',
    venue: 'IEEE Transactions on Emerging Topics in Computational Intelligence',
    year: 2025,
    url: 'https://doi.org/10.1109/tetci.2025.3535659',
  },
  {
    title: 'Multi-Hazard Early Warning Systems for Agriculture with Featural-Temporal Explanations',
    authors: 'Zheng B, Chu V, Eclarin N, Chen F',
    venue: 'SSRN',
    year: 2026,
  },
  {
    title: 'Artificial Intelligence in Alzheimer\'s Disease: Evidence Maturity and Clinical Translation Across the Care Pathway',
    authors: 'Jin Z, Zhu Z, Chen B, Xu H, Inglis S, Hutchens J, Sun J, Chen F, Zhou J',
    venue: 'SSRN',
    year: 2026,
  },
  {
    title: 'Spatio-Temporal Residual Masked Autoencoder for Urban Rent Estimation',
    authors: 'Huang C, Liang B, Li Z, Wang J, Chen F',
    venue: 'Proceedings of the 34th ACM International Conference on Information and Knowledge Management',
    year: 2025,
    url: 'https://doi.org/10.1145/3746252.3760901',
  },
  {
    title: 'Transformer-Based Tree Extraction from Remote Sensing Imagery: A Systematic Review',
    authors: 'Wilaiwongsakul A, Liang B, Zheng B, Chen F',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.6149909',
  },
  {
    title: 'The Complexity of Extreme Climate Events on the New Zealand\'s Kiwifruit Industry',
    authors: 'Zheng B, Chu V, Li Z, Chen F, Webster E, Rootsey A',
    venue: 'SSRN',
    year: 2026,
    url: 'https://doi.org/10.2139/ssrn.6240698',
  },
  {
    title: 'Multimodal AI for Transforming Industries and Empowering Social Interaction',
    authors: 'Chen F',
    venue: 'Proceedings of the 27th International Conference on Multimodal Interaction',
    year: 2025,
    url: 'https://doi.org/10.1145/3716553.3757099',
  },
  {
    title: 'BARE: Boundary-Aware with Resolution Enhancement for Tree Crown Delineation',
    authors: 'Wilaiwongsakul A, Liang B, Jia W, Zheng B, Chen F',
    venue: 'Communications in Computer and Information Science: Data Science and Machine Learning',
    year: 2026,
    url: 'https://doi.org/10.1007/978-981-95-6786-7_20',
  },
  {
    title: 'Forest or trees? Evidence for global processing via an information board study into cues utilised in phishing identification',
    authors: 'Conway D, Yu K, Butavicius M, Chen F, Hepworth A',
    venue: 'Behaviour & Information Technology',
    year: 2025,
    url: 'https://doi.org/10.1080/0144929x.2025.2530012',
  },
  {
    title: 'Unleashing the Potential of Diffusion Models Towards Diversified Sequential Recommendations',
    authors: 'Cai Z, Wang S, Chu VW, Naseem U, Wang Y, Chen F',
    venue: 'Proceedings of the 48th International ACM SIGIR Conference on Research and Development in Information Retrieval',
    year: 2025,
    url: 'https://doi.org/10.1145/3726302.3730109',
  },
  {
    title: 'Multimodal Machine Learning for Real Estate Appraisal: A Comprehensive Survey',
    authors: 'Huang C, Liang B, Li Z, Chen F',
    venue: 'Lecture Notes in Computer Science: Advances in Knowledge Discovery and Data Mining',
    year: 2025,
    url: 'https://doi.org/10.1007/978-981-96-8183-9_26',
  },
  {
    title: 'Enhancing Explainability of Deep Learning-Based ECG Diagnosis Using Large Language Models',
    authors: 'Wu S, Zhou J, Dong Y, Chen F',
    venue: 'Proceedings of the 2024 8th International Conference on Advances in Artificial Intelligence',
    year: 2024,
    url: 'https://doi.org/10.1145/3704137.3704146',
  },
  {
    title: 'Understanding student emotions when completing assessment: technological, teacher and student perspectives',
    authors: 'Hopwood N, Palmer T, Koh GA, Lai MY, Dong Y, Loch S, Yu K',
    venue: 'International Journal of Research & Method in Education',
    year: 2024,
    url: 'https://doi.org/10.1080/1743727x.2024.2358792',
  },
  {
    title: 'Toward Web3 Applications: Easing the Access and Transition',
    authors: 'Yu G, Wang X, Wang Q, Bi T, Dong Y, Liu RP, Georgalas N, Reeves A',
    venue: 'IEEE Transactions on Computational Social Systems',
    year: 2024,
    url: 'https://doi.org/10.1109/tcss.2024.3382582',
  },
];
export const projects: Project[] = [
  {
    title: 'Property Management AI Copilot',
    funder: 'Industry partner, property management sector',
    period: 'January 2026 – June 2028',
    role: 'Project Leader',
    description: 'An enterprise-grade AI copilot that unifies a property management organisation\u2019s existing task-specific AI agents and centralised data assets into a single intelligent operational layer, supporting property managers through a unified conversational interface.',
  },
  {
    title: 'Establishing Intelligent Business Processes in Property Management with Agentic AI',
    funder: 'Industry partner, property management sector',
    period: '2025–2026',
    role: 'Project Leader',
    description: 'An agentic AI system that ingests multi-channel property management communications (emails, phone transcripts, chat logs), captures business rules, refines standard operating procedures through feedback loops, and plans and executes operational tasks such as maintenance scheduling and escalations.',
  },
  {
    title: 'Property Management AI Research Programme',
    funder: 'Industry partner, property management sector',
    period: '2024–2025',
    role: 'Project Leader',
    description: 'Two parallel research scopes supporting property professionals: AI-assisted exam preparation tools for real estate licensing, and a comprehensive intent classification system for categorising communications between landlords, tenants and property managers.',
  },
  {
    title: 'Applying Generative AI in Pharmaceutical Evaluation in Australia',
    funder: 'UTS Collaboration',
    period: '2025',
    role: 'Project Leader',
    description: 'Australia\u2019s first generative AI assistant designed to support evaluators of pharmaceutical subsidisation applications, trained on a large archive of public evaluation documents to assist with report summarisation and precedent identification amid rapidly growing application volumes.',
  },
  {
    title: 'Integrating Multimodal Learning Analytics with an LLM-Based Agent to Address Educational Disadvantage',
    funder: 'CSIRO',
    period: '2024–2028',
    role: 'Project Leader; Primary PhD Supervisor',
    description: 'A multimodal learning analytics system that constructs student engagement profiles from behavioural and qualitative data, feeding an LLM-based educational support agent that delivers personalised interventions to students identified as educationally disadvantaged.',
  },
  {
    title: 'AI-Powered Detection of Dodgy Digital Content for Children (SLLM)',
    funder: 'UTS Central Research Budget',
    period: '2024',
    role: 'Project Leader',
    description: 'An AI system that detects harmful online content and educates users through gamified learning experiences and personalised feedback, developed in partnership with a consumer scam-awareness platform and collaborating institutions.',
  },
  {
    title: 'Proof of Concept: Behavioural Insights from On-Device Photos',
    funder: 'Industry partner, digital health sector',
    period: '2024',
    role: 'Chief Investigator',
    description: 'A proof-of-concept mobile application analysing on-device photo content to automatically categorise behavioural activity patterns and generate personalised wellbeing insight reports.',
  },
  {
    title: 'Bringing Generative AI to the NDIS Complaints Process',
    funder: 'Industry partner, disability services sector',
    period: '2023–2025',
    role: 'Project Leader',
    description: 'Conversational AI tools supporting both service providers and participants through the NDIS complaints resolution process, designed around the communication needs of people with disability and deployed into live national complaints infrastructure. The industry partner received a 2025 Australian Regtech Award for the resulting platform.',
  },
  {
    title: 'NSW Trend Atlas — Machine Learning and Automation Enhancements',
    funder: 'NSW Department of Premier and Cabinet',
    period: '2023',
    role: 'Project Leader',
    description: 'Natural language processing tools automating trend mapping, emerging-trend identification and content categorisation for a government strategic intelligence platform used by over 1,300 users, delivered under a privacy-preserving architecture meeting government cybersecurity requirements.',
  },
  {
    title: 'NSW Trend Atlas — Platform Architecture Refactoring',
    funder: 'NSW Department of Premier and Cabinet',
    period: '2025',
    role: 'Project Leader',
    description: 'A modular re-architecture of an existing government analytics automation toolset to improve scalability, maintainability and runtime configurability.',
  },
  {
    title: 'AI-Assisted Analysis for Global Asset Management Research',
    funder: 'Industry partner, financial services consulting sector',
    period: 'August – September 2025',
    role: 'Implementation Oversight',
    description: 'A generative AI system enabling natural-language business queries over a long-running institutional investor survey dataset, grounded in statistical analysis of asset manager performance metrics.',
  },
  {
    title: 'Sensor and Data Innovation for Smart Triaging and Wellbeing in Aged Care',
    funder: 'Department of Industry, Innovation and Science',
    period: '2022–2024',
    role: 'Chief Investigator',
    description: 'An integrated smart triaging platform combining low-cost wearable sensors with AI-powered decision support for real-time remote monitoring and proactive care management for elderly Australians.',
  },
  {
    title: 'Patient Journey Modelling — From Data to Insights into Patient Pathways',
    funder: 'Digital Health CRC',
    period: '2020–2024',
    role: 'Chief Investigator',
    description: 'A methodology and visual analytics system for modelling patient pathways through the NSW health system using a large-scale linked primary care dataset, supporting value-based, person-centred care design.',
  },
  {
    title: 'Understanding Student Emotions When Completing Assessment',
    funder: 'UTS Collaboration',
    period: '2023–2024',
    role: 'Co-researcher',
    description: 'An interdisciplinary study combining learning analytics (facial expression, interaction pattern data) with qualitative interviews to examine student emotional engagement during online assessment, identifying distinct engagement patterns among students.',
  },
];

// Add an approved public lab email address when one is available.
export const contactEmail: string = 'yifei.dong@uts.edu.au';
