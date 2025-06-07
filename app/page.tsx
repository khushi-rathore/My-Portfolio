"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin, Download, Menu, X, ArrowRight } from "lucide-react"
import { SpotlightBackground } from "@/components/spotlight-background"
import { SkillsMarquee } from "@/components/skills-marquee"
import { ProjectPopup } from "@/components/project-popup"
import { ProjectsMarquee } from "@/components/projects-marquee"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "skills", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const allSkills = [
    "Python",
    "C++",
    "Bash",
    "AWS",
    "Azure",
    "Google Cloud",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "GitLab CI",
    "GitHub Actions",
    "Terraform",
    "Ansible",
    "CloudFormation",
    "Prometheus",
    "Grafana",
    "ELK Stack",
    "REST APIs",
    "Linux",
    "Git",
    "GitHub",
    "Jira",
    "Agile",
  ]

  const skills = {
    languages: ["Python", "C++", "Bash"],
    cloud: ["AWS", "Azure", "Google Cloud"],
    devops: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"],
    iac: ["Terraform", "Ansible", "CloudFormation"],
    monitoring: ["Prometheus", "Grafana", "ELK Stack"],
    other: ["REST APIs", "Linux", "Git", "GitHub", "Jira", "Agile"],
  }

  const projects = [
    {
      title: "CI/CD Pipeline for Containerized Web Application",
      description:
        "Designed and deployed an end-to-end CI/CD pipeline using Jenkins, GitHub, and Docker, reducing deployment time by 70%. Orchestrated Kubernetes deployments using kubectl and YAML manifests.",
      fullDescription:
        "Comprehensive DevOps solution that automates the entire software delivery lifecycle. Built a robust CI/CD pipeline that integrates source control, automated testing, containerization, and deployment orchestration. The system handles multiple environments and implements blue-green deployment strategies for zero-downtime releases.",
      tech: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "GitHub", "YAML", "Helm"],
      github: "https://github.com/khushi-rathore",
      impact: "70% faster deployment",
      features: [
        "Automated testing and code quality checks",
        "Multi-stage Docker builds with optimization",
        "Kubernetes deployment with rolling updates",
        "Environment-specific configuration management",
        "Monitoring and alerting integration",
        "Rollback capabilities for failed deployments",
      ],
      challenges: [
        "Implemented secure secrets management across environments",
        "Optimized build times through intelligent caching strategies",
        "Designed fault-tolerant pipeline with proper error handling",
        "Integrated security scanning in the CI/CD workflow",
      ],
    },
    {
      title: "DevConnect – Developer Collaboration Platform",
      description:
        "Built a full-stack web platform for real-time code collaboration and project sharing. Implemented secure JWT authentication and optimized backend performance.",
      fullDescription:
        "A comprehensive platform designed to enhance developer collaboration through real-time code sharing, project management, and team communication. Features include live code editing, version control integration, and project analytics dashboard.",
      tech: ["Node.js", "MongoDB", "JWT", "Docker", "AWS EC2", "Socket.io", "React", "Express"],
      github: "https://github.com/khushi-rathore/DevConnect-Developer-Collaboration-Platform",
      impact: "40% faster response time",
      features: [
        "Real-time collaborative code editing",
        "Project management with task tracking",
        "Secure user authentication and authorization",
        "File sharing and version control integration",
        "Team communication with chat functionality",
        "Analytics dashboard for project insights",
      ],
      challenges: [
        "Implemented real-time synchronization with conflict resolution",
        "Optimized database queries for improved performance",
        "Designed scalable architecture to handle concurrent users",
        "Integrated multiple third-party APIs securely",
      ],
    },
    {
      title: "Crop Price Prediction System",
      description:
        "Developed an ML-based system with 85% accuracy for forecasting prices of 20+ crops for Ministry of Consumer Affairs. Officially copyrighted.",
      fullDescription:
        "Advanced machine learning system that analyzes historical data, weather patterns, and market trends to predict crop prices. The system serves government agencies and farmers with accurate price forecasts to make informed decisions about crop planning and market strategies.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Pandas", "Scikit-learn", "TensorFlow", "Flask"],
      github: "https://github.com/khushi-rathore/Crop-Price-Prediction",
      impact: "85% prediction accuracy",
      features: [
        "Multi-crop price prediction with 85% accuracy",
        "Historical data analysis and trend identification",
        "Weather pattern integration for enhanced predictions",
        "User-friendly dashboard for farmers and officials",
        "Automated data collection and processing",
        "Export functionality for reports and analytics",
      ],
      challenges: [
        "Handled large datasets with efficient data preprocessing",
        "Implemented ensemble methods for improved accuracy",
        "Designed robust feature engineering pipeline",
        "Created scalable architecture for real-time predictions",
      ],
    },
    {
      title: "PCOS Detection App",
      description:
        "Developed a cross-platform PCOS detection app using React Native, enabling mobile-based medical image classification. Integrated deep learning model (MobileNet) into a Flask backend API for accurate PCOS prediction based on ultrasound images.",
      fullDescription:
        "Revolutionary mobile healthcare application that leverages artificial intelligence to detect Polycystic Ovary Syndrome (PCOS) from ultrasound images. The app combines React Native for cross-platform mobile development with a sophisticated Flask backend powered by MobileNet deep learning architecture.",
      tech: ["React Native", "Flask", "MobileNet", "TensorFlow", "Python", "Deep Learning", "Medical AI"],
      github: "https://github.com/khushi-rathore/PCOS-Detection-App",
      impact: "100% accuracy",
      features: [
        "Cross-platform mobile application for iOS and Android",
        "Real-time ultrasound image analysis",
        "MobileNet-based deep learning model integration",
        "Secure medical data handling and privacy protection",
        "User-friendly interface for healthcare professionals",
        "Instant PCOS detection results with confidence scores",
      ],
      challenges: [
        "Optimized deep learning model for mobile deployment",
        "Implemented secure medical image processing pipeline",
        "Designed HIPAA-compliant data handling procedures",
        "Created efficient image preprocessing for accurate predictions",
      ],
    },
    {
      title: "Sahaj Sarkar 2.0 - Decentralizing Bureaucracy",
      description:
        "A revolutionary platform that transforms government processes through blockchain and AI, making bureaucracy efficient and accessible. Features instant gov work tracker, AI legal assistant, and blockchain digital identity.",
      fullDescription:
        "Groundbreaking government technology platform that leverages blockchain and artificial intelligence to revolutionize bureaucratic processes. The system provides real-time application tracking, AI-powered legal assistance, decentralized identity management, and peer-to-peer verification networks to create a transparent, efficient, and citizen-centric government experience.",
      tech: ["Blockchain", "AI/ML", "React", "Node.js", "Smart Contracts", "Web3", "Government APIs"],
      github: "https://github.com/khushi-rathore/Hackbyte_3.O",
      impact: "Bypasses traditional delays",
      features: [
        "Instant Gov Work Tracker with real-time status monitoring",
        "AI Legal Assistant for simplified government communication",
        "Blockchain Digital Identity with self-sovereign identification",
        "P2P Verification Network for trusted document validation",
        "Smart Form Automation with intelligent pre-filling",
        "Performance leaderboards for government accountability",
      ],
      challenges: [
        "Integrated multiple government APIs and databases",
        "Implemented secure blockchain-based identity management",
        "Designed AI models for legal document processing",
        "Created scalable architecture for government-scale usage",
      ],
    },
  ]

  const experience = [
    {
      company: "ADVI Group of Companies",
      role: "Software Engineering Intern",
      period: "Dec 2024 – Apr 2025",
      achievements: [
        "Developed automated scripts reducing cloud data usage by 80%",
        "Refactored backend services improving performance by 35%",
        "Implemented RESTful APIs with comprehensive testing",
        "Collaborated in Agile sprints with cross-functional teams",
      ],
    },
    {
      company: "AICTE Cisco Virtual Internship",
      role: "Cloud Security Intern",
      period: "May 2023 – Jul 2023",
      achievements: [
        "Designed secure enterprise cloud architecture for 5 departments",
        "Managed 15+ virtual machines using VMware",
        "Analyzed cloud pricing models identifying 20-30% cost variations",
      ],
    },
  ]

  const certifications = [
    {
      title: "AWS Cloud Practitioner",
      image: "/images/aws.jpg",
      link: "https://drive.google.com/file/d/1yi_EVLz2cuSnS48Nu7LbzZcaAxKNWNUV/view",
    },
    {
      title: "React by Meta",
      image: "/images/rect.jpg",
      link: "https://drive.google.com/file/d/1jfKEW61Pemth5VTt9LWaj3W3w8juAAoF/view?usp=drivesdk",
    },
    {
      title: "C++ By Cisco",
      image: "/images/cpp.jpg",
      link: "https://drive.google.com/file/d/1pbgYX4zpZHQ760FUBatqQ9w448GDIIZh/view?usp=drivesdk",
    },
    {
      title: "Python",
      image: "/images/python.jpg",
      link: "https://drive.google.com/file/d/1_JJrjb7C51uP7JX4Cr52HAIC7MTPyXlf/view?usp=drivesdk",
    },
    {
      title: "Java Full Stack By Wipro",
      image: "/images/java full stack.jpg",
      link: "https://drive.google.com/file/d/1VrLpNp12XYPEU6PVGW6PkLPNYuLtTZGW/view",
    },
  ]

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Certificates", id: "certifications" }, // <-- Correct mapping!
    { label: "Contact", id: "contact" },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Electromagnetic Wave Background */}
      <SpotlightBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-700/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Empty div for spacing */}
            <div></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium font-code tracking-wide transition-all duration-300 relative uppercase ${
                    activeSection === item.id
                      ? "text-white text-glow"
                      : "text-gray-400 hover:text-white hover:text-glow"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-white shadow-sm shadow-white/50"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-700/30">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-sm font-medium font-code text-gray-400 hover:text-white uppercase tracking-wide"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl">
            <div className="mb-8">
              <p className="text-gray-400 text-lg mb-4 font-code tracking-widest uppercase">Hello, I'm</p>
              <h1 className="text-hero font-display text-white mb-6 leading-tight text-tech-glow">
                KHUSHI
                <br />
                <span className="text-gray-400 text-shimmer">RATHORE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light tracking-wide">
                Software Engineer passionate about <span className="font-tech text-white">DevOps</span>,{" "}
                <span className="font-tech text-white">Cloud Infrastructure</span>, and building{" "}
                <span className="font-tech text-white">scalable solutions</span> that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="group relative px-8 py-3 font-tech text-black bg-white overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 tracking-wider uppercase"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transition-all duration-300 group-hover:from-gray-200 group-hover:to-gray-100"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="relative flex items-center justify-center">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Secondary Button */}
              <a
                href="https://drive.google.com/uc?export=download&id=1J_JjwJiILERs9x0H5J0Ruw1avcnOImBQ"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3 font-tech text-white border border-gray-600 overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 tracking-wider uppercase"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-gray-800/50 transition-all duration-300 group-hover:from-gray-800/70 group-hover:to-gray-700/70"></div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </div>
                <span className="relative flex items-center justify-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </span>
              </a>
            </div>

            <div className="flex space-x-6">
              <a
                href="https://github.com/khushi-rathore"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} className="transition-transform group-hover:rotate-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-rathore-5503b1282/"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} className="transition-transform group-hover:rotate-12" />
              </a>
              <a
                href="mailto:khushirathore1520@gmail.com"
                className="group p-3 border border-gray-700 rounded-lg text-gray-400 hover:text-white hover:border-gray-500 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} className="transition-transform group-hover:rotate-12" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-section-title font-display text-white mb-8 text-tech-glow tracking-wide">ABOUT ME</h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p className="font-light tracking-wide">
                  Motivated software engineer with a strong foundation in{" "}
                  <span className="font-code text-white">coding</span>,{" "}
                  <span className="font-code text-white">testing</span>, and{" "}
                  <span className="font-code text-white">software development</span>. I'm passionate about contributing
                  to Agile teams and developing scalable, innovative solutions.
                </p>
                <p className="font-light tracking-wide">
                  Currently seeking <span className="font-tech text-white">SDE opportunities</span> to apply and expand
                  my skills in impactful, production-level environments. I specialize in{" "}
                  <span className="font-code text-white">DevOps practices</span>,{" "}
                  <span className="font-code text-white">cloud infrastructure</span>, and{" "}
                  <span className="font-code text-white">full-stack development</span>.
                </p>
                <div className="flex items-center space-x-3 text-gray-400 font-code">
                  <MapPin size={20} />
                  <span className="tracking-wide">JABALPUR, MADHYA PRADESH, INDIA</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="font-tech text-lg mb-4 text-white tracking-wider">🏆 KEY ACHIEVEMENTS</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start font-light tracking-wide">
                    <span className="text-white mr-2 font-code">•</span>
                    Smart India Hackathon Finalist <span className="font-code text-white">(Top 30 out of 30,000)</span>
                  </li>
                  <li className="flex items-start font-light tracking-wide">
                    <span className="text-white mr-2 font-code">•</span>
                    Top 10 in Hackbyte Hackathon at <span className="font-code text-white">IITDM</span>
                  </li>
                  <li className="flex items-start font-light tracking-wide">
                    <span className="text-white mr-2 font-code">•</span>
                    Lakshya Award for <span className="font-code text-white">Outstanding Achievement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-title font-display text-white mb-16 text-tech-glow tracking-wide">EXPERIENCE</h2>
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <div key={index} className="experience-card relative">
                <div className="experience-card-content relative z-10 bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm rounded-lg p-8 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-card-title font-tech text-white mb-2 tracking-wide">{exp.role}</h3>
                      <p className="text-lg text-gray-300 font-code tracking-wider">{exp.company}</p>
                    </div>
                    <Badge
                      variant="secondary"
                      className="mt-2 md:mt-0 bg-gray-800/50 text-gray-300 border-gray-600 font-code tracking-wider"
                    >
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-gray-300 flex items-start text-lg font-light tracking-wide">
                        <span className="text-white mr-3 font-code">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-title font-display text-white mb-16 text-tech-glow tracking-wide text-center">
            FEATURED PROJECTS
          </h2>
          <div className="mb-8">
            <p className="text-center text-gray-400 font-code tracking-wider uppercase mb-8">
              Hover on any card to pause • Click to view details
            </p>
            <ProjectsMarquee projects={projects} onProjectClick={setSelectedProject} speed="fast" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-title font-display text-white mb-16 text-tech-glow tracking-wide">
            SKILLS & TECHNOLOGIES
          </h2>

          {/* Skills Marquee */}
          <div className="mb-16">
            <h3 className="text-lg font-tech text-white mb-6 tracking-wider text-center">MY TECH STACK</h3>
            <SkillsMarquee skills={allSkills} speed="normal" />
            <div className="mt-8">
              <SkillsMarquee skills={allSkills.reverse()} direction="right" speed="slow" />
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div
                key={category}
                className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-6 backdrop-blur-sm hover:border-gray-600/70 transition-all duration-300"
              >
                <h3 className="text-lg font-tech text-white mb-4 capitalize tracking-wider">
                  {category === "languages" && "PROGRAMMING LANGUAGES"}
                  {category === "cloud" && "CLOUD PLATFORMS"}
                  {category === "devops" && "DEVOPS & TOOLS"}
                  {category === "iac" && "IAC & AUTOMATION"}
                  {category === "monitoring" && "MONITORING & LOGGING"}
                  {category === "other" && "OTHER TECHNOLOGIES"}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, i) => (
                    <Badge
                      key={i}
                      className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 border-gray-600 transition-all duration-200 hover:scale-105 font-code tracking-wider"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Certifications Section */}
      <section id="certifications" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-section-title font-display text-white mb-16 text-tech-glow tracking-wide">
            CERTIFICATIONS
          </h2>
          <div className="overflow-x-auto whitespace-nowrap py-4">
            <div className="flex gap-8 animate-marquee">
              {certifications.map((cert, idx) => (
                <a
                  key={idx}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gray-900/30 border border-gray-700/50 rounded-lg p-4 min-w-[220px] max-w-xs hover:border-gray-600/70 transition-all duration-300 align-top"
                  style={{ verticalAlign: "top" }}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-[120px] h-[120px] object-cover mx-auto mb-4 rounded"
                  />
                  <div className="text-center text-white font-tech break-words whitespace-normal text-sm font-semibold leading-tight">
                    {cert.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-section-title font-display text-white mb-6 text-tech-glow tracking-wide">
              LET'S WORK TOGETHER
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              I'm currently seeking <span className="font-tech text-white">SDE opportunities</span> and would love to
              discuss how I can contribute to your team.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-8 text-center hover:border-gray-600/70 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              <Mail className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-tech text-white mb-2 tracking-wider">EMAIL</h3>
              <a
                href="mailto:khushirathore1520@gmail.com"
                className="text-gray-300 hover:text-white transition-colors font-code tracking-wide"
              >
                khushirathore1520@gmail.com
              </a>
            </div>
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-8 text-center hover:border-gray-600/70 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              <Phone className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-tech text-white mb-2 tracking-wider">PHONE</h3>
              <a
                href="tel:+919343441816"
                className="text-gray-300 hover:text-white transition-colors font-code tracking-wide"
              >
                +91 9343441816
              </a>
            </div>
            <div className="bg-gray-900/30 border border-gray-700/50 rounded-lg p-8 text-center hover:border-gray-600/70 transition-all duration-300 backdrop-blur-sm hover:scale-105">
              <MapPin className="h-12 w-12 text-white mx-auto mb-4" />
              <h3 className="text-lg font-tech text-white mb-2 tracking-wider">LOCATION</h3>
              <p className="text-gray-300 font-code tracking-wide">JABALPUR, MADHYA PRADESH, INDIA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 py-8 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 font-code tracking-wider">&copy; 2025 KHUSHI RATHORE. ALL RIGHTS RESERVED.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://github.com/khushi-rathore"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/khushi-rathore-5503b1282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:khushirathore1520@gmail.com"
                className="text-gray-400 hover:text-white transition-colors hover:scale-110 duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Popup */}
      {selectedProject !== null && (
        <ProjectPopup
          project={projects[selectedProject]}
          isOpen={selectedProject !== null}
          onClose={() => setSelectedProject(null)}
        />
      )}

      
    </div>
  )
}
