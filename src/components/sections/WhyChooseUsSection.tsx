// components/sections/WhyChooseUsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { NeonButton } from '@/components/ui/NeonButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhyChooseUsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.why-card'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full bg-[#060010] text-white py-16 px-4 md:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
          Why Choose Abhiko?
        </h2>
        <p className="text-base text-purple-300 max-w-3xl mx-auto mb-12">
          With a futuristic UI, affordable pricing, and production-ready code, Abhiko is your trusted source for project solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Modern Tech Stack',
              desc: 'Built with Next.js, Tailwind CSS, and Typescript – for lightning fast performance.',
              icon: '⚡️'
            },
            {
              title: 'Affordable Pricing',
              desc: 'Buy premium-quality source code for a fraction of the development cost.',
              icon: '💰'
            },
            {
              title: 'Clean & Unique UI',
              desc: 'Neon-themed, dark UI designed for 2025 – optimized for all devices.',
              icon: '🎨'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="why-card bg-[#0d0d1a] border border-[#1e1e2e] rounded-xl p-6 text-left shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,255,255,0.3)] transition-all duration-300"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400 drop-shadow-[0_0_6px_rgba(59,130,246,0.5)]">{item.title}</h3>
              <p className="text-sm text-purple-200">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <NeonButton label="Explore Projects" className="px-6 py-2 text-base" />
        </div>
      </div>
    </section>
  );
};
