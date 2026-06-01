'use client';

import { ArrowRight } from 'lucide-react';
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center py-4 sm:py-8 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-3 sm:mb-4 lg:mb-6 inline-flex">
              <span className="p-3 sm:px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            <div className="space-y-3 md:space-y-4">

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                Hi, I'm
              </h1>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-cyan-500 to-indigo-500 bg-clip-text text-transparent">
                Shreejan Khya Shrestha
              </h2>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold flex gap-2 justify-center lg:justify-start text-white">
                <span>A</span>
                <span className="text-cyan-300">
                  <Typewriter
                    options={{
                      strings: ['Frontend Developer', 'Web Developer'],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 50,
                      delay: 80,
                    }}
                  />
                </span>
              </div>

            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="group px-2 sm:px-4 lg:px-8 py-2 sm:py-3 bg-cyan-500 text-black font-semibold rounded-lg
                  hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-2 sm:px-4 lg:px-8 py-2 sm:py-3 border border-cyan-500/30 text-cyan-400 font-semibold rounded-lg
            hover:bg-cyan-500/10 transition-all duration-300 active:scale-95"
              >
                Get In Touch
              </a>
            </div>
          </div>

          <div className="relative group flex justify-center lg:justify-end">
            <div className="absolute -inset-5 bg-cyan-500/10 blur-3xl rounded-[2rem] opacity-70 group-hover:opacity-100 transition duration-500" />
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2rem] overflow-hidden border border-cyan-500/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 z-10" />
              <img
                src="logo.jpg"
                alt="About me"
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}