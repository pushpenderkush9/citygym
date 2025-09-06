"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold text-red-500">
            <Link href="/">CityGym</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-lg font-medium">
            <Link href="/" className="hover:text-red-500 transition">Home</Link>
            <Link href="/about" className="hover:text-red-500 transition">About</Link>
            <Link href="/services" className="hover:text-red-500 transition">Services</Link>
            <Link href="/contact" className="hover:text-red-500 transition">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pt-2 pb-3 space-y-2">
          <Link href="/" className="block hover:text-red-500">Home</Link>
          <Link href="/about" className="block hover:text-red-500">About</Link>
          <Link href="/services" className="block hover:text-red-500">Services</Link>
          <Link href="/contact" className="block hover:text-red-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}
