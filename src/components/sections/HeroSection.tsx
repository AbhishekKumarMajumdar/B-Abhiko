// components/sections/HeroSection.tsx
'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { mainRoutes } from '@/lib/mainRoutes';
import { NeonButton } from '@/components/ui/NeonButton';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen bg-[#060010] text-white overflow-hidden">
      {/* Glow and Shapes Background */}
      <div className="absolute inset-0 -z-10 flex items-start justify-center">
        <div className="w-full max-w-7xl h-[32rem] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500 via-blue-500 to-transparent opacity-30 blur-2xl animate-pulse" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-center max-w-7xl px-6 md:px-10 py-24 mx-auto min-h-screen">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
              For Creative Developers
            </span>
          </h1>
          <p className="mt-6 text-lg text-purple-200 max-w-xl drop-shadow-[0_0_6px_rgba(147,51,234,0.3)]">
            80+ production-ready project snippets — designed for speed, beauty, and creativity.
          </p>
          <div className="mt-10">
            <Link href={mainRoutes.find(route => route.label === 'Projects')?.path || '/projects'}>
              <NeonButton
                label="Browse Projects →"
                className="shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:shadow-[0_0_40px_rgba(168,85,247,0.8)]"
              />
            </Link>
          </div>
        </div>

        {/* Right Shapes Section */}
        <div className="hidden md:block flex-1 relative h-[300px] w-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 rotate-6 w-40 h-40 rounded-2xl bg-[#1f1f2f] border border-purple-800 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-float1">
            <div className="w-2/3 h-2/3 bg-dots bg-center bg-repeat" />
          </div>
          <div className="absolute top-[140px] left-[10%] rotate-[-10deg] w-36 h-36 rounded-2xl bg-[#1f1f2f] border border-blue-800 flex items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-float2">
            <div className="w-2/3 h-2/3 text-xs text-blue-300 font-mono glitch-text">
              {'{code}'}
            </div>
          </div>
          <div className="absolute top-[180px] right-[10%] rotate-[5deg] w-36 h-36 rounded-2xl bg-[#1f1f2f] border border-pink-800 flex items-center justify-center shadow-[0_0_40px_rgba(236,72,153,0.4)] animate-float3">
            <div className="w-2/3 h-2/3 grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-full h-full bg-pink-400/70 rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
