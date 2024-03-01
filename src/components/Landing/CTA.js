import { useState, useEffect } from 'react';
import '../../css/project-base.css';
import '../../css/slide-show.css';

export default function Example() {
    const [slideIndex, setSlideIndex] = useState(1);

    const changeSlide = () => {
      setSlideIndex(3 - slideIndex);
    };

    useEffect(() => {
      const slides = document.getElementsByClassName("mySlides");

      slides[3 - slideIndex].style.display = "none";

      slides[slideIndex].style.display = "block";
      
    }, [slideIndex]);

    return (
      <div className="bg-white fadeIn">        
        <div className="relative flex flex-col py-24 mx-auto mySlides max-w-7xl sm:px-6 sm:py-32 lg:px-8 fade">
          <a className="next" onClick={() => changeSlide()}>❯</a>
          <div className="relative px-6 pt-16 overflow-hidden bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nexus Alpha
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
               This is the first project we will be working on. It will have a fully customizable SBT displaying your digital passport. We will help you to save and share your memories and travels throughout your life with your friends and loved ones in a digital setting! More to be announced about this project in the future!
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Future Mint Now
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Roadmap Integrations <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 _sm:mt-8 h-80 _sm:h-64">
              <img
                className="CTAimg opacity-80 absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="img/business_model.jpg"
                alt="App screenshot"
                // style={{maxWidth: "100%", maxHeight: "100%", width: "auto", height: "auto"}}
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>

        {/* CTA2 */}
        <div className="relative py-24 mx-auto mySlides max-w-7xl sm:px-6 sm:py-32 lg:px-8 fade">
          <a className="next" onClick={() => changeSlide()}>❯</a>
          <div className="relative px-6 pt-16 overflow-hidden bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="max-w-md mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Nexus Beta
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
               This will be our second projects based on travel and in person minting.<br></br>
               It will be featuring a SFT penny collection of the current and future years of mint (Likely 2024 and on) and will require you to be at a location to mint. 
              </p>
              <div className="flex items-center justify-center mt-10 gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Future Mint Now
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Roadmap Integrations <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="relative mt-16 _sm:mt-8 h-80 _sm:h-72">
              <img
                className="CTAimg pacity-80 absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="img/business_model1.jpg"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  