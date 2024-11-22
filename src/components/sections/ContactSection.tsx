import { motion } from "framer-motion";
import { Mail, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Chat from "@/components/ui/Chat";

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
      description: "Get in touch via email",
      href: "mailto:nimittanbooutor@gmail.com",
      buttonText: "Send Email"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a time slot that suits you",
      href: "https://calendly.com/nimittanbooutor/interview-scheduling",
      buttonText: "Schedule Now"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with me directly",
      href: "https://t.me/BenGii",
      buttonText: "Start Chat"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or just having a chat about technology.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-blue-50 mb-4">
                  <method.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {method.description}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full bg-white hover:bg-blue-50 text-blue-600 border-blue-200"
                >
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {method.buttonText}
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Chat />
    </section>
  );
};

export default ContactSection;