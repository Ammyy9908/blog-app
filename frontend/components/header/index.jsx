import React from 'react';
import Link from 'next/link';

const Header = () => {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Story', href: '/story' },
    { label: 'Menu', href: '/menu' },
    { label: 'Space', href: '/space' },
    { label: 'Community', href: '/community' },
    { label: 'News', href: '/news' },
  ];

  return (
    <header className=" w-full bg-white z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-semibold">
            <span className="text-gray-800">IMAJI</span>
            <span className="text-[#A67B5B]">Coffee.</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-700 hover:text-[#A67B5B] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center space-x-4">
          <button className="bg-[#A67B5B] text-white px-6 py-2 rounded hover:bg-[#8B6548] transition-colors">
            Order
          </button>
          <button className="text-[#A67B5B] border border-[#A67B5B] px-6 py-2 rounded hover:bg-[#A67B5B] hover:text-white transition-colors">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button className="md:hidden text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
    </header>
  );
};

export default Header;
