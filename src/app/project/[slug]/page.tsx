'use client';

import { useParams } from 'next/navigation';
import projects from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const slugStr = typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : '';
  const project = projects.find((p) => p.slug === slugStr);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060010] text-white py-26 px-4 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="relative w-full h-60 md:h-96 rounded-lg overflow-hidden border border-[#1e1e2e] shadow-lg">
            <Image src={project.image} alt={project.title} fill className="object-cover object-center" />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4">
              {project.title}
            </h1>
            <p className="text-purple-300 text-sm mb-5 leading-relaxed">{project.description}</p>

            <div className="flex items-center space-x-6 mb-5">
              <span className="text-2xl font-bold text-green-400">₹{project.price}</span>
              <span className="text-base line-through text-gray-400">₹{project.oldPrice}</span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-400 mb-2">Tech Stack Used:</h3>
              <ul className="list-disc list-inside text-purple-300 text-sm">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-purple-400 mb-6">
              <p><strong>Downloads:</strong> {project.downloads}</p>
              <p><strong>Reviews:</strong> {project.reviews.rating} ⭐ ({project.reviews.count} reviews)</p>
              <p><strong>Last Updated:</strong> {project.lastUpdated}</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Link href={project.previewLink}>
              <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white font-semibold shadow-md w-full">
                Live Preview
              </button>
            </Link>
            <Link href="/checkout">
              <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-white font-semibold shadow-md w-full">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
