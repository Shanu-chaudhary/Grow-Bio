import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import img3 from '/assets/img3_11zon.webp';

const Mission_home = () => {

  const gsapRef = useRef();
  useGSAP(() => {
      const items = gsapRef.current.querySelectorAll("li");
      gsap.from(items, {
              x:-900,
              duration:0.5,
              opacity:0,
              delay:0.1,
              stagger:0.3,
              scrollTrigger: {
                trigger:items,
                scroller:"body",
                // markers:true,
                start:"top 95%",
                end: "top 10%",
                toggleActions: "play none none reverse",
                // scrub:true
            }
      })
  })

  return (
    <>
      <div className='bg-gradient-to-b from-teal-100 to-white'>
        <div className='flex items-center justify-center text-4xl lg:text-6xl font-bold pt-6 pb-4 lg:pb-6'>
          <h1>Our Vision</h1>
        </div>
        <div ref={gsapRef} className='
            lg:flex lg:flex-row flex flex-col justify-center gap-6 lg:gap-x-14 items-center p-4 lg:p-12'>
            <ul className='order-2 lg:order-first '>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Promoting organic alternatives to reduce chemical fertilizer use.</h5></li>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Providing tools and knowledge to boost eco-friendly farming profits.</h5></li>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Using organic fertilizers to enrich soil and improve yields.</h5></li>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Offering advanced tools and expert support for sustainable practices.</h5></li>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Building partnerships for a global agricultural ecosystem.</h5></li>
                <li className='flex font-montserrat text-xs lg:text-xl lg:leading-10 font-medium leading-loose'><i className="text-green-800 ri-check-double-fill"></i><h5>Encouraging practices for environmental and agricultural sustainability.</h5></li>
            </ul>
            <div className='lg:w-1/3 md:w-2/4 w-3/4 order-1 lg:order-last '>
                <img className='rounded-lg shadow-xl' src={img3} alt="" />
            </div>
        </div>
        </div>
    </>
  )
}

export default Mission_home