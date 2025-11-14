export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-primary/5 border-y border-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. I love turning complex problems into simple, beautiful, and intuitive designs.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in tech started with curiosity and evolved into a career dedicated to creating impactful digital solutions. I specialize in building responsive, performant web applications using modern technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Frontend Excellence</h3>
                  <p className="text-muted-foreground">Creating beautiful UIs with React and modern CSS techniques</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Backend Power</h3>
                  <p className="text-muted-foreground">Building robust APIs and databases with Node.js and databases</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-cyan-400 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Full Stack Solutions</h3>
                  <p className="text-muted-foreground">End-to-end development from concept to deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-primary/30 border border-cyan-500/20 rounded-2xl aspect-square flex items-center justify-center">
              <img
                src="/developer-workspace-dark-theme.jpg"
                alt="About me placeholder"
                className="rounded-2xl w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
