import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, FileText, Download } from 'lucide-react';
import { Button } from '../ui/button';
import ResumePreview from '../ResumePreview';
import './HeroSection.css';

const HeroSection = () => {
  const [showResumePreview, setShowResumePreview] = useState(false);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const glowVariants = {
    initial: { opacity: 0.5, scale: 1 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      scale: [1, 1.05, 1],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: 'https://github.com/6531503042', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: 'https://linkedin.com/in/bengi', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, url: 'https://twitter.com/bengi', label: 'Twitter' },
    { icon: <Mail className="w-5 h-5" />, url: 'mailto:nimittanbooutor@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-[90vh] flex flex-col items-center justify-center relative">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center w-full max-w-4xl mx-auto px-4 relative z-10"
      >
        <motion.div 
          variants={item} 
          className="mb-2 relative"
        >
          {/* Glowing background effect */}
          <motion.div
            className="absolute -inset-10 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          />
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 relative">
            Hello there, I&apos;m{' '}
            <motion.span
              className="inline-block relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <span className="relative inline-block">
                <span className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg blur-xl opacity-50" />
                <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                  Bengi
                </span>
              </span>
            </motion.span>{' '}
            <motion.span
              className="wave-emoji inline-block"
              animate={{
                rotate: [0, 15, -15, 15, 0],
                transition: {
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                }
              }}
            >
              👋
            </motion.span>
          </h1>
        </motion.div>

        <motion.div 
          variants={item} 
          className="mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold">
            Backend Developer
            <span className="text-gray-400 font-normal"> with Frontend Skills</span>
          </h2>
        </motion.div>

        <motion.div 
          variants={item} 
          className="mb-10 text-center max-w-2xl mx-auto"
        >
          <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
            3rd year Software Engineering student at{' '}
            <span className="font-semibold text-blue-400">
              Mae Fah Luang University
            </span>
            . Passionate about solving business problems through technology.
            <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-4">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg"></span>
              <span className="relative">
                Specialized in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                  Backend Development
                </span>
              </span>
            </span>
            {' '}with experience in{' '}
            <span className="text-gray-200/90 font-medium">Frontend Development</span>.
          </p>
        </motion.div>

        <motion.div 
          variants={item} 
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button 
            variant="default" 
            size="lg" 
            onClick={() => setShowResumePreview(true)}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-4 h-4 mr-2" /> View Resume
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="border-2 border-purple-500/30 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" /> Download Resume
          </Button>
        </motion.div>

        <motion.div 
          variants={item} 
          className="social-icons flex justify-center gap-4 sm:gap-6"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:border-white/20"
              whileHover={{ y: -3 }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <ResumePreview
        isOpen={showResumePreview}
        onClose={() => setShowResumePreview(false)}
      />
    </section>
  );
};

export default HeroSection;