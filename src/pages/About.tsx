export default function About() {
  return (
    <div className="max-w-full md:max-w-4xl lg:max-w-5xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-12 sm:pt-16 md:pt-24">
      <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-zinc-900 mb-6 md:mb-8">Oscar</h1>
      
      <div className="text-sm md:text-lg font-normal text-zinc-500 tracking-wider uppercase mb-8 md:mb-12 flex flex-wrap gap-3 md:gap-4">
        <span>FULL-STACK DEV</span> • <span>FRONTEND</span> • <span>MUSIC</span> • <span>BASEBALL</span> • <span>FORTNITE</span> • <span>READING</span>
      </div>

      <div className="flex flex-wrap gap-3 md:gap-4 mb-12 md:mb-16">
        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'JavaScript'].map(tag => (
          <span key={tag} className="px-4 py-2 bg-white border border-zinc-200 text-zinc-600 text-sm md:text-xl font-normal rounded-full shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-12 md:space-y-16 text-zinc-800 leading-relaxed text-base md:text-2xl">
        <section>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-4 md:mb-6">Who I Am</h2>
          <p>
            Hello! I'm Oscar, a passionate full-stack developer dedicated to building intuitive and scalable web applications.<br />
            I love turning complex problems into elegant, user-friendly solutions through clean code and thoughtful design.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-4 md:mb-6">What I Do</h2>
          <p>
            I specialize in front-end and full-stack development, creating seamless user experiences. Lately, I've been heavily into "vibe coding"—just getting in the zone and building things intuitively. I've been enjoying it a lot and am absolutely loving the process! I focus on building practical, high-quality products that people actually enjoy using every day.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-4 md:mb-6">My Journey</h2>
          <p>
            My path into tech started with a deep curiosity for how things work on the web. Over the years, I've honed my skills through hands-on projects, continuous learning, and a drive to build products that make an impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-4 md:mb-6">Vision</h2>
          <p>
            I aim to keep growing as a developer, contributing to meaningful projects, and building software that makes a difference. I'm always looking for the next challenge to push my boundaries and learn new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-4 md:mb-6">Beyond Code</h2>
          <p>
            When I'm not coding, I'm usually playing Fortnite. I'm also a passionate baseball fan, and I absolutely love listening to music for just about anything I do.
          </p>
        </section>
      </div>

      <div className="mt-12 md:mt-16 flex flex-wrap gap-4 md:gap-6">
        <button className="px-8 py-3 md:px-10 md:py-4 bg-black text-white text-base md:text-xl font-normal rounded-lg hover:bg-zinc-800 transition-colors">
          Get in Touch
        </button>
        <button className="px-8 py-3 md:px-10 md:py-4 bg-zinc-900 text-white text-base md:text-xl font-normal rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2 md:gap-3">
          <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          E-Mail
        </button>
      </div>
    </div>
  );
}
