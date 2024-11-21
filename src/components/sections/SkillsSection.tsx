import { motion } from "framer-motion";
import { useState } from "react";
import { data } from "@/data/store";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SkillsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSkill = () => {
    setCurrentIndex((prev) => 
      prev === data.skills.length - 1 ? 0 : prev + 1
    );
  };

  const prevSkill = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? data.skills.length - 1 : prev - 1
    );
  };

  const category = data.skills[currentIndex];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative">
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-card backdrop-blur-sm rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">{category.title}</h3>
            <p className="text-muted-foreground mb-6">{category.description}</p>
            
            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="group relative"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative w-12 h-12 flex items-center justify-center bg-accent rounded-xl p-2 transition-all duration-300 group-hover:bg-accent/80">
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="w-8 h-8 object-contain"
                    />
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs text-foreground whitespace-nowrap bg-background/50 px-2 py-1 rounded">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none px-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSkill}
              className="rounded-full pointer-events-auto"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSkill}
              className="rounded-full pointer-events-auto"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;