import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";
import { data } from "@/data/store";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-4xl">
        <Tabs defaultValue="career" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="career">
            <Timeline items={data.career} />
          </TabsContent>
          
          <TabsContent value="education">
            <Timeline items={data.education} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;