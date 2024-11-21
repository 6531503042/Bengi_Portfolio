import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, FileText, Calendar } from "lucide-react";

const ContactSection = () => {
  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/your-profile', '_blank');
  };

  const handleResume = () => {
    // Replace with your actual resume URL
    window.open('/path-to-your-resume.pdf', '_blank');
  };

  const handleSchedule = () => {
    // Replace with your actual calendly or scheduling link
    window.open('https://calendly.com/your-profile', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-card"
        >
          <h2 className="text-4xl font-bold mb-6 text-foreground">let's work together</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I'm always open to new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or just chat!
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="flex items-center gap-2"
              onClick={handleLinkedIn}
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2"
              onClick={handleResume}
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="flex items-center gap-2"
              onClick={handleSchedule}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;