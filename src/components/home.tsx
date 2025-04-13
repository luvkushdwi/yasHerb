"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const images = [
  "/carousel3.png",
  "/carousel4.jpeg",
  "/carousel5.jpeg",
  "/carousel6.jpeg",
  // "/home2.png",
  // "/home3.png",
  // "/home.png",
  // "/home2.png",
  // "/home3.png",
  // "/home.png",
];

const features = [
  {
    title: "Organic Herbs",
    description:
      "Sustainably sourced herbs grown without pesticides or chemicals.",
    icon: "🌿",
  },
  {
    title: "Premium Quality",
    description:
      "Meticulously selected and processed to preserve their natural properties.",
    icon: "⭐",
  },
  {
    title: "Ayurvedic Tradition",
    description:
      "Following ancient Ayurvedic principles for holistic wellness.",
    icon: "🕉️",
  },
  {
    title: "Global Shipping",
    description: "We deliver our herbal products worldwide with care.",
    icon: "🌏",
  },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Responsive Banner */}
      <div id="home" className="w-full mb-8">
        <Image
          src="/wlcmImg.png"
          alt="Banner"
          width={1920}
          height={1000}
          className="w-full h-[300px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] object-cover"
        />
      </div>

      {/* Added Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
            Welcome to YasHerb.com
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            India&#39;s premier provider of authentic herbs and Ayurvedic
            products. We blend ancient wisdom with modern science to bring you
            nature&#39;s finest remedies.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-green-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Product Showcase Intro */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
            Discover Our Premium Herb Collection
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Explore our carefully curated selection of herbs, each handpicked to
            ensure the highest quality and potency.
          </p>
        </div>
      </div>

      {/* Responsive Carousel - FIXED HEIGHT FOR BETTER LAPTOP VIEW */}
      <div className="w-full mb-16">
        <div className="max-w-7xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px]"
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {images.map((src, index) => (
              <SwiperSlide key={index} className="flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Additional Content After Carousel */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-green-50 p-6 md:p-12 rounded-xl">
          <div className="md:flex items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">
                Heritage of Indian Herbs
              </h2>
              <p className="text-gray-700 mb-4">
                For centuries, Indian herbs have been treasured for their
                remarkable healing properties. At YasHerb, we continue this
                ancient tradition, bringing you the finest herbs from across
                India.
              </p>
              <button className="bg-green-700 text-white py-2 px-6 rounded-lg hover:bg-green-800 transition-colors">
                Learn More
              </button>
            </div>
            <div className="md:w-5/12">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src="/home-featured.png"
                    alt="featured"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}