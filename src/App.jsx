import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Marquee from './Components/Marquee';
import About from './Components/About';
import Eyes from './Components/Eyes';
import Features from './Components/Features';
import Patte from './Components/Patte';
import Footer from './Components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
import { Contact } from './Components/Navcomponents/Contact';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <Router>
      <div className='w-full min-h-screen bg-zinc-900 text-white'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Landing />
              <Marquee />
              <About />
              <Eyes />
              <Features />
              <Patte />
              <Footer />
            </>
          } />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
