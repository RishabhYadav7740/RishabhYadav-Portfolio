const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-lg font-bold text-foreground">RY</span>
        <div className="flex gap-6">
          <button onClick={() => scrollTo("about")} className="nav-link">About</button>
          <button onClick={() => scrollTo("skills")} className="nav-link">Skills</button>
          <button onClick={() => scrollTo("projects")} className="nav-link">Projects</button>
          <button onClick={() => scrollTo("contact")} className="nav-link">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
