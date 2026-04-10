"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Slider() {
  const slides = [
    {
      id: 1,
      title: "Fresh Products Delivered to your Door",
      subtitle: "Get 20% off your first order",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 2,
      title: "100% Organic & Healthy Vegetables",
      subtitle: "Fresh from the farm to your table",
      image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1920&q=80",
    },
    {
      id: 3,
      title: "Daily Fresh Bakery & Dairy Mix",
      subtitle: "Enjoy the freshly baked goods every morning",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1920&q=80",
    },
  ];

  return (
    <div className="w-full max-w-[1920px] mx-auto group">
      <div className="relative w-full">
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
          bulletClass: "swiper-bullet",
          bulletActiveClass: "swiper-bullet-active",
        }}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
              

              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              

              <div className="absolute inset-0 bg-gradient-to-r from-[#00C950E5] to-[#05DF7280]" />
              

              <div className="relative h-full flex flex-col justify-center container mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
                <h1 className="text-[30px] md:text-[40px] lg:text-[48px] font-bold text-white max-w-[320px] sm:max-w-md lg:max-w-2xl leading-[1.2] mb-3 lg:mb-5">
                  {slide.title}
                </h1>
                
                <p className="text-[#ffffff] text-[16px] font-medium mb-8">
                  {slide.subtitle}
                </p>
                
                <div className="flex items-center gap-3 sm:gap-4">
                  <button className="bg-white text-[#0aad0a] px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-gray-100 transition-colors shadow-sm">
                    Shop Now
                  </button>
                  <button className="bg-transparent border border-white/80 text-white px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-lg font-bold text-[14px] sm:text-[15px] hover:bg-white hover:text-[#0aad0a] transition-colors">
                    View Deals
                  </button>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>


      <button className="custom-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center text-[#0aad0a] shadow-lg cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      <button className="custom-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center text-[#0aad0a] shadow-lg cursor-pointer hover:bg-gray-50 transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed">
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>


      <div className="custom-pagination absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex justify-center gap-2" />
      </div>


      <style dangerouslySetInnerHTML={{__html: `
        .swiper-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.4);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .swiper-bullet-active {
          width: 24px;
          background: #ffffff;
          border-radius: 4px;
        }
      `}} />
    </div>
  );
}
