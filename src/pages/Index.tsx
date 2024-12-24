import { ServerStatus } from "@/components/ServerStatus";
import { AboutServer } from "@/components/AboutServer";
import { SocialVote } from "@/components/SocialVote";
import { FloatingSidebar } from "@/components/FloatingSidebar";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark bg-space-gradient flex flex-col">
      <div className="container mx-auto py-12 px-4 flex-grow">
        <div className="space-y-4 mb-12">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center shadow-glow animate-slide-in-right">
              AetharCraft
            </h1>
            <p className="text-lg md:text-xl text-gray-300 shadow-glow animate-slide-in-left">
              Where Adventure Meets Innovation
            </p>
          </div>
        </div>
        
        <div className="grid gap-8 max-w-4xl mx-auto">
          <ServerStatus />
          <AboutServer />
          <SocialVote />
        </div>
      </div>
      <Footer />
      <FloatingSidebar />
    </div>
  );
};

export default Index;