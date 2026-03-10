import React from 'react';

const IsometricGrid = () => {
  const gridSize = 60;
  const cellSize = 56;

  const colors = ['#86efac', '#93c5fd', '#fca5a5', '#fde047', '#d8b4fe', '#fdba74', '#f9a8d4', '#5eead4'];

  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center pointer-events-none">
      <div 
        className="relative flex flex-wrap pointer-events-auto shrink-0"
        style={{
          width: gridSize * cellSize,
          height: gridSize * cellSize,
          transform: 'rotateX(60deg) rotateZ(-45deg)',
          transformOrigin: 'center center',
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, i) => {
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div
              key={i}
              className="relative border-t border-l border-zinc-200 transition-colors cursor-pointer"
              style={{
                width: cellSize,
                height: cellSize,
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' shape-rendering='crispEdges'%3E%3Cpath d='M0 4H8M4 0V8' stroke='%2318181b' stroke-width='1'/%3E%3C/svg%3E")`,
                backgroundPosition: '-4px -4px',
                backgroundRepeat: 'no-repeat',
                transitionDuration: '700ms',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = color;
                e.currentTarget.style.transitionDuration = '0ms';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transitionDuration = '700ms';
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default function Contact() {
  return (
    <div className="relative min-h-[80vh] flex flex-col pt-10 items-center overflow-hidden">
      <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-500 mt-8">
        
        <div className="relative inline-flex flex-col items-start">
          {/* Grid positioned behind the content, bounded exactly to this wrapper */}
          <div className="absolute top-0 left-0 right-0 -bottom-[150px] z-0 pointer-events-none">
            <IsometricGrid />
          </div>
          
          <div className="relative z-10 flex flex-col items-start pointer-events-none w-full">
            <h1 className="text-4xl md:text-[53px] font-medium tracking-tight text-zinc-900 mb-4">Contact</h1>
            <p className="text-base md:text-[16.5px] text-zinc-800 mb-8 max-w-md md:max-w-none">
              If you're building in / excited about AI or just wanna chat, say hi on X!
            </p>
            
            <div className="inline-flex items-center justify-between p-3 pr-3.5 bg-white border border-zinc-200 rounded-xl shadow-sm pointer-events-auto gap-6">
              <div className="flex items-center gap-3 pl-1">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8 fill-current text-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                <span className="text-[14px] font-medium text-zinc-900">Connect with me on X</span>
              </div>
              <a 
                href="https://x.com/SentionalNLMB" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-3 py-1 bg-black text-white text-[12px] font-medium rounded-full hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95"
              >
                Follow
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
