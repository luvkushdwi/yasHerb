"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-green-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">
              YAS INDIA MARKETING SOLUTIONS
            </h3>
            <p className="text-green-100 mb-4 max-w-sm">
              India&#39;s premier provider of authentic herbs and Ayurvedic
              products. We blend ancient wisdom with modern science.
            </p>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                {/* <span className="sr-only">Facebook</span> */}
                {/* <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg> */}
              </a>
              {/* Instagram */}
              {/* <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c...z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
              {/* Twitter */}
              {/* <a
                href="#"
                className="text-green-200 hover:text-white transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0...z" />
                </svg>
              </a> */}
            </div>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/products?category=ayurvedic-herbs"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Ayurvedic Herbs
                </a>
              </li>
              <li>
                <Link
                  href="/products?category=essential-oils"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Essential Oils
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=herbal-powders"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Herbal Powders
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=supplements"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Supplements
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <svg 
                  className="h-6 w-6 mr-2 text-green-300" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-green-100">Delhi, India</span>
              </li>
              <li className="flex items-center justify-center">
                <svg 
                  className="h-6 w-6 mr-2 text-green-300" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-green-100">yasherbs2025@gmail.com</span>
              </li>
              <li className="flex items-center justify-center">
                <svg 
                  className="h-6 w-6 mr-2 text-green-300" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-green-100">+91 97118 04740</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Copyright */}
        <div className="py-6 border-t border-green-800">
          <p className="text-green-200">
            © {new Date().getFullYear()} YAS INDIA MARKETING SOLUTIONS. All rights
            reserved. We don&#39;t just sell products, we create experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}