import { ServerStatus } from "@/components/ServerStatus";
import { AboutServer } from "@/components/AboutServer";
import { SocialVote } from "@/components/SocialVote";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark bg-space-gradient">
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-12">
          AetharCraft
        </h1>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <ServerStatus />
          <AboutServer />
          <SocialVote />
        </div>
      </div>
    </div>
  );
};

export default Index;