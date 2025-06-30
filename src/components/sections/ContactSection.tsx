// components/sections/ContactSection.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NeonButton } from '@/components/ui/NeonButton';

gsap.registerPlugin(ScrollTrigger);

export const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted form:', form);
    // You can integrate email service or backend API here
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.contact-field'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 w-full bg-[#060010] text-white py-16 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
          Get in Touch
        </h2>
        <p className="text-center text-base text-purple-300 mb-12">
          We would love to hear from you! Fill out the form and we’ll get back as soon as possible.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="contact-field w-full p-3 rounded bg-[#1e1e2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="contact-field w-full p-3 rounded bg-[#1e1e2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="contact-field w-full p-3 rounded bg-[#1e1e2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <div className="contact-field">
            <NeonButton label="Send Message" className="px-6 py-2 text-lg" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};
