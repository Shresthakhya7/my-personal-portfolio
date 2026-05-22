export default function Education() {
  const education = [
    {
      school: 'Bhaktaput Multiple Campus',
      degree: 'Bsc. CSIT',
      year: 'Passed Year: 2023',
      description: 'Percentage: 80.90%',
    },
    {
      school: 'Khwopa Secondary School',
      degree: '10+2',
      year: 'Passed year: 2019',
      description: 'CGPA: 3.24',
    },
  ];

  return (
    <section id="education" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Education</h2>
          <p className="text-base md:text-lg text-muted-foreground">My academic background</p>
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
                <span className="inline-block px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-semibold whitespace-nowrap self-start">
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
