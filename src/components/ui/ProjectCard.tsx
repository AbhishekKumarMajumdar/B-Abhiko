'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { NeonButton } from '@/components/ui/NeonButton';

gsap.registerPlugin(ScrollTrigger);

interface ProjectCardProps {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  slug: string;
}

export const ProjectCard = ({ id, title, image, price, oldPrice, slug }: ProjectCardProps) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="bg-[#0d0d1a] border border-[#1e1e2e] rounded-lg p-3 backdrop-blur-xl transition-all duration-300 hover:scale-[1.015] shadow-[0_0_12px_rgba(59,130,246,0.2)] hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] scroll-mt-28"
      id={`project-${id}`}
    >
      <div className="relative w-full h-28 mb-2 rounded-md overflow-hidden">
        <Image
          src={image}
          alt={`Project ${id}`}
          fill
          className="object-cover object-center"
        />
      </div>
      <h3 className="text-base font-semibold mb-1 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
        {title}
      </h3>
      <p className="text-xs text-purple-300 mb-2">
        High-performance and modern design starter kit for devs and startups.
      </p>
      <div className="flex items-center justify-between mb-3">
        <span className="text-base font-bold text-green-400">₹{price}</span>
        <span className="line-through text-xs text-gray-400">₹{oldPrice}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <Link href={`/project/${slug}`} scroll={true}>
          <NeonButton
            label="View Project"
            className="shadow-[0_0_10px_rgba(147,51,234,0.4)] hover:shadow-[0_0_18px_rgba(147,51,234,0.6)] text-sm px-3 py-1.5"
          />
        </Link>
        <Link href="/checkout/sample">
          <NeonButton
            label="Buy Now"
            className="shadow-[0_0_10px_rgba(34,197,94,0.4)] hover:shadow-[0_0_18px_rgba(34,197,94,0.6)] text-sm px-3 py-1.5"
          />
        </Link>
      </div>
    </div>
  );
};
