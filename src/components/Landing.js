import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Slideshow from './Landing/Slideshow';
import Feature from './Landing/Feature';
import CTA from './Landing/CTA';
import CTA1 from './Landing/CTA1';
import Technical from './Landing/Technical';
import Testinomial from './Landing/Testinomial';
import Footer from './Footer';
import Team from './Aboutus/Team';
import TeamsCard from './Aboutus/Teams_Card';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          {/* Slideshow section */}
          <div className='relative overflow-hidden' style={{width: "100vw", height: "100vh"}}>
            <Slideshow />
            <div className='absolute w-1/2 text-white text-7xl fadeInLeft top-1/4 left-1/4 _sm:text-4xl _sm:w-full _sm:left-0 _sm:top-1/3'>
              <div className='font-bold'>Welcome To</div><br></br>
            </div>
            <div className='absolute w-1/2 text-5xl text-yellow-300 fadeInRight top-2/3 left-1/4 _sm:text-4xl _sm:w-full _sm:left-0 _sm:top-2/3'>
              <div className='font-bold'>Bridging the gap between Real world and Digital collectibles!</div><br></br>
            </div>
          </div>
          
          {/* Feature */}
          <Feature />

          {/* Technical */}
          <Technical />

          {/* CTA */}
          <CTA />

          {/* TeamCard */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Our Teams</h2>
          <TeamsCard />

          {/* Testinomail */}
          <Testinomial />         

          {/* Navbar */}
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    );
}

export default Landing;
