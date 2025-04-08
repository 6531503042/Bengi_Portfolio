"use client";

import { motion } from "framer-motion";
import { data } from "@/data/store";
import SkillItem from "../ui/SkillItem";
import GridBox from "../core/GridBox";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50/50">
      <div className="max-w-6xl mx-auto px-6">
        <GridBox classNames="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data.skills.map((skill, index) => (
            <motion.div
              key={`skill-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <SkillItem data={skill} />
            </motion.div>
          ))}
        </GridBox>
      </div>
    </section>
  );
};

export default SkillsSection;