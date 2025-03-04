import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className=' overflow-x-hidden md:pl-5 lg:gap-0 gap-6 flex flex-col md:flex md:flex-row justify-between lg:pt-8 relative bottom-0 mt-10 lg:mt-0 lg:h-64 w-full bg-gradient-to-b from-white to-green-100 '>
          <div className='quicklinks flex flex-col gap-1 lg:gap-0   lg:items-start ml-10 md:ml-0 lg:ml-10 '>
            <div className='mt-0 lg:border-b-2  border-black text-lg lg:text-2xl font-semibold '>
              <h2 >Quick links</h2>
            </div>
            <div >
              <ul className=' mt-4 flex flex-col gap-0.5 text-slate-800 md:text-sm lg:text-base'>
                <Link to='/about' className='hover:underline hover:text-green-800'>About Us</Link>
                <Link to='/products' className='hover:underline hover:text-green-800'>products</Link>
                <Link to='/mission' className='hover:underline hover:text-green-800'>Our Mission</Link>
                <Link to='/contact' className='hover:underline hover:text-green-800'>Contact Us</Link>
              </ul>
            </div>
          </div>
          <div className='findus flex flex-col gap-4 lg:gap-4   lg:items-start ml-10  lg:ml-0  '>
            <div className='lg:border-b-2 border-black mt-0 text-lg lg:text-2xl font-semibold'>
              <h2>Social media</h2>
            </div>
            <div className='flex gap-2'>
              <a  href=""><div className='hover:scale-125 transition bg-contain duration-300 lg:h-10 h-9 lg:w-10 w-9 bg-[url("assets/icons8-facebook.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 lg:h-10 h-9 lg:w-10 w-9 bg-[url("assets/icons8-instagram.svg")]'></div></a>
              <a href="https://www.linkedin.com/company/growbio-gb/posts/?feedView=all"><div className='hover:scale-125 transition bg-contain duration-300 lg:h-10 h-9 lg:w-10 w-9 bg-[url("assets/icons8-linkedin.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 lg:h-10 h-9 lg:w-10 w-9 bg-[url("assets/icons8-twitter.svg")]'></div></a>
              <a href="https://youtube.com/@growbio_india?si=__xY6asGJvvZ34wR"><div className='hover:scale-125 transition bg-contain duration-300 lg:h-10 h-9 lg:w-10 w-9 bg-[url("assets/icons8-youtube.svg")]'></div></a>
            </div>
          </div>
          <div className='policy flex flex-col gap-1 lg:gap-4   lg:items-start ml-10 lg:ml-0'>
            <div className='lg:border-b-2 border-black mt-0 text-lg lg:text-2xl font-semibold'><h2>Policy</h2></div>
            <div className='flex flex-col md:text-sm lg:text-base gap-2'>
              <a className='hover:underline hover:text-green-800' href="">Privacy policy</a>
              <a className='hover:underline hover:text-green-800' href="">Terms of Services</a>
            </div>
          </div>
          <div className='contact flex flex-col gap-4 lg:gap-4 lg:mr-3 lg:pr-3  lg:items-start ml-10' >
            <div className='lg:border-b-2 lg:border-black mt-0  text-lg lg:text-2xl font-semibold'><h2>Contact Us</h2></div>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-2 md:text-sm lg:text-base'>
                <i className="ri-phone-fill text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <a className='hover:underline hover:text-green-800' href="tel:+91 6261118789">+91 62611 18789</a>
              </div>
              <div className='flex gap-2 md:text-sm lg:text-base'>
                <i className="ri-mail-line text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <a className='hover:underline hover:text-green-800' href="mailto:contact@patelagro.in">contact@patelagro.in</a>
              </div>
              <div className='flex flex-col md:text-sm lg:text-base'>
                <div className='flex gap-2'>
                <i className="ri-map-pin-5-fill text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <p>Office- National Highway 45</p>
                </div>
                <p className='pl-5 md:text-sm lg:text-base'> Dhanashri,Bareli-464668 <br /> Madhya Pradesh India</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer