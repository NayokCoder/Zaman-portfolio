"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css"; // একটাই দরকার

const Swipper = () => {
  return (
    <div className="mt-16 max-w-7xl mx-auto mb-16 px-8 py-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10">Tips & Tricks</h2>

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {[
          {
            title: "Code Organization",
            content: '"Keep components small and focused. Easier to test, reuse, and debug."',
          },
          {
            title: "Performance",
            content: '"Use dynamic imports and lazy loading for large components."',
          },
          {
            title: "Styling",
            content: '"Use Tailwind’s `@apply` for cleaner, DRY utility classes."',
          },
          {
            title: "SEO",
            content: '"Use meta tags, Open Graph data, and semantic HTML for better reach."',
          },
        ].map((tip, index) => (
          <SwiperSlide key={index}>
            <div className="h-60 max-w-3xs mx-auto p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipper;
