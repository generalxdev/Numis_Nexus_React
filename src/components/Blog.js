import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Details from '../components/Blog/Details';
import BlogItems from '../components/Blog/BlogItems';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
            <Details />

            <BlogItems />
            
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
