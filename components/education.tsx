export default function Education() {
  const education = [
    {
      school: 'University of Technology',
      degree: 'Bachelor of Science in Computer Science',
      year: '2018 - 2022',
      description: 'Focused on web development, algorithms, and software engineering principles.',
    },
    {
      school: 'Advanced Web Development Bootcamp',
      degree: 'Full Stack Web Development Certificate',
      year: '2022 - 2023',
      description: 'Intensive training in modern web technologies and best practices.',
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <p className="text-lg text-muted-foreground">My academic background and certifications</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 rounded-xl bg-primary/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:bg-primary/20"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-foreground mt-2">{edu.school}</p>
                </div>
                <span className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold whitespace-nowrap">
                  {edu.year}
                </span>
              </div>
              <p className="text-muted-foreground">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
