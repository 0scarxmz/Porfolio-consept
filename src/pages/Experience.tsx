import { motion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
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

  return (
    <div className="max-w-full md:max-w-5xl lg:max-w-6xl w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-12 sm:pt-16 md:pt-24">
      <div ref={containerRef} className="relative ml-4 md:ml-12 pb-12">
        
        {/* Background static line */}
        <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-zinc-200" />
        
        {/* Animated scroll line */}
        <motion.div 
          className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-blue-500 origin-top"
          style={{ scaleY }}
        />

        {/* Header Section */}
        <div className="mb-12 md:mb-20 pl-12 md:pl-16 pt-6">
          <h1 className="text-4xl md:text-6xl font-normal text-zinc-900 mb-4 md:mb-8">Changelog from my journey</h1>
          <p className="text-base md:text-2xl text-zinc-600 leading-relaxed">
            I've been working on RISE for the past month.<br/>
            Here's a timeline of my journey.
          </p>
        </div>

        {/* Experience Items */}
        <div className="space-y-16 md:space-y-24">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 md:pl-16">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 bottom-0 w-8 z-10">
                <div className="sticky top-32 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm ring-1 ring-zinc-100 mt-1">
                  <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                {/* Period */}
                <div className="md:w-64 shrink-0 text-zinc-500 font-normal text-lg md:text-2xl mt-1">
                  {exp.period}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-2xl md:text-4xl font-normal text-zinc-900 mb-2 md:mb-4">
                    {exp.role} · {exp.company}
                  </h3>
                  <p className="text-zinc-600 mb-6 md:mb-8 text-base md:text-xl leading-relaxed">
                    {exp.description}
                  </p>
                  <ul className="space-y-4 md:space-y-6 mb-8 md:mb-12">
                    {exp.points.map((point, i) => {
                      const colonIndex = point.indexOf(':');
                      if (colonIndex !== -1) {
                        const label = point.substring(0, colonIndex + 1);
                        const value = point.substring(colonIndex + 1);
                        return (
                          <li key={i} className="text-base md:text-xl text-zinc-600 flex items-start gap-3 md:gap-4">
                            <span className="text-zinc-300 mt-1.5 md:mt-2.5 text-[10px] md:text-xs">●</span>
                            <span className="leading-relaxed">
                              <strong className="font-normal text-zinc-800">{label}</strong>{value}
                            </span>
                          </li>
                        );
                      }
                      return (
                        <li key={i} className="text-base md:text-xl text-zinc-600 flex items-start gap-3 md:gap-4">
                          <span className="text-zinc-300 mt-1.5 md:mt-2.5 text-[10px] md:text-xs">●</span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-zinc-100 text-zinc-600 text-sm md:text-lg font-normal rounded-md border border-zinc-200/50">
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
