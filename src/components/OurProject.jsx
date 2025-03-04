// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";

// const OurProject = () => {
//   const sectionRef = useRef(null);

//   // GSAP animation
//   useEffect(() => {
//     const elements = sectionRef.current.querySelectorAll(".fade-in");
//     gsap.fromTo(
//       elements,
//       { opacity: 0, y: 70, x: 70 },
//       {
//         opacity: 1,
//         y: 0,
//         x: 0,
//         duration: 0.5,
//         stagger: 0.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: elements,
//           scroller: "body",
//           // markers:true,
//           start: "top 80%",
//           end: "top 10%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );
//   }, []);

//   const content = [
//     {
//       title: "Limited Access to Quality Vermicompost",
//       description:
//         "Many farmers lack access to quality vermicompost, which hinders their ability to transition to organic farming. They often rely on conventional synthetic fertilizers due to the unavailability of reliable organic alternatives.",
//       image: "/src/assets/img4_11zon.webp",
//     },
//     {
//       title: "Knowledge Gap",
//       description:
//         "Organic farming requires specific knowledge and practices, which many farmers may not possess. They need guidance on how to use vermicompost effectively, crop rotation, pest control, and other organic farming techniques to maximize their yields.",
//       image: "/src/assets/img5_11zon.webp",
//     },
//     {
//       title: "Lack of Monitoring and Data",
//       description:
//         "In the vermicompost production process, maintaining optimal temperature and humidity is critical for efficient composting. Without proper monitoring, it can be challenging to ensure consistent quality.",
//       image: "/src/assets/img3_11zon.webp",
//     },
//   ];

//   return (
//     <section
      
//       className="min-h-screen bg-fixed bg-cover bg-center py-16 px-6 lg:px-20"
//       style={{
//         backgroundImage: "url('/src/assets/img5.jpg')",
//       }}
//     >
//       <div ref={sectionRef} className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
//         {/* Heading */}
//         <h1 className="lg:text-6xl text-4xl font-bold text-center text-dark-orange lg:mb-12 mb-8 fade-in">
//           Our Project
//         </h1>

//         {/* Intro */}
//         <p className="lg:text-lg text-sm font-Dmsans text-center text-gray-700 lg:mb-12 mb-8 fade-in">
//           Organic farming is gaining popularity due to its numerous
//           environmental and health benefits, leading to increased demand for
//           organic products, including vermicompost. Vermicompost is a
//           nutrient-rich organic fertilizer that enhances soil fertility,
//           improves crop yields, and reduces the need for chemical fertilizers.
//         </p>

//         <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
//           {content.map((item, index) => (
//             <div
//               key={index}
//               className="fade-in bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out"
//             >
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-32 lg:h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="lg:text-xl text-lg font-semibold text-green-700 mb-4">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600 text-xs lg:text-sm">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="lg:mt-16 mt-8 text-center fade-in">
//           <p className="lg:text-lg text-sm font-Dmsans text-gray-700">
//             Our project aims to bridge the gap between the demand for quality
//             vermicompost and the limited access to it, while also addressing the
//             knowledge gap in organic farming. The implementation of IoT
//             monitoring ensures consistent quality and efficiency in the
//             vermicompost production process.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProject;



import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

const OurProject = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = sectionRef.current.querySelectorAll(".fade-in");
    elements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50, x:50 },
        {
          opacity: 1,
          y: 0,
          x:0,
          delay:0,
          duration: 1,
          stagger: 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  const content = [
    {
      title: "Limited Access to Quality Vermicompost",
      description:
        "Many farmers lack access to quality vermicompost, which hinders their ability to transition to organic farming. They often rely on conventional synthetic fertilizers due to the unavailability of reliable organic alternatives.",
      image: "assets/vermicompost.jpg",
    },
    {
      title: "Knowledge Gap",
      description:
        "Organic farming requires specific knowledge and practices, which many farmers may not possess. They need guidance on how to use vermicompost effectively, crop rotation, pest control, and other organic farming techniques to maximize their yields.",
      image: "assets/knowledgegap.webp",
    },
    {
      title: "Lack of Monitoring and Data",
      description:
        "In the vermicompost production process, maintaining optimal temperature and humidity is critical for efficient composting. Without proper monitoring, it can be challenging to ensure consistent quality.",
      image: "assets/monitoring.png",
    },
  ];

  return (
    <section
      className="min-h-screen bg-fixed bg-cover bg-center py-16 px-6 lg:px-20"
      style={{
        backgroundImage: "url('assets/img5_11zon.webp')",
      }}
    >
      <div
        ref={sectionRef}
        className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-7xl mx-auto"
      >
        {/* Heading */}
        <h1 className="lg:text-6xl text-4xl font-bold text-center text-dark-orange lg:mb-12 mb-8 fade-in">
          Our Project
        </h1>

        {/* Intro */}
        <p className="lg:text-lg text-sm font-Dmsans text-center text-gray-700 lg:mb-12 mb-8 fade-in">
          Organic farming is gaining popularity due to its numerous
          environmental and health benefits, leading to increased demand for
          organic products, including vermicompost. Vermicompost is a
          nutrient-rich organic fertilizer that enhances soil fertility,
          improves crop yields, and reduces the need for chemical fertilizers.
        </p>

        {/* Content Grid */}
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {content.map((item, index) => (
            <div
              key={index}
              className="fade-in bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500 ease-in-out"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 lg:h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="lg:text-xl text-lg font-semibold text-green-700 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs lg:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="lg:mt-16 mt-8 text-center fade-in">
          <p className="lg:text-lg text-sm font-Dmsans text-gray-700">
            Our project aims to bridge the gap between the demand for quality
            vermicompost and the limited access to it, while also addressing the
            knowledge gap in organic farming. The implementation of IoT
            monitoring ensures consistent quality and efficiency in the
            vermicompost production process.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurProject;

