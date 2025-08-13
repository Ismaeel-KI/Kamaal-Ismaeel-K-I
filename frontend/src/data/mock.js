// Mock data for Ismaeel K.'s portfolio
export const portfolioData = {
  personal: {
    name: "Ismaeel K.",
    title: "Computer Science Student",
    year: "3rd Year BTech",
    location: "India",
    email: "ismaeel.k@example.com",
    phone: "+91 98765 43210",
    linkedin: "https://linkedin.com/in/ismaeel-k",
    github: "https://github.com/ismaeel-k",
    bio: "Passionate Computer Science student with expertise in full-stack development, data analysis, and AI solutions. Experienced in building scalable web applications, interactive dashboards, and intelligent automation tools. Strong background in Python, React, and modern web technologies with a focus on creating impactful solutions for real-world problems."
  },

  skills: {
    backend: [
      { name: "Python", level: 90, experience: "3+ years" },
      { name: "Flask", level: 85, experience: "2+ years" },
      { name: "FastAPI", level: 80, experience: "1+ year" },
      { name: "SQLite", level: 75, experience: "2+ years" },
      { name: "REST APIs", level: 85, experience: "2+ years" }
    ],
    frontend: [
      { name: "React", level: 88, experience: "2+ years" },
      { name: "Next.js", level: 82, experience: "1+ year" },
      { name: "TailwindCSS", level: 90, experience: "2+ years" },
      { name: "JavaScript", level: 85, experience: "3+ years" },
      { name: "Framer Motion", level: 75, experience: "1+ year" }
    ],
    dataAnalysis: [
      { name: "Pandas", level: 88, experience: "2+ years" },
      { name: "Matplotlib", level: 80, experience: "2+ years" },
      { name: "Seaborn", level: 78, experience: "1+ year" },
      { name: "NumPy", level: 75, experience: "2+ years" },
      { name: "Data Visualization", level: 85, experience: "2+ years" }
    ],
    tools: [
      { name: "Git", level: 85, experience: "3+ years" },
      { name: "VS Code", level: 90, experience: "3+ years" },
      { name: "Postman", level: 80, experience: "2+ years" },
      { name: "Figma", level: 70, experience: "1+ year" }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Blog Platform",
      description: "Full-stack blog platform with comprehensive CRUD operations and admin features",
      longDescription: "Built a complete blog management system featuring user authentication, content creation/editing, category management, and administrative controls. Implemented rich text editor, image upload functionality, and responsive design for optimal user experience across all devices.",
      technologies: ["Python", "Flask", "SQLite", "HTML/CSS", "JavaScript"],
      features: [
        "User authentication & authorization",
        "Rich text editor for post creation",
        "Admin dashboard with analytics",
        "Category and tag management",
        "Responsive design",
        "SEO optimization"
      ],
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 2,
      title: "Data Analyst Agent",
      description: "Intelligent document analysis system with multi-format support and interactive visualizations",
      longDescription: "Developed an AI-powered data analysis tool that processes multiple document formats (PDF, CSV, Excel) and generates comprehensive insights through interactive charts and visualizations. Features natural language querying and automated report generation.",
      technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Flask", "AI/ML"],
      features: [
        "Multi-format document processing",
        "Interactive data visualizations",
        "Natural language queries",
        "Automated insights generation",
        "Export capabilities",
        "Real-time analysis"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 3,
      title: "Warehousing KPI Dashboard",
      description: "Real-time logistics dashboard with advanced analytics and smooth animations",
      longDescription: "Created comprehensive warehousing and logistics KPI dashboard featuring real-time data visualization, performance metrics tracking, and interactive charts. Built with modern React architecture and smooth animations for enhanced user experience.",
      technologies: ["React", "Recharts", "TailwindCSS", "Framer Motion", "JavaScript"],
      features: [
        "Real-time KPI tracking",
        "Interactive charts & graphs",
        "Performance analytics",
        "Smooth animations",
        "Responsive design",
        "Data export functionality"
      ],
      image: "https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 4,
      title: "PolicyBot",
      description: "AI-powered document Q&A system with drag-and-drop interface",
      longDescription: "Built an intelligent document analysis chatbot using React and FastAPI. Features drag-and-drop file upload, natural language processing for document queries, and real-time conversational interface for policy and document understanding.",
      technologies: ["React", "FastAPI", "Python", "AI/ML", "NLP"],
      features: [
        "Drag-and-drop file upload",
        "Natural language processing",
        "Real-time chat interface",
        "Document parsing & analysis",
        "Context-aware responses",
        "Multi-document support"
      ],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      year: "2024"
    },
    {
      id: 5,
      title: "Meeting Assistant",
      description: "Desktop app with live transcription and AI-powered meeting summarization",
      longDescription: "Developed a cross-platform desktop application using React and Electron for meeting management. Features real-time audio transcription, AI-powered meeting summarization, action item extraction, and seamless integration with calendar systems.",
      technologies: ["React", "Electron", "Python", "AI/ML", "Speech Recognition"],
      features: [
        "Live audio transcription",
        "AI meeting summarization",
        "Action item extraction",
        "Calendar integration",
        "Cross-platform support",
        "Offline functionality"
      ],
      image: "https://images.unsplash.com/photo-1754548930550-be9fa88874f4",
      demoUrl: "#",
      codeUrl: "#",
      status: "Completed",
      year: "2024"
    ]
  ],

  achievements: [
    {
      id: 1,
      title: "Flipr Hackathon 28",
      description: "Solo participation in GenAI Bots hackathon",
      details: "Participated individually in Flipr Hackathon 28 focusing on Generative AI and chatbot development. Built an innovative AI solution that demonstrated advanced natural language processing capabilities and user interaction design.",
      year: "2024",
      type: "Hackathon",
      result: "Participant"
    },
    {
      id: 2,
      title: "Bajaj Hackathon",
      description: "Competitive programming and innovation challenge",
      details: "Participated in Bajaj Hackathon, developing innovative solutions for real-world business challenges. Showcased skills in rapid prototyping, problem-solving, and collaborative development under time constraints.",
      year: "2024",
      type: "Hackathon",
      result: "Participant"
    },
    {
      id: 3,
      title: "Dashboard Development",
      description: "Extensive real-world dashboard development experience",
      details: "Led multiple dashboard development projects for various domains including logistics, analytics, and business intelligence. Specialized in creating intuitive, data-driven interfaces that improve decision-making processes.",
      year: "2023-2024",
      type: "Professional Experience",
      result: "Multiple Projects"
    }
  ],

  experience: [
    {
      id: 1,
      role: "Full-Stack Developer",
      company: "Freelance Projects",
      duration: "2023 - Present",
      description: "Developed multiple web applications and dashboards for various clients",
      responsibilities: [
        "Built responsive web applications using React and Python",
        "Created data visualization dashboards",
        "Implemented AI-powered features and chatbots",
        "Collaborated with clients to deliver custom solutions"
      ]
    }
  ],

  contact: {
    email: "ismaeel.k@example.com",
    phone: "+91 98765 43210",
    location: "India",
    linkedin: "https://linkedin.com/in/ismaeel-k",
    github: "https://github.com/ismaeel-k",
    availability: "Open to internships and full-time opportunities"
  }
};

export default portfolioData;