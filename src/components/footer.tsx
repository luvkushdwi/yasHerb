"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="footer" className="bg-green-900 text-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">YAS India Marking Solution</h3>
            <p className="text-green-100 mb-4 max-w-sm">
              India&#39;s premier provider of authentic herbs and Ayurvedic products. We blend ancient wisdom with modern science.
            </p>
            <div className="flex justify-center space-x-4">
              {/* Facebook */}
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c...z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-green-200 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0...z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="/products?category=ayurvedic-herbs" className="text-green-100 hover:text-white transition-colors">Ayurvedic Herbs</a></li>
              <li><Link href="/products?category=essential-oils" className="text-green-100 hover:text-white transition-colors">Essential Oils</Link></li>
              <li><Link href="/products?category=herbal-powders" className="text-green-100 hover:text-white transition-colors">Herbal Powders</Link></li>
              <li><Link href="/products?category=supplements" className="text-green-100 hover:text-white transition-colors">Supplements</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="text-green-100">Delhi, India</span>
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8" />
                </svg>
                <span className="text-green-100">yasherbs2025@gmail.com</span>
              </li>
              <li className="flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21L7.9 10.517a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498A1 1 0 0120 15.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-green-100">+91 97118 04740</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-green-800">
          <p className="text-green-200">
            © {new Date().getFullYear()} YAS India Marking Solution. All rights reserved. We don&#39;t just sell products, we create experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
