import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import img4 from '/assets/img4_11zon.webp';

const OurHistory = () => {
  const timelineRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    const items = timelineRef.current.querySelectorAll(".timeline-item");
    const image = imageRef.current;

    // Animation for timeline items
    gsap.from(items, {
      opacity: 0,
      y: 70,
      stagger: 0.3,
      duration: 1,
      scrollTrigger: {
        trigger: timelineRef.current,
        // markers:true,
        start: "top 80%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    // Animation for image
    gsap.from(image, {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="bg-gradient-to-br lg:mt-10 mt:8 from-yellow-50 via-green-50 to-white py-16">
      <div className=" mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Timeline Section */}
        <div
          ref={timelineRef}
          className="lg:pl-6 lg:w-1/2 flex flex-col  gap-6 timeline"
        >
          <h1 className="text-3xl lg:text-4xl font-bold text-dark-orange ">
            Our History
          </h1>
          <p className="text-gray-700 text-lg font-Dmsans">
            A journey of innovation and sustainable growth.
          </p>

          {/* Milestone Items */}
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-green-700">2010</h3>
            <p className="text-gray-600 font-Dmsans">
              Patel Agro was founded with the vision to revolutionize farming.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-green-700">2015</h3>
            <p className="text-gray-600 font-Dmsans">
              Introduced our first line of organic fertilizers.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-green-700">2020</h3>
            <p className="text-gray-600 font-Dmsans">
              Implemented robotics and automation for eco-friendly farming.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="text-xl font-semibold text-green-700">2023</h3>
            <p className="text-gray-600 font-Dmsans">
              Reached over 50,000 farmers with sustainable solutions.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          ref={imageRef}
          className="lg:w-1/2 h-auto flex justify-center items-center"
        >
          <img
            src={img4}
            alt="Our History"
            className="rounded-lg shadow-lg w-3/4 h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
