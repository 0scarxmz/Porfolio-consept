export default function About() {
  return (
    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">Aman</h1>
      
      <div className="text-xs font-semibold text-zinc-500 tracking-wider uppercase mb-6 flex flex-wrap gap-2">
        <span>FULL-STACK DEV</span> • <span>AI ENGINEER</span> • <span>LLMS</span> • <span>TRAVEL</span> • <span>MUSIC</span> • <span>F1</span> • <span>READING</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {['React', 'LLM', 'Rails', 'Next.js', 'TypeScript', 'Postgres', 'Redis'].map(tag => (
          <span key={tag} className="px-3 py-1 bg-white border border-zinc-200 text-zinc-600 text-xs font-medium rounded-full shadow-sm">
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-10 text-zinc-800 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Who I Am</h2>
          <p>
            Hello! I'm Aman, a Bengaluru-based engineer passionate about building tools that simplify people's lives.<br />
            I've been coding since 2018, writing about AI, LLMs, frontend, backend, Rails and databases.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">What I Do</h2>
          <p>
            Currently a Founding Engineer at <a href="#" className="underline underline-offset-4 hover:text-black">Kay.ai</a>, building workflow automation for insurance brokers. I focus on building practical, user-facing products - less demo energy, more things people actually use daily.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">My Journey</h2>
          <p>
            Co-founder of Dreamboat.ai, Engagebud and Influencerbit — led product development and design across multiple startups. Recently shipped Promptsmint (100+ daily users), an iOS app, and several micro-builds, keeping the shipping momentum going.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Vision</h2>
          <p>
            LLMs and AI will automate the mundane and reshape how we work. I strive to stay at the forefront of this transformation.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Beyond Code</h2>
          <p>
            Love techno & house music, follow F1 (Max), play chess, and read regularly. Travelled recently to Bali, and a month in Thailand/Vietnam in 2025.
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
