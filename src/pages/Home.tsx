import { motion } from 'motion/react';

const Droplets = () => {
  const droplets = [
    { left: '15%', delay: 0, duration: 3.5, width: 1, height: 40 },
    { left: '35%', delay: 1.5, duration: 2.8, width: 2, height: 80 },
    { left: '55%', delay: 0.5, duration: 4.2, width: 1, height: 60 },
    { left: '75%', delay: 2.2, duration: 3.0, width: 3, height: 100 },
    { left: '85%', delay: 1.2, duration: 3.8, width: 1.5, height: 50 },
    { left: '95%', delay: 0.8, duration: 2.5, width: 2, height: 120 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-0 rounded-2xl">
      {droplets.map((d, i) => (
        <div key={i} className="absolute top-0 bottom-0 w-16 -ml-8" style={{ left: d.left }}>
          {/* Falling Drop */}
          <motion.div
            initial={{ top: "-100vh", opacity: 0 }}
            animate={{ 
              top: ["-100vh", "150%"], 
              opacity: [0, 1, 1, 0]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: d.duration, 
              delay: d.delay,
              ease: "linear",
              times: [0, 0.1, 0.9, 1]
            }}
            className="absolute bg-gradient-to-b from-purple-300/0 via-purple-400 to-purple-500 rounded-full left-1/2 -translate-x-1/2"
            style={{
              width: d.width,
              height: d.height
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-14 relative inline-block">
        <h1 className="text-[3.5rem] leading-none font-bold tracking-tight mb-2 relative z-10 px-2 py-1 -ml-2">
          Hey, I'm Oscar
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, delay: 1.1, ease: "easeInOut" }}
            className="absolute left-0 top-0 bottom-0 bg-zinc-200/60 rounded-md -z-10"
          />
        </h1>
        {/* Yellow cursor decoration */}
        <motion.div
          initial={{ left: "0%", top: "60%", opacity: 0 }}
          animate={{ 
            left: ["0%", "0%", "100%", "100%"], 
            top: ["60%", "60%", "60%", "75%"],
            opacity: [0, 1, 1, 1] 
          }}
          transition={{ 
            duration: 3, 
            delay: 0.5, 
            ease: "easeInOut",
            times: [0, 0.2, 0.8, 1]
          }}
          className="absolute text-yellow-400 transform -ml-2 z-20 pointer-events-none"
        >
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#FACC15" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}>
            <path d="M4 4L11.07 20.97L13.58 13.58L20.97 11.07L4 4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-xl mb-12 shadow-sm">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-black"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
          <span className="text-sm font-medium text-zinc-800">Connect with me on X</span>
        </div>
        <a href="https://x.com/SentionalNLMB" target="_blank" rel="noopener noreferrer" className="px-4 py-1.5 bg-black text-white text-sm font-medium rounded-full hover:bg-zinc-800 transition-colors">
          Follow
        </a>
      </div>

      <div className="space-y-6 text-zinc-700 leading-relaxed">
        <p className="text-lg">
          I turn fuzzy ideas into live Products <em className="text-zinc-500">(quickly)</em> full-stack Builder.
        </p>
        
        <p className="text-sm text-zinc-500">
          This is my personal website where I publish projects, apps, and practical engineering notes.
        </p>

        <div className="space-y-2">
          <p>
            Currently building <a href="https://rise-1nk6.vercel.app" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-black">RISE</a>
          </p>
          <p>
            I've been building it for the past month as my main project to see how much I improve, learn new patterns, push my engineering limits, etc.
          </p>
        </div>

        <div className="pt-4 space-y-2">
          <p>
            You can talk to me about <strong>AI, new ideas, life, or anything else.</strong>
          </p>
          <p className="flex items-center gap-1">
            Say Hi on <a href="https://x.com/SentionalNLMB" target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 hover:text-black">X</a>
          </p>
        </div>
      </div>

      <div className="mt-12">
        <a href="#" className="block group">
          <div className="flex gap-6 p-4 bg-zinc-100/50 border border-zinc-200 rounded-2xl hover:bg-zinc-100 transition-colors relative">
            <Droplets />
            <div className="w-48 h-32 rounded-xl overflow-hidden shrink-0 bg-zinc-200 z-10">
              <img src="https://picsum.photos/seed/flight/400/300" alt="Flight" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="flex flex-col justify-center py-2 z-10">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Check this out</span>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">The Long Flight Test</h3>
              <p className="text-sm text-zinc-600 line-clamp-2 mb-4">
                A simple question that reveals the true weight of our relationships: Would you want to sit next to this person on a long flight?
              </p>
              <span className="text-sm font-medium text-zinc-900 flex items-center gap-1 group-hover:gap-2 transition-all">
                Read more <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
