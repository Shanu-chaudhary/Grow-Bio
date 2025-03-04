import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
// import GSAP from 'gsap'
import { useEffect, useRef, useState } from 'react';

const slides = [
    {
      image: 'assets/grow.jpg',
      heading: 'Grow-Bio',
      description: 'A unit of Patel Agro Products & Services Pvt. Ltd.',
    },
    {
      image: 'assets/img4.jpg',
      heading: 'Innovative Ideas',
      description: 'We bring your visions to life.',
    },
    {
      image :'assets/img3.jpg',
      heading: 'Sustainability',
      description: 'Building a better future together.',
    },
    {
      image: 'assets/img2.jpg',
      heading: 'Excellence',
      description: 'Quality service and support you can trust.',
    },
    {
      image: 'assets/img1.jpg',
      heading: 'Let’s Collaborate',
      description: 'Join us on this exciting journey.',
    },
  ];

const Heroslider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); 
      
        return () => clearInterval(interval); 
      

    }, [currentIndex]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[70vh] mt-12 lg:h-screen overflow-x-hidden overflow-y-hidden shadow-lg">
    <div ref={sliderRef} className="absolute w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 lg:pl-36 pl-10 flex flex-col gap-2 lg:gap-4 justify-center items-start bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          {/* <div className=" absolute top-0 left-0 w-3/5 h-full bg-gradient-to-l from-transparent via-green-600 to-green-900"></div> */}
          <h1 className="lg:text-7xl z-20 text-3xl font-bold text-gray-900">{slide.heading}</h1>
          <p className="lg:text-2xl z-20 pr-10 overflow-hidden text-lg font-semibold text-gray-800 lg:mt-4">{slide.description}</p>
          <div className=" absolute top-0 left-0 w-2/5 h-full opacity-85  bg-gradient-to-l from-transparent via-green-600 to-green-800"></div>
          
        </div>
      ))}
    </div>
    {/* Navigation */}
    <div className="absolute lg:bottom-24 bottom-14 ml-32 lg:ml-64  transform -translate-x-1/2 flex space-x-4">
      <button
        onClick={prevSlide}
        className="bg-transparent backdrop-blur-sm text-black px-4 lg:px-6 py-1 lg:py-3 lg:text-lg font-medium rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="bg-transparent backdrop-blur-sm text-black px-4 lg:px-6 py-1 lg:py-3 lg:text-lg font-medium rounded-full"
      >
        Next
      </button>
    </div>
  </section>
  )
}

export default Heroslider






// import React, { useState, useEffect } from "react";
// import "./Heroslider.css";

// const slides = [
//   {
//     id: 1,
//     image: "/src/assets/img1.jpg",
//     text: "Welcome to GrowBi!",
//     position: "top-20 left-10",
//   },
//   {
//     id: 2,
//     image: "/src/assets/img2.jpg",
//     text: "Innovating Agriculture Solutions",
//     position: "bottom-20 right-10",
//   },
//   {
//     id: 3,
//     image: "/src/assets/img3.jpg",
//     text: "Empowering Farmers Everywhere",
//     position: "top-1/2 left-1/4",
//   },
// ];

// const Heroslider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto-slide functionality
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
//     }, 3000); // Change slide every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-transform duration-700 ease-out ${
//             index === currentSlide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
//           }`}
//           style={{
//             transform: `translateX(${100 * (index - currentSlide)}%)`,
//           }}
//         >
//           {/* Background Image */}
//           <img
//             src={slide.image}
//             alt={`Slide ${slide.id}`}
//             className="absolute top-0 left-0 w-full h-full object-cover"
//           />
//           {/* Gradient Layer */}
//           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-white/80 to-transparent"></div>
//           {/* Text Content */}
//           <div
//             className={`absolute ${slide.position} text-black max-w-lg text-4xl font-bold`}
//           >
//             {slide.text}
//           </div>
//         </div>
//       ))}

//       {/* Navigation Dots */}
//       <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
//         {slides.map((_, index) => (
//           <div
//             key={index}
//             onClick={() => setCurrentSlide(index)}
//             className={`w-4 h-4 rounded-full cursor-pointer ${
//               index === currentSlide ? "bg-green-600" : "bg-gray-400"
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Heroslider;
