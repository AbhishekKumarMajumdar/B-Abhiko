// components/sections/FAQsSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'What is Abhiko.shop?',
    answer:
      'Abhiko.shop is a futuristic platform where developers can buy affordable and premium-quality source code projects built with the latest tech stack.',
  },
  {
    question: 'Do I get lifetime access after purchase?',
    answer:
      'Yes, every project you buy from Abhiko.shop comes with lifetime access and support.',
  },
  {
    question: 'Can I use the code for commercial projects?',
    answer:
      'Absolutely. You are free to use the purchased projects in personal and commercial applications.',
  },
];

export const FAQsSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.faq-card'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center font-extrabold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="faq-card border border-[#1e1e2e] rounded-lg bg-[#0d0d1a] p-5 transition-all shadow-[0_0_10px_rgba(59,130,246,0.1)]"
            >
              <button
                className="flex justify-between items-center w-full text-left text-base font-semibold text-blue-400 hover:text-blue-300"
                onClick={() => setActiveIndex(idx === activeIndex ? null : idx)}
              >
                {faq.question}
                <span className="text-xl">{activeIndex === idx ? '-' : '+'}</span>
              </button>
              {activeIndex === idx && (
                <p className="text-sm text-purple-300 mt-3">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
