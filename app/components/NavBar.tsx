"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";

/*
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
}*/

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scroll, setScroll] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  //const minHeight = 48;
  const maxHeight = 64;
  const height = scroll ? maxHeight / 1.25 : maxHeight;

  // Scroll handler setup
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      setScroll(1);
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setScroll(0);
      }, 150); // Adjust this value to change how quickly the navbar becomes opaque after scrolling stops
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white shadow-md transition-opacity duration-300 ${
        scroll ? "opacity-50" : "opacity-100"
      }
    `}>
      <div className='max-w-6xl mx-auto px-4'>
        <div
          className='flex justify-between items-center transition-all duration-300'
          style={{ height: `${height}px` }}>
          {/* Logo */}
          <div className='flex-shrink-0 flex items-center'>
            <div
              className='relative w-10 h-10 mr-3 transition-all duration-300'
              style={{
                transform: scroll ? "scale(0.8)" : "scale(1)",
              }}>
              <Image
                src='img/logo-squarex80.png'
                alt='Pools Dubai Logo'
                layout='fill'
                objectFit='cover'
              />
            </div>
            <Link
              href='/'
              className='font-bold transition-all duration-300'
              style={{
                fontSize: scroll ? "1.25rem" : "1.5rem",
              }}>
              Pools Dubai
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              Home
            </Link>
            <Link
              href='/about'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              About
            </Link>
            <Link
              href='/services'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              Services
            </Link>
            <Link
              href='/portfolio'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              Portfolio
            </Link>
            <Link
              href='/blog'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              Blog
            </Link>
            <Link
              href='/contact'
              className='text-gray-600 hover:text-gray-900 transition-all duration-300'>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu}>
              {isOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white border-t border-gray-200`}>
        <div className='px-2 pt-2 pb-3 space-y-1'>
          <Link
            href='/'
            className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <div onClick={toggleMenu}>Home</div>
          </Link>
          <Link
            href='/about'
            className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <div onClick={toggleMenu}>About</div>
          </Link>

          <Link
            href='/portfolio'
            className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <div onClick={toggleMenu}>Portfolio</div>
          </Link>
          <Link
            href='/services'
            className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <div onClick={toggleMenu}>Services</div>
          </Link>
          <Link
            href='/blog'
            className='block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100'>
            <div onClick={toggleMenu}>Blog</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
