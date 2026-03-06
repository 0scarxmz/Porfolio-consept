import { NavLink } from 'react-router-dom';
import { Home, Briefcase, FolderGit2, FileText, User, Mail, Wrench, Twitter, Linkedin, Github, Instagram } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Sidebar() {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Experience', path: '/experience', icon: Briefcase },
    { name: 'Projects', path: '/projects', icon: FolderGit2 },
    { name: 'Blogs', path: '/blogs', icon: FileText },
    { name: 'About', path: '/about', icon: User },
    { name: 'Contact', path: '/contact', icon: Mail },
    { name: 'Tools', path: '/tools', icon: Wrench },
  ];

  const connectItems = [
    { name: 'X (Twitter)', url: 'https://x.com/SentionalNLMB', icon: Twitter },
    { name: 'LinkedIn', url: '#', icon: Linkedin },
    { name: 'Medium', url: '#', icon: FileText },
    { name: 'Github', url: '#', icon: Github },
    { name: 'Instagram', url: '#', icon: Instagram },
  ];

  return (
    <aside className="w-64 h-screen bg-[#f4f4f5] border-r border-zinc-200 flex flex-col fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-zinc-300 overflow-hidden shrink-0">
          <img src="https://picsum.photos/seed/aman/100/100" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div>
          <h2 className="font-medium text-zinc-900">Oscar</h2>
          <p className="text-sm text-zinc-500">Dev</p>
        </div>
      </div>

      <nav className="flex-1 px-4 py-2 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              cn(
                'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                isActive
                  ? 'bg-zinc-900 text-white'
                  : 'text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
              )
            }
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-8">
        <h3 className="px-3 text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
          Connect
        </h3>
        <div className="space-y-1">
          {connectItems.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4" />
                {item.name}
              </div>
              <svg className="w-3 h-3 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
