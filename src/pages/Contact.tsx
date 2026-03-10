import React from 'react';

const IsometricGrid = () => {
  const gridSize = 60;
  const cellSize = 48;

  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      <div 
        className="relative flex flex-wrap pointer-events-auto shrink-0"
        style={{
          width: gridSize * cellSize,
          height: gridSize * cellSize,
          transform: 'rotateX(60deg) rotateZ(-45deg) translateZ(0)',
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
        }}
      >
        {Array.from({ length: gridSize * gridSize }).map((_, i) => (
          <div
            key={i}
            className="group relative border-t border-l border-zinc-200 hover:bg-[#86efac] hover:duration-0 transition-colors duration-700 cursor-pointer"
            style={{
              width: cellSize,
              height: cellSize,
            }}
          >
            {/* Cross at top-left */}
            <div className="absolute -top-[4px] -left-[4px] w-[8px] h-[8px] pointer-events-none opacity-100">
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900 -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-900 -translate-x-1/2" />
            </div>
          </div>
        ))}
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
          
          <div className="relative z-10 flex flex-col items-start pointer-events-none">
            <h1 className="text-[53px] font-medium tracking-tight text-zinc-900 mb-4">Contact</h1>
            <p className="text-[16.5px] text-zinc-800 mb-8 whitespace-nowrap">
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
                className="px-3 py-1 bg-black text-white text-[12px] font-medium rounded-full hover:bg-zinc-800 transition-colors"
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
