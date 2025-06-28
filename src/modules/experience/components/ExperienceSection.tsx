"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs";
import Timeline from "@/modules/timeline/components/Timeline";
import { data } from "@/modules/experience/data/experience";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl mx-auto px-6"
      >
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold gradient-text mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            My professional journey and academic background
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Glowing background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-primary/10 blur-3xl opacity-50" />

          {/* Glass card effect */}
          <div className="relative glass-card rounded-2xl p-6 overflow-hidden">
            <Tabs defaultValue="career" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="career" className="text-lg">
                  Career
                </TabsTrigger>
                <TabsTrigger value="education" className="text-lg">
                  Education
                </TabsTrigger>
              </TabsList>

              <div className="relative">
                <TabsContent value="career" className="mt-0 space-y-4">
                  <Timeline items={data} />
                </TabsContent>

                <TabsContent value="education" className="mt-0 space-y-4">
                  <Timeline items={data} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
