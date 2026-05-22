import { Github, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    // {
    //   title: 'Medhey App',
    //   description: 'A Next.js-based eCommerce application with server-side rendering, responsive UI, and dynamic product navigation.',
    //   tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
    //   image: '/medhey.png',
    // },
    {
      title: 'ToDo List App',
      description: 'A ToDo List App where users can add, manage, and order their tasks according to their necessity.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: '/todo.png',
      github: 'https://github.com/Shresthakhya7/todolist',
      live: 'https://Shresthakhya7.github.io/todolist',
    },
    {
      title: 'Quote Generator',
      description: 'An app to generate quote and have a feature to change themes and font size increment.',
      tags: ['React', 'JavaScript', 'HTML', 'CSS'],
      image: '/quote.png',
      github: 'https://github.com/Shresthakhya7/Quote-Generator',
      live: 'https://qgenerate.netlify.app/',
    },
    {
      title: 'Ecommerce Beverage Website',
      description: 'A simple project of an ecommerce platform where users can place orders and buy items.',
      tags: ['HTML', 'CSS', 'JS'],
      image: '/ecom.png',
      github: 'https://github.com/Shresthakhya7/project',
      live: 'https://Shresthakhya7.github.io/project',
    },
    {
      title: 'Blog Management Application',
      description: 'Blog Management Application is a project developed using Django Rest Framework and intgerated with Frontend application React Js.',
      tags: ['React', 'Python', 'Django', 'Django REST Frameork'],
      image: '/blog.png',
      github: 'https://github.com/Shresthakhya7/API/tree/master',
    },
    {
      title: 'Movie Recommendation System',
      description: 'An academic project developed using collaborative filtering with cosine similarity and Pearson correlation coefficient to recommend movies to users.',
      tags: ['HTML', 'CSS', 'JS', 'Bootstraps', 'Python', 'Django'],
      image: '/recommend.png',
      github: 'https://github.com/Shresthakhya7/movie-recommendation-system',
    },
    {
      title: 'Movie Projects',
      description: 'Movie Projects was developed using Python with the Django framework. This project is a basic implementation of CRUD operations.',
      tags: ['HTML', 'CSS', 'JS', 'Python', 'Django'],
      image: '/movie.png',
      github: 'https://github.com/Shresthakhya7/python-django-project',
    },
  ];

  return (
    <section id="projects" className="pt-20 lg:pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">Featured Projects</h2>
          <p className="text-base md:text-lg text-muted-foreground">Showcase of my recent work and creations</p>
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
                <div
                  className="
                  absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent 
                  opacity-100 md:opacity-0 
                  md:group-hover:opacity-100 
                  transition-opacity duration-300 
                  flex items-end justify-center pb-4 gap-4
                  "
                >
                  {project.github && (
                    <a
                      href={project.github}
                      className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="p-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
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
