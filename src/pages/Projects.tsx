import { Star } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, AnimatePresence } from 'motion/react';
import { createPortal } from 'react-dom';

const COLORS = [
  '#F97316', // orange
  '#3B82F6', // blue
  '#10B981', // emerald
  '#8B5CF6', // violet
  '#EC4899', // pink
  '#EAB308', // yellow
];

const ProjectCard: React.FC<{ project: any, isStarred: boolean, onToggleStar: (title: string) => void, onHoverStart: (title: string, color: string) => void, onHoverEnd: () => void }> = ({ project, isStarred, onToggleStar, onHoverStart, onHoverEnd }) => {
  const [nameColor, setNameColor] = useState('#18181B'); // zinc-900

  const handleMouseEnter = () => {
    const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
    if (project.stats !== 'Main Project') {
      setNameColor(randomColor);
    }
    onHoverStart(project.title, randomColor);
  };

  const handleMouseLeave = () => {
    setNameColor('#18181B');
    onHoverEnd();
  };

  return (
    <motion.div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="bg-[#f1f1f1] rounded-[20px] p-2.5 flex flex-col relative h-[400px]"
    >
        <div className="bg-white rounded-[14px] overflow-hidden mb-2.5 shadow-sm shrink-0" style={{ height: '60%' }}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover object-top" 
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="px-1.5 flex flex-col flex-1 min-h-0" style={{ height: '40%' }}>
          <div className="flex justify-between items-start mb-0.5">
            <h3 
              className="text-[14px] font-normal transition-colors duration-300"
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
              <Star className={`w-[15px] h-[15px] ${isStarred ? 'fill-current' : ''}`} />
            </button>
          </div>
          {project.stats && (
            <p className="text-[11px] font-normal text-zinc-500 mb-1.5">{project.stats}</p>
          )}
          <p className="text-[12px] font-normal text-zinc-700 mb-3 flex-1 leading-relaxed whitespace-pre-line">
            {project.description}
          </p>
          
          <div className="flex items-center justify-between mt-auto mb-3">
            <div className="flex gap-1.5">
              {project.links.map((link: any) => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-2.5 py-1 bg-zinc-900 text-white text-[10px] font-normal rounded-md hover:bg-zinc-800 transition-colors"
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {link.name}
                </a>
              ))}
            </div>
            {project.status === 'active' && (
              <span className="px-2 py-0.5 bg-[#c6f6d5] text-green-800 text-[9px] font-normal rounded-full">
                active
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-2 py-0.5 bg-white text-zinc-600 text-[9px] font-normal rounded-full border border-zinc-200/80 shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
  );
}

export default function Projects() {
  const [savedImage, setSavedImage] = useState<string | null>(null);
  const [starredProjects, setStarredProjects] = useState<string[]>(['RISE']);
  const [hoveredProject, setHoveredProject] = useState<{title: string, color: string} | null>(null);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

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
      image: savedImage || 'https://picsum.photos/seed/rise/800/450',
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h1 className="text-4xl md:text-[52px] font-normal tracking-tight text-zinc-900 mb-2">Projects</h1>
        <p className="text-[14px] font-normal text-zinc-600">Playground - Small MVP to Production Apps</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.4 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="fixed pointer-events-none z-[9999] flex items-start"
              style={{ 
                x: cursorX, 
                y: cursorY,
                left: 0,
                top: 0,
                transformOrigin: "0px 0px"
              }}
            >
              <div 
                className="px-3 py-1.5 rounded-full text-zinc-900 text-[12px] font-normal shadow-md whitespace-nowrap ml-4 mt-5"
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
