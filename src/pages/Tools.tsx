export default function Tools() {
  const tools = [
    {
      name: 'Cursor',
      category: 'IDE',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=cursor.com&sz=256" alt="Cursor" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'ChatGPT',
      category: 'Productivity',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=chatgpt.com&sz=256" alt="ChatGPT" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Notion',
      category: 'Productivity',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=notion.so&sz=256" alt="Notion" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Linear',
      category: 'Project Management',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=linear.app&sz=256" alt="Linear" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Antigravity',
      category: 'IDE',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=antigravity.google&sz=256" alt="Antigravity" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    },
    {
      name: 'Codex',
      category: 'App',
      icon: (
        <div className="w-11 h-11 rounded-xl overflow-hidden flex items-center justify-center bg-white border border-zinc-200/60 shadow-sm p-1.5">
          <img src="https://www.google.com/s2/favicons?domain=openai.com&sz=256" alt="Codex" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </div>
      )
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold tracking-tight text-zinc-900 mb-4">Shovels</h1>
        <p className="text-zinc-600">Tools I frequently use to make life easier</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl w-full">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-4 p-4 bg-gradient-to-b from-white/80 to-white/40 backdrop-blur-md border border-white/60 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all hover:-translate-y-0.5">
            {tool.icon}
            <div>
              <h3 className="text-[15px] font-medium text-zinc-900">{tool.name}</h3>
              <p className="text-[13px] text-zinc-500">{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
