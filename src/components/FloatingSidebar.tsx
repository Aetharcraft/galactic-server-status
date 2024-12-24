import { useState } from 'react';
import { Menu, X, MessageSquare, Twitter, ThumbsUp } from 'lucide-react';

export const FloatingSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-space-dark p-3 rounded-full shadow-glow hover:shadow-glow-strong transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary" />
        ) : (
          <Menu className="w-6 h-6 text-primary" />
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-space-dark rounded-lg shadow-glow p-4 min-w-[200px] animate-fade-in">
          <div className="flex flex-col gap-3">
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Discord</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-white hover:text-primary transition-colors"
            >
              <ThumbsUp className="w-5 h-5" />
              <span>Vote</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};