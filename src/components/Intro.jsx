import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import  { useRef } from 'react'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


const Intro = () => {
    const gsapRef = useRef();
    const paraRef = useRef();
    useGSAP(() => {
        const items = gsapRef.current.querySelectorAll("p");
        const para = paraRef.current.querySelectorAll("p")
        const images = document.querySelectorAll(".intro img");
        // const image2 = paraRef.current.querySelectorAll("img")
  
        gsap.from(items, {
            y:300,
            duration:1,
            opacity:0,
            delay:0.9,
            stagger:1,
            // scrollTrigger:"#page2 #box"
            scrollTrigger: {
                trigger:"p",
                scroller:"body",
                // markers:true,
                start:"top 20%",
                end: "end -10%",
                // scrub:true,
            }
        })
        gsap.from(para, {
            y:300,
            duration:1,
            delay:0.3,
            stagger:0.3,
            // scrollTrigger:"#page2 #box"
            scrollTrigger: {
                trigger:"p",
                scroller:"body",
                // markers:true,
                start:"top -80%",
                end: "end 60%",
            }
        })
        // gsap.from(image1,{
        //   scale:0,
        //   duration:1,
        //   delay:0.3,
        //   scrollTrigger:{
        //     trigger:"img",
        //     scroller:"body",
        //     markers:true,
        //     start:"top 90%",
        //     end: "top 40%",
        //   }
        // })
        // gsap.from(image2,{
        //   scale:0,
        //   duration:1,
        //   delay:0.3,
        //   scrollTrigger: {
        //     trigger:"img",
        //     scroller:"body",
        //     markers:true,
        //     start:"end 10%",
        //     end: "top 40%",
        // }
        // })
        images.forEach((image) => {
          gsap.from(image, {
            scale: 0,
            duration: 1,
            delay: 0.3,
            ease: "back.out",
            scrollTrigger: {
            trigger: image,
            scroller: "body",
            //   markers: true,
            start: "top 90%",
            end: "top 40%",
            }
          });
        });
    })


  return (
    <>
        <div className='intro bg-slate-50 pb-8 md:pt-9 flex flex-col justify-center items-center'>
        <div className=' md:text-6xl text-green-800 font-medium'>
            <h1>GROW BIO</h1>
        </div>
        <div ref={gsapRef} className=' intro md:flex pr-10 mt-5 h-auto'>
            <div  className=' overflow-hidden flex flex-col gap-5 h-auto w-3/4 p-12 pt-7 text-xl'>
              <p className=''>At Patel Agro Products & Services Pvt. Ltd., we are dedicated to revolutionizing the agricultural landscape by empowering farmers and maximizing their income potential. Our mission is to reduce farmers' dependence on costly fertilizers (NPK) by offering innovative solutions that utilize livestock waste and agricultural by-products.Our cutting-edge technology and expertise empower farmers to convert these organic resources into nutrient-rich fertilizers, fostering sustainable farming practices and reducing environmental impact. Through our comprehensive services, we ensure that farmers can achieve increased yields, improved soil health, and reduced input costs, ultimately leading to a significant boost in their income.</p>
              <p>
              Join us in this transformative movement towards a more sustainable and profitable agriculture sector. Experience the benefits of producing your own fertilizer while contributing to a greener future. Explore our range of services and products designed to enhance your farm's productivity and profitability.At Patel Agro Products & Services Pvt. Ltd., we believe in the power of partnerships. Collaborate with us and embark on a journey of sustainable farming practices, increased profitability, and a brighter future for farmers worldwide.
              Together, let's cultivate success and create a sustainable agricultural ecosystem for generations to come.
              </p>
              </div>
            <div className='h-auto pr-14 flex justify-center items-center'>
              <img className='h-52 w-auto' src="src/assets/logo.jpg" alt="history" />
            </div>
        </div>
        <div ref={paraRef} className='md:flex mt-11 h-auto'>
            <div className='h-auto pl-14 flex justify-center items-center'>
              <img className='h-52 w-auto' src="src/assets/logo.jpg" alt="history" />
            </div>
            <div  className='  overflow-hidden flex flex-col gap-5 h-auto w-3/4 p-12 pt-7 text-xl'>
              <p>Through strategic partnerships and collaborations, Patel Agro Products & Services has successfully integrated robotics and automation into various stages of agricultural production, streamlining processes and reducing labor-intensive tasks. By embracing modern technologies, the company has enabled farmers to enhance productivity, reduce costs, and embrace sustainable practices that contribute to the overall health and vitality of our planet.</p>
              <p>
              Driven by a vision to create a nationwide organic revolution, Patel Agro Products & Services continues to invest in research and development, constantly striving to innovate and improve upon their product offerings. With a diverse range of organic fertilizers and eco-friendly solutions, the company empowers farmers across the country to cultivate nutritious, chemical-free crops, fostering a healthier and more sustainable future for generations to come.
              </p>
              </div>
        </div>
        <div>
            <button className='text-black px-5 py-3 rounded-full hover:scale-110 bg-custom-green hover:bg-green-600'>
                Know More
            </button>
        </div>
    </div>    
    </>
  )
}

export default Intro