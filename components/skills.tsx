export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5/CSS3', 'Shadcn/UI'],
    },
    {
      category: 'Backend',
      skills: ['Python', 'Django', 'REST APIs', 'GraphQL', 'Django REST Framework'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Docker', 'Azure'],
    },
    {
      category: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Time Management', 'Attention To Detail', 'Collaboration And Teamwork'],
    },
  ];

  return (
    <section id="skills" className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-base md:text-lg text-muted-foreground">Technologies I'm proficient in</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-xl bg-background border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:bg-primary/5"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-6">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-medium hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
