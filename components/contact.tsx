'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Let's discuss your next project</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
              <Mail className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Email</h3>
            <p className="text-muted-foreground">shresthakhya7@gmail.com</p>
          </div>

          <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
              <Phone className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone</h3>
            <p className="text-muted-foreground">+977 9866316333</p>
          </div>

          <div className="p-6 rounded-xl bg-primary/10 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center mb-4">
              <MapPin className="text-cyan-400" size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Location</h3>
            <p className="text-muted-foreground">Madhyapur Thimi, Bhaktapur</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="p-8 md:p-12 rounded-xl bg-primary/10 border border-cyan-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-colors placeholder-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-colors placeholder-muted-foreground"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg bg-background border border-cyan-500/20 focus:border-cyan-500 focus:outline-none transition-colors resize-none placeholder-muted-foreground"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
