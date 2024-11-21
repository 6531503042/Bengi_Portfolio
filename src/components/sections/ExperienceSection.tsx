import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "@/components/Timeline";
import { data } from "@/data/store";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container max-w-4xl mx-auto px-4">
        <Tabs defaultValue="career" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="career">Career</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
          </TabsList>
          
          <TabsContent value="career" className="mt-6">
            {data.career && <Timeline items={data.career} />}
          </TabsContent>
          
          <TabsContent value="education" className="mt-6">
            {data.education && <Timeline items={data.education} />}
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;