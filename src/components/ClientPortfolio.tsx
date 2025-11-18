"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import profileImg from "../assets/profile_gray.png";
import hopeLogo from "../assets/projects/hope-logo.png";
import retrieverLogo from "../assets/projects/retriever-logo.png";
import forutaLogo from "../assets/projects/foruta-logo.png";
import mentLogo from "../assets/projects/ment-logo.png";
import portfolioImage from "../assets/projects/portfolio.png";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Moon,
  Sun,
  Menu,
  X,
  Code,
  Database,
  Wrench,
  Layout,
  User,
  Phone,
  MapPin,
  Building,
  MessageCircle,
  Send,
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  text: string;
}

const Portfolio = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  //AI-Assitant states
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  async function sendMessage() {
    if (!input.trim()) return;

    const userMsg: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const res = await fetch("/api/ai-assistant", {
      method: "POST",
      body: JSON.stringify({ query: input }),
    });

    const data = await res.json();

    const aiMsg: Message = { role: "assistant", text: data.answer };
    setMessages((prev) => [...prev, aiMsg]);

    setInput("");
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    console.log("observer", observer);
    document.querySelectorAll('[id^="section-"]').forEach((el) => {
      console.log("element", el);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive personal portfolio built using Next.js, Tailwind CSS, and TypeScript. The website showcases my skills, experience, and featured projects with a clean UI and smooth animations. It includes an AI-powered chat assistant, dynamic typing effects, and interactive components to enhance user engagement. Deployed on Vercel with optimized performance, SEO-friendly structure, and mobile compatibility.",
      tech: [
        "React/Next.js",
        "Tailwind CSS",
        "Typescript",
        "Gemini",
        "Sendgrid",
        "Vercel",
        "Render",
      ],
      image: portfolioImage,
      github: "https://github.com/eyzee123/my-personal-portfolio",
      demo: "https://my-personal-portfolio-two-beta.vercel.app/",
      categories: ["Web Apps"],
    },
    {
      title: "HOPE App",
      description:
        "Scalable Healthcare application for managing patient records, appointments, and telemedicine consultations.",
      tech: ["Angular", "Ionic", "Typescript", ".NET C#", "Azure"],
      image: hopeLogo,
      imageFit: "object-contain",
      demo: "https://play.google.com/store/apps/details?id=se.addimedical.hope.tempest.training&pcampaignid=web_share",
      categories: ["Mobile Apps"],
    },
    {
      title: "HOPE Practitioner(Web)",
      description:
        "Scalable Healthcare application for managing patient records, appointments, and telemedicine consultations.",
      tech: ["Angular", "Typescript", ".NET C#", "Azure"],
      image: hopeLogo,
      imageFit: "object-contain",
      demo: "https://hope01.addimedical.com/auth/login",
      categories: ["Web Apps"],
    },
    {
      title: "Retriever App",
      description:
        "Cross-platform food delivery app with real-time order tracking, payment integration, and user reviews.",
      tech: [
        "React Native",
        "Firebase",
        "Redux",
        "DragonPay API",
        "Google Maps API",
      ],
      image: retrieverLogo,
      github: "https://github.com/eyzee123/retriever-customer",
      categories: ["Mobile Apps"],
    },
    {
      title: "Foruta App",
      description:
        "Cross-platform food delivery app with real-time order tracking and user reviews.",
      tech: ["Ionic", "Angular", "PHP", "MySQL", "Google Maps API"],
      image: forutaLogo,
      categories: ["Mobile Apps"],
    },
  ];

  const skills = {
    Frontend: ["Angular", "React", "Next.js", "TypeScript", "Redux", "Ionic"],
    Backend: [".NET C#", "Node.js", "Express", "PHP", "REST APIs"],
    Database: ["PostgreSQL", "Firebase", "MySQL"],
    Tools: ["Docker", "Git", "AWS", , "Azure", "CI/CD"],
  };

  const experience = [
    {
      title: "Full-Stack Developer",
      company: "Netzon Global Technologies Inc.",
      duration: "July 2022 - Present",
      description: [
        "Responsible for modifying, debugging, and enhancing an existing project by implementing new features, optimizing performance, and ensuring code quality and maintainability.",
        "Participated in project designs, planning, providing time and effort estimates.",
        "Involved in (CI/CD) processes, optimizing workflows and automating deployments",
        "Collaborate with cross-functional teams to deliver high-quality software solutions",
        "Develop and implement unit tests to ensure code reliability, maintainability, and optimal performance, enhancing overall software quality.",
        "Deploy, configure, and manage web services on IIS, ensuring optimal performance, security, and scalability for seamless application hosting.",
        "Experience with Docker, including containerization, image management, and deployment, to enhance application scalability, portability, and efficiency.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Retriever Tech Corp.",
      duration: "July 2021 - July 2022",
      description: [
        "Lead the small mobile app development team, overseeing planning, architecture, and implementation to ensure efficient development, code quality, and timely delivery of high-performance applications.",
        "Developed mobile applications from scratch, handling architecture, functionality implementation, and performance optimization to deliver high-quality, user-centric solutions.",
        "Integrated third-party APIs, including online payment gateways, mapping services for real-time tracking, and social media authentication, ensuring seamless functionality, secure transactions, and an enhanced user experience with easy login options.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "C.I.R Real Estate Inc.",
      duration: "June 2019 - July 2021",
      description: [
        "Responsible for developing both web and mobile applications, while also taking on the leadership role of guiding the development team.",
        "My responsibilities included designing efficient folder structures, architecting scalable and robust databases, and leading the continuous enhancement of the project by modifying, debugging, and implementing new features.",
      ],
    },
    {
      title: "Mobile App Developer",
      company: "TUO IT Solutions",
      duration: "February 2019 - June 2019",
      description: "Develop native android application using JAVA",
    },
  ];

  const contactData = {
    email: "bejayguibao11@gmail.com",
    phone: "+639063675755",
    address: "Block 135, Lot 145, Deca Home Talomo, Davao City, Philippines",
  };

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        console.error("send-email failed", data);
        alert(
          "Sorry, something went wrong sending your message. Please try again later."
        );
      } else {
        alert("Thanks — your message was sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("send-email error", err);
      alert(
        "Sorry, something went wrong sending your message. Please try again later."
      );
    } finally {
      setIsSending(false);
    }
  };

  const scrollToSection = (id: string) => {
    const candidates = [
      id,
      `section-${id}`,
      id.toLowerCase(),
      `section-${id.toLowerCase()}`,
    ];
    let target: HTMLElement | null = null;
    for (const c of candidates) {
      target = document.getElementById(c);
      if (target) break;
    }

    if (!target) {
      console.warn(
        `scrollToSection: no element found for '${id}' (tried ${candidates.join(
          ", "
        )})`
      );
      return;
    }

    // Account for the fixed nav bar so the section isn't hidden underneath it.
    const navHeight = 72; // adjust if your nav height differs
    const top =
      target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleViewResume = () => {
    const resumeUrl =
      "https://drive.google.com/file/d/1NCUaaC1Riy7xlUnw6xwNdVNVAIvpTbgP/view?usp=sharing";

    if (typeof window !== "undefined") {
      window.open(resumeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      } transition-colors duration-300`}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 ${
          darkMode ? "bg-gray-900/95" : "bg-white/95"
        } backdrop-blur-sm border-b ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>

            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${
                    darkMode ? "hover:text-blue-400" : "hover:text-blue-600"
                  } transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${
                  darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                } transition-colors`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden ${
              darkMode ? "bg-gray-800" : "bg-white"
            } border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          >
            <div className="px-4 py-4 space-y-3">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-blue-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-block mb-6 animate-fadeIn`}>
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
              <Image
                src={profileImg}
                alt="Profile"
                width={256}
                height={256}
                className="w-32 h-32 object-cover"
                priority
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fadeIn">
            Bejay Guibao
          </h1>
          <p className="text-2xl md:text-3xl mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-semibold">
            Full-Stack Developer
          </p>
          {/* <p className={`text-xl mb-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            Building elegant solutions to complex problems with modern web technologies
          </p> */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button
              onClick={handleViewResume}
              className={`px-8 py-3 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } border ${
                darkMode ? "border-gray-700" : "border-gray-300"
              } rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all`}
            >
              Download Resume
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`px-8 py-3 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-100"
              } border ${
                darkMode ? "border-gray-700" : "border-gray-300"
              } rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all`}
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="section-about"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div
            className={`${
              darkMode ? "bg-gray-800" : "bg-gray-50"
            } rounded-2xl p-8 ${
              isVisible["section-about"] ? "animate-slideUp" : "opacity-0"
            }`}
          >
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              } leading-relaxed mb-6`}
            >
              I'm a passionate full-stack developer with over 6 years of
              experience building scalable web and mobile applications I
              specialize in modern JavaScript frameworks and love turning
              complex problems into elegant, user-friendly solutions.
            </p>
            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              } leading-relaxed`}
            >
              My expertise spans from crafting responsive frontends with
              Angular, React and Next.js to architecting robust backend systems
              with Node.js, .NET C#, PostgreSQL or MySQL. I'm constantly
              learning and staying up-to-date with the latest technologies to
              deliver the best solutions for my clients and users.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills & Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-6 hover:scale-105 transition-all duration-300 ${
                  isVisible["section-skills"] ? "animate-slideUp" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {category === "Frontend" && (
                    <Layout className="text-blue-500 mr-2" size={24} />
                  )}
                  {category === "Backend" && (
                    <Code className="text-green-500 mr-2" size={24} />
                  )}
                  {category === "Database" && (
                    <Database className="text-purple-500 mr-2" size={24} />
                  )}
                  {category === "Tools" && (
                    <Wrench className="text-orange-500 mr-2" size={24} />
                  )}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${
                        darkMode ? "bg-gray-700" : "bg-gray-100"
                      } rounded-full text-sm`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="section-projects"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Featured Projects
          </h2>

          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["All", ...new Set(projects.flatMap((p) => p.categories))].map(
              (filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    activeFilter === filter
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : darkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                >
                  {filter}
                </button>
              )
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.title}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-gray-50"
                } rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ${
                  isVisible["section-projects"]
                    ? "animate-slideUp"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {typeof project.image === "string" ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-48 ${project.imageFit || "object-cover"}`}
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-48 ${project.imageFit || "object-cover"}`}
                  />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full text-sm border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                      >
                        <Github size={20} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                      >
                        <ExternalLink size={20} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="section-experience" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <div
                key={exp.company}
                className={`${
                  darkMode ? "bg-gray-800" : "bg-white"
                } rounded-xl p-6 border-l-4 border-blue-500 hover:scale-102 transition-all ${
                  isVisible["section-experience"]
                    ? "animate-slideUp"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <span
                    className={`${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    } text-sm mt-1 md:mt-0`}
                  >
                    {exp.duration}
                  </span>
                </div>
                <p className="text-blue-500 font-semibold mb-3">
                  {exp.company}
                </p>
                <ul
                  className={`list-disc list-inside space-y-1 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {Array.isArray(exp.description) ? (
                    exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))
                  ) : (
                    <li>{exp.description}</li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="section-contact"
        className={`py-20 px-4 ${darkMode ? "bg-gray-800/50" : "bg-white"}`}
      >
        <div className="max-w-full mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-2xl p-8 ${
                isVisible["section-contact"] ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <a
                    href="mailto:bejayguibao11@gmail.com"
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
                  >
                    <Mail size={24} />
                  </a>
                  <div className="flex-1">
                    <p className="block mb-1 font-semibold">Email</p>
                    <p className="text-gray-400 text-sm">{contactData.email}</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <a
                    href="tel:+63XXXXXXXXX"
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
                  >
                    <Phone size={24} />
                  </a>
                  <div className="flex-1">
                    <p className="block mb-1 font-semibold">Phone</p>
                    <p className="text-gray-400 text-sm">{contactData.phone}</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <a
                    href="#"
                    className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
                  >
                    <MapPin size={24} />
                  </a>
                  <div className="flex-1">
                    <p className="block mb-1 font-semibold">Address</p>
                    <p className="text-gray-400 text-sm">
                      {contactData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className={`${
                darkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-2xl p-8 ${
                isVisible["section-contact"] ? "animate-slideUp" : "opacity-0"
              }`}
            >
              <div className="mb-6">
                <label className="block mb-2 font-semibold">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:border-blue-500 focus:outline-none transition-all`}
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:border-blue-500 focus:outline-none transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-6">
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-700 border-gray-600"
                      : "bg-white border-gray-300"
                  } border focus:border-blue-500 focus:outline-none transition-all`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full px-8 py-3 rounded-lg font-semibold transition-all ${
                  isSending
                    ? "opacity-60 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:scale-105"
                }`}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-10">
            <a
              href="mailto:bejayguibao11@gmail.com"
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
            >
              <Mail size={24} />
            </a>
            <a
              href="https://github.com/eyzee123"
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bejay-guibao-0173b921b"
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Ask Section */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Window */}
        {open && (
          <div className="mb-4 w-96 h-[500px] bg-gray-800 rounded-lg shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                <span className="font-semibold ">AI Chat Support</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="hover:bg-gray-800 rounded-full p-1 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-800">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "bg-gray-700 text-gray-100 border border-gray-600"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-gray-900 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask anything about me..."
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                  className="flex-1 border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
                />
                <button
                  onClick={sendMessage}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-all hover:scale-110"
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Footer */}
      <footer
        className={`py-8 px-4 border-t ${
          darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 Bejay Guibao. Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
