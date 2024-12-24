import { Flag, MapPin, Twitter, Github, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-space-dark/80 backdrop-blur-sm border-t border-primary/20 py-12 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Location Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Our Location</h3>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <Flag className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-white">Indonesia</span>
            </div>
            <div className="flex items-center gap-2 hover:translate-x-2 transition-transform">
              <MapPin className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-gray-300">Kalimantan Timur, Kabupaten Paser</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">Join our growing community!</p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h3 className="text-xl font-semibold text-white mb-4">Legal</h3>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:translate-x-2 transform">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:translate-x-2 transform">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors hover:translate-x-2 transform">
              Community Guidelines
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} AetharCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};