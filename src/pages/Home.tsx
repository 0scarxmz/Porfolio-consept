import { motion } from 'motion/react';

const Droplets = () => {
  const droplets = [
    { left: '15%', delay: 0, duration: 3.5, width: 1, height: 40 },
    { left: '35%', delay: 1.5, duration: 2.8, width: 1, height: 35 },
    { left: '55%', delay: 0.5, duration: 4.2, width: 1, height: 45 },
    { left: '75%', delay: 2.2, duration: 3.0, width: 1, height: 30 },
    { left: '85%', delay: 1.2, duration: 3.8, width: 1, height: 40 },
    { left: '95%', delay: 0.8, duration: 2.5, width: 1, height: 35 },
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
            className="absolute bg-gradient-to-b from-white/0 via-pink-200 to-pink-300 rounded-full left-1/2 -translate-x-1/2"
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
    <div className="max-w-full md:max-w-5xl lg:max-w-6xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 sm:pt-12 md:pt-16">
      <div className="mb-8 sm:mb-10 md:mb-14 relative">
        <div className="inline-block relative">
          <h1 className="text-4xl sm:text-5xl md:text-7xl leading-none font-normal tracking-tight mb-2 relative z-10 px-2 py-1 -ml-2 text-zinc-900">
            Hey, I'm Oscar
            <motion.div
              initial={{ width: "0%", height: "0%" }}
              animate={{ width: "100%", height: "100%" }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeInOut" }}
              className="absolute left-0 top-0 bg-[#E5E7EB] rounded-sm -z-10"
            />
            {/* Yellow cursor decoration */}
            <motion.div
              initial={{ left: "0%", top: "0%", opacity: 0 }}
              animate={{ left: "100%", top: "100%", opacity: 1 }}
              transition={{ 
                left: { duration: 1.2, delay: 0.8, ease: "easeInOut" },
                top: { duration: 1.2, delay: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.3, delay: 0.5 }
              }}
              className="absolute text-yellow-400 z-20 pointer-events-none"
              style={{ marginLeft: '-6px', marginTop: '-6px' }}
            >
              <svg width="36" height="36" viewBox="0 0 24 24" fill="#FACC15" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.2))' }}>
                <path d="M4 4L11.07 20.97L13.58 13.58L20.97 11.07L4 4Z" />
              </svg>
            </motion.div>
          </h1>
        </div>
      </div>

      <div className="my-4 mb-12">
        <a href="https://x.com/SentionalNLMB" target="_blank" rel="noopener noreferrer" className="block" aria-label="Follow on X/Twitter">
          <div className="flex flex-row items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white shadow-sm hover:shadow-md active:shadow-inner transition-all duration-300 group w-full">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.47h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.287Z"></path>
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base md:text-xl font-normal text-gray-800 leading-tight">
                <span className="inline">Connect with me on X</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-3 sm:px-4 md:px-5 py-1.5 md:py-2 bg-black text-white rounded-full text-xs sm:text-sm md:text-lg font-normal group-hover:scale-105 group-active:scale-95 transition-transform">Follow</span>
            </div>
          </div>
        </a>
      </div>

      <div className="text-base sm:text-lg md:text-2xl tracking-wider font-light space-y-4 sm:space-y-6 md:space-y-8">
        <p className="space-x-1">
          <span className="text-lg sm:text-xl md:text-3xl">I turn fuzzy ideas into live Products <em className="text-zinc-600 italic">(quickly)</em> full-stack Builder.</span>
        </p>
        
        <p className="text-sm sm:text-base md:text-xl text-gray-500">
          This is my personal website where I publish projects, apps, and practical engineering notes.
        </p>

        <div className="space-x-1">
          <span>Currently building</span> <a href="https://rise-1nk6.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline hover:bg-gray-200 hover:text-gray-900 p-1 rounded-lg">RISE</a><br/>
          <p>I've been building it for the past month as my main project to see how much I improve, learn new patterns, push my engineering limits, etc.</p><br/>
        </div>

        <div className="space-x-1">
          <span>You can talk to me about</span> <span className="text-zinc-900 font-normal">AI, new ideas, life, or anything else.</span><br/>
          <div className="">
            <span>Say Hi on</span> <a href="https://x.com/SentionalNLMB" target="_blank" rel="noopener noreferrer" className="underline font-normal">X</a>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-16">
        <a href="#" className="block -mx-2 md:mx-0">
          <div className="cursor-pointer group active:scale-[0.98]" tabIndex={0}>
            <div className="rounded-xl text-zinc-900 bg-neutral-200 border border-zinc-300 hover:border-zinc-600 active:border-zinc-600 transition-colors overflow-hidden shadow-sm hover:shadow-md relative">
              <Droplets />
              <div className="flex flex-col sm:flex-row relative z-10">
                <div className="relative w-full sm:w-48 md:w-64 h-40 sm:h-auto flex-shrink-0">
                  <img src="https://picsum.photos/seed/flight/400/300" alt="Flight" className="object-cover group-hover:scale-105 transition-transform duration-300 absolute h-full w-full left-0 top-0 right-0 bottom-0" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 p-4 sm:p-5 md:p-8 flex flex-col justify-between min-h-0 sm:min-h-[160px] bg-neutral-200/80 backdrop-blur-sm">
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs sm:text-sm md:text-base font-normal text-zinc-600 uppercase tracking-wider">Check this out</span>
                    </div>
                    <h2 className="text-lg sm:text-xl md:text-3xl font-normal text-zinc-900 line-clamp-2 group-hover:text-black transition-colors leading-tight">The Long Flight Test</h2>
                    <p className="text-sm sm:text-base md:text-xl text-gray-600 line-clamp-2 sm:line-clamp-3 leading-snug sm:leading-relaxed">
                      A simple question that reveals the true weight of our relationships: Would you want to sit next to this person on a long flight?
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-sm sm:text-base md:text-lg text-zinc-600 mt-3 sm:mt-4 md:mt-6 group-hover:text-zinc-800 transition-colors pt-3 border-t border-zinc-300 sm:border-0 sm:pt-0">
                    <span>Read more</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform flex-shrink-0"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
