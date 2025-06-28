"use client";

import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me an email",
      href: "mailto:nimittanbooutor@gmail.com",
      gradient: "from-blue-500/20 via-blue-400/20 to-blue-600/20",
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book a meeting",
      href: "https://calendly.com/nimittanbooutor/interview-scheduling",
      gradient: "from-purple-500/20 via-purple-400/20 to-purple-600/20",
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Let's discuss",
      href: "https://t.me/BenGii",
      gradient: "from-pink-500/20 via-pink-400/20 to-pink-600/20",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out through any of these channels. I&apos;m
            always open to discussing new opportunities and ideas!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 border border-white/10 transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.02 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="inline-flex rounded-xl bg-white/10 p-3 mb-6 ring-1 ring-white/20 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <method.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:via-purple-400 group-hover:to-pink-400">
                  {method.title}
                </h3>
                <p className="text-gray-400 group-hover:text-white/80 transition-colors">
                  {method.description}
                </p>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
