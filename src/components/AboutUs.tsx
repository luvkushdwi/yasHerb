'use client';

import React from 'react';

export default function AboutUs() {
  return (
    <div className="bg-gray-50 text-gray-800 px-6 py-16 sm:px-12 xl:px-24 font-sans">
      {/* Introduction Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-6xl font-extrabold text-gray-900 mb-10 font-serif">About Us</h1>
        <p className="text-2xl leading-relaxed font-light">
          At <span className="font-semibold text-green-600">Yas Herb</span>, we believe that nature holds the key to a healthier, more vibrant life. Our journey began with a simple idea — to make the healing power of herbs and spices accessible, affordable, and a part of everyday living.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white shadow-md rounded-lg p-12 mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Our Mission</h2>
        <p className="text-2xl leading-relaxed font-light">
          We're a young and passionate startup committed to curating 100% natural herb and spice powders, along with dry cosmetic beauty products for hair and skin care. From Beetroot powder for glowing skin to Amla and Musli powders that support internal wellness, our products are rooted in tradition and enhanced by modern convenience.
        </p>
      </section>

      {/* What We Stand For Section */}
      <section>
        <h2 className="text-5xl font-extrabold text-gray-900 text-center mb-12 font-serif">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Variety */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🌿</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Variety</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              A wide selection of herbal and beauty essentials to suit different needs and preferences.
            </p>
          </div>

          {/* Convenience */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🚚</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Convenience</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              Easy-to-use, easy-to-store powders that fit seamlessly into your daily routine.
            </p>
          </div>

          {/* Quality */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🌟</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Quality</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              Pure, natural, and responsibly sourced — always.
            </p>
          </div>

          {/* Customization */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🧪</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Customization</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              Products that you can mix, match, and personalize based on your lifestyle.
            </p>
          </div>

          {/* Community */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🧑‍🤝‍🧑</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Community</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              We're building a tribe that shares knowledge, inspires wellness, and uplifts each other.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-white shadow-md rounded-lg p-10 text-center">
            <span className="text-6xl">🌱</span>
            <h3 className="text-3xl font-bold text-gray-900 mt-6 font-serif">Sustainability</h3>
            <p className="text-xl text-gray-600 mt-4 font-light">
              Eco-conscious practices that respect both your health and the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Section for Page Length */}
      <section className="bg-gray-100 shadow-inner rounded-lg p-12 mt-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-8 font-serif">Join Our Journey</h2>
        <p className="text-2xl leading-relaxed font-light">
          At Yas Herb, we’re not just selling products — we’re creating a movement. A movement that embraces the power of nature, celebrates wellness, and builds a community of like-minded individuals. Join us in our journey to make the world a healthier, happier place, one herb at a time.
        </p>
      </section>
    </div>
  );
}