import React from 'react';
import { motion } from "framer-motion";
import { Github, Mail, Linkedin, Download } from "lucide-react";
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

  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-white to-blue-50">
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
                🐱
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
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/6531503042", label: "GitHub" },
                { icon: Mail, href: "mailto:nimittanbooutor@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-white shadow-lg hover:shadow-xl border border-gray-100 backdrop-blur-sm transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="relative aspect-square"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl -rotate-6 transform transition-transform duration-300 hover:rotate-0"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-3xl rotate-3 transform transition-transform duration-300 hover:rotate-0"></div>
              <img
                src="./public/images/not_found.png"
                alt="Profile"
                className="relative w-full h-full rounded-2xl object-cover shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;