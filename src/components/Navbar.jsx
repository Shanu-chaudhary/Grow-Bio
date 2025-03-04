import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const gsapRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    const items = gsapRef.current.querySelectorAll("li, a");
    gsap.from(items, {
      opacity: 0,
      y: -30,
      duration: 0.9,
      scale: 0,
      delay: 0.3,
      stagger: 0.1,
      ease: "back.out",
    });
  });

  return (
    <>
      <nav className="bg-white fixed top-0 z-50 text-black flex w-full h-auto justify-between items-center md:px-11">
        <div className="lg:ml-10 pl-4 p-2 ">
          <NavLink to="/">
            <img className="h-8 lg:h-16 w-auto" src="assets/text272.png" alt="logo"/>
          </NavLink>
        </div>

        <div className="flex ">
          <ul
            ref={gsapRef}
            className="lg:flex lg:justify-center lg:items-center lg:space-x-8 md:flex md:justify-center md:items-center md:space-x-5 hidden space-x-8 cursor-pointer"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-dark-orange font-montserrat md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg"
                  : "hover:underline hover:text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
                  : "hover:underline hover:text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
                  : "hover:underline hover:text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/mission"
              className={({ isActive }) =>
                isActive
                  ? "text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold font-montserrat text-lg"
                  : "hover:underline hover:text-dark-orange md:text-sm md:font-medium lg:text-lg lg:font-semibold text-lg font-montserrat"
              }
            >
              Our Mission
            </NavLink>
            <div className=''>
            
            <NavLink
            to="/contact"
            className={ ({ isActive }) =>
                isActive
                ? "bg-green-600 text-white rounded-lg md:px-2 lg:px-5 lg:text-lg lg:font-semibold  py-1 font-montserrat flex gap-3 text-lg md:text-sm md:font-medium hover:bg-custom-green md:mr-4 "
                : "bg-green-600 text-white rounded-lg md:px-2 lg:px-5 py-1 lg:text-lg lg:font-semibold font-montserrat flex gap-3 text-lg md:text-sm md:font-medium hover:bg-custom-green md:mr-4"
            }
            >
            <i className="ri-customer-service-fill"></i>
            Contact Us
            </NavLink>
            </div>

            {/* Mobile Menu Icon */}
          </ul>
        </div>

        <div className='lg:hidden md:hidden flex justify-center items-center h-10 w-auto mr-10'>
              <i onClick={() => setIsOpen(!isOpen)} className="ri-menu-unfold-4-fill"></i>
        </div>

        {/* Mobile Dropdown */}

      </nav>
      {isOpen && (
          <div className="mt-12 lg:hidden font-montserrat bg-gray-700 flex flex-col space-y-2 h-44 w-auto px-4 py-1 z-40">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-green-700 border-b-2 border-slate-600 " : "text-white border-b-2 border-slate-600" )}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "text-green-700 border-b-2 border-slate-600" : "text-white border-b-2 border-slate-600")}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "text-green-700 border-b-2 border-slate-600" : "text-white border-b-2 border-slate-600")}
            >
              Products
            </NavLink>
            <NavLink
              to="/mission"
              className={({ isActive }) => (isActive ? "text-green-700 border-b-2 border-slate-600" : "text-white border-b-2 border-slate-600")}
            >
              Mission
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-green-700 border-b-2 border-slate-600" : "text-white border-b-2 border-slate-600")}
            >
              Contact
            </NavLink>
          </div>
        )}
    </>
  );
};

export default Navbar;
