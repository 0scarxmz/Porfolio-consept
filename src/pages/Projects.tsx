import { Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'RISE',
      description: 'RISE is an AI-powered creator workspace for planning, editing, repurposing, and publishing short-form content across platforms.',
      image: '/rise-dashboard.png', // User will upload their screenshot to the public folder
      stats: 'Main Project',
      links: [
        { name: 'Visit', url: 'https://rise-1nk6.vercel.app' }
      ],
      tags: ['AI', 'Creator Tools', 'Video Editing'],
      status: 'active'
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 mb-2">Projects</h1>
        <p className="text-zinc-600">Playground - Small MVP to Production Apps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#f4f4f5] rounded-3xl p-4 flex flex-col">
            <div className="bg-white rounded-2xl overflow-hidden mb-5 border border-zinc-100 shadow-sm">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-[240px] object-cover object-left-top" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22800%22 height%3D%22400%22 viewBox%3D%220 0 800 400%22%3E%3Crect width%3D%22800%22 height%3D%22400%22 fill%3D%22%2318181b%22%2F%3E%3Ctext x%3D%2250%25%22 y%3D%2245%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 fill%3D%22%23a1a1aa%22 font-family%3D%22sans-serif%22 font-size%3D%2220%22 font-weight%3D%22bold%22%3EWaiting for your image...%3C%2Ftext%3E%3Ctext x%3D%2250%25%22 y%3D%2255%25%22 dominant-baseline%3D%22middle%22 text-anchor%3D%22middle%22 fill%3D%22%2371717a%22 font-family%3D%22sans-serif%22 font-size%3D%2214%22%3EUpload to public/rise-dashboard.png%3C%2Ftext%3E%3C%2Fsvg%3E';
                }}
              />
            </div>
            <div className="px-2 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-xl font-bold text-zinc-900">{project.title}</h3>
                <button className="text-zinc-600 hover:text-zinc-900">
                  <Star className="w-5 h-5" />
                </button>
              </div>
              {project.stats && (
                <p className="text-sm text-zinc-600 mb-3">{project.stats}</p>
              )}
              <p className="text-sm text-zinc-800 mb-6 flex-1 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto mb-5">
                <div className="flex gap-2">
                  {project.links.map(link => (
                    <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors">
                      {link.name}
                    </a>
                  ))}
                </div>
                {project.status === 'active' && (
                  <span className="px-3 py-1 bg-[#dcfce7] text-green-800 text-xs font-semibold rounded-full">
                    active
                  </span>
                )}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 bg-white text-zinc-700 text-xs font-medium rounded-full border border-zinc-200 shadow-sm">
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
