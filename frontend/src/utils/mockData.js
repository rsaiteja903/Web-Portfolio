// Mock data for Sai Teja's Portfolio
// This file contains all the content that can be easily updated

export const personalInfo = {
  name: "Sai Teja Rajaboyina",
  title: "Software Engineer | Backend & Cloud Developer",
  email: "rsaiteja703@gmail.com",
  linkedin: "https://www.linkedin.com/in/sai-teja-rajaboyina/",
  github: "https://github.com/rsaiteja903", 
  location: "Denton, TX",
  bio: "Passionate software engineer specializing in backend development, cloud technologies, and building scalable systems. Experienced in troubleshooting, API development, and implementing secure authentication solutions."
};

export const education = [
  {
    id: 1,
    degree: "M.S. in Computer Science",
    institution: "University of North Texas",
    location: "Denton, TX",
    gpa: "3.9",
    duration: "2024 - 2025",
    description: "Advanced coursework in algorithms, distributed systems, and software engineering."
  },
  {
    id: 2,
    degree: "B.E. in Electronics and Communication Engineering",
    institution: "CBIT Hyderabad",
    location: "Hyderabad, India",
    gpa: "3.476",
    duration: "2018 - 2022",
    description: "Strong foundation in programming, data structures, and embedded systems."
  }
];

export const experience = [
  {
    id: 1,
    title: "Associate Member Technical Staff",
    company: "Model N",
    location: "Hyderabad, India",
    duration: "Jul 2021 - Jul 2023",
    logo: "/placeholder-logo.png",
    responsibilities: [
      "Troubleshot and resolved complex technical issues in production environments, ensuring 99.9% system uptime",
      "Implemented OAuth 2.0 authentication for API security, reducing unauthorized access incidents by 85%",
      "Collaborated with cross-functional teams using Agile methodologies to deliver features on schedule",
      "Created comprehensive onboarding documentation, reducing new developer ramp-up time by 40%",
      "Conducted code reviews and mentored junior developers on best practices"
    ],
    technologies: ["Java", "REST APIs", "OAuth 2.0", "Agile", "Git", "Jira"]
  },
  {
  id: 2,
  title: "Junior Data Analyst",
  company: "Cognizant",
  location: "Hyderabad, India",
  duration: "Feb 2022 - Jun 2022",
  logo: "/placeholder-logo.png",
  responsibilities: [
    "Applied ETL techniques using Informatica for data integration, masking, and replication, ensuring data quality and consistency",
    "Conducted SQL-based data analysis to improve reporting accuracy and support business decision-making",
    "Collaborated with cross-functional teams in Agile environments to deliver data solutions on time"
  ],
    technologies: ["Informatica", "SQL", "ETL", "Agile"]
  }

];

export const projects = [
{
  id: 1,
  title: "Smart Expense Tracker",
  description: "A full-stack personal finance web app that tracks expenses and provides AI-powered financial insights using OpenAI GPT-4o-mini.",
  longDescription: "Developed a comprehensive expense management platform enabling users to track, categorize, and analyze their spending with AI-driven insights. Integrated OpenAI GPT-4o-mini to deliver personalized financial recommendations and spending analysis. Features include OCR-based receipt scanning via Tesseract, JWT-secured authentication, interactive analytics dashboards (Chart.js), and responsive UI with dark/light mode. Enhanced financial awareness and simplified personal finance management for end users.",
  image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&q=80",
  technologies: [
    "FastAPI",
    "Python",
    "MongoDB",
    "React 19",
    "Redux Toolkit",
    "Chart.js",
    "Tesseract OCR",
    "OpenAI GPT-4o-mini",
    "JWT Authentication"
  ],
  features: [
    "Expense tracking with add/edit/delete and category management",
    "AI-powered financial insights using GPT-4o-mini",
    "Receipt OCR for automatic data extraction",
    "Interactive charts for spending analytics (Chart.js)",
    "JWT-based user authentication and profile management",
    "Dark/Light mode with persistent theme",
    "Responsive design for desktop and mobile",
    "CSV export and AI chat interface"
  ],
  github: "https://github.com/yourusername/smart-expense-tracker",
  demo: "#"
},
  {
    id: 2,
    title: "Personal Finance Management System",
    description: "A full-stack web application for tracking expenses, managing budgets, and analyzing financial trends.",
    longDescription: "Comprehensive personal finance platform with intuitive UI for expense tracking, budget planning, and financial goal setting. Features include transaction categorization, recurring expense tracking, visual analytics with charts, and export functionality. Implements secure authentication and data encryption for user privacy.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
    technologies: ["Spring Boot", "React", "MySQL", "REST APIs", "JWT"],
    features: [
      "Transaction tracking with categorization",
      "Budget planning and alerts",
      "Visual analytics with interactive charts",
      "Secure authentication with JWT"
    ],
    github: "#",
    demo: "#"
  },
  {
    id: 3,
    title: "Eye Movement-Based Electric Wheelchair",
    description: "An innovative assistive technology project using computer vision to control wheelchairs via eye movements.",
    longDescription: "Developed an accessibility solution that enables individuals with mobility impairments to control electric wheelchairs using eye movements. Utilized OpenCV for real-time eye tracking and Arduino for hardware control. The system features calibration modes, safety protocols, and adjustable sensitivity settings. Successfully tested with 95% accuracy in controlled environments.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&q=80",
    technologies: ["Python", "OpenCV", "Arduino", "Computer Vision", "IoT"],
    features: [
      "Real-time eye tracking with OpenCV",
      "Arduino-based hardware control",
      "Calibration and safety protocols",
      "Adjustable sensitivity settings"
    ],
    github: "#",
    demo: "#"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "C", level: 75 },
    { name: "Shell", level: 70 }
  ],
  frameworks: [
    { name: "Spring Boot", level: 85 },
    { name: "React", level: 80 },
    { name: "FastAPI", level: 85 },
    { name: "Node.js", level: 75 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 80 },
    { name: "Jira", level: 85 },
    { name: "CI/CD", level: 75 }
  ],
  cloud: [
    { name: "AWS", level: 80 },
    { name: "EC2", level: 75 },
    { name: "S3", level: 80 },
    { name: "Lambda", level: 70 }
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "Oracle", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "PostgreSQL", level: 75 }
  ],
  competencies: [
    "REST APIs",
    "Authentication & Authorization",
    "System Troubleshooting",
    "Algorithms & Data Structures",
    "Agile Development",
    "Code Review",
    "Technical Documentation",
    "Microservices"
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Senior Developer",
    role: "Team Lead at Model N",
    content: "Sai Teja consistently delivered high-quality code and showed exceptional problem-solving skills. His ability to troubleshoot complex issues was invaluable to our team.",
    avatar: "/placeholder-avatar.png"
  },
  {
    id: 2,
    name: "Project Manager",
    role: "Model N",
    content: "Outstanding collaboration and communication skills. Sai Teja's documentation work significantly improved our onboarding process and team efficiency.",
    avatar: "/placeholder-avatar.png"
  }
];
