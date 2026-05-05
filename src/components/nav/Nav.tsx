"use client";

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';

export interface IAppProps {}

export default function Nav(props: IAppProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className='site-nav w-full flex justify-between items-center px-6 py-3'>
        {/* Logo */}
        <div>
          <Image 
            src="/images/logo-noBg.png" 
            alt="Logo" 
            width={100} 
            height={50} 
          />
        </div>
        
        {/* Navigation Links - Hidden on mobile */}
        <div className='hidden md:flex items-center gap-6'>
          <Link href="/" className="nav-link">Home</Link>
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/projects" className="nav-link">Projects</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        {/* Social Icons and Hamburger */}
        <div className='flex items-center gap-4'>
          <Image 
            src="/images/twitter.png" 
            alt="Twitter" 
            width={20} 
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
          <Image 
            src="/images/linkedin.png" 
            alt="LinkedIn" 
            width={20} 
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
          <Image 
            src="/images/Vector.png" 
            alt="Website" 
            width={20} 
            height={20}
            className="cursor-pointer hover:opacity-70 transition"
          />
          {/* Hamburger Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className='md:hidden p-2 focus:outline-none'
            aria-label="Toggle menu"
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className='fixed inset-0 z-50 md:hidden pointer-events-none'>
        <div 
          className={`absolute inset-0 bg-olive-500 bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}`} 
          onClick={() => setIsOpen(false)}
        ></div>
        <div 
          className={`absolute right-0 top-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='p-4'>
            <button 
              onClick={() => setIsOpen(false)} 
              className='mb-4 text-gray-600 hover:text-gray-800'
            >
              ✕
            </button>
            <div className='flex flex-col gap-4'>
              <Link href="/" className="nav-link" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
              <Link href="/projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</Link>
              <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}