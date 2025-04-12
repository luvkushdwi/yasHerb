import React, { useState, useEffect, ReactNode } from 'react';
import Image from 'next/image';

interface SplashLoaderProps {
  children: ReactNode;
}

export default function SplashLoader({ children }: SplashLoaderProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash loader for 2 seconds when the website is first opened
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="flex flex-col items-center">
            {/* Update the src to point to your logo.png */}
            <Image
            src="/loader-logo.png" // Replace with the path to your splash loader image
            alt="Loading..."
            width={150} // Set the width of the image
            height={150} // Set the height of the image
            className="object-contain"
            priority // Ensures the image is loaded quickly
          />
            <div className="mt-6 w-40 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 animate-loading"></div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}