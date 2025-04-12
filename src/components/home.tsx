// // filepath: /Users/rbmbp19/Documents/yas-india-website/yasherb/src/components/home.tsx
// "use client";

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";

// const images = [
//   "/home.png",
//   "/home2.png",
//   "/home3.png",
//   "/home.png",
//   "/home2.png",
//   "/home3.png",
//   "/home.png",
//   "/home2.png",
//   "/home3.png",
//   "/home.png",
// ];

// export default function Home() {
//   return (
//     <div className="w-full">
//       <div className="w-full mb-8">
//         <img
//           src="/homebanner.png"
//           alt="Banner"
//           className="w-full h-[1400px] object-cover"
//         />
//       </div>
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         navigation
//         pagination={{ clickable: true }}
//         autoplay={{ delay: 3000 }}
//         loop={true}
//         className="w-full h-[1100px]"
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index}>
//             <img
//               src={src}
//               alt={`Slide ${index + 1}`}
//               className="w-full h-full object-cover"
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const images = [
  "/home.png",
  "/home2.png",
  "/home3.png",
  "/home.png",
  "/home2.png",
  "/home3.png",
  "/home.png",
  "/home2.png",
  "/home3.png",
  "/home.png",
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
      <div className="w-full mb-8">
        <img
          src="/homebanner.png"
          alt="Banner"
          className="w-full h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] xl:h-[1100px] 2xl:h-[1400px] object-cover"
        />
      </div>

      {/* Added Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-800 mb-4">
            Welcome to YasHerb.com
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            India's premier provider of authentic herbs and Ayurvedic products.
            We blend ancient wisdom with modern science to bring you nature's
            finest remedies.
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

      {/* Responsive Carousel */}
      <div className="w-full mb-16">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1000px] 2xl:h-[1100px]"
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
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <div className="h-48 md:h-64 bg-green-200 flex items-center justify-center text-green-800">
                  <img
                    src="/home-featured.png"
                    alt="featured"
                    className="w-full h-[50px] sm:h-[300px] md:h-[400px] lg:h-[900px] xl:h-[1100px] 2xl:h-[1400px] object-cover"
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
