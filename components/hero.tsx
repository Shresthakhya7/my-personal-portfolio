'use client';

import { ArrowRight } from 'lucide-react';
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        <Typewriter
          options={{
            strings: ['Frontend Developer', 'Web Developer', 'Python Developer'],
            autoStart: true,
            loop: true,
          }}
        />
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          I craft beautiful, responsive web experiences with cutting-edge technologies. Specializing in React, Next.js, and modern web development.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='#projects' className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center justify-center gap-2 group">
            View My Work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href='#contact' className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors duration-300">
            Get In Touch
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-primary/10">
          <p className="text-sm text-muted-foreground mb-8">Tech Stack</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Django'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-primary/5 border border-cyan-500/20 rounded-lg text-sm text-cyan-300 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
