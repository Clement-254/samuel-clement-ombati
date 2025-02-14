
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-morphism">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/lovable-uploads/3fc59e52-d88b-495c-a1a9-7149c39469e1.png" 
              alt="Clement Logo" 
              className="h-10 w-10 rounded-full object-cover border-2 border-ocean-500"
            />
            <span className="text-2xl font-bold text-ocean-600 dark:text-ocean-400">
              Clement
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-ocean-600 dark:text-ocean-300 hover:text-ocean-800 dark:hover:text-ocean-100 transition-colors",
                  location.pathname === item.path && "text-ocean-800 dark:text-ocean-100 font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-ocean-200/10 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-ocean-100" />
            ) : (
              <Moon className="w-5 h-5 text-ocean-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
