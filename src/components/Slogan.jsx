// import gsap from 'gsap';
// import React, { useEffect, useRef } from 'react'
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { TextPlugin } from "gsap/TextPlugin";
// gsap.registerPlugin(TextPlugin);
// gsap.registerPlugin(ScrollTrigger);

// const Slogan = () => {
//     const textRef = useRef();
//     useEffect(() => {
//         const textElement = textRef.current;
//         const textContent = textElement.textContent ;
//         textElement.textContent = ''; 

//         gsap.to(textElement, {
//                 text: {value:textContent },
//                 duration: 3,
//                 ease: "none",
//                 delay:0.2,
//                 scrollTrigger:{
//                     trigger:"h5",
//                     scroller:"body",
//                     // markers:true,
//                     start:"top 80%",
//                     end: "top 10%",
//                     // scrub:true,
//                 }
//             });
//             }, []);
//   return (
//     <>
//         <div className='flex justify-center items-center p-5' >
//             <h5 ref={textRef} className='font-[Sen] font-medium text-black text-2xl'>
//             Let's cultivate success and create a sustainable agricultural ecosystem for generations to come.
//             </h5>
//         </div>
//     </>
//   )
// }


// export default Slogan



import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const Slogan = () => {
  const textRef = useRef();

  useEffect(() => {
    const textElement = textRef.current;
    const textContent = textElement.textContent;
    textElement.textContent = ''; // Clear initial content for animation

    gsap.fromTo(
      textElement,
      {
        opacity: 1,
        // y: 50,
      },
      {
        text: { value: textContent },
        opacity: 1,
        y: 0,
        duration: 5,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: textElement,
          scroller: 'body',
          start: 'top 90%',
          end: 'top 30%',
        },
      }
    );
  }, []);

  return (
    <div className="flex justify-center items-center  p-8">
      <h5
        ref={textRef}
        className="font-[Sen] font-medium text-dark-orange text-2xl md:text-4xl text-center leading-relaxed"
      >
        Let's cultivate success and create a sustainable agricultural ecosystem for generations to come.
      </h5>
    </div>
  );
};

export default Slogan;
