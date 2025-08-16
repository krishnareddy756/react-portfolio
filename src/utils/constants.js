// Personal Information
export const PERSONAL_INFO = {
  name: "Sai Krishna Reddy",
  email: "krishnareddy1604k@gmail.com",
  phone: "7569007408",
  location: "Andhra Pradesh, India",
  title: "Android Developer | Full Stack Developer",
  summary: "Passionate developer with experience in mobile and web development, specializing in Android SDK, MERN stack, and modern web technologies. Currently pursuing B.Tech in Computer Science at VIT Andhra Pradesh with hands-on experience in building scalable applications.",
  
  // Social Media Links
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/krishna-reddy-ab8017275/",
    github: "https://github.com/krishnareddy756",
    email: "mailto:krishnareddy1604k@gmail.com",
    phone: "tel:+917569007408",
    portfolio: "#", // Will be updated with actual portfolio URL
    leetcode: "https://leetcode.com/u/krishnareddy_22bce20126/", // Placeholder - update with actual profile
    gfg: "https://auth.geeksforgeeks.org/user/krishnareddy756" // Placeholder - update with actual profile
  },
  
  // Resume file path
  resumePath: "https://drive.google.com/file/d/1ogKOsc3DpxyTG88X00NXhzsTcRKUGlsB/view?usp=sharing"
};

// Education Information
export const EDUCATION = [
  {
    id: 1,
    institution: "Vellore Institute of Technology, Andhra Pradesh",
    degree: "Bachelor of Technology in Computer Science",
    duration: "2022 - 2026",
    cgpa: "8.64",
    location: "Andhra Pradesh, India",
    description: "Pursuing B.Tech in Computer Science with focus on software development, data structures, algorithms, and modern web technologies."
  }
];

// Experience Information
export const EXPERIENCE = [
  {
    id: 1,
    company: "Imarticus",
    position: "Android Developer Intern",
    duration: "June 2024 - July 2024",
    location: "Remote",
    type: "Internship",
    description: [
      "Designed and developed a food delivery app using Android SDK and Kotlin, ensuring high-quality software standards",
      "Collaborated with cross-functional teams using Git for version control, streamlining development and deployment processes",
      "Followed modern UI/UX design principles to ensure an intuitive and responsive user interface"
    ],
    technologies: ["Android SDK", "Kotlin", "Git", "UI/UX Design", "Mobile Development"],
    achievements: [
      "Successfully delivered a complete food delivery application",
      "Implemented modern Android development best practices",
      "Gained hands-on experience in mobile app development lifecycle"
    ]
  }
];

