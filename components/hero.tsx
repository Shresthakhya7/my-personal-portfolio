'use client';

import { ArrowRight } from 'lucide-react';
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 md:pt-0">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-block">
              <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hey, I'm a
              </span>
            </h1>
            <div className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <Typewriter
                options={{
                  strings: ['Frontend Developer', 'Web Developer', 'Python Developer'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a href='#projects' className="px-8 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300 flex items-center gap-2 group whitespace-nowrap">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href='#contact' className="px-8 py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 whitespace-nowrap">
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <img
                src="logo.jpg"
                alt="About me"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Tech Stack - Centered Below */}
        <div className="text-center pt-8 border-t border-cyan-500/10">
          <p className="text-sm text-gray-400 mb-6">Tech Stack</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Django'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-cyan-500/5 border border-cyan-500/20 rounded-lg text-sm text-cyan-300 font-medium"
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