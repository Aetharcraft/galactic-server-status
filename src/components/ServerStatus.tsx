import { useState, useEffect } from "react";
import { Server, Users, Copy, Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const SERVER_IP = "play.aetharcraft.com";

export const ServerStatus = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    toast({
      title: "IP Copied!",
      description: "Server IP has been copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayerCount(Math.floor(Math.random() * 50));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-space-dark p-6 rounded-lg border border-primary/20 backdrop-blur-sm shadow-glow hover:shadow-glow-strong transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <Server className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-semibold text-white">Server Status</h2>
      </div>
      
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between bg-black/20 p-4 rounded-md">
          <div className="flex items-center gap-2">
            <span className="text-green-400 animate-pulse">●</span>
            <span className="text-white">Online</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-white">{playerCount} Players</span>
          </div>
        </div>
        
        <button
          onClick={copyIP}
          className="flex items-center justify-between bg-primary/10 hover:bg-primary/20 transition-colors p-4 rounded-md group"
        >
          <span className="text-white">{SERVER_IP}</span>
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5 text-primary group-hover:text-primary-hover" />
          )}
        </button>
      </div>
    </div>
  );
};