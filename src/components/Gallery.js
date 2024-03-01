import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Footer from './Footer';
import ItemView from './NFTItem/ItemView';

import SelectMenus from './Gallery/SelectMenus';
import PriceInput from './Gallery/PriceInput';
import FeatureSelect from './Gallery/FeatureSelect';

import { useState, useEffect } from 'react';
import NFTItem from './NFTItem/NFTItem';
import { Select } from '@mui/material';
// const data = require('../data/data.json');

function Gallery () {
  const [listingContent, setListingContent] = useState([]);

  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < 8; i++) {
      tmp.push(<NFTItem imageUrl={data[i].imageUrl} title={data[i].title} price={data[i].price} status={data[i].status}/>);
    }
    setListingContent(tmp);
  }, []);

    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <div className='flex flex-col items-center justify-center title fadeInRight'>
              <img src="https://www.lpc.com/wp-content/uploads/2018/05/header.jpg" style={{height: "130px", width:"100%"}}></img>
              <div className='w-1/2 py-5 pb-16 my-10 text-3xl font-bold text-gray-700 border-b border-gray-400'>Your Tokens</div>
              {/* <div className='py-1 text-xl font-bold text-gray-500'>Below you will find the most up-to-date list of units we have available.</div> */}
              {/* <div className='py-1 italic font-bold text-red-500 text-md'>Please note: Photos listed on our site may not be exact to your unit. Floor plans will be the same, however, each unit will have some cosmetic differences.</div> */}
          </div>

          <div className='flex flex-row justify-center mt-16 _sm:flex-col'>
            <div className='flex flex-col items-center w-1/6 _sm:w-full _sm:mb-16'>
              <span className="inline-flex items-center py-3 mb-10 text-xs font-medium text-gray-600 rounded-md hover:cursor-pointer px-7 bg-gray-50 ring-1 ring-inset ring-gray-500/10">
                Connect Wallet
              </span>
              <div className="w-full _sm:w-1/2">
                <SelectMenus />
              </div>
              <PriceInput />
              <FeatureSelect />
            </div>
            <div>
              <div className='flex items-center justify-center fadeInUp'>
                <div className='w-2/3'>
                  <ItemView />
                </div>
              </div>
                
              <div className='grid grid-cols-4 gap-16 p-10 duration-300 ease-in-out transitioin-all listingContent _md:grid-cols-3 fadeInLeft'>
                {listingContent}
              </div>
            </div>
          </div>

          <Footer />
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>        
        </div>
      </div>
    );
}

export default Gallery;