// Projects Information
export const PROJECTS = [
  {
    id: 1,
    title: "WanderLust Website",
    subtitle: "MERN Full Stack Property Platform",
    description: "Built a comprehensive MERN stack web application with property listings, bookings, and user authentication, following the MVC architecture to separate concerns and maintain scalability.",
    longDescription: "A full-featured property rental platform similar to Airbnb, built using the MERN stack. The application includes user authentication, property listings with detailed information, booking system, and an admin dashboard for property management.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful API", "EJS", "CSS", "Render"],
    features: [
      "Built MERN stack web app with property listings and bookings",
      "Implemented complete CRUD (Create, Read, Update, Delete) functionalities for listings and bookings using RESTful API endpoints",
      "Designed responsive frontend using EJS templating and CSS, connected with an Express backend, used MongoDB Atlas for data storage, and deployed the app on Render"
    ],
    githubUrl: "https://github.com/krishnareddy756/Airbnb_Clone-WonderLust-", // Update with actual repo
    liveUrl: "https://airbnb-clone-wonderlust.onrender.com/listings", // Update with actual demo
    image: "bg-gradient-to-br from-purple-500 to-pink-600",
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 2,
    title: "SigmaGPT Chatbot",
    subtitle: "AI-Powered Conversational Interface",
    description: "Built a conversational AI chatbot using the MERN stack, leveraging the DeepSeek API for intelligent response generation with thread-based chat storage and global state management.",
    longDescription: "An advanced AI chatbot application that provides intelligent conversational experiences. Built with modern web technologies and integrated with DeepSeek API for natural language processing.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "DeepSeek API", "Render", "Vercel", "WebSocket", "React Context API"],
    features: [
      "Built a conversational AI chatbot using the MERN stack, leveraging the DeepSeek API for intelligent response generation",
      "Implemented thread-based chat storage with MongoDB Atlas and managed global state via React Context API",
      "Deployed frontend on Vercel and backend on Render with proper CORS configuration and environment variable setup"
    ],
    githubUrl: "https://github.com/krishnareddy756/sigmagpt", // Update with actual repo
    liveUrl: "https://sigma-gpt-43mi.vercel.app/", // Update with actual demo
    image: "bg-gradient-to-br from-blue-500 to-teal-600",
    category: "Full Stack",
    status: "Completed"
  },
  {
    id: 3,
    title: "StockNest",
    subtitle: "Advanced Stock Market Analysis Platform",
    description: "A comprehensive stock market analysis platform built with modern web technologies, featuring real-time data visualization, portfolio tracking, and advanced analytics for informed investment decisions.",
    longDescription: "StockNest is a sophisticated stock market analysis platform that provides investors with comprehensive tools for market analysis, portfolio management, and investment decision-making. The platform features real-time stock data, interactive charts, technical indicators, and portfolio tracking capabilities.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "WebSocket", "REST API", "Material-UI"],
    features: [
      "Real-time stock price tracking and visualization with interactive charts",
      "Portfolio management system with performance analytics and risk assessment",
      "Advanced technical indicators and market analysis tools",
      "User authentication and personalized dashboard with watchlists",
      "Responsive design optimized for desktop and mobile trading"
    ],
    githubUrl: "https://github.com/krishnareddy756/StockNest",
    liveUrl: "#", // Update with actual demo URL when available
    image: "bg-gradient-to-br from-emerald-500 to-blue-600",
    category: "Full Stack",
    status: "Completed",
    featured: true,
    metrics: {
      commits: 127,
      files: 45,
      contributors: 1,
      languages: ["JavaScript", "CSS", "HTML"]
    }
  },
  {
    id: 4,
    title: "Emotion Classification",
    subtitle: "Deep Learning Text Analysis",
    description: "Built a deep learning model using Bidirectional LSTM (Bi-LSTM) and RNN to classify human emotions from text data with high accuracy, precision, recall, F1-score, and confusion matrix evaluation.",
    longDescription: "A sophisticated emotion classification system that analyzes text data to identify human emotions using advanced deep learning techniques and natural language processing.",
    technologies: ["Python", "TensorFlow", "Bidirectional LSTM", "RNN", "NLTK", "Keras Tokenizer", "Deep Learning"],
    features: [
      "Built a deep learning model using Bidirectional LSTM (Bi-LSTM) and RNN to classify human emotions from text data with high accuracy",
      "Performed extensive text preprocessing using NLTK (tokenization, stopword removal, stemming) and embedded text using Keras Tokenizer",
      "Implemented model evaluation using accuracy, precision, recall, F1-score, and confusion matrix to ensure robust classification performance"
    ],
    githubUrl: "https://github.com/krishnareddy756/emotion-classification",
    liveUrl: "#", // No live demo for ML model
    image: "bg-gradient-to-br from-green-500 to-blue-600",
    category: "Machine Learning",
    status: "Completed"
  }
];

// Skills Information
export const SKILLS = {
  languages: [
    { name: "Java", level: 85, category: "Programming" },
    { name: "Python", level: 80, category: "Programming" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "Kotlin", level: 75, category: "Programming" },
    { name: "MySQL", level: 70, category: "Database" }
  ],
  frameworks: [
    { name: "React.js", level: 90, category: "Frontend" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "Android SDK", level: 75, category: "Mobile" },
    { name: "Tailwind CSS", level: 85, category: "Frontend" },
    { name: "Bootstrap", level: 80, category: "Frontend" }
  ],
  tools: [
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "Git/GitHub", level: 85, category: "Version Control" },
    { name: "VS Code", level: 90, category: "IDE" },
    { name: "Android Studio", level: 75, category: "IDE" },
    { name: "Figma", level: 70, category: "Design" },
    { name: "Docker", level: 65, category: "DevOps" },
    { name: "CI/CD Tools", level: 60, category: "DevOps" },
    { name: "Cloud Technologies", level: 70, category: "DevOps" }
  ],
  cognitive: [
    "Written and Verbal Communication",
    "Strong Interpersonal Skills",
    "Ability to Work in Large Teams",
    "Problem Solving",
    "Critical Thinking",
    "Project Management"
  ]
};

