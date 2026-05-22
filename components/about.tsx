export default function About() {
  return (
    <section id="about" className="pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          <div className="relative hidden lg:flex">
            <div className="absolute -inset-2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-10" />
            <div className="relative w-full">
              <div className="relative rounded-2xl ring-1 ring-cyan-500/30 overflow-hidden aspect-square">
                <img
                  src="/shrestha.JPG"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-cyan-500 mb-1">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 tracking-tight">
              Frontend Developer
            </h2>
            <div className="w-10 h-0.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-3 mb-5" />

            <p className="text-base sm:text-lg text-muted-foreground mb-4 leading-relaxed">
              BSc. CSIT graduate who enjoys turning ideas into interactive, user-friendly web experiences.
              I mainly work with React, Next.js, and TypeScript, and have previously explored Python and Django on the backend.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
              Every project is a chance to learn, experiment, and build something meaningful. Outside of coding,
              I enjoy traveling, exploring new places, and picking up things that spark creativity.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Python", "Django"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 bg-cyan-500/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
