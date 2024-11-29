import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
// import GSAP from 'gsap'
import { useEffect, useRef, useState } from 'react';

const slides = [
    {
      image: 'src/assets/sustainable-agriculture.jpg',
      heading: 'Welcome to Our Website',
      description: 'Discover the best solutions for your business.',
    },
    {
      image: 'https://w0.peakpx.com/wallpaper/249/88/HD-wallpaper-black-cat-animal-dark.jpg',
      heading: 'Innovative Ideas',
      description: 'We bring your visions to life.',
    },
    {
      image :'https://wallpapers.com/images/high/dark-animals-1920-x-1080-6t25x9l29h4g7u5x.webp',
      heading: 'Sustainability',
      description: 'Building a better future together.',
    },
    {
      image: 'https://wallpapers.com/images/high/dark-animals-1920-x-1080-6t25x9l29h4g7u5x.webp',
      heading: 'Excellence',
      description: 'Quality service and support you can trust.',
    },
    {
      image: 'https://wallpapers.com/images/high/dark-animals-1920-x-1080-6t25x9l29h4g7u5x.webp',
      heading: 'Let’s Collaborate',
      description: 'Join us on this exciting journey.',
    },
  ];

const Heroslider = () => {
    const sliderRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const timeline = gsap.timeline();
    //     const slides = sliderRef.current.children;
    // useGSAP(() => {
    //     const items = sliderRef.current.querySelectorAll(slides);
    //     gsap.from(items,{
    //         scale:0,
    //         duration:1,
    //         dealy:0.3
    //     })
    // })

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000); // 500ms for 0.5 seconds
      
        return () => clearInterval(interval); // Cleanup to prevent memory leaks
      
    
        // timeline
        // .fromTo(
        //   slides[currentIndex],
        //   { autoAlpha: 0, x: -50 },
        //   { autoAlpha: 1, x: 0, duration: 1 }
        // )
        // .to(slides[currentIndex], { autoAlpha: 0, x: 50, duration: 1, delay: 2 });
        // return () => timeline.kill();
    }, [currentIndex]);

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen overflow-x-hidden overflow-y-auto">
    <div ref={sliderRef} className="absolute w-full h-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 pl-36 flex flex-col gap-4 justify-center items-start bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-90' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <h1 className="text-7xl font-bold text-black">{slide.heading}</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">{slide.description}</p>
        </div>
      ))}
    </div>
    {/* Navigation */}
    <div className="absolute bottom-24 ml-64 transform -translate-x-1/2 flex space-x-4">
      <button
        onClick={prevSlide}
        className="bg-transparent backdrop-blur-sm text-black px-6 py-3 text-lg font-medium rounded-full"
      >
        Prev
      </button>
      <button
        onClick={nextSlide}
        className="bg-transparent backdrop-blur-sm text-black px-6 py-3 text-lg font-medium rounded-full"
      >
        Next
      </button>
    </div>
  </section>
  )
}

export default Heroslider