// Certifications Information
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Certified App Developer",
    issuer: "Imarticus Learning",
    date: "2024",
    description: "Developed Android apps using Kotlin and Java, gaining hands-on experience in mobile app development lifecycle.",
    skills: ["Android Development", "Kotlin", "Java", "Mobile UI/UX"],
    certificateUrl: "https://drive.google.com/file/d/1aAlZzOfOTUOxv7WGQKDARW4Qlaa5yqp9/view?usp=sharing",
    verified: true,
    logo: "smartphone", // Using Lucide icon as fallback
    color: "emerald",
    category: "Development"
  },
  {
    id: 2,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024",
    description: "AWS Certified Cloud Practitioner validates foundational, high-level understanding of AWS Cloud, services, and terminology.",
    skills: ["AWS Cloud", "Cloud Computing", "AWS Services", "Cloud Security"],
    certificateUrl: "#", // Add your actual certificate URL
    verified: true,
    logo: "cloud",
    color: "orange",
    category: "Cloud"
  },
  {
    id: 3,
    title: "MongoDB DBA Associate",
    issuer: "MongoDB University",
    date: "2024",
    description: "MongoDB Database Administrator Associate certification covering database administration, performance optimization, and best practices.",
    skills: ["MongoDB", "Database Administration", "Performance Tuning", "Data Modeling"],
    certificateUrl: "#", // Add your actual certificate URL
    verified: true,
    logo: "database",
    color: "green",
    category: "Database"
  },
  {
    id: 4,
    title: "MERN Stack Developer",
    issuer: "Apna College",
    date: "2024",
    description: "Completed comprehensive MERN Stack course covering MongoDB, Express, React, and Node.js with full-stack project work.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full Stack Development"],
    certificateUrl: "https://drive.google.com/file/d/1dv1Yc4bUVXKpoPQoivn0xmPnsgXlCblC/view?usp=sharing",
    verified: true,
    logo: "layers", // Using Lucide icon as fallback
    color: "blue",
    category: "Development"
  }
];

// Achievements Information
export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "AP EAMCET Rank 3343",
    description: "Achieved Rank 3343 in AP EAMCET out of more than 2.5 lakh applicants and attained 92.8 percentile in JEE Mains 2022",
    category: "Academic",
    year: "2022",
    metric: "Rank 3343",
    icon: "trophy",
    highlight: true
  },
  {
    id: 2,
    title: "LeetCode Problem Solver",
    description: "Tackled over 300+ data structure and algorithm challenges on LeetCode, enhancing coding proficiency through rigorous practice",
    category: "Programming",
    year: "2023-2024",
    metric: "300+ Problems",
    icon: "code",
    highlight: true
  },
  {
    id: 3,
    title: "JEE Mains 2022",
    description: "Attained 92.8 percentile in JEE Mains 2022, demonstrating strong foundation in mathematics, physics, and chemistry",
    category: "Academic",
    year: "2022",
    metric: "92.8 Percentile",
    icon: "award",
    highlight: false
  },
  {
    id: 4,
    title: "College Projects",
    description: "Completed multiple projects, including an NLP project, a Deep Learning project, and two Engineering Clinic projects in college",
    category: "Projects",
    year: "2022-2024",
    metric: "4+ Projects",
    icon: "project",
    highlight: false
  }
];

// Navigation Menu Items
export const NAVIGATION = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'github', label: 'GitHub', href: '#github' },
  { id: 'leetcode', label: 'LeetCode', href: '#leetcode' },
  { id: 'certifications', label: 'Certifications', href: '#certifications' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' }
];

// Animation Configuration
export const ANIMATION_CONFIG = {
  matrix: {
    enabled: true,
    characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?",
    fontSize: 14,
    columns: 100,
    speed: 50,
    fadeSpeed: 0.05
  },
  typing: {
    speed: 120,
    deleteSpeed: 50,
    pauseTime: 2000
  },
  scroll: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  }
};

// GitHub Data
export const GITHUB_DATA = {
  profile: {
    username: 'krishnareddy756',
    name: 'Sai Krishna Reddy',
    bio: 'Android Developer | Full Stack Developer',
    location: 'Andhra Pradesh, India',
    publicRepos: 15,
    totalContributions: 102,
    totalStars: 3,
    languagesUsed: 5
  },
  repositories: [
    {
      id: 1,
      name: 'StockNest',
      description: 'Advanced stock market analysis platform with real-time data visualization',
      url: 'https://github.com/krishnareddy756/StockNest',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 15,
      forks: 3,
      featured: true
    },
    {
      id: 2,
      name: 'Airbnb_Clone-WonderLust',
      description: 'Full-stack property rental platform built with MERN stack',
      url: 'https://github.com/krishnareddy756/Airbnb_Clone-WonderLust-',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 8,
      forks: 2,
      featured: false
    },
    {
      id: 3,
      name: 'sigmagpt',
      description: 'AI-powered conversational chatbot using MERN stack and DeepSeek API',
      url: 'https://github.com/krishnareddy756/sigmagpt',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 12,
      forks: 1,
      featured: false
    },
    {
      id: 4,
      name: 'emotion-classification',
      description: 'Deep learning model for emotion classification using Bi-LSTM and RNN',
      url: 'https://github.com/krishnareddy756/emotion-classification',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 6,
      forks: 1,
      featured: false
    }
  ]
};

// LeetCode Data
export const LEETCODE_DATA = {
  profile: {
    username: 'krishnareddy_22bce20126',
    ranking: 519882,
    totalSolved: 400,
    acceptanceRate: 65.0,
    currentStreak: 50,
    maxStreak: 50,
    contestRating: 1431
  }
};

// Theme Configuration
export const THEME_CONFIG = {
  defaultTheme: 'dark',
  storageKey: 'portfolio-theme',
  transitionDuration: 300
};