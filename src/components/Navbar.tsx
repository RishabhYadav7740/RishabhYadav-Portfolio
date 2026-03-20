import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-display text-lg font-bold text-foreground hover:text-primary transition-colors duration-300">RY</button>
        <div className="flex items-center gap-6">
          <button onClick={() => scrollTo("about")} className="nav-link">About</button>
          <button onClick={() => scrollTo("skills")} className="nav-link">Skills</button>
          <button onClick={() => scrollTo("projects")} className="nav-link">Projects</button>
          <button onClick={() => scrollTo("contact")} className="nav-link">Contact</button>
          <button
            onClick={() => setDark(!dark)}
            className="social-icon w-8 h-8"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
