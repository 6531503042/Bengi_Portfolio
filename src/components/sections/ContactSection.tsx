import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle } from "lucide-react";

const ContactSection = () => {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Drop me an email",
      href: "mailto:nimittanbooutor@gmail.com",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Book a meeting",
      href: "https://calendly.com/nimittanbooutor/interview-scheduling",
      color: "from-green-400 to-green-600"
    },
    {
      icon: MessageCircle,
      title: "Chat",
      description: "Let's discuss",
      href: "https://t.me/BenGii",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50/50">
      <motion.div 
        className="max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${method.color} p-3 text-white shadow-lg`}>
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-semibold text-lg text-gray-900">
                  {method.title}
                </h3>
                <p className="mt-2 text-gray-600">
                  {method.description}
                </p>
              </div>
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;