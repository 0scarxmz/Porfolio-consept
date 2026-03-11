export default function About() {
  return (
    <div className="max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 md:pt-24">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">Oscar</h1>
      
      <div className="text-sm font-bold text-zinc-500 tracking-wider uppercase mb-6 flex flex-wrap gap-2">
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
            Hello! I'm Oscar Reyes, a developer passionate about building web applications and experimenting with new technologies. I enjoy creating interactive and visually engaging applications, often using modern development tools and AI-assisted workflows to bring ideas to life.
            <br /><br />
            I'm especially interested in learning through hands-on projects and continuously improving my skills as I build.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">What I Do</h2>
          <p>
            I work on full-stack web applications, focusing on building clean, functional products and improving them through careful testing and iteration. I take a very detail-oriented approach to development and make sure the features I build work reliably before moving forward.
            <br /><br />
            I enjoy refining projects step by step, fixing issues early, and making sure the final result is stable and polished.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">My Journey</h2>
          <p>
            I started programming out of curiosity about how software works. I learned mainly by building projects and experimenting with different technologies.
            <br /><br />
            Recently, coding with AI tools has made development even more exciting. It has accelerated how I build and experiment, and it keeps me motivated to keep learning and creating every day.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Vision</h2>
          <p>
            My goal is to grow as a developer while building impactful technology products. I’m especially interested in artificial intelligence, automation, and creative tools that combine software with real-world applications.
            <br /><br />
            In the future, I hope to contribute to innovative companies while continuing to build ambitious projects and explore new technologies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-zinc-900 mb-3">Beyond Code</h2>
          <p>
            Outside of programming, I enjoy gaming—especially Fortnite, where I’m very competitive. I also love baseball and usually listen to music while coding, which helps me stay focused.
            <br /><br />
            I’m active in the tech community on Twitter, where I follow new tools, products, and development strategies. I enjoy experimenting with new technologies and testing different tools whenever they are released to see how they can improve my workflow and programming experience.
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
