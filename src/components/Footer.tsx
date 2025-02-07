
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-wolf-200 dark:bg-wolf-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-wolf-800 dark:text-wolf-100">WolfGuard</h3>
            <p className="text-wolf-600 dark:text-wolf-300 text-sm md:text-base">
              Bridging Medicine & AI for a smarter future in healthcare.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-wolf-800 dark:text-wolf-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 text-sm md:text-base transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 text-sm md:text-base transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 text-sm md:text-base transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 text-sm md:text-base transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-wolf-800 dark:text-wolf-100">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:contact@example.com" className="text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-wolf-800 dark:text-wolf-100">Newsletter</h4>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-wolf-700 border border-wolf-300 dark:border-wolf-600 text-wolf-800 dark:text-wolf-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-wolf-500 transition-all"
              />
              <button className="w-full px-4 py-2 bg-wolf-800 dark:bg-wolf-100 text-wolf-100 dark:text-wolf-800 rounded-lg hover:bg-wolf-700 dark:hover:bg-wolf-200 transition-colors text-sm md:text-base">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-wolf-300 dark:border-wolf-700">
          <p className="text-center text-wolf-600 dark:text-wolf-300 text-sm md:text-base">
            © {new Date().getFullYear()} WolfGuard. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
