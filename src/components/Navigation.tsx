
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
              src="/lovable-uploads/bf301a9b-a6eb-4caf-96a9-40326349caa9.png" 
              alt="Clement Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-wolf-800 dark:text-wolf-100">
              Clement
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "text-wolf-600 dark:text-wolf-300 hover:text-wolf-800 dark:hover:text-wolf-100 transition-colors",
                  location.pathname === item.path && "text-wolf-800 dark:text-wolf-100 font-semibold"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-wolf-200/10 transition-colors"
          >
            {isDark ? (
              <Sun className="w-5 h-5 text-wolf-100" />
            ) : (
              <Moon className="w-5 h-5 text-wolf-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
