import { Star } from "lucide-react";

export const AboutServer = () => {
  return (
    <div className="bg-space-dark p-6 rounded-lg border border-primary/20 backdrop-blur-sm animate-float">
      <div className="flex items-center gap-4 mb-4">
        <Star className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-white">What is AetharCraft?</h2>
      </div>
      
      <p className="text-gray-300 leading-relaxed">
        AetharCraft is a unique Minecraft server that offers an immersive gaming experience
        with custom features, engaging community events, and regular updates. Join our
        growing community of players and explore a world of endless possibilities!
      </p>
    </div>
  );
};