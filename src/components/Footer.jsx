import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className=' overflow-x-hidden md:gap-0 gap-6 flex flex-col md:flex md:flex-row  justify-between md:pt-8 relative bottom-0 mt-auto md:h-64 w-full bg-slate-200 footer'>
          <div className='quicklinks flex flex-row gap-10 md:gap-0 items-center md:flex md:flex-col mt-0 ml-10 md:ml-16 '>
            <div className='mt-0 md:border-b-2 border-black text-base md:text-2xl  font-semibold '>
              <h2 >Quick links</h2>
            </div>
            <div >
              <ul className=' mt-4 flex flex-col gap-0.5 text-slate-800  '>
                <Link to='/about' className='hover:underline hover:text-green-800'>About Us</Link>
                <Link to='/products' className='hover:underline hover:text-green-800'>products</Link>
                <Link to='/mission' className='hover:underline hover:text-green-800'>Our Mission</Link>
                <Link to='/contact' className='hover:underline hover:text-green-800'>Contact Us</Link>
              </ul>
            </div>
          </div>
          <div className='findus flex flex-row items-center gap-10 md:items-start ml-10 md:ml-0 md:flex md:flex-col  md:gap-4 '>
            <div className='md:border-b-2 border-black mt-0 text-base md:text-2xl font-semibold'>
              <h2>Social media</h2>
            </div>
            <div className='flex gap-2'>
              {/* <a  href=""><img className='hover:scale-125 transition duration-300 h-11 w-11 hover:border-2 hover:rounded-full' src="src/assets/icons8-facebook.svg" alt="" /></a> */}
              <a  href=""><div className='hover:scale-125 transition bg-contain duration-300 h-11 w-11 bg-[url("src/assets/icons8-facebook.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 h-11 w-11 bg-[url("src/assets/icons8-instagram.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 h-11 w-11 bg-[url("src/assets/icons8-linkedin.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 h-11 w-11 bg-[url("src/assets/icons8-twitter.svg")]'></div></a>
              <a href=""><div className='hover:scale-125 transition bg-contain duration-300 h-11 w-11 bg-[url("src/assets/icons8-youtube.svg")]'></div></a>
            </div>
          </div>
          <div className='policy flex flex-row  items-center gap-10 md:items-start ml-10 md:ml-0 md:flex md:flex-col md:gap-4'>
            <div className='md:border-b-2 border-black mt-0 text-base md:text-2xl font-semibold'><h2>Policy</h2></div>
            <div className='flex flex-col gap-2'>
              <a className='hover:underline hover:text-green-800' href="">Privacy policy</a>
              <a className='hover:underline hover:text-green-800' href="">Terms of Services</a>
            </div>
          </div>
          <div className='contact flex flex-row items-center gap-10 ml-10 md:ml-0 md:items-start ml md:flex md:flex-col md:gap-5 pr-11 mr-3' >
            <div className='md:border-b-2 border-black mt-0 text-base md:text-2xl font-semibold'><h2>Contact Us</h2></div>
            <div className='flex flex-col gap-1'>
              <div className='flex gap-2'>
                <i class="ri-phone-fill text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <a className='hover:underline hover:text-green-800' href="tel:+91 6261118789">+91 62611 18789</a>
              </div>
              <div className='flex gap-2'>
                <i class="ri-mail-line text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <a className='hover:underline hover:text-green-800' href="mailto:contact@patelagro.in">contact@patelagro.in</a>
              </div>
              <div className='flex flex-col'>
                <div className='flex gap-2'>
                <i class="ri-map-pin-5-fill text-xl hover:text-green-800 hover:scale-125 transition duration-300"></i>
                <p>Office- National Highway 45</p>
                </div>
                <p className='pl-5'> Dhanashri,Bareli-464668 <br /> Madhya Pradesh India</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer