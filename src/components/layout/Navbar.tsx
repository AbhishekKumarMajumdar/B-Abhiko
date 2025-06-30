'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Menu, X, Home, FileCode2, LogIn, Search } from 'lucide-react';
import gsap from 'gsap';
import projects from '@/data/projects.json';

export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 1 });
    }
  }, []);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }
    const filtered = projects.filter((proj) =>
      proj.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered.slice(0, 5));
  }, [query]);

  const handleSelect = (slug: string) => {
    setQuery('');
    setResults([]);
    router.push(`/project/${slug}`);
  };

  const navLinks = [
    { label: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
    { label: 'Projects', href: '/projects', icon: <FileCode2 className="w-4 h-4" /> },
    { label: 'Login', href: '/login', icon: <LogIn className="w-4 h-4" /> },
  ];

  const getLinkStyle = (href: string) =>
    pathname === href
      ? 'bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.6)]'
      : 'bg-white/5 backdrop-blur-md text-gray-300 hover:bg-gradient-to-r hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:text-white hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300';

  return (
    <header
      ref={navRef}
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? 'bg-[#0e0e12]/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl flex items-center space-x-2">
          <span className="text-blue-400">✦</span>
          <span>Abhiko</span>
        </Link>

        <div className="relative hidden md:flex flex-1 justify-center max-w-md">
          <input
            type="text"
            placeholder="Search Projects..."
            className="w-full rounded-full bg-[#1b1b23]/70 text-sm text-white px-4 py-2 pr-10 border border-[#2a2a38] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          {results.length > 0 && (
            <div className="absolute top-12 left-0 right-0 bg-[#0e0e12] border border-[#2a2a38] rounded-md shadow-xl z-50">
              {results.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => handleSelect(proj.slug)}
                  className="cursor-pointer px-4 py-2 text-sm text-white hover:bg-blue-900"
                >
                  {proj.title}
                </div>
              ))}
            </div>
          )}
        </div>

        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm ${getLinkStyle(href)}`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-gray-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0e0e12]/95 px-4 pb-4 space-y-3 border-t border-[#1f1f2b] backdrop-blur-sm">
          {navLinks.map(({ label, href, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm ${getLinkStyle(href)}`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          ))}
          <div className="relative pt-2">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full bg-[#1b1b23]/70 text-sm text-white px-4 py-2 pr-10 placeholder-gray-400 border border-[#2a2a38] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};
