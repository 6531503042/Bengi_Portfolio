'use client';

import { motion } from 'framer-motion';
import HeroSection from '../src/components/sections/HeroSection';
import TimelineSection from '../src/components/sections/TimelineSection';
import ProjectsSection from '../src/components/sections/ProjectsSection';
import ContactSection from '../src/components/sections/ContactSection';
import { data } from '../src/data/store';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="container mx-auto px-4 py-16 space-y-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <HeroSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <TimelineSection data={data} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <ProjectsSection data={data} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <ContactSection />
        </motion.div>
      </div>
    </main>
  );
} 