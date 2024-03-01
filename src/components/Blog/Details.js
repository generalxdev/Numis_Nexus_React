import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Much the same can be said about our projects. ',
  'We will bring you quality projects based on real world items, such as your passport. ',
  'We will also bring you the experience of having your real-world events and journeys come to life digitally. ',
  'We want to bring an experience to you, our supporters. ',
]

export default function Example() {
  return (
    <div className="pt-32 pb-24 bg-white fadeInLeft">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects Nexus</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            This is where the development will happen, Our Projects.  
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Description</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Numis Nexus is dedicated to bringing you quality collections, affordably, and in an entertaining way. 
            </p>
            <div className="flex items-center mt-10 gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="flex-auto h-px bg-gray-100" />
            </div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="flex-none w-5 h-6 text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="py-10 text-center rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="max-w-xs px-8 mx-auto">
                <p className="text-base font-semibold text-gray-600">Mint Your NFTs</p>
                <p className="flex items-baseline justify-center mt-6 gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">0.1</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">ETH</span>
                </p>
                <a
                  href="#"
                  className="block w-full px-3 py-2 mt-10 text-sm font-semibold text-center text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Mint
                </a>
                <p className="mt-6 text-xl font-bold leading-5 text-gray-600">
                  Mint Coming soon!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
