"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="relative w-[180px] md:w-[240px] h-12 md:h-16">
                <Image
                  src="/CompanyLogo.png"
                  alt="Hidalgo Homes Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-12 text-sm font-black uppercase tracking-[0.2em]">
            <Link href="/" className="text-[#0a1c36] hover:text-[#5c6d84] transition-colors">Home</Link>
            <Link href="/projects" className="text-zinc-500 hover:text-[#0a1c36] transition-colors">Projects</Link>
            <Link href="/floor-plans" className="text-zinc-500 hover:text-[#0a1c36] transition-colors">Floor Plans</Link>
            <Link href="/about" className="text-zinc-500 hover:text-[#0a1c36] transition-colors">About</Link>
            <Link href="/contact" className="bg-[#0a1c36] text-white px-8 py-3 rounded-sm hover:bg-[#5c6d84] transition-all">
              Build
            </Link>
          </div>
          {/* Mobile button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#0a1c36]"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-b border-zinc-100 p-8 space-y-4 text-center font-black uppercase tracking-widest`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="block py-2 text-[#0a1c36]">Home</Link>
        <Link href="/projects" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-500">Projects</Link>
        <Link href="/floor-plans" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-500">Floor Plans</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="block py-2 text-zinc-500">About</Link>
        <Link href="/contact" onClick={() => setIsOpen(false)} className="block py-4 bg-[#0a1c36] text-white">Build With Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
