import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const Footer = () => {
  // Newsletter form state inside Footer
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email) {
      toast({ title: "Email required", description: "Please enter your email." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Subscription failed");

      toast({ title: "Subscribed!", description: "Thank you for subscribing." });
      setFormData({ name: "", email: "" });
    } catch (error: any) {
      toast({ title: "Error", description: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-ocean-200 dark:bg-ocean-800 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-ocean-800 dark:text-ocean-100">Clement Ombati</h3>
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
              <a href="https://github.com/Clement-254?tab=repositories" target="_blank" rel="noopener noreferrer" aria-label="Visit my Github page" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/samuel-clement-704751288/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn page" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://x.com/SamClement254" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter page" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="mailto:clementsamuel006@gmail.com" aria-label="Send me an email" className="text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-ocean-800 dark:text-ocean-100">Newsletter</h4>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name (optional)"
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-ocean-700 border border-ocean-300 dark:border-ocean-600 text-ocean-800 dark:text-ocean-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 rounded-lg bg-white dark:bg-ocean-700 border border-ocean-300 dark:border-ocean-600 text-ocean-800 dark:text-ocean-100 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-ocean-500 transition-all"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full mx-auto py-2 bg-blue-100 dark:bg-ocean-500 text-blue-700 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-400 text-sm md:text-base disabled:opacity-60"
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-ocean-300 dark:border-ocean-700">
          <p className="text-center text-ocean-600 dark:text-ocean-300 text-sm md:text-base">
            &copy; {new Date().getFullYear()} Clement. All rights reserved.             
          </p>
        </div>        
      </div>
    </footer>
  );
};

export default Footer;