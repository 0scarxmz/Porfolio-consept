import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

const COLORS = [
  '#F97316', // orange
  '#3B82F6', // blue
  '#10B981', // emerald
  '#8B5CF6', // violet
  '#EC4899', // pink
  '#EAB308', // yellow
];

function ProjectCard({ project, isStarred, onToggleStar, onHoverStart, onHoverEnd }: { project: any, isStarred: boolean, onToggleStar: (title: string) => void, onHoverStart: (title: string, color: string) => void, onHoverEnd: () => void }) {
  const [nameColor, setNameColor] = useState('#18181B'); // zinc-900

  const handleMouseEnter = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    setNameColor(randomColor);
    onHoverStart(project.title, randomColor);
  };

  const handleMouseLeave = () => {
    setNameColor('#18181B');
    onHoverEnd();
  };

  return (
    <>
      <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="bg-[#f1f1f1] rounded-[20px] p-2.5 flex flex-col transition-transform duration-300 hover:scale-[1.02] cursor-none relative"
      >
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
            <h3 
              className="text-[17px] font-semibold transition-colors duration-300"
              style={{ color: nameColor }}
            >
              {project.title}
            </h3>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onToggleStar(project.title);
              }}
              className={`transition-colors mt-0.5 ${isStarred ? 'text-zinc-900' : 'text-zinc-400 hover:text-zinc-600'}`}
              style={{ cursor: 'pointer' }}
            >
              <Star className={`w-[18px] h-[18px] ${isStarred ? 'fill-current' : ''}`} />
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
              {project.links.map((link: any) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-3 py-1 bg-zinc-900 text-white text-[12px] font-medium rounded-md hover:bg-zinc-800 transition-colors"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => e.stopPropagation()}
                >
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
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-2.5 py-1 bg-white text-zinc-600 text-[11px] font-medium rounded-full border border-zinc-200/80 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default function Projects() {
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [starredProjects, setStarredProjects] = useState<string[]>(['RISE']);
  const [hoveredProject, setHoveredProject] = useState<{title: string, color: string} | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

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
          <ProjectCard 
            key={project.title} 
            project={project} 
            isStarred={starredProjects.includes(project.title)} 
            onToggleStar={toggleStar} 
            onHoverStart={(title, color) => setHoveredProject({ title, color })}
            onHoverEnd={() => setHoveredProject(null)}
          />
        ))}
      </div>

      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {hoveredProject && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="fixed pointer-events-none z-[9999] flex items-start"
              style={{ 
                x: cursorXSpring, 
                y: cursorYSpring,
                left: 0,
                top: 0
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-md">
                <path d="M0 0L7.5 20.5L11.5 13.5L19.5 11.5L0 0Z" fill={hoveredProject.color} />
              </svg>
              <div 
                className="px-3 py-1.5 rounded-full text-white text-sm font-medium shadow-md whitespace-nowrap ml-1 mt-6"
                style={{ backgroundColor: hoveredProject.color }}
              >
                {hoveredProject.title}
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
}
