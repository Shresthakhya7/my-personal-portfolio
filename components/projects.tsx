import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/ecommerce-platform-dashboard.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates using WebSockets.',
      tags: ['Next.js', 'TypeScript', 'WebSocket', 'MongoDB'],
      image: '/task-management-app-interface.jpg',
      github: '#',
      live: '#',
    },
    {
      title: 'AI Chat Dashboard',
      description: 'Modern dashboard for managing AI-powered chatbot conversations and analytics.',
      tags: ['React', 'TypeScript', 'OpenAI API', 'Chart.js'],
      image: '/ai-chat-dashboard-analytics.jpg',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">Showcase of my recent work and creations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 bg-primary/10"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-primary/30">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  <a
                    href={project.github}
                    className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
