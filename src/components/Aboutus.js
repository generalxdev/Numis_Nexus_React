import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Team from './Aboutus/Team';
import Workwithus from './Aboutus/Workwithus';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
            {/* Work with us */}
            <Workwithus />

            {/* Team */}
            <Team />

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
