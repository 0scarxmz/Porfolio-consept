export default function About() {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">Oscar</h1>
      
      <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-6 flex flex-wrap gap-2">
        <span>FULL-STACK DEV</span> • <span>FRONTEND</span> • <span>MUSIC</span> • <span>BASEBALL</span> • <span>FORTNITE</span> • <span>READING</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'JavaScript'].map(tag => (
          <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-10 text-zinc-800 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Who I Am</h2>
          <p>
            Hello! I'm Oscar, a passionate full-stack developer dedicated to building intuitive and scalable web applications.<br />
            I love turning complex problems into elegant, user-friendly solutions through clean code and thoughtful design.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">What I Do</h2>
          <p>
            I specialize in front-end and full-stack development, creating seamless user experiences. Lately, I've been heavily into "vibe coding"—just getting in the zone and building things intuitively. I've been enjoying it a lot and am absolutely loving the process! I focus on building practical, high-quality products that people actually enjoy using every day.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">My Journey</h2>
          <p>
            My path into tech started with a deep curiosity for how things work on the web. Over the years, I've honed my skills through hands-on projects, continuous learning, and a drive to build products that make an impact.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Vision</h2>
          <p>
            I aim to keep growing as a developer, contributing to meaningful projects, and building software that makes a difference. I'm always looking for the next challenge to push my boundaries and learn new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Beyond Code</h2>
          <p>
            When I'm not coding, I'm usually playing Fortnite. I'm also a passionate baseball fan, and I absolutely love listening to music for just about anything I do.
          </p>
        </section>
      </div>

      <div className="mt-12 flex gap-4">
        <button className="px-6 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors">
          Get in Touch
        </button>
        <button className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors flex items-center gap-2">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
          E-Mail
        </button>
      </div>
    </div>
  );
}
