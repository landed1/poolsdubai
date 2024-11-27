"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Menu } from 'lucide-react';

function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  delay: number
): (this: ThisParameterType<T>, ...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}




const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Calculate dimensions
  const minHeight = 48;
  const maxHeight = 64;
  const height = isScrolling 
    ? Math.max(minHeight, maxHeight - (scroll / 500) * (maxHeight - minHeight))
    : maxHeight;
  const opacity = isScrolling ? Math.max(0.5, 1 - scroll / 700) : 1;

  // Scroll handler setup
  useEffect(() => {
    let rafId: number;
    const debouncedScrollEnd = debounce(() => {
    //console.log("debounced called")
      setIsScrolling(false);
    }, 550);

    const handleScroll = () => {
        //console.log("handleScroll called")
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        setScroll(window.scrollY);
        setIsScrolling(true);
        debouncedScrollEnd();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <nav 
      className="sticky top-0 bg-red shadow-md z-50 transition-all duration-300 w-full"
      style={{
        opacity: opacity,
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div 
          className="flex justify-between items-center transition-all duration-300"
          style={{ height: `${height}px` }}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-bold transition-all duration-300"
              style={{ 
                fontSize: isScrolling ? '1.25rem' : '1.5rem'
              }}
            >
              Pools Dubai
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-all duration-300">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-all duration-300">About</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-all duration-300">Services</Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-all duration-300">Portfolio</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-all duration-300">Blog</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-all duration-300">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white border-t border-gray-200`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >Home
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >About
          </Link>
          <Link
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >Portfolio
          </Link>
          <Link
            href="/services"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >Services
          </Link>
          <Link
            href="/blog"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >Blog
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;