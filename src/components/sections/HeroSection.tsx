import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[90vh] flex items-center">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-[1.5fr,1fr] gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl font-bold heading-gradient flex items-center"
            >
              hi BenGi here{" "}
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                👋
              </motion.span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600"
            >
              21-year-old backend software developer from Thailand 🇹🇭
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600"
            >
              I like to develop backend, drink instant coffee and get coding advice from my cat, Luffy.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="outline" className="glass-card">
                Download Resume ↓
              </Button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-6"
            >
              <motion.a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 rounded-full"
              >
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
              </motion.a>
              <motion.a 
                href="https://github.com/6531503042" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 rounded-full"
              >
                <Github className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
              </motion.a>
              <motion.a 
                href="mailto:nimittanbooutor@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="glass-card p-3 rounded-full"
              >
                <Mail className="w-6 h-6 text-gray-600 hover:text-gray-900 transition-colors" />
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl -rotate-6"></div>
            <img
              src="/your-photo.jpg"
              alt="Profile"
              className="relative w-full h-full rounded-2xl object-cover shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;