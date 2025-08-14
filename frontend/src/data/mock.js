// Enhanced Professional Portfolio Data
export const portfolioData = {
  personal: {
    name: "Kamaal Ismaeel K I",
    title: "Full-Stack Developer & AI Specialist",
    subtitle: "Computer Science Engineer",
    year: "Final Year BTech",
    location: "India",
    email: "kamaal.ismaeel@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/kamaal-ismaeel",
    github: "https://github.com/kamaal-ismaeel",
    portfolio: "https://kamaal-portfolio.com",
    resumeUrl: "#",
    bio: "Passionate Computer Science engineer with 3+ years of experience building scalable web applications, AI-powered solutions, and data-driven platforms. Proven track record of delivering high-impact projects with modern technologies including React, Python, and Machine Learning. Seeking opportunities to drive innovation and create exceptional user experiences.",
    availability: "Available for Full-time Opportunities",
    yearsExperience: "3+",
    projectsCompleted: "15+",
    clientsSatisfied: "100%"
  },

  skills: {
    backend: [
      { name: "Python", level: 95, experience: "3+ years", projects: 12 },
      { name: "FastAPI", level: 90, experience: "2+ years", projects: 8 },
      { name: "Flask", level: 88, experience: "2+ years", projects: 10 },
      { name: "Node.js", level: 82, experience: "1.5+ years", projects: 6 },
      { name: "REST APIs", level: 92, experience: "3+ years", projects: 15 },
      { name: "GraphQL", level: 75, experience: "1+ year", projects: 3 }
    ],
    frontend: [
      { name: "React", level: 93, experience: "2.5+ years", projects: 12 },
      { name: "Next.js", level: 88, experience: "1.5+ years", projects: 6 },
      { name: "TypeScript", level: 85, experience: "2+ years", projects: 8 },
      { name: "TailwindCSS", level: 95, experience: "2+ years", projects: 15 },
      { name: "JavaScript ES6+", level: 90, experience: "3+ years", projects: 15 },
      { name: "Framer Motion", level: 82, experience: "1+ year", projects: 8 }
    ],
    database: [
      { name: "MongoDB", level: 87, experience: "2+ years", projects: 10 },
      { name: "PostgreSQL", level: 80, experience: "1.5+ years", projects: 6 },
      { name: "SQLite", level: 85, experience: "2+ years", projects: 8 },
      { name: "Redis", level: 75, experience: "1+ year", projects: 4 }
    ],
    ai_ml: [
      { name: "Machine Learning", level: 83, experience: "2+ years", projects: 6 },
      { name: "TensorFlow", level: 78, experience: "1+ year", projects: 4 },
      { name: "OpenAI GPT", level: 88, experience: "1.5+ years", projects: 8 },
      { name: "NLP", level: 85, experience: "1.5+ years", projects: 6 },
      { name: "Data Analysis", level: 90, experience: "2+ years", projects: 10 }
    ],
    devops: [
      { name: "Git/GitHub", level: 92, experience: "3+ years", projects: 15 },
      { name: "Docker", level: 80, experience: "1+ year", projects: 5 },
      { name: "AWS", level: 75, experience: "1+ year", projects: 4 },
      { name: "Vercel/Netlify", level: 88, experience: "2+ years", projects: 12 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Enterprise Blog CMS",
      description: "Full-stack content management system with advanced admin features and analytics",
      longDescription: "Architected and developed a comprehensive blog platform serving 10,000+ monthly users. Features include role-based authentication, rich text editing, SEO optimization, and real-time analytics dashboard. Achieved 99.9% uptime and 40% improvement in content creation efficiency.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "AWS S3"],
      features: [
        "Multi-user role management (Admin/Editor/Viewer)",
        "Advanced rich text editor with media upload",
        "Real-time analytics dashboard",
        "SEO optimization tools",
        "Automated content backup",
        "Mobile-responsive design"
      ],
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "Page load < 2s",
        improvement: "40% efficiency gain"
      },
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      demoUrl: "#",
      codeUrl: "#",
      status: "Production",
      year: "2024",
      category: "Full-Stack Web"
    },
    {
      id: 2,
      title: "AI Document Analyzer",
      description: "Intelligent multi-format document processing with ML-powered insights",
      longDescription: "Built an AI-powered SaaS platform that processes 500+ documents daily, extracting insights from PDFs, Word docs, and spreadsheets. Integrated OpenAI GPT for natural language querying and automated report generation, reducing analysis time by 75%.",
      technologies: ["Python", "FastAPI", "OpenAI GPT-4", "Pandas", "React", "PostgreSQL"],
      features: [
        "Multi-format document processing (PDF, DOC, XLS)",
        "AI-powered content extraction",
        "Natural language query interface",
        "Automated insights generation",
        "Interactive visualization dashboard",
        "API for third-party integration"
      ],
      metrics: {
        documents: "500+ daily",
        accuracy: "95%+",
        timeReduction: "75%",
        apiCalls: "10,000+ monthly"
      },
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      demoUrl: "#",
      codeUrl: "#",
      status: "Production",
      year: "2024",
      category: "AI/ML"
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Enterprise logistics KPI dashboard with live data visualization",
      longDescription: "Developed a high-performance analytics dashboard for logistics operations, processing 1M+ data points in real-time. Features interactive charts, predictive analytics, and automated alerting system. Improved decision-making speed by 60% for operations teams.",
      technologies: ["React", "D3.js", "WebSocket", "Redis", "Python", "TailwindCSS"],
      features: [
        "Real-time data streaming (WebSocket)",
        "Interactive charts and graphs",
        "Predictive analytics algorithms",
        "Automated alert system",
        "Custom KPI builder",
        "Export and reporting tools"
      ],
      metrics: {
        dataPoints: "1M+ real-time",
        users: "200+ concurrent",
        latency: "< 100ms",
        improvement: "60% faster decisions"
      },
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
      demoUrl: "#",
      codeUrl: "#",
      status: "Production",
      year: "2024",
      category: "Data Visualization"
    },
    {
      id: 4,
      title: "PolicyBot - AI Chatbot",
      description: "Enterprise AI chatbot for policy document Q&A with 90% accuracy",
      longDescription: "Created an intelligent conversational AI for enterprise policy management, serving 5,000+ employees. Features document upload, context-aware responses, and multi-language support. Achieved 90% query resolution rate and reduced HR workload by 50%.",
      technologies: ["React", "FastAPI", "OpenAI", "Langchain", "Pinecone", "Docker"],
      features: [
        "Drag-and-drop document upload",
        "Context-aware AI responses",
        "Multi-language support",
        "Conversation history",
        "Admin analytics dashboard",
        "Integration with Slack/Teams"
      ],
      metrics: {
        users: "5,000+ employees",
        accuracy: "90%",
        queries: "1,000+ daily",
        workloadReduction: "50%"
      },
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
      demoUrl: "#",
      codeUrl: "#",
      status: "Production",
      year: "2024",
      category: "AI/Chatbot"
    },
    {
      id: 5,
      title: "Smart Meeting Assistant",
      description: "AI-powered desktop app for meeting transcription and summarization",
      longDescription: "Built cross-platform desktop application using Electron and AI for meeting management. Features real-time transcription, AI summarization, and action item extraction. Deployed to 1,000+ users with 95% satisfaction rate.",
      technologies: ["Electron", "React", "Python", "Whisper AI", "GPT-4", "SQLite"],
      features: [
        "Real-time audio transcription",
        "AI-powered meeting summaries",
        "Action item extraction",
        "Calendar integration",
        "Multi-platform deployment",
        "Offline functionality"
      ],
      metrics: {
        users: "1,000+",
        satisfaction: "95%",
        accuracy: "94%",
        timesSaved: "2 hours/meeting"
      },
      image: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4",
      demoUrl: "#",
      codeUrl: "#",
      status: "Production",
      year: "2024",
      category: "Desktop App"
    }
  ],

  achievements: [
    {
      id: 1,
      title: "Flipr Hackathon 28 - Winner",
      description: "1st Place in GenAI Bots category among 500+ participants",
      details: "Won first place in Flipr Hackathon 28 for developing an innovative AI-powered customer service bot. The solution reduced response time by 80% and achieved 92% customer satisfaction score. Competed against 500+ developers nationwide.",
      year: "2024",
      type: "Hackathon",
      result: "🏆 Winner",
      impact: "Solution adopted by 3 companies"
    },
    {
      id: 2,
      title: "Bajaj Finserv Hackathon - Finalist",
      description: "Top 10 finalist in FinTech innovation challenge",
      details: "Reached final round of Bajaj Finserv Hackathon with an innovative financial analytics dashboard. Solution provided real-time risk assessment and helped reduce processing time by 45%. Presented to senior executives and received mentorship opportunities.",
      year: "2024",
      type: "Hackathon",
      result: "🥉 Top 10 Finalist",
      impact: "Featured in tech media"
    },
    {
      id: 3,
      title: "Open Source Contributor",
      description: "Active contributor to 10+ open source projects with 1000+ GitHub stars",
      details: "Contributed to various open source projects including React libraries, Python packages, and AI tools. Maintained repositories with combined 1000+ GitHub stars and 200+ forks. Regularly mentor junior developers in the community.",
      year: "2023-2024",
      type: "Open Source",
      result: "⭐ 1000+ Stars",
      impact: "Helped 500+ developers"
    },
    {
      id: 4,
      title: "Client Success Rate",
      description: "100% client satisfaction with 15+ freelance projects",
      details: "Maintained perfect 5-star rating across all freelance platforms with 15+ completed projects. Clients include startups and established companies from US, UK, and India. Average project value increased by 300% due to exceptional delivery quality.",
      year: "2023-2024",
      type: "Professional",
      result: "⭐ 5.0/5.0 Rating",
      impact: "$50K+ revenue generated"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      type: "Freelance/Contract",
      duration: "Jan 2023 - Present",
      description: "Lead developer for multiple high-impact client projects",
      responsibilities: [
        "Architected and developed 10+ full-stack applications serving 50K+ users",
        "Led technical decisions and mentored junior developers",
        "Implemented AI/ML solutions that improved business metrics by 40%",
        "Collaborated directly with C-level executives and product managers",
        "Maintained 99.9% uptime across all production applications"
      ],
      achievements: [
        "Increased client revenue by 35% through optimized solutions",
        "Reduced development time by 50% through reusable component libraries",
        "Successfully migrated 5 legacy systems to modern architectures"
      ]
    },
    {
      id: 2,
      role: "AI/ML Developer",
      company: "DataTech Innovations",
      type: "Part-time",
      duration: "Jun 2023 - Dec 2023",
      description: "Specialized in developing AI-powered analytics solutions",
      responsibilities: [
        "Built machine learning models for predictive analytics",
        "Developed AI chatbots and natural language processing systems",
        "Created data visualization dashboards for business intelligence",
        "Optimized model performance achieving 95%+ accuracy rates"
      ],
      achievements: [
        "Improved model accuracy by 25% through advanced feature engineering",
        "Reduced inference time by 60% through model optimization",
        "Published 3 technical articles on AI/ML best practices"
      ]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO, TechStart Inc.",
      company: "TechStart Inc.",
      content: "Kamaal delivered exceptional work on our enterprise dashboard. His technical expertise and attention to detail resulted in a 40% improvement in our team's productivity. Highly recommended!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Manager, DataFlow",
      company: "DataFlow Solutions",
      content: "Working with Kamaal was a game-changer for our AI project. He not only built exactly what we needed but also suggested improvements that saved us months of development time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      company: "StartupXYZ",
      content: "Kamaal's full-stack expertise helped us launch our MVP in record time. His code quality is exceptional and he communicates complex technical concepts clearly to non-technical stakeholders.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
    }
  ],

  contact: {
    email: "kamaal.ismaeel@example.com",
    phone: "+91 98765 43210",
    location: "India",
    timezone: "IST (GMT+5:30)",
    linkedin: "https://linkedin.com/in/kamaal-ismaeel",
    github: "https://github.com/kamaal-ismaeel",
    portfolio: "https://kamaal-portfolio.com",
    calendly: "https://calendly.com/kamaal-ismaeel",
    availability: "Available for Full-time Opportunities",
    preferredContact: "Email or LinkedIn",
    responseTime: "Within 24 hours",
    workingHours: "9 AM - 6 PM IST, Flexible for global teams"
  }
};

export default portfolioData;