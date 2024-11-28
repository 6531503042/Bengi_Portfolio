import React from 'react';
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import "./HeroSection.css";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { 
      icon: Linkedin, 
      href: "https://www.linkedin.com/in/nimitben/", 
      label: "LinkedIn",
      hoverColor: "hover:text-blue-600"
    },
    { 
      icon: Github, 
      href: "https://github.com/6531503042", 
      label: "GitHub",
      hoverColor: "hover:text-gray-900"
    },
    { 
      icon: Instagram, 
      href: "https://www.instagram.com/i.bengii/", 
      label: "Instagram",
      hoverColor: "hover:text-pink-600",
    },
    { 
      icon: Mail, 
      href: "mailto:nimittanbooutor@gmail.com", 
      label: "Email",
      hoverColor: "hover:text-red-600"
    }
  ];

  return (
    <section 
      id="home"
      className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-16 items-center"
        >
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 flex items-center gap-4"
                  style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
                Hi I'm BenGii
                <span className="wave-emoji">👋</span>
              </h1>
              <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 to-purple-200 opacity-20 blur-3xl"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-2xl text-gray-600 leading-relaxed"
            >
              21-year-old backend software developer from Thailand 
              <span className="ml-2 animate-pulse">🇹🇭</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed"
            >
              I like to develop backend, drink instant coffee and get coding advice from my cat,  
              <span className="animate-bounce inline-block ml-2">🐱</span>
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <Button 
                variant="outline" 
                className="group relative px-6 py-3 bg-white backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 text-blue-600 group-hover:text-blue-700">
                  <Download className="w-5 h-5" />
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex gap-6 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100 backdrop-blur-sm transition-all duration-300 group`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className={`w-6 h-6 text-gray-600 ${social.hoverColor} transition-colors duration-300`} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-square"
            initial={{ opacity: 1 }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl transform rotate-3"></div>
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ 
                  scale: {
                    type: "spring",
                    stiffness: 300,
                    damping: 25
                  }
                }}
                className="relative w-full h-full will-change-transform"
              >
                <img
                  src="https://raw.githubusercontent.com/6531503042/Bengi_Portfolio/main/public/Bengi.jpg"
                  alt="Profile"
                  className="relative w-full h-full rounded-2xl object-cover object-[60%] shadow-xl"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;