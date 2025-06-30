// components/sections/CustomerTestimonialsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CustomerTestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.testimonial-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-[#060010] text-white py-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 drop-shadow-[0_0_25px_rgba(255,0,255,0.4)]">
          What Developers Say
        </h2>
        <p className="text-base text-purple-300 max-w-2xl mx-auto mb-12">
          Our customers love Abhiko's high-performance code and futuristic designs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="testimonial-card bg-[#0f0f1a] border border-[#2e2e3e] rounded-lg p-6 backdrop-blur-md shadow-[0_0_12px_rgba(255,0,255,0.1)] hover:shadow-[0_0_25px_rgba(255,0,255,0.2)] transition-all"
            >
              <p className="text-sm text-purple-200 italic mb-4">
                “Abhiko's code quality is unmatched. The neon UI design blew my mind. 100% recommended!”
              </p>
              <div className="text-left">
                <p className="text-base font-semibold text-pink-400">Ravi Teja</p>
                <span className="text-xs text-purple-500">Frontend Developer, Vizag</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
