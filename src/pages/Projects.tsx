import { Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Promptsmint',
      description: 'A curated prompt library with optimized prompts for business and personal tasks across various domains like writing,...',
      image: 'https://picsum.photos/seed/prompt/600/400',
      stats: '100+ Daily Active Users | 130+ Prompts',
      links: [
        { name: 'Visit', url: '#' },
        { name: 'GitHub', url: '#' }
      ],
      tags: ['AI', 'Prompts', 'Productivity'],
      status: 'active'
    },
    {
      title: 'amankumar.ai Website',
      description: 'My Personal website',
      image: 'https://picsum.photos/seed/website/600/400',
      stats: 'Crafted from scratch with Next.js, TailwindCSS, and ShadCN',
      links: [
        { name: 'Visit', url: '#' }
      ],
      tags: ['Personal'],
      status: 'active'
    },
    {
      title: 'AidenGPT',
      description: 'AI-powered productivity platform with 20+ tools for writing, content creation, SEO, text analysis & more',
      image: 'https://picsum.photos/seed/aiden/600/400',
      stats: '',
      links: [
        { name: 'Visit', url: '#' }
      ],
      tags: ['AI', 'Productivity', 'Writing', 'SEO'],
      status: 'active'
    },
    {
      title: 'godaddycheck',
      description: 'Simple Python package and CLI tool for checking domain availability using the GoDaddy API',
      image: 'https://picsum.photos/seed/domain/600/400',
      stats: '',
      links: [
        { name: 'PyPI', url: '#' },
        { name: 'GitHub', url: '#' }
      ],
      tags: ['Python', 'CLI', 'API', 'Domain', 'GoDaddy'],
      status: 'active'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-2">Projects</h1>
        <p className="text-zinc-600">Playground - Small MVP to Production Apps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white border border-zinc-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="h-48 bg-zinc-100 overflow-hidden border-b border-zinc-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-bold text-zinc-900">{project.title}</h3>
                <button className="text-zinc-400 hover:text-zinc-600">
                  <Star className="w-5 h-5" />
                </button>
              </div>
              {project.stats && (
                <p className="text-xs font-medium text-zinc-500 mb-2">{project.stats}</p>
              )}
              <p className="text-sm text-zinc-600 mb-4 line-clamp-2 flex-1">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className="flex gap-2">
                  {project.links.map(link => (
                    <a key={link.name} href={link.url} className="px-3 py-1.5 bg-zinc-900 text-white text-xs font-medium rounded-md hover:bg-zinc-800 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
                {project.status === 'active' && (
                  <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    active
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
