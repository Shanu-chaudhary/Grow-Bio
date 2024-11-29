import gsap from 'gsap';
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const Slogan = () => {
    const textRef = useRef();
    useEffect(() => {
        const textElement = textRef.current;
        const textContent = textElement.textContent ;
        textElement.textContent = ''; 

        gsap.to(textElement, {
                text: {value:textContent },
                duration: 3,
                ease: "none",
                delay:0.2,
                scrollTrigger:{
                    trigger:"h5",
                    scroller:"body",
                    // markers:true,
                    start:"top 80%",
                    end: "top 10%",
                    // scrub:true,
                }
            });
            }, []);
  return (
    <>
        <div className='flex justify-center items-center p-5' >
            <h5 ref={textRef} className='font-[Sen] text-green-800 text-2xl'>
            Let's cultivate success and create a sustainable agricultural ecosystem for generations to come.
            </h5>
        </div>
    </>
  )
}


export default Slogan