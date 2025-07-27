import React from 'react';
import { Terminal, Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-gray-800 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              &lt;/Developer&gt;
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              © 2025 Your Name. Crafted with <span className="inline-flex items-center"><Coffee className="h-4 w-4 text-yellow-500 mx-1" /></span> and code.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Built with React, Tailwind CSS, and lots of passion for clean code.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;