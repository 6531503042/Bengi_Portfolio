import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-card"
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900">let's work together</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            I'm always open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or just chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              Send me an email →
            </Button>
            <Button variant="outline" size="lg" className="hover:bg-gray-50">
              Schedule a call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;