// Comprehensive Resume Data for Hemavathy S

const resumeData = {
  personalInfo: {
    name: "HEMAVATHY S",
    typedRoles: ["Computer Science Graduate", "AI & ML Specialist", "Full-Stack Web Developer", "UI/UX Designer"],
    title: "Computer Science Graduate | AI/ML, Web Development & UI/UX",
    location: "Chennai, India",
    phone: "+91 8122788732",
    email: "hemavathysivakumar865@gmail.com",
    github: "https://github.com/hema-ctrl",
    linkedin: "https://linkedin.com/in/hema-ctrl",
    objective: "Motivated Computer Science graduate with hands-on experience in AI/ML, web development, and UI/UX design. Strong in problem-solving, analytical thinking, and continuous learning, with a passion for developing innovative solutions. Seeking an entry-level opportunity to contribute and grow in a dynamic organization.",
    profilePic: "assets/profile.jpg"
  },

  stats: [
    { label: "B.Sc. CS Score", num: "75%" },
    { label: "Flagship Projects", num: "2+" },
    { label: "Internships Completed", num: "2" },
    { label: "Graduation Year", num: "2026" }
  ],

  skillProficiency: {
    labels: ["Python & ML", "JavaScript & Web", "React.js & Frontend", "Node.js & MongoDB", "UI/UX Design (Figma)"],
    scores: [88, 85, 82, 80, 85]
  },
  
  skills: {
    languages: ["JavaScript", "Java", "Python", "HTML", "CSS"],
    frontend: ["React.js", "Tailwind CSS", "Bootstrap"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB"],
    design: ["Figma", "Basic Adobe XD"],
    tools: ["Google Colab", "Git", "GitHub", "Postman", "VS Code", "Antigravity"],
    coreStrengths: ["Team Collaboration", "Adaptability", "Observation", "Problem Solving"]
  },

  experience: [
    {
      role: "UI/UX Designer Intern",
      company: "Vhir IT Solitions",
      period: "May 2025 - June 2025",
      details: "Completed an internship at Vhir IT Solutions, where I designed responsive website layouts using Figma and created user-friendly UI components to improve website design and user experience."
    },
    {
      role: "AI & ML Intern",
      company: "GradTwin",
      period: "June 2026 - Aug 2026",
      details: "Completed hands-on training in Python, Machine Learning, data preprocessing, feature selection, model training, and model evaluation, with practical experience in developing and comparing ML models."
    }
  ],

  projects: [
    {
      title: "EDUTUTOR AI",
      github: "https://github.com/hema-ctrl/EduTutor_AI",
      tags: ["Machine Learning", "NLP", "Python", "AI"],
      description: "Developed an AI-powered educational assistant using Machine Learning and Natural Language Processing (NLP) to provide personalized learning support and instant responses to academic queries, improving student engagement and learning experience."
    },
    {
      title: "SMART SERVICE BOOKING PORTAL",
      github: "https://github.com/hema-ctrl/service-booking",
      tags: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      description: "Developed a full-stack web platform using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB to connect customers with service providers. Implemented user authentication, service listings, booking management, provider registration, and admin approval to streamline service discovery and booking."
    }
  ],

  education: [
    {
      degree: "Bachelor of Science (B. Sc), Computer Science",
      institution: "Asan Memorial College of arts & science",
      period: "2023 - 2026",
      score: "Aggregate: 75%"
    },
    {
      degree: "Higher Secondary Education",
      institution: "C.S.I. Corley Higher Secondary School, Tambaram",
      period: "2022 - 2023",
      score: "Percentage: 68%"
    }
  ],

  certifications: [
    "Internship Certification - Website Design at Vhir IT Solutions.",
    "Naan Mudhalvan Program Certification - EDUTUTOR AI Project.",
    "UG Diploma Certification - Python Program & Data Analysis.",
    "Basic IT Course"
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = resumeData;
}
