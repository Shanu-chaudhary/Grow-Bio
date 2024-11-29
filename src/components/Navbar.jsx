import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import {useLocation, Link } from 'react-router-dom';




const Navbar = () => {
    const gsapRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    useGSAP(() => {
        const items = gsapRef.current.querySelectorAll("li, a");
        gsap.from(items, {
                opacity:0,
                y:-30,
                duration:0.9,
                scale:0,
                delay:0.3,
                stagger:0.1,
                ease: "back.out",
        })
    })


  return (
    <>
    <nav className='  fixed top-0 z-50 bg-white text-black flex w-full h-auto justify-between align-middle'  >
            <div className=' ml-10 p-2' >
                <img className='h-16 w-auto' src="src/assets/gbblack.png" alt="logo" />
            </div>
            <div  className='flex'>
            <ul ref={gsapRef} className=' flex justify-center items-center space-x-8 max-md:space-x-2  text-xl font-medium cursor-pointer'>
                <Link to='/' className='hidden md:block hover:underline hover:text-green-800'>Home</Link>
                <Link to='/about' className='hidden md:block hover:underline hover:text-green-800'>About Us</Link>
                <Link to='/products' className='hidden md:block hover:underline hover:text-green-800'>products</Link>
                <Link to='/mission' className='hidden md:block hover:underline hover:text-green-800'>Our Mission</Link>
                <Link to='/contact' className='hidden bg-custom-green rounded-lg px-5 py-1 md:block hover:bg-green-600'>
                <button>Contact Us</button></Link>
                <div>
                    <i onClick={() => setIsOpen(!isOpen)} class="md:hidden ri-menu-unfold-4-fill"></i>
                </div>
            </ul>
            </div>
                {isOpen && (
                <div className="md:hidden bg-gray-700 space-y-2 w-40 px-4 py-2 z-40 bg-transparent">
                    <a href="#" className="block hover:underline">Home</a>
                    <a href="#" className="block hover:underline">About</a>
                    <a href="#" className="block hover:underline">Services</a>
                    <a href="#" className="block hover:underline">Contact</a>
                </div>
                )}
    </nav>
    </>
)
}

export default Navbar