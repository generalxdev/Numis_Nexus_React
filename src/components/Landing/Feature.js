import { CheckIcon } from '@heroicons/react/20/solid'
import '../../css/project-base.css';
import React, { useEffect, useRef } from 'react';

const features = [
  {
    name: 'Logistics and Transportation Companies',
    description:
      'At Numis Nexus we believe real world collectibles are one of the most underutilized assets digitally!',
    icon: CheckIcon,
  },
  {
    name: 'FinTech and Blockchain Companies',
    description:
      'The love for currency, collection, art, and even bugs are passions that people have shared for centuries. ',
      icon: CheckIcon,
  },
  {
    name: 'IoT Device Manufacturers',
    description:
      'We want to bring the rare, not so rare, odd, and not so odd collectible items people love and covet to a digital medium. ',
      icon: CheckIcon,
  },
  {
    name: 'API Providers',
    description:
      'This helps to address the inequality prevalent in real world collecting by allowing it to be accessible for everyone, worldwide, and for fractions of the cost of what you would likely end up seeing these items for in a Real-life auction house.',
      icon: CheckIcon,
  },
  {
    name: 'Financial Institutions',
    description:
      'We look forward to fueling your burning passion for both real world and digital collecting!',
      icon: CheckIcon,
  },
]

export default function Example() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.playbackRate = 0.5;

    // videoRef.current.play();
    
    // if (videoRef.current) {
    //   videoRef.current.addEventListener('ended', () => {
    //     // Restart the video when it ends
    //     videoRef.current.play();
    //   });
    // }

    // return () => {
    //   // Clean up the event listener when the component unmounts
    //   if (videoRef.current) {
    //     videoRef.current.removeEventListener('ended', () => {});
    //   }
    // };
  }, []);

  return (
    <div className="py-24 overflow-hidden bg-white sm:py-32 fadeInRight">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">Build faster</h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Goals</p>
              <dl className="max-w-xl mt-10 space-y-4 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      {/* <feature.icon className="absolute w-5 h-5 text-indigo-600 left-1 top-1" aria-hidden="true" /> */}
                      {/* {feature.name} */}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className='flex sm:items-center sm:justify-right'>
            {/* <img
              src="img/collaboration.jpg"
              alt="Product screenshot"
              className="CTAimg w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            /> */}
            <video ref={videoRef} autoPlay loop muted className='rounded-3xl'>
              <source src="img/goals.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
