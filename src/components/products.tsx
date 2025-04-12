"use client";

import React from "react";

// Sample product categories - you can modify these as needed
const categories = [
  "Ayurvedic Herbs",
  "Essential Oils",
  "Herbal Powders",
  "Herbal Extracts",
  "Herbal Teas",
  "Supplements"
];

// Placeholder products with "Coming Soon" status
const upcomingProducts = [
  {
    id: 1,
    name: "Ashwagandha",
    category: "Ayurvedic Herbs",
    comingSoon: true
  },
  {
    id: 2,
    name: "Tulsi (Holy Basil)",
    category: "Ayurvedic Herbs",
    comingSoon: true
  },
  {
    id: 3,
    name: "Turmeric",
    category: "Herbal Powders",
    comingSoon: true
  },
  {
    id: 4,
    name: "Neem",
    category: "Ayurvedic Herbs",
    comingSoon: true
  },
  {
    id: 5,
    name: "Brahmi",
    category: "Herbal Extracts",
    comingSoon: true
  },
  {
    id: 6,
    name: "Shatavari",
    category: "Ayurvedic Herbs",
    comingSoon: true
  },
  {
    id: 7,
    name: "Triphala",
    category: "Supplements",
    comingSoon: true
  },
  {
    id: 8,
    name: "Amla (Indian Gooseberry)",
    category: "Ayurvedic Herbs",
    comingSoon: true
  },
  {
    id: 9,
    name: "Peppermint",
    category: "Herbal Teas",
    comingSoon: true
  },
  {
    id: 10,
    name: "Lavender Essential Oil",
    category: "Essential Oils",
    comingSoon: true
  },
  {
    id: 11,
    name: "Moringa",
    category: "Herbal Powders",
    comingSoon: true
  },
  {
    id: 12,
    name: "Ginger",
    category: "Herbal Extracts",
    comingSoon: true
  }
];

export default function Products() {
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  // Filter products based on category and search term
  const filteredProducts = upcomingProducts.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 text-gray-800 font-sans min-h-screen">
      {/* Page Header - matches the style of your About Us page */}
      <section className="bg-white px-6 py-16 sm:px-12 xl:px-24">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-6xl font-extrabold text-gray-900 mb-6 font-serif">Our Products</h1>
          <p className="text-2xl leading-relaxed font-light">
            Discover our premium selection of <span className="font-semibold text-green-600">authentic Indian herbs</span> and Ayurvedic products for your health and wellness journey.
          </p>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center text-center">
          <div className="bg-amber-100 px-4 py-1 rounded-full text-amber-800 font-medium text-lg mr-3">
            Coming Soon
          </div>
          <p className="text-amber-800 text-lg font-light">
            We&#39;re preparing our product collection. Check back soon for our complete catalog!
          </p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 sm:px-12">
        <div className="md:flex items-center justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-gray-900 font-serif">Product Catalog</h2>
            <p className="text-xl text-gray-600 font-light mt-2">Browse our upcoming herb collection</p>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full md:w-64 pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* Category Tabs - Matches your overall site style */}
        <div className="flex flex-wrap gap-3 mb-10 overflow-x-auto pb-2">
          <button
            className={`px-5 py-2 rounded-full text-base font-medium ${
              activeCategory === "All" 
                ? "bg-green-700 text-white" 
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => setActiveCategory("All")}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-base font-medium ${
                activeCategory === category 
                  ? "bg-green-700 text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid - Refined styling to match your site */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {filteredProducts.map((product) => (
    <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      {/* Product Image Placeholder */}
      <div className="h-56 bg-gray-100 flex items-center justify-center relative">
        <span className="text-gray-400 text-lg">Product Image</span>
        
        {/* Coming Soon Badge */}
        <div className="absolute top-4 right-4 bg-amber-100 px-3 py-1 rounded-full text-amber-800 text-xs font-medium">
          Coming Soon
        </div>
      </div>
      
      <div className="p-6">
        <span className="text-sm font-medium text-green-600">{product.category}</span>
        <h3 className="text-xl font-semibold text-gray-900 mt-1 mb-2">{product.name}</h3>
        
        {/* Placeholder for Price */}
        <div className="text-gray-500 font-medium text-lg">Price to be announced</div>
        
        {/* Call to Action - Disabled Order Now Button */}
        <div className="mt-6">
          <button 
            className="w-full bg-gray-300 text-gray-500 py-3 px-6 rounded-lg font-medium cursor-not-allowed"
            disabled
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  ))}
</div>

        {/* If no products match the filter/search */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm my-8">
            <div className="text-gray-400 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 font-serif">No products found</h3>
            <p className="text-lg text-gray-600 font-light mt-2">Try adjusting your search or filter to find what you&#39;re looking for.</p>
          </div>
        )}
      </div>

      {/* Newsletter Section - Styled like your About Us "Join Our Journey" section */}
      {/* <section className="bg-gray-100 shadow-inner px-6 py-16 mt-16 sm:px-12 xl:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 font-serif">Stay Updated</h2>
          <p className="text-2xl leading-relaxed font-light mb-8">
            Subscribe to receive notifications when new products are available. Be the first to know about our product launches and exclusive offers.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-lg sm:rounded-r-none border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mb-4 sm:mb-0"
              />
              <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg sm:rounded-l-none font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}