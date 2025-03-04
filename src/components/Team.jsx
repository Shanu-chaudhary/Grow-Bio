import React from 'react'

const Team = () => {
  return (
    <>
        <div className=''>
          <div className='bg-white pt-12 md:pt-6 overflow-hidden h-auto md:mb-4'>
            <div className='flex justify-center items-center lg:pb-3 font-medium text-3xl md:text-4xl lg:text-6xl'>
              <h1>Meet our team members</h1>
            </div>
            <div className='team-members pb-24 pt-12 gap-6 flex flex-col md:grid md:grid-cols-3 md:p-5 lg:flex lg:flex-row justify-center items-center '>
            <div className='h-[432px] w-[224px] team '>
              <div className='h-[224px] w-[224px] flex justify-center items-center'>
                <div className=' h-[180px] w-[180px] rounded-full'>
                  <img className=' rounded-full'  src="assets/abhishek.jpg" alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-0 justify-center items-center pt-5'>
                <h1 className='text-black text-2xl tracking-tight'>Abhishek Patel</h1>
                <h2 className='text-green-800'>Managing director</h2>
                <p className='leading-tight text-center pt-3'>A visionary leader driving strategic growth, operational excellence, and innovation to achieve the company's goals</p>
                <div className='pt-3 flex justify-between gap-3 icons'>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-instagram-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-facebook-box-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-linkedin-box-line"></i></a>
                </div>
              </div>
            </div>
            <div className='h-[432px] w-[224px] team '>
              <div className='h-[224px] w-[224px] flex justify-center items-center'>
                <div className=' h-[180px] w-[180px] object-cover flex justify-center items-center rounded-full'>
                  <img className='rounded-full'  src="assets/andriyas.jpg" alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-0 justify-center items-center pt-5'>
                <h1 className='text-black text-2xl tracking-tight'>Andriyas Saini</h1>
                <h2 className='text-green-800'>Tech lead</h2>
                <p className='leading-tight text-center pt-3'>A visionary leader driving strategic growth, operational excellence, and innovation to achieve the company's goals</p>
                <div className='pt-3 flex justify-between gap-3 icons'>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-instagram-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-facebook-box-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-linkedin-box-line"></i></a>
                </div>
              </div>
            </div>
            <div className='h-[432px] w-[224px] team '>
              <div className='h-[224px] w-[224px] flex justify-center items-center bg-red'>
                <div className=' h-[180px] w-[180px] rounded-full'>
                  <img className=' rounded-full'  src="assets/Papaji.jpg" alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-0 justify-center items-center pt-5'>
                <h1 className='text-black text-2xl tracking-tight text-center'>Suresh Kumar Dhakar</h1>
                <h2 className='text-green-800'>director</h2>
                <p className='leading-tight text-center pt-3'>A visionary leader driving strategic growth, operational excellence, and innovation to achieve the company's goals</p>
                <div className='pt-3 flex justify-between gap-3 icons'>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-instagram-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-facebook-box-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-linkedin-box-line"></i></a>
                </div>
              </div>
            </div>
            <div className='h-[432px] w-[224px] team '>
              <div className='h-[224px] w-[224px] flex justify-center items-center bg-red'>
                <div className=' h-[180px] w-[180px] rounded-full'>
                  <img className=' rounded-full'  src="assets/Anuragsir.png" alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-0 justify-center items-center pt-5'>
                <h1 className='text-black text-2xl tracking-tight text-center'>Dr. Anurag S D Rai</h1>
                <h2 className='text-green-800'>Mentor</h2>
                <p className='leading-tight text-center pt-3'>A visionary leader driving strategic growth, operational excellence, and innovation to achieve the company's goals</p>
                <div className='pt-3 flex justify-between gap-3 icons'>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-instagram-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-facebook-box-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-linkedin-box-line"></i></a>
                </div>
              </div>
            </div>
            <div className='h-[432px] w-[224px] team md:mb-5 '>
              <div className='h-[224px] w-[224px] flex justify-center items-center bg-red'>
                <div className=' h-[180px] w-[180px] rounded-full'>
                  <img className=' rounded-full'  src="assets/Anirudra.jpg" alt="" />
                </div>
              </div>
              <div className='flex flex-col gap-0 justify-center items-center pt-5'>
                <h1 className='text-black text-2xl tracking-tight text-center'>Aniruddha Pratap Singh Rajpoot</h1>
                <h2 className='text-green-800'>CA</h2>
                <p className='leading-tight text-center pt-3'>A visionary leader driving strategic growth, operational excellence, and innovation to achieve the company's goals</p>
                <div className= ' pt-3 flex justify-between gap-3 icons'>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-instagram-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-facebook-box-line"></i></a>
                    <a className='opacity-50 text-xl'  href=""><i class="ri-linkedin-box-line"></i></a>
                </div>
              </div>
            </div>

          </div>
          </div>
        </div>
    </>
  )
}

export default Team