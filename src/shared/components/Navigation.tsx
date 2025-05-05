'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import GooeyNav from './GooeyNav';

const navigationItems = [
  { label: "Home", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];

const Navigation = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.2, 0.8]);
  const [isOpen, setIsOpen] = useState(false);

  // Throttle function
  const throttle = useCallback((callback: Function, limit: number) => {
    let waiting = false;
    return function(this: any, ...args: any[]) {
      if (!waiting) {
        callback.apply(this, args);
        waiting = true;
        setTimeout(() => {
          waiting = false;
        }, limit);
      }
    };
  }, []);

  // Handle smooth scrolling
  const handleNavigation = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100, // Offset for the fixed header
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = throttle(() => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    }, 100);

    window.addEventListener('resize', handleResize as any);
    return () => window.removeEventListener('resize', handleResize as any);
  }, [throttle]);

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glass background */}
      <motion.div 
        className="absolute inset-0 backdrop-blur-md"
        style={{ 
          opacity,
          background: 'linear-gradient(to bottom, rgba(10, 11, 12, 0.8), rgba(10, 11, 12, 0.7))'
        }}
      />
      
      {/* Subtle borders */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Content */}
      <div className="container relative mx-auto px-4 py-4">
        {/* Mobile menu button */}
        <div className="md:hidden absolute right-4 top-4 z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center">
          <nav className="flex space-x-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isOpen ? 1 : 0,
            x: isOpen ? 0 : 100
          }}
          className={`${isOpen ? 'fixed' : 'hidden'} inset-0 bg-[#0B0B1E]/95 backdrop-blur-lg md:hidden`}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavigation(item.href)}
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default memo(Navigation);
