import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Fraud Detection System",
    description:
      "Developed a machine learning model to identify fraudulent financial transactions using classification algorithms like Random Forest and Decision Tree.",
    tech: ["Python", "Pandas", "Random Forest", "Matplotlib"],
    github: "https://github.com/RishabhYadav7740",
  },
  {
    title: "Student Performance Prediction",
    description:
      "Built a predictive analytics model to estimate student academic performance based on study habits and academic history using regression and ML algorithms.",
    tech: ["Python", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
    github: "https://github.com/RishabhYadav7740",
  },
  {
    title: "Vendor Performance Data Analytics",
    description:
      "Developed an interactive Power BI dashboard to monitor vendor performance, sales trends, and inventory efficiency with key business KPIs.",
    tech: ["Power BI", "Python", "Pandas", "SQL"],
    github: "https://github.com/RishabhYadav7740",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label mb-8">Projects</p>
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon w-8 h-8 shrink-0"
                  aria-label={`${project.title} on GitHub`}
                >
                  <Github size={16} />
                </a>
              </div>
              <p className="text-body text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
