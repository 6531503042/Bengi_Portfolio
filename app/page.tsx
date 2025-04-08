'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { MouseEffect } from '@/components/effects/MouseEffect';
import { motion } from 'framer-motion';

const ClientWaves = dynamic(() => import('@/components/ClientWaves'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0b0c]">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0c] via-[#1a1b1e] to-[#0a0b0c]" />

      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.15),rgba(255,255,255,0))]" />
        
        {/* Animated gradient lines */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2) 15%, transparent 30%)',
            backgroundSize: '200% 100%',
          }}
          animate={{
            backgroundPosition: ['0% 0%', '200% 0%'],
          }}
          transition={{
            duration: 15,
            ease: 'linear',
            repeat: Infinity,
          }}
        />

        {/* Additional decorative elements */}
        <div className="absolute inset-0">
          {/* Top-right glow */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />
          
          {/* Bottom-left glow */}
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-indigo-500/20 rounded-full blur-3xl" />
        </div>

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{
            backgroundImage: `radial-gradient(circle at center, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      {/* Wave effects */}
      <div className="absolute inset-0">
        {/* Primary wave layer - more visible */}
        <ClientWaves 
          lineColor="rgba(255, 255, 255, 0.2)"
          backgroundColor="transparent"
          waveSpeedX={0.007}
          waveSpeedY={0.005}
          waveAmpX={30}
          waveAmpY={25}
          friction={0.6}
          tension={0.015}
          maxCursorMove={120}
          xGap={28}
          yGap={52}
        />
        
        {/* Secondary wave layer - blue accent */}
        <ClientWaves 
          lineColor="rgba(59, 130, 246, 0.15)"
          backgroundColor="transparent"
          waveSpeedX={0.01}
          waveSpeedY={0.008}
          waveAmpX={20}
          waveAmpY={15}
          friction={0.7}
          tension={0.012}
          maxCursorMove={80}
          xGap={36}
          yGap={44}
        />

        {/* Tertiary wave layer - subtle depth */}
        <ClientWaves 
          lineColor="rgba(99, 102, 241, 0.08)"
          backgroundColor="transparent"
          waveSpeedX={0.013}
          waveSpeedY={0.01}
          waveAmpX={15}
          waveAmpY={10}
          friction={0.8}
          tension={0.01}
          maxCursorMove={40}
          xGap={44}
          yGap={36}
        />
      </div>
      
      {/* Content */}
      <Navigation />
      <MouseEffect />
      
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </motion.div>
    </main>
  );
} 