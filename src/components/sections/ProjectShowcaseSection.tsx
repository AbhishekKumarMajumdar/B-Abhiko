// components/sections/FeaturedProjectsSection.tsx
'use client';

import { ProjectCard } from '@/components/ui/ProjectCard';
import projects from '@/data/projects.json';

export const ProjectShowcaseSection = () => {
   const latestProjects = projects.slice(0, 4);
  return (
    <section className="relative z-10 w-full bg-[#060010] text-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_25px_rgba(0,255,255,0.3)]">
          Explore Premium Project Codes
        </h2>
        <p className="text-center text-base text-purple-300 max-w-2xl mx-auto mb-12">
          Unique, affordable, and production-ready source codes crafted with care for modern developers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
