'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-gray-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
            <div className="shrink-0">
              <a href="#" className="flex items-center gap-2 md:gap-3 group">
                <img
                  src="logo.jpg"
                  alt="Logo"
                  className="w-7 h-7 md:w-9 md:h-9 rounded-full object-cover border border-cyan-500/30 shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
                <span className="text-xl md:text-2xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Shreejan Khya
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg text-muted-foreground hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cyan-400 hover:text-cyan-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-60 lg:hidden transition-all duration-300
          ${isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
          }`}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xl" />

        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 z-60 text-white hover:text-cyan-300 transition-colors"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <div className="relative flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-semibold text-white hover:text-cyan-300 transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
