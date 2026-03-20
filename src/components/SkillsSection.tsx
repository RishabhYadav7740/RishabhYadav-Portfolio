const skills = {
  Programming: ["Python"],
  "Data Analysis": ["Pandas", "NumPy"],
  Visualization: ["Matplotlib", "Seaborn", "Power BI"],
  Databases: ["SQL"],
  Tools: ["Google Colab", "VS Code", "Excel", "Git & GitHub"],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label mb-8">Skills</p>
        <div className="space-y-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <h3 className="font-mono text-sm text-foreground mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
