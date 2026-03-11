import React, { useRef, useState } from 'react';

const ToolCard: React.FC<{ tool: any }> = ({ tool }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    boxShadow: '0 10px 40px rgba(0,0,0,0.12)'
  });
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });
  const [contentStyle, setContentStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    
    // Dodge effect: cursor pushes the card away
    const translateX = deltaX * -15;
    const translateY = deltaY * -15;
    
    // Tilt effect: cursor pushes the hovered side UP (positive rotation for Y, negative for X)
    const rotateX = deltaY * 25; // Reverted sign to push UP
    const rotateY = deltaX * -25; // Reverted sign to push UP
    
    // Dynamic shadow moves opposite to the mouse
    const shadowX = deltaX * -20;
    const shadowY = deltaY * -20;
    
    setStyle({
      transform: `perspective(1000px) translate3d(${translateX}px, ${translateY}px, 20px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
      boxShadow: `${shadowX}px ${shadowY + 20}px 50px rgba(0,0,0,0.3)`,
      transition: 'transform 0.1s ease-out, box-shadow 0.1s ease-out',
      zIndex: 50,
    });

    // Parallax effect for the inner content
    setContentStyle({
      transform: `translateZ(40px)`,
      transition: 'transform 0.1s ease-out',
    });

    // Dynamic glare effect following the cursor
    setGlareStyle({
      background: `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0) 60%)`,
      opacity: 1,
      transition: 'opacity 0.1s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: `perspective(1000px) translate3d(0px, 0px, 0px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      boxShadow: `0 10px 40px rgba(0,0,0,0.12)`,
      transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out',
      zIndex: 1,
    });
    setContentStyle({
      transform: `translateZ(0px)`,
      transition: 'transform 0.5s ease-out',
    });
    setGlareStyle({
      opacity: 0,
      transition: 'opacity 0.5s ease-out',
    });
  };

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      ref={ref as any}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      className="relative flex items-center gap-4 p-4 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-md border border-white/60 rounded-2xl cursor-pointer block"
    >
      {/* Glare overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-overlay"
        style={glareStyle}
      />
      
      {/* 3D Parallax Content */}
      <div style={contentStyle} className="relative z-10 flex items-center gap-4 w-full">
        {tool.icon}
        <div>
          <h3 className="text-[15px] font-medium text-zinc-900">{tool.name}</h3>
          <p className="text-[13px] text-zinc-500">{tool.category}</p>
        </div>
      </div>
    </a>
  );
}

export default function Tools() {
  const tools = [
    {
      name: 'Cursor',
      category: 'IDE',
      url: 'https://cursor.com',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60 p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=cursor.com&sz=256" alt="Cursor" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'ChatGPT',
      category: 'Productivity',
      url: 'https://chatgpt.com',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60 p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=chatgpt.com&sz=256" alt="ChatGPT" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Notion',
      category: 'Productivity',
      url: 'https://notion.so',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60 p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=notion.so&sz=256" alt="Notion" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Linear',
      category: 'Project Management',
      url: 'https://linear.app',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60 p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=linear.app&sz=256" alt="Linear" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Antigravity',
      category: 'IDE',
      url: 'https://antigravity.google',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60 p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=antigravity.google&sz=256" alt="Antigravity" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Codex',
      category: 'App',
      url: 'https://chatgpt.com/codex/get-started',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-md shadow-zinc-300/60">
          <img src="https://9to5mac.com/wp-content/uploads/sites/6/2026/02/codex-app-icon-openai.jpg" alt="Codex" className="w-full h-full object-cover scale-[1.6]" referrerPolicy="no-referrer" />
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Shovels</h1>
        <p className="text-zinc-600">Tools I frequently use to make life easier</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[520px] w-full">
        {tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}
