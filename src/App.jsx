import React from 'react'
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Features from './Components/Features';
import Patte from './Components/Patte';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll' 
  
function App() {

  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Features />
      <Patte />
      <Footer/>
    </div>
  )
}

export default App
