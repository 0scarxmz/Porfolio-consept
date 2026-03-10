import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 128px", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const experiences = [
    {
      period: '2026 - Present',
      role: 'Founding Engineer',
      company: 'RISE',
      description: 'Building and founding RISE as my main project.',
      points: [
        'Frontend: Next.js 15, React 18, TypeScript, Tailwind CSS 4',
        'Backend: Next.js App Router with server components, route handlers, and server-side auth checks',
        'Database: PostgreSQL with Prisma',
        'Auth / storage / realtime: Supabase',
        'Payments: Stripe',
        'AI: Google Gemini and OpenAI Whisper for transcription/captioning',
        'Video/media: FFmpeg WebAssembly, YouTube/TikTok download + upload flows, plus Firebase Admin/Storage support'
      ],
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'Stripe', 'Gemini', 'FFmpeg', 'Firebase']
    }
  ];

  const dotColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ['#e4e4e7', '#3b82f6']
  );

  return (
    <div className="max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-500 pt-8 md:pt-16">
      
      {/* Header Section */}
      <div className="mb-12 md:mb-16 ml-0 md:ml-12 pl-12 md:pl-20">
        <h1 className="text-4xl md:text-[53px] font-medium tracking-tight text-zinc-900 mb-4">Experience</h1>
        <p className="text-zinc-600 text-base md:text-[16.5px]">
          I've been working on RISE for the past month.<br className="hidden md:block"/>
          Here's a timeline of my journey.
        </p>
      </div>

      <div ref={containerRef} className="relative ml-0 md:ml-12 pb-12 pt-10 md:pt-20">
        
        {/* Background static line */}
        <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-zinc-200" />
        
        {/* Animated scroll line */}
        <motion.div 
          className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-blue-500 origin-top"
          style={{ scaleY }}
        />

        {/* Experience Items */}
        <div className="space-y-24 md:space-y-32">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-20 min-h-[300px] md:min-h-[400px]">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 bottom-0 w-8 md:w-12 z-10">
                <div className="sticky top-24 md:top-32 w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-zinc-200 mt-1">
                  <motion.div 
                    className="w-3 h-3 md:w-4 md:h-4 rounded-full"
                    style={{ backgroundColor: dotColor }}
                  />
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-24">
                {/* Period */}
                <div className="md:w-48 shrink-0 text-zinc-500 font-medium text-base md:text-lg mt-1 relative">
                  <div className="md:sticky md:top-32 pt-0 md:pt-3">
                    {exp.period}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-2">
                    {exp.role} · {exp.company}
                  </h3>
                  <p className="text-zinc-600 mb-6 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-4 mb-8">
                    {exp.points.map((point, i) => {
                      const colonIndex = point.indexOf(':');
                      if (colonIndex !== -1) {
                        const label = point.substring(0, colonIndex + 1);
                        const value = point.substring(colonIndex + 1);
                        return (
                          <li key={i} className="text-sm text-zinc-600 flex items-start gap-3">
                            <span className="text-zinc-300 mt-1.5 text-[10px]">●</span>
                            <span className="leading-relaxed">
                              <strong className="font-semibold text-zinc-800">{label}</strong>{value}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={i} className="text-sm text-zinc-600 flex items-start gap-3">
                          <span className="text-zinc-300 mt-1.5 text-[10px]">●</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1.5 bg-zinc-100 text-zinc-600 text-xs font-medium rounded-md border border-zinc-200/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
