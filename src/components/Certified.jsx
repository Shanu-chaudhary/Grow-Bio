import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Certified = () => {
    
    const gsapRef = useRef();
    useGSAP(() => {
        const items = gsapRef.current.querySelectorAll("img");
        gsap.from(items, {
            x:200,
            duration:1,
            delay:0.2,
            stagger:0.3,
            scrollTrigger: {
                trigger:items,
                scroller:"body",
                // markers:true,
                start:"top 85%",
                end: "top 40%",
                toggleActions: "play none none reverse",
            }
        })
    })


    return (
        <div className='mt-5 p-5 overflow-x-hidden w-full h-auto flex flex-col justify-center items-center'>
            <div className='text-4xl lg:text-6xl font-semibold'> 
                <h1>Certified By</h1>
            </div>
            <div ref={gsapRef} className='mt-8 lg:mt-16 mb-6 p-3 lg:flex grid grid-cols-2 md:space-x-10 lg:gap-36 gap-16 overflow-x-hidden '>              
                <div className='h-24 w-24 md:h-32 md:w-32 lg:h-48 lg:w-48 overflow-hidden' > <img  src="assets/dpiit.png" alt="Dpiit" /> </div>
                <div className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-48 overflow-hidden' > <img src="assets/MSME.png" alt="Msme" /> </div>
                <div className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-48 flex justify-center items-center lg:pt-6 overflow-hidden' > <img  src="assets/startupindia.png" alt="Startupindia" /> </div>
                <div className='h-24 w-24 md:h-32 md:w-32 lg:h-40 lg:w-48 flex justify-center items-center overflow-hidden' > <img src="assets/ekKadamSwachtaKiAur.png" alt="wsscc" /> </div>
            </div>
        </div>
    )
}

export default Certified