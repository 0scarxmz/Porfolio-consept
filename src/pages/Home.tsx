import { motion } from 'motion/react';
import { GitHubCalendar } from 'react-github-calendar';

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
    <div className="max-w-[760px] animate-in fade-in slide-in-from-bottom-4 duration-500 pt-16">
      <div className="mb-14 relative">
        <div className="inline-block relative">
          <h1 className="text-4xl sm:text-[3.5rem] leading-none font-medium tracking-tight mb-2 relative z-10 px-2 py-1 -ml-2 text-zinc-900">
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
              <p className="text-xs sm:text-sm font-medium text-gray-800 leading-tight">
                <span className="inline">Connect with me on X</span>
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-2.5 sm:px-3 py-1 bg-black text-white rounded-full text-xs font-medium group-hover:scale-105 group-active:scale-95 transition-transform">Follow</span>
            </div>
          </div>
        </a>
      </div>

      <div className="text-sm sm:text-lg tracking-wider font-light space-y-2 md:space-y-4">
        <p className="space-x-1">
          <span className="text-md sm:text-lg">I turn fuzzy ideas into live Products <em className="text-zinc-600 italic">(quickly)</em> full-stack Builder.</span>
        </p>
        
        <p className="text-sm text-gray-500">
          This is my personal website where I publish projects, apps, and practical engineering notes.
        </p>

        <div className="space-x-1">
          <span>Currently building</span><a href="https://rise-1nk6.vercel.app" target="_blank" rel="noopener noreferrer" className="text-zinc-900 underline hover:bg-gray-200 hover:text-gray-900 p-1 rounded-lg">RISE</a><br/>
          <p>I've been building it for the past month as my main project to see how much I improve, learn new patterns, push my engineering limits, etc.</p><br/>
        </div>

        <div className="space-x-1">
          <span>You can talk to me about</span> <span className="text-zinc-900 font-medium">AI, new ideas, life, or anything else.</span><br/>
          <div className="">
            <span>Say Hi on</span> <a href="https://x.com/SentionalNLMB" target="_blank" rel="noopener noreferrer" className="underline font-bold">X</a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-12">
        <h2 className="text-xl font-semibold text-zinc-900 mb-4">My Contributions</h2>
        <div className="p-4 sm:p-6 rounded-xl border border-zinc-200 bg-white shadow-sm w-full overflow-hidden">
          <div className="w-full [&_svg]:w-full [&_svg]:h-auto">
            <GitHubCalendar 
              username="0scarxmz" 
              colorScheme="light"
              blockSize={10}
              blockMargin={3}
              fontSize={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
