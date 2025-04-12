"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-16 w-32 flex items-center justify-center mr-3">
                <Image
                  src="/yas-herb-logo.png" // Replace with the path to your logo
                  alt="YasHerb Logo"
                  width={128} // Set the width of the image
                  height={64} // Set the height of the image
                  className="object-contain"
                  priority // Ensures the logo is loaded quickly
                />
              </div>
              <div
                className={`font-serif transition-all duration-300 ${
                  scrolled ? "text-green-800" : "text-green-700"
                }`}
              ></div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-base font-medium rounded-md transition-all ${
                  pathname === item.path
                    ? "text-green-700"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-md font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-900"
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
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
        style={{ top: "60px" }}
      >
        <div className="flex flex-col h-full">
          <nav className="flex flex-col py-6 px-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`py-3 text-lg font-medium border-b border-gray-100 ${
                  pathname === item.path
                    ? "text-green-700 border-green-700"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6">
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full bg-green-700 hover:bg-green-800 text-white text-center px-5 py-3 rounded-md font-medium transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
