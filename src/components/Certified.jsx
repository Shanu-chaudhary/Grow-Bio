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
            delay:0.3,
            stagger:0.3,
            // scrollTrigger:"#page2 #box"
            scrollTrigger: {
                trigger:items,
                scroller:"body",
                // markers:true,
                start:"top 95%",
                end: "top 40%",
            }
        })
    })


    return (
        <div className='mt-5 p-5 overflow-x-hidden w-full h-auto flex flex-col justify-center items-center'>
            <div className='text-4xl md:text-6xl font-semibold'> 
                <h1>Certified By</h1>
            </div>
            <div ref={gsapRef} className=' mt-16 mb-6 p-3 flex gap-36 overflow-x-hidden gap'>              
                <div className='h-10 w-10 md:h-48 md:w-48 overflow-hidden' > <img  src="src/assets/dpiit.png" alt="Dpiit" /> </div>
                <div className='h-10 w-10 md:md:h-40 md:w-48 overflow-hidden' > <img src="src/assets/MSME.png" alt="Msme" /> </div>
                <div className='h-10 w-10 md:h-40 md:w-48 flex justify-center items-center md:pt-6 overflow-hidden' > <img  src="src/assets/startupindia.png" alt="Startupindia" /> </div>
                <div className='h-10 w-10 md:h-40 md:w-48 flex justify-center items-center overflow-hidden' > <img src="src/assets/wsscc.png" alt="wsscc" /> </div>
            </div>
        </div>
    )
}

export default Certified