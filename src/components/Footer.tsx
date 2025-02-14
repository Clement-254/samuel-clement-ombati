
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-ocean-200 dark:bg-ocean-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ocean-800 dark:text-ocean-100">Clement</h3>
            <p className="text-ocean-600 dark:text-ocean-300 text-sm md:text-base">
              Bridging Medicine & AI for a smarter future in healthcare.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-800 dark:text-ocean-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 text-sm md:text-base transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 text-sm md:text-base transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 text-sm md:text-base transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 text-sm md:text-base transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-800 dark:text-ocean-100">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-800 dark:text-ocean-100">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-ocean-700 border border-ocean-300 dark:border-ocean-600 text-ocean-800 dark:text-ocean-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
              />
              <button className="w-full px-4 py-2 bg-ocean-600 dark:bg-ocean-500 text-white rounded-lg hover:bg-ocean-700 dark:hover:bg-ocean-400 transition-colors text-sm md:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-ocean-300 dark:border-ocean-700">
          <p className="text-center text-ocean-600 dark:text-ocean-300 text-sm md:text-base">
            © {new Date().getFullYear()} Clement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
