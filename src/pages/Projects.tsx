import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Projects() {
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [starredProjects, setStarredProjects] = useState<string[]>(['RISE']);

  useEffect(() => {
    const stored = localStorage.getItem('rise-project-image');
    if (stored) {
      setSavedImage(stored);
    }
    const storedStars = localStorage.getItem('starred-projects');
    if (storedStars) {
      setStarredProjects(JSON.parse(storedStars));
    }
  }, []);

  const toggleStar = (title: string) => {
    setStarredProjects(prev => {
      const newStars = prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title];
      localStorage.setItem('starred-projects', JSON.stringify(newStars));
      return newStars;
    });
  };

  const baseProjects = [
    {
      title: 'RISE',
      description: 'RISE is an AI-powered creator workspace for planning, editing, repurposing, and publishing short-form content across platforms.',
      image: savedImage || '/rise-dashboard.png',
      stats: 'Main Project',
      links: [
        { name: 'Visit', url: 'https://rise-1nk6.vercel.app' }
      ],
      tags: ['AI', 'Creator Tools', 'Video Editing'],
      status: 'active'
    }
  ];

  // Sort projects so starred ones appear first
  const sortedProjects = [...baseProjects].sort((a, b) => {
    const aStarred = starredProjects.includes(a.title);
    const bStarred = starredProjects.includes(b.title);
    if (aStarred && !bStarred) return -1;
    if (!aStarred && bStarred) return 1;
    return 0;
  });

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <div className="mb-8">
        <h1 className="text-[40px] font-bold tracking-tight text-zinc-900 mb-1">Projects</h1>
        <p className="text-[15px] text-zinc-600">Playground - Small MVP to Production Apps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {sortedProjects.map((project, index) => (
          <div key={project.title} className="bg-[#f1f1f1] rounded-[20px] p-2.5 flex flex-col">
            <div className="bg-white rounded-[14px] overflow-hidden mb-3 shadow-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full aspect-video object-cover object-top" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="px-1.5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-0.5">
                <h3 className="text-[17px] font-semibold text-zinc-900">{project.title}</h3>
                <button 
                  onClick={() => toggleStar(project.title)}
                  className={`transition-colors mt-0.5 ${starredProjects.includes(project.title) ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}
                >
                  <Star className={`w-[18px] h-[18px] ${starredProjects.includes(project.title) ? 'fill-current' : ''}`} />
                </button>
              </div>
              {project.stats && (
                <p className="text-[13px] text-zinc-500 mb-2">{project.stats}</p>
              )}
              <p className="text-[13px] text-zinc-700 mb-4 flex-1 leading-relaxed whitespace-pre-line">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto mb-4">
                <div className="flex gap-1.5">
                  {project.links.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-zinc-900 text-white text-[12px] font-medium rounded-md hover:bg-zinc-800 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
                {project.status === 'active' && (
                  <span className="px-2.5 py-0.5 bg-[#c6f6d5] text-green-800 text-[11px] font-medium rounded-full">
                    active
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-white text-zinc-600 text-[11px] font-medium rounded-full border border-zinc-200/80 shadow-sm">
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
