import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";
import { data } from "@/data/store";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-[#0a0b0c] dark:to-[#1a1b1e]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container max-w-4xl"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
          >
            Experience & Education
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-400"
          >
            My professional journey and academic background
          </motion.p>
        </div>

        <Tabs defaultValue="career" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="career" className="text-lg">Career</TabsTrigger>
            <TabsTrigger value="education" className="text-lg">Education</TabsTrigger>
          </TabsList>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-500/5 dark:to-blue-500/5 blur-3xl" />
            
            <TabsContent value="career" className="mt-0 relative">
              <Timeline items={data.career} />
            </TabsContent>
            
            <TabsContent value="education" className="mt-0 relative">
              <Timeline items={data.education} />
            </TabsContent>
          </div>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;