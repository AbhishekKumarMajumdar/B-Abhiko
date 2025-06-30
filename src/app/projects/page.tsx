'use client';

import { useState } from 'react';
import projects from '@/data/projects.json';
import { ProjectCard } from '@/components/ui/ProjectCard';

export default function ProductsPage() {
  const [selectedTech, setSelectedTech] = useState<string>('all');

  const techOptions = Array.from(
    new Set(projects.flatMap((p) => p.techStack || []))
  );

  const filteredProjects = selectedTech === 'all'
    ? projects
    : projects.filter((p) => p.techStack?.includes(selectedTech));

  return (
    <div className="min-h-screen bg-[#060010] text-white py-26 px-4 md:px-10">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
        All Projects
      </h1>

      <div className="mb-8 flex flex-wrap gap-4 justify-center">
        <button
          className={`px-4 py-2 rounded-full border text-sm ${selectedTech === 'all' ? 'bg-blue-500 text-white' : 'border-gray-500 text-gray-300'}`}
          onClick={() => setSelectedTech('all')}
        >
          All
        </button>
        {techOptions.map((tech) => (
          <button
            key={tech}
            className={`px-4 py-2 rounded-full border text-sm ${selectedTech === tech ? 'bg-blue-500 text-white' : 'border-gray-500 text-gray-300'}`}
            onClick={() => setSelectedTech(tech)}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
