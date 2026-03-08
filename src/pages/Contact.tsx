export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '32px 32px' }}>
      </div>
      
      <div className="text-center z-10 max-w-lg">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">Contact</h1>
        <p className="text-lg text-zinc-600 mb-8">
          If you're building in / excited about AI or just wanna chat, say hi on X!
        </p>
        
        <div className="inline-flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl shadow-sm min-w-[300px]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black rounded-md flex items-center justify-center text-white">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
            </div>
            <span className="text-sm font-medium text-zinc-700">Connect with me on X</span>
          </div>
          <a 
            href="https://x.com/SentionalNLMB" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors ml-4"
          >
            Follow
          </a>
        </div>
      </div>
    </div>
  );
}
