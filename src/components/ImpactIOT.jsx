


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const ImpactIoT = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = sectionRef.current.querySelectorAll(".fade-in");
    const ballElements = sectionRef.current.querySelectorAll(".ball");

    // Animation for each image and text
    elements.forEach((el, index) => {
      const isReverse = index % 2 === 0;
      gsap.fromTo(
        el,
        {
          opacity: 0,
          x: isReverse ? 70 : -70,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animation for green ball divs
    ballElements.forEach((ball) => {
      gsap.fromTo(
        ball,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: ball,
            start: "top 85%",
            end: "bottom 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const impacts = [
    {
      title: "Improved Soil Health",
      description:
        "Vermicompost enhances soil health, leading to better crop yields and reduced reliance on chemical fertilizers.",
      image: "assets/soilhealth.jpg",
    },
    {
      title: "Sustainable Agriculture",
      description:
        "Encouraging organic farming practices promotes eco-friendly, sustainable farming methods and reduces environmental impact.",
      image: "assets/sustainablefarming.png",
    },
    {
      title: "Increased Crop Yields",
      description:
        "Vermicompost increases crop yields and improves produce quality, directly benefiting farmers' incomes and food production.",
      image: "assets/cropyield.webp",
    },
    {
      title: "Soil Fertility Enhancement",
      description:
        "Enhancing soil fertility over the long term sustains agriculture with continued benefits for the region.",
      image: "assets/soilhealth.png",
    },
    {
      title: "IoT Monitoring",
      description:
        "IoT devices monitor temperature and humidity in the compost, ensuring higher-quality production and efficient processes.",
      image: "assets/iotinagri.jpg",
    },
    {
      title: "Waste Reduction",
      description:
        "Buying back excess compost promotes waste reduction and recycling in agriculture, optimizing resource management.",
      image: "assets/wastereduction.jpg",
    },
    {
      title: "Income Generation",
      description:
        "Our buy-back scheme provides farmers with an additional income source, improving their financial well-being.",
      image: "assets/incomegeneration.jpg",
    },
    {
      title: "Access to Markets",
      description:
        "Connecting farmers with larger organizations gives them access to larger markets and higher-value sales opportunities.",
      image: "assets/marketaccess.png",
    },
  ];

  return (
    <section
      className="min-h-screen bg-fixed bg-cover bg-center mt-3 py-16 px-6 lg:px-20"
      style={{
        background:
          "linear-gradient(to bottom, #f9f7f1, #e5d9c5, #d4b483, #e5d9c5, #f9f7f1)",
      }}
    >
      <div
        ref={sectionRef}
        className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-dark-orange mb-12 fade-in">
          The Integration of IoT Technology: Impact in Vermicompost
        </h2>

        <p className="text-lg text-center text-gray-700 mb-16 fade-in">
          Our vermicompost manufacturing startup integrates IoT technology to
          revolutionize organic farming. This innovation creates a significant
          positive impact on farmers, stakeholders, and the environment.
        </p>

        <div className="relative">
          <div className="absolute top-0 left-1/2 w-1 bg-green-500 h-full transform -translate-x-1/2"></div>
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`relative flex items-center justify-between py-12 fade-in ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 px-8">
                <h3 className="text-2xl font-bold text-green-700 mb-4">
                  {impact.title}
                </h3>
                <p className="text-gray-600 text-lg">{impact.description}</p>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src={impact.image}
                  alt={impact.title}
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full shadow-md ball"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-green-100 rounded-lg p-8 flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8 fade-in">
          <img
            src="assets/iot.jpg" 
            alt="IoT Device"
            className="rounded-lg w-full lg:w-1/2"
          />
          <div>
            <h3 className="text-2xl font-bold text-green-800 mb-4">
              IoT Monitoring Device
            </h3>
            <p className="text-gray-700 text-lg">
              Our IoT monitoring device tracks critical parameters like
              temperature and humidity during vermicompost production. This
              ensures optimal conditions for composting, delivering consistent,
              high-quality results. With this technology, farmers can optimize
              their processes, reduce waste, and maximize efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactIoT;

