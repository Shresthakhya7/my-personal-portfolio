export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">

          <div className="relative hidden lg:flex">
            <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-primary/30 border border-cyan-500/20 rounded-2xl aspect-square flex items-center justify-center">
              <img
                src="/shrestha.JPG"
                alt="About me placeholder"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Me</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              BSc. CSIT graduate, a frontend developer who enjoys turning ideas into interactive, user-friendly web experiences.
              I mainly work with React, Next.js, and TypeScript. Previously, I had also worked with Python and Django on the backend.
              I love learning new technologies and improving my skills—whether it's making interfaces smoother, designing better components,
              or trying out tools that make the web easier to use.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              For me, every project is a chance to learn, experiment, and build something meaningful. Outside of coding, I enjoy traveling, exploring new places, and picking up new things that spark my creativity.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
