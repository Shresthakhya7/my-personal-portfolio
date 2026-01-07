export default function Experience() {
  const experiences = [
    {
      title: 'Junior Frontend Developer (Remote)',
      company: 'Neputer Tech',
      year: 'Dec 2025 - Present',
      // projects: 'Medhey',
      description: 'Built responsive and user-friendly web interfaces for project-based requirements.'
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Cognix Insights',
      year: '22nd Jun 2025 - 21st Nov 2025',
      projects: 'CI - NAASA, CI - KIEC',
      description: 'Build scalable Next.js + TypeScript applications with modern UI components, GraphQL integration, and dynamic user-focused features in collaboration with cross-functional teams.',
    },
    {
      title: 'Python Developer Intern',
      company: 'Quickfox Consulting',
      year: '27th Sep 2024 - 27th Dec 2024',
      projects: 'QuickRPA',
      description: 'Contributed to the QuickRPA project by building a React.js download feature with Django-based role control, integrating it smoothly into existing workflows',
    },
    {
      title: 'Frontend Developer Intern',
      company: 'Beetech Solutions Pvt. Ltd.',
      year: '16th Jun 2024 - 16th Sep 2024',
      projects: 'VoCare',
      description: 'Built responsive web interfaces and customized WordPress sites, contributing to high-quality project deliveries.',
    },

  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-xl bg-background border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-cyan-500 to-blue-500 transform group-hover:w-2 transition-all duration-300"></div>

              <div className="pl-0 md:pl-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-lg text-foreground mt-1">{exp.company}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold">{exp.year}</span>
                </div>
                {exp.projects && (
                  <p className="text-muted-foreground">Worked On: {exp.projects}</p>
                )}
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
