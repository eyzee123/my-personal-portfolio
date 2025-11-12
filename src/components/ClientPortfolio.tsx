"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import profileImg from '../assets/profile_gray.png';
import hopeLogo from '../assets/projects/hope-logo.png';
import { Mail, Github, Linkedin, ExternalLink, Moon, Sun, Menu, X, Code, Database, Wrench, Layout } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    console.log("observer",observer);
    document.querySelectorAll('[id^="section-"]').forEach((el) => {
        console.log("element",el);
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'HOPE App',
      description: 'Scalable Healthcare application for managing patient records, appointments, and telemedicine consultations.',
      tech: ['Angular', 'Ionic', 'Typescript', '.NET C#', 'Azure'],
      image: hopeLogo,
      demo: 'https://demo.com',
      categories: ['Web Apps', 'Mobile Apps']
    },
    {
      title: 'Task Management API',
      description: 'RESTful API with authentication, role-based access control, and real-time notifications.',
      tech: ['Express', 'MongoDB', 'Redis', 'Socket.io'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      categories: ['APIs']
    },
    {
      title: 'Mobile Fitness App',
      description: 'Cross-platform fitness tracking app with workout plans, progress charts, and social features.',
      tech: ['React Native', 'Firebase', 'Redux', 'Expo'],
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      categories: ['Mobile Apps']
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Scalable chat platform with rooms, direct messaging, file sharing, and emoji reactions.',
      tech: ['React', 'WebSocket', 'Node.js', 'Docker'],
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=500&fit=crop',
      github: 'https://github.com',
      demo: 'https://demo.com',
      categories: ['Web Apps', 'APIs']
    }
  ];

  const skills = {
    Frontend: ['React', 'Angular', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Vue.js', 'Ionic'],
    Backend: ['.NET C#', 'Node.js', 'Express', 'REST APIs'],
    Database: ['PostgreSQL', 'Firebase', 'MySQL'],
    Tools: ['Docker', 'Git', 'AWS',, 'Azure', 'CI/CD']
  };

  const experience = [
    {
      title: 'Full-Stack Developer',
      company: 'Netzon Global Technologies Inc.',
      duration: 'July 2022 - Present',
      description: [
        'Participated in project designs, planning, providing time and effort estimates.',
        'Involved in (CI/CD) processes, optimizing workflows and automating deployments',
        'Collaborate with cross-functional teams to deliver high-quality software solutions',
        'Responsible for modifying, debugging, and enhancing an existing application by implementing new features, optimizing performance, and ensuring code quality and maintainability.',
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Retriever Tech Corp.',
      duration: 'July 2021 - July 2022',
      description: [
        'Led the development team to build mobile applications from scratch',
        'Integrated third-party APIs and external services',
        'Oversee planning, architecture, and implementation to ensure code quality and timely delivery'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'C.I.R Real Estate Inc.',
      duration: 'June 2019 - July 2021',
      description: [
        'Developed both web and mobile applications',
        'Provided technical leadership and guidance to the development team'
      ]
    },
    {
      title: 'Mobile App Developer',
      company: 'TUO IT Solutions',
      duration: 'February 2019 - June 2019',
      description: 'Develop native android application using JAVA'
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(activeFilter));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Thank you for your message! This is a demo, so no email will be sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const candidates = [id, `section-${id}`, id.toLowerCase(), `section-${id.toLowerCase()}`];
    let target: HTMLElement | null = null;
    for (const c of candidates) {
      target = document.getElementById(c);
      if (target) break;
    }

    if (!target) {
      console.warn(`scrollToSection: no element found for '${id}' (tried ${candidates.join(', ')})`);
      return;
    }

    // Account for the fixed nav bar so the section isn't hidden underneath it.
    const navHeight = 72; // adjust if your nav height differs
    const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

   const handleViewResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1NCUaaC1Riy7xlUnw6xwNdVNVAIvpTbgP/view?usp=sharing';

    if (typeof window !== 'undefined') {
      window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-300`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              DevPortfolio
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`${darkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'} transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
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
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="px-4 py-4 space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
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
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              View Projects
            </button>
            <button 
                onClick={handleViewResume}
                className={`px-8 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all`}
            >
              View Resume
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`px-8 py-3 ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} border ${darkMode ? 'border-gray-700' : 'border-gray-300'} rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all`} 
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="section-about" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 ${isVisible['section-about'] ? 'animate-slideUp' : 'opacity-0'}`}>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-6`}>
              I'm a passionate full-stack developer with over 6 years of experience building scalable web and mobile applications
              I specialize in modern JavaScript frameworks and love turning complex problems into elegant, user-friendly solutions.
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              My expertise spans from crafting responsive frontends with React and Next.js to architecting robust backend systems 
              with Node.js and PostgreSQL. I'm constantly learning and staying up-to-date with the latest technologies to deliver 
              the best solutions for my clients and users.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="section-skills" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div
                key={category}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 hover:scale-105 transition-all duration-300 ${isVisible['section-skills'] ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {category === 'Frontend' && <Layout className="text-blue-500 mr-2" size={24} />}
                  {category === 'Backend' && <Code className="text-green-500 mr-2" size={24} />}
                  {category === 'Database' && <Database className="text-purple-500 mr-2" size={24} />}
                  {category === 'Tools' && <Wrench className="text-orange-500 mr-2" size={24} />}
                  <h3 className="text-xl font-bold">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-full text-sm`}
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
      <section id="section-projects" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Featured Projects</h2>
          
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['All', ...new Set(projects.flatMap(p => p.categories))].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.title}
                className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 ${isVisible['section-projects'] ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {typeof project.image === 'string' ? (
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                ) : (
                  <Image src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
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
                    { project.github &&
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                    >
                      <Github size={20} />
                      Code
                    </a>
                    }
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-purple-500 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
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
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 border-l-4 border-blue-500 hover:scale-102 transition-all ${isVisible['section-experience'] ? 'animate-slideUp' : 'opacity-0'}`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <h3 className="text-2xl font-bold">{exp.title}</h3>
                  <span className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm mt-1 md:mt-0`}>{exp.duration}</span>
                </div>
                <p className="text-blue-500 font-semibold mb-3">{exp.company}</p>
                <ul className={`list-disc list-inside space-y-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
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
      <section id="section-contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800/50' : 'bg-white'}`}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
          <form onSubmit={handleSubmit} className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8 ${isVisible['section-contact'] ? 'animate-slideUp' : 'opacity-0'}`}>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-blue-500 focus:outline-none transition-colors`}
                placeholder="Your name"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-blue-500 focus:outline-none transition-colors`}
                placeholder="your.email@example.com"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'} border focus:border-blue-500 focus:outline-none transition-colors`}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>

          <div className="flex justify-center gap-6 mt-8">
            <a href="mailto:bejayguibao11@gmail.com" className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform">
              <Mail size={24} />
            </a>
            <a href="https://github.com/eyzee123" className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bejay-guibao-0173b921b" className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:scale-110 transition-transform">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 border-t ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Bejay Guibao. Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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
