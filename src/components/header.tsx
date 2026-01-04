import { useState, useEffect } from 'react';
import Pill from './pill';
import viteLogo from '../../public/vite.svg';

// Logo Component - Left
function Logo() {
  return (
    <div className="flex-shrink-0 flex-1">
      <a href="/" className="flex items-center transition-colors">
        <img src={viteLogo} alt="Logo" className="h-10 w-10" />
      </a>
    </div>
  );
}

// Navigation Component - Center
function Navigation() {
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    // Get initial hash from URL
    const hash = window.location.hash.slice(1) || 'home';
    setActivePage(hash);

    // Listen for hash changes
    const handleHashChange = () => {
      const newHash = window.location.hash.slice(1) || 'home';
      setActivePage(newHash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="hidden lg:flex lg:items-center lg:space-x-4 flex-1 justify-center">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActivePage(item.id)}
        >
          <Pill
            variant={activePage === item.id ? 'default' : 'transparent'}
            size="lg"
          >
            {item.label}
          </Pill>
        </a>
      ))}
    </div>
  );
}

// SearchBox Component - Right
function SearchBox() {
  return (
    <div className="flex items-center flex-shrink-0 ml-auto flex-1">
      <div className="hidden lg:flex items-center justify-end flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden ml-2 flex justify-end w-full">
        <button
          type="button"
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Main Header Component
export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-200 bg-slate-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Logo />
          <Navigation />
          <SearchBox />
        </div>
      </nav>
    </header>
  );
}