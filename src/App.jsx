import React, {  } from 'react'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Mission  from './pages/Mission'
import Product from './pages/products'
import Contact from './pages/ContactUs'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
const App = () => {
  
  // const gsapRef = useRef()
  // const {contextSafe} = useGSAP()


  // const rotatebox = contextSafe(() => {
  //   gsap.to(gsapRef.current,{
  //     x:500,
  //     rotate:360,
  //     duration:2,
  //     delay:1,
  //     repeat:-1,
  //     yoyo:true
  //   })
  // })
//   useGSAP(() => {
//     gsap.to(gsapRef.current,{
//       x:500,
//       rotate:360,
//       duration:2,
//       delay:1,
//     })
// })

  return (
    <div className="flex flex-col min-h-max">
    
    {/* Navbar */}
      <header ><ScrollToTop/><Navbar/></header>

      {/* Main content */}
      <main>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/contact' element ={<Contact/>}/>
        <Route path='/products' element ={<Product/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/mission' element ={<Mission/>}/>
      </Routes>
      </main>
      {/* Footer */}
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App

