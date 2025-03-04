import React, { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import img2 from '/assets/automation1.png'; 
import img1 from '/assets/empower_farmer.jpg'; 

gsap.registerPlugin(ScrollTrigger);

const Intro = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const textBlocks = introRef.current.querySelectorAll('.text-block');
    const images = introRef.current.querySelectorAll('.intro-img');

    // Animate text sections
    gsap.from(textBlocks, {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: textBlocks[0],
        start: 'top 80%',
        end: 'top 50%',
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });

    // Animate images
    gsap.from(images, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: images[0],
        start: 'top 90%',
        end: 'top 50%',
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });
  }, []);

  return (
    <div
      ref={introRef}
      className="intro bg-gradient-to-b from-white to-green-100 py-12 md:py-16 px-4 md:px-32"
    >
      <div className="container mx-auto">
        <h1 className="text-2xl tracking-normal lg:text-5xl font-bold text-dark-orange text-center mb-12 md:mb-16">
          Empowering Sustainable Agriculture
        </h1>
        {/* Section 1 */}
        <div className="md:flex items-center gap-12 mb-12 md:mb-16">
          <div className="text-block md:w-1/2 text-gray-800">
            <p className="text-sm font-Dmsans md:font-normal lg:text-lg md:leading-4  lg:leading-relaxed">
              At Patel Agro Products & Services Pvt. Ltd., we empower farmers to
              revolutionize agriculture with sustainable solutions. By
              transforming livestock waste and agricultural by-products into
              nutrient-rich fertilizers using cutting-edge technology, we help
              reduce reliance on costly fertilizers, enhance soil health, and
              boost yields.
            </p>
            <p className="mt-4 text-sm font-Dmsans md:font-normal md:leading-4 lg:text-lg leading-relaxed">
              Our mission is to maximize farmers' profitability while promoting
              eco-friendly practices. Partner with us to embrace sustainable
              farming, improve productivity, and contribute to a greener future
              for generations to come.
            </p>
          </div>
          <div className="intro-img pt-6 md:pt-0  md:w-1/2 flex justify-center md:justify-end items-center">
            <img
              src={img1}
              alt="Agriculture"
              className="rounded-lg  shadow-xl h-2/5 w-4/5 "
            />
          </div>
        </div>
        {/* Section 2 */}
        <div className="md:flex items-center gap-12 md:pt-10">
          <div className="intro-img md:w-1/2  pb-6 flex justify-center md:justify-start items-center">
            <img
              src={img2}
              alt="Technology in Agriculture"
              className="rounded-lg shadow-xl h-2/5 w-4/5"
            />
          </div>
          <div className="text-block md:w-1/2 text-gray-800">
            <p className="text-sm font-Dmsans md:font-normal md:leading-4 lg:text-lg leading-relaxed">
              Patel Agro Products & Services integrates robotics and automation
              into agriculture, streamlining production and reducing labor
              efforts. By adopting modern technologies, we empower farmers to
              boost productivity, cut costs, and embrace eco-friendly practices
              for a healthier planet.
            </p>
            <p className="mt-4 text-sm font-Dmsans md:font-normal md:leading-4 lg:text-lg leading-relaxed">
              Committed to leading an organic revolution, we continuously
              invest in research and innovation to deliver advanced organic
              fertilizers and sustainable solutions. Our mission is to help
              farmers grow chemical-free, nutritious crops, cultivating a
              healthier and greener future for generations ahead.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <button className="font-montserrat md:px-6 px-4 py-2 md:py-3 rounded-full text-white bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105">
            <a href="/about">Know More</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;

