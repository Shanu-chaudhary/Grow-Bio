import React from 'react'
import Heroslider from '../components/Heroslider'
import Certified from '../components/Certified'
import Intro from '../components/Intro'
import Slogan from '../components/Slogan'
import Mission_home from '../components/Mission_home'
import OurProject from '../components/OurProject'

const Home = () => {
  return (
    <>
    <div className=''>
        <Heroslider />
        {/* <Slogan/> */}
        <Intro/>
        <OurProject/>
        <Mission_home/>
        <Certified/>
    </div>
    </>
  )
}

export default Home