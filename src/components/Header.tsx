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
    { name: "Home", path: "#home" },
    { name: "About Us", path: "#aboutUs" },
    { name: "Products", path: "#products" },
    { name: "Contact Us", path: "#contactUs" },
  ];

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-black/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-18 w-32 flex items-center justify-center mr-3">
                <Image
                  src="/new_logo.png"
                  alt="YasHerb Logo"
                  width={128}
                  height={64}
                  className="object-contain"
                  priority
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
              <a
                key={item.name}
                href={item.path}
                className={`relative px-4 py-2 text-base font-medium rounded-md transition-all ${
                  pathname === item.path
                    ? scrolled
                      ? "text-green-700"
                      : "text-green-400"
                    : scrolled
                    ? "text-gray-700 hover:text-green-600"
                    : "text-white hover:text-green-200"
                }`}
              >
                {item.name}
                {pathname === item.path && (
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                      scrolled ? "bg-green-600" : "bg-green-400"
                    } rounded-full`}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
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
                className={`h-6 w-6 ${
                  scrolled ? "text-gray-900" : "text-white"
                }`}
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

      {/* Mobile Menu - Completely solid white background */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white md:hidden shadow-lg"
          style={{ top: "64px" }}
        >
          <div className="flex flex-col h-full bg-white">
            <nav className="flex flex-col py-6 px-6 space-y-4 bg-white">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="py-3 text-lg font-medium border-b border-gray-200 text-black hover:text-green-700"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* <div className="mt-auto p-6 bg-white">
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-green-700 hover:bg-green-800 text-white text-center px-5 py-3 rounded-md font-medium transition-colors"
              >
                Get In Touch
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
