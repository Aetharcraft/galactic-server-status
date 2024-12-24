import { Globe } from "lucide-react";

const VOTE_LINKS = [
  { name: "MinecraftMP", url: "#" },
  { name: "Planet Minecraft", url: "#" },
  { name: "TopG", url: "#" },
];

const SOCIAL_LINKS = [
  { name: "Discord", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "Instagram", url: "#" },
];

export const SocialVote = () => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-space-dark p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-white">Vote for Us</h2>
        </div>
        
        <div className="grid gap-3">
          {VOTE_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-md text-white text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-space-dark p-6 rounded-lg border border-primary/20 backdrop-blur-sm">
        <div className="flex items-center gap-4 mb-4">
          <Globe className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-white">Social Media</h2>
        </div>
        
        <div className="grid gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary/10 hover:bg-primary/20 transition-colors p-3 rounded-md text-white text-center"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};