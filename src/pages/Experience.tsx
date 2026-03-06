export default function Experience() {
  const experiences = [
    {
      period: 'Nov 2022 - Present',
      role: 'Founding Engineer',
      company: 'kay.ai',
      description: 'Building workflow automation for insurance brokers.',
      points: [
        'Led the team to develop Influencerbit - Customer Led Influencer Marketing Platform for E-Commerce Brands.',
        'Built Engagebud - Gamification Platform for Ecommerce.',
        'Scaled backend to handle 13M+ users and generated 6M+ discount codes',
        'Raised $100K funding from Upekkha, a SaaS accelerator.'
      ],
      tags: ['React', 'Typescript', 'Rails', 'PostgreSQL', 'Javascript']
    },
    {
      period: 'Aug 2021 - Nov 2022',
      role: 'Product Engineer',
      company: 'ProfileBud',
      description: 'Led frontend development, created payment and admin portals, developed GoLang server.',
      points: [
        'Led the frontend development for the company as one of the founding members.',
        'Learned and made responsive websites, blogs via Gatsby, payment and admin portals following Agile principles.',
        'Developed a GoLang server to handle 20M+ users data with 1K+ req/s.'
      ],
      tags: ['React', 'Rails', 'GoLang', 'Gatsby', 'Javascript']
    }
  ];

  return (
    <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative border-l-2 border-blue-400/30 ml-4 md:ml-32 space-y-24 pb-12">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-24">
            {/* Timeline dot */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-zinc-100 border-4 border-white shadow-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-zinc-300"></div>
            </div>
            
            {/* Period (desktop: left, mobile: top) */}
            <div className="md:absolute md:-left-32 md:top-0 text-zinc-500 font-medium mb-2 md:mb-0">
              {exp.period}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-1">
                {exp.role} · {exp.company}
              </h3>
              <p className="text-zinc-600 mb-4 text-sm leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-3 mb-6">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-sm text-zinc-600 flex items-start gap-2">
                    <span className="text-zinc-400 mt-1.5 text-xs">•</span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md border border-zinc-200/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
        
        {/* Gradient line at the bottom */}
        <div className="absolute bottom-0 left-[-2px] w-[2px] h-24 bg-gradient-to-b from-blue-400/30 to-purple-400/30"></div>
      </div>

      <div className="mt-12 ml-4 md:ml-32">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors">
          View Full Resume
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  );
}
