
import { Code, Database, Server, Terminal, Cpu, Brain, LineChart, Globe, GitBranch, Linkedin, Github, Mail, FileText } from 'lucide-react';

export const personalInfo = {
    name: "Nick",
    title: "AI Engineer / Backend Engineer (ML-focused)",
    tagline: "Building production-grade ML systems, data pipelines, and backend services.",
    bio: "I build end-to-end ML systems, not notebooks. My focus is on combining machine learning, data engineering, and backend development to ship usable systems. I prefer structured system design, explicit tradeoffs, and clean abstractions over rapid “vibe coding.” I’m actively targeting roles in ML Engineering, MLOps, and Backend-heavy AI engineering.",
    email: "hello@example.com", // Placeholder
    socials: [
        { name: "GitHub", icon: Github, url: "#" },
        { name: "LinkedIn", icon: Linkedin, url: "#" },
        { name: "Resume", icon: FileText, url: "#" }
    ]
};

export const skills = [
    {
        name: "Programming",
        icon: Code,
        items: ["Python (ML, data, backend)", "Java (Spring Boot)", "SQL", "C++ (DSA)"]
    },
    {
        name: "Machine Learning / AI",
        icon: Brain,
        items: ["Supervised learning", "NLP (sentiment analysis)", "Transformer fine-tuning (LoRA/QLoRA)", "Feature engineering", "Model benchmarking"]
    },
    {
        name: "Data Engineering",
        icon: Database,
        items: ["Ingestion pipelines", "Data cleaning & transformation", "Time-series handling", "Modular pipeline design"]
    },
    {
        name: "Backend Engineering",
        icon: Server,
        items: ["REST APIs", "Spring Boot", "Service-oriented architecture", "Authentication & API design"]
    },
    {
        name: "Systems & Tools",
        icon: Terminal,
        items: ["Git", "Linux", "Docker", "Streamlit"]
    }
];

export const projects = [
    {
        id: 1,
        title: "Indian Stock Market Sentiment Analysis",
        description: "A modular financial analytics system integrated with sentiment signals. Implemented pricing models (Monte Carlo, Black-Scholes).",
        tech: ["Python", "Pandas", "ML Models", "Streamlit"],
        details: [
            "Clean separation between data, models, and visualization",
            "Extendable architecture for future sentiment integration",
            "Foundation for sentiment-aware trading"
        ],
        // Using abstract tech/data images as placeholders
        image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?q=80&w=2670&auto=format&fit=crop",
        demo: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Domain-Specific LLM Fine-Tuning",
        description: "Fine-tuned small transformer models for finance, healthcare, and education domains using LoRA/QLoRA.",
        tech: ["Transformers", "LoRA/QLoRA", "PyTorch"],
        details: [
            "Compute-aware model design and efficient training",
            "Analyzed transfer learning tradeoffs",
            "Practical domain-adapted LLM pipeline"
        ],
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
        demo: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Self-Evolving Multi-Agent Narrative System",
        description: "Research project creating a multi-agent system with lore-aware memory for consistent long-form narratives.",
        tech: ["Agentic Systems", "RAG", "ACE", "Python"],
        details: [
            "Implemented Agentic Context Engineering (ACE)",
            "Used ReRAG for reflective retrieval",
            "Focus on context persistence and self-improvement loops"
        ],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2670&auto=format&fit=crop",
        demo: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Graph-Enhanced Domain LLM Reasoning",
        description: "Integrating graph-based knowledge with domain LLMs to improve reasoning consistency and factual grounding.",
        tech: ["Knowledge Graphs", "LLMs", "Research"],
        details: [
            "Structured knowledge + neural models integration",
            "Aiming for better reasoning consistency",
            "System-level design over magic"
        ],
        image: "https://images.unsplash.com/photo-1558494949-efc527755c94?q=80&w=2400&auto=format&fit=crop",
        demo: "#",
        github: "#"
    }
];

export const experience = [
    // Placeholder since user didn't provide specific past jobs, but listed "Target Roles".
    // I'll keep the structure but make it generic or remove if needed. 
    // For now, I'll comment it out or leave empty to avoid confusion, 
    // but the component might break if empty. 
    // I will repurpose the Experience component to "Engineering Philosophy" which was in the prompt.
];

export const philosophy = [
    {
        title: "Explicit Design",
        content: "Prefer explicit design over magic. Always ask: Why this model? Why this architecture?"
    },
    {
        title: "Maintainability",
        content: "Optimize for maintainability and extensibility. Treat ML systems as software systems, not experiments."
    },
    {
        title: "System Depth",
        content: "I am not a prompt engineer or a pure data scientist. I am a system-level AI/ML engineer with backend depth."
    }
];
