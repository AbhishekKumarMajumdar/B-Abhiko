// components/Footer.tsx

import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#060010] border-t border-[#1e1e2e] text-purple-300 py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h4 className="text-xl font-bold text-white mb-1 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
            Abhiko
          </h4>
          <p className="text-sm">Crafting futuristic code for creative developers 🚀</p>
        </div>

        <div className="flex gap-6 text-xl">
          <Link href="https://github.com" className="hover:text-white transition-colors duration-300">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-white transition-colors duration-300">
            <FaLinkedin />
          </Link>
          <Link href="https://twitter.com" className="hover:text-white transition-colors duration-300">
            <FaTwitter />
          </Link>
        </div>

        <p className="text-xs text-center md:text-right">
          &copy; {new Date().getFullYear()} Abhiko. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
