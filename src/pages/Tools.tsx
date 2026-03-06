export default function Tools() {
  const tools = [
    {
      name: 'Cursor',
      category: 'IDE',
      icon: (
        <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
        </div>
      )
    },
    {
      name: 'ChatGPT',
      category: 'Productivity',
      icon: (
        <div className="w-10 h-10 bg-[#10a37f] rounded-lg flex items-center justify-center text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
      )
    },
    {
      name: 'Notion',
      category: 'Productivity',
      icon: (
        <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-black">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4v16h16V4H4z"></path><path d="M9 8v8"></path><path d="M15 8v8"></path><path d="m9 8 6 8"></path></svg>
        </div>
      )
    },
    {
      name: 'Pycharm',
      category: 'IDE',
      icon: (
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xs">
          PC
        </div>
      )
    },
    {
      name: 'Slack',
      category: 'Communication',
      icon: (
        <div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-black">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10z"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
        </div>
      )
    },
    {
      name: 'Medium',
      category: 'Writing',
      icon: (
        <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full">
        {tools.map((tool) => (
          <div key={tool.name} className="flex items-center gap-4 p-4 bg-white/50 backdrop-blur-sm border border-zinc-200/50 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-0.5">
            {tool.icon}
            <div>
              <h3 className="font-semibold text-zinc-900">{tool.name}</h3>
              <p className="text-xs text-zinc-500">{tool.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
