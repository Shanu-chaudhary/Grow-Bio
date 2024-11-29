import React from 'react'
import Heroslider from '../components/Heroslider'
import Certified from '../components/Certified'
import Intro from '../components/Intro'
import Slogan from '../components/Slogan'

const Home = () => {
  return (
    <>
    <div className=''>
        <Heroslider />
        <Slogan/>
        <Intro/>
        <Certified/>
    </div>
    </>
  )
}

export default Home