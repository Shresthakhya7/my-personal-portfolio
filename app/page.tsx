import Hero from '@/components/hero';
import About from '@/components/about';
import Education from '@/components/education';
import Experience from '@/components/experience';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
