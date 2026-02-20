"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/CompanyLogo.png"
                alt="Hidalgo Homes Logo"
                width={140}
                height={30}
                className="h-10 w-auto"
              />
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link href="/" className="text-zinc-600 hover:text-[#0a1c36] font-medium transition-colors">Home</Link>
            <Link href="/projects" className="text-zinc-600 hover:text-[#0a1c36] font-medium transition-colors">Projects</Link>
            <Link href="/floor-plans" className="text-zinc-600 hover:text-[#0a1c36] font-medium transition-colors">Floor Plans</Link>
            <Link href="/about" className="text-zinc-600 hover:text-[#0a1c36] font-medium transition-colors">About</Link>
            <Link href="/contact" className="bg-[#0a1c36] text-white px-6 py-2 rounded-sm hover:bg-[#5c6d84] transition-all">
              Build With Us
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-zinc-400 hover:text-zinc-500 hover:bg-zinc-100"
            >
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden bg-white border-b border-zinc-100`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-[#0a1c36] hover:bg-zinc-50">Home</Link>
          <Link href="/projects" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-[#0a1c36] hover:bg-zinc-50">Projects</Link>
          <Link href="/floor-plans" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-[#0a1c36] hover:bg-zinc-50">Floor Plans</Link>
          <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:text-[#0a1c36] hover:bg-zinc-50">About</Link>
          <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#0a1c36]">Build With Us</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
