export default function Experience() {
  const experiences = [
    {
      title: 'Senior Frontend Developer',
      company: 'Tech Innovations Inc.',
      year: '2023 - Present',
      description: 'Leading frontend development with React and Next.js. Architecting scalable component systems and improving performance.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      year: '2021 - 2023',
      description: 'Developed full-stack web applications using React, Node.js, and PostgreSQL. Collaborated with cross-functional teams.',
    },
    {
      title: 'Junior Frontend Developer',
      company: 'Creative Web Studio',
      year: '2020 - 2021',
      description: 'Built responsive user interfaces and fixed bugs. Learned best practices in web development and Git collaboration.',
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground">My professional journey and achievements</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 rounded-xl bg-background border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 to-blue-500 transform group-hover:w-2 transition-all duration-300"></div>

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
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
