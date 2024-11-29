import React from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import  { useRef } from 'react'
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const History = () => {

  const gsapRef = useRef();
  const paraRef = useRef();
  useGSAP(() => {
      const items = gsapRef.current.querySelectorAll("p");
      const para = paraRef.current.querySelectorAll("p")
      const images = document.querySelectorAll(".history img");
      // const image2 = paraRef.current.querySelectorAll("img")

      gsap.from(items, {
          y:200,
          duration:1,
          delay:0.3,
          stagger:0.3,
          // scrollTrigger:"#page2 #box"
          scrollTrigger: {
              trigger:"p",
              scroller:"body",
              // markers:true,
              start:"top 90%",
              end: "top 40%",
          }
      })
      gsap.from(para, {
          y:200,
          duration:0.5,
          delay:0.3,
          stagger:0.2,
          // scrollTrigger:"#page2 #box"
          scrollTrigger: {
              trigger:"p",
              scroller:"body",
              // markers:true,
              start:"top 30%",
              end: "top 40%",
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
          scrollTrigger: {
            trigger: image, // Trigger animation for each image
            scroller: "body",
            // markers: true,
            start: "top 90%",
            end: "top 40%",
          }
        });
      });
  })



  return (
    <>
    <div className='md:mt-16 flex flex-col justify-center items-center history'>
        <div className='md:text-6xl font-medium'>
            <h1>Our History</h1>
        </div>
        <div ref={gsapRef} className='md:flex pr-10 mt-16 h-auto'>
            <div  className='flex flex-col gap-5 h-auto w-3/4 p-12 text-xl'>
              <p><b>Patel Agro Products & Services Pvt Ltd</b>, established on April 13th, 2022, by Mr. <i>Abhishek Patel</i>, is an innovative enterprise dedicated to revolutionizing the agricultural industry with a strong focus on organic products and fertilizers. Recognizing the detrimental effects of pesticides and harmful chemicals on both the environment and human health, Mr. Patel envisioned a transformative movement towards organic farming practices, driven by cutting-edge technologies such as Artificial Intelligence (AI), Machine Learning (ML), Robotics, and optimized Supply Chain management.</p>
              <p>
              With a firm commitment to sustainability and the well-being of both farmers and consumers, Patel Agro Products & Services has been at the forefront of pioneering organic solutions that enhance agricultural productivity while safeguarding the natural ecosystem. Leveraging state-of-the-art AI and ML algorithms, the company has developed advanced methodologies for precise soil analysis, crop monitoring, and pest management, ensuring optimal yields and minimizing environmental impact.
              </p>
              </div>
            <div className='h-auto pr-14 flex justify-center items-center'>
              <img className='h-52 w-auto' src="src/assets/logo.jpg" alt="history" />
            </div>
        </div>
        <div ref={paraRef} className='md:flex mt-16 h-auto'>
            <div className='h-auto pl-14 flex justify-center items-center'>
              <img className='h-52 w-auto' src="src/assets/logo.jpg" alt="history" />
            </div>
            <div  className='flex flex-col gap-5 h-auto w-3/4 p-12 text-xl'>
              <p>Through strategic partnerships and collaborations, Patel Agro Products & Services has successfully integrated robotics and automation into various stages of agricultural production, streamlining processes and reducing labor-intensive tasks. By embracing modern technologies, the company has enabled farmers to enhance productivity, reduce costs, and embrace sustainable practices that contribute to the overall health and vitality of our planet.</p>
              <p>
              Driven by a vision to create a nationwide organic revolution, Patel Agro Products & Services continues to invest in research and development, constantly striving to innovate and improve upon their product offerings. With a diverse range of organic fertilizers and eco-friendly solutions, the company empowers farmers across the country to cultivate nutritious, chemical-free crops, fostering a healthier and more sustainable future for generations to come.
              </p>
              </div>

        </div>
    </div>
    </>
  )
}

export default History