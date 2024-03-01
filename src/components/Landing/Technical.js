const features = [
    { name: 'XinFin Network', description: 'We wanted this Collection to be more than just a simple 2D image or animated Gif. We were aiming for elegance, sleek, and desirable and we believe we have succeeded! ' },
    { name: 'Internet of Things (IoT)', description: 'Also, as a thank you to all of you who have supported us by purchasing our Genesis NFT, we will be adding benefits to the token.' },
    { name: 'API Integration', description: 'The benefits will require you to be holding the token at the time the snapshot is taken.' },
    { name: 'Overall', description: 'And will provide discounts, special mints, and special access to things like our discord and early information regarding projects and collections upcoming.' },
  ]
  
  export default function Example() {
    return (
      <div className="bg-white">
        <div className="grid items-center max-w-2xl grid-cols-1 px-4 py-24 mx-auto gap-x-8 gap-y-16 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nexus Genesis</h2>
            <p className="mt-4 text-gray-500">
              Even though Genesis is coined, pun intended, as the first project for Numis Nexus, in reality it is our first NFT Collection. There are 11,520 unique combinations of coin materials, shapes, edges, and bases designed with quality in mind. 
            </p>
  
            <dl className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="pt-4 border-t border-gray-200">
                  {/* <dt className="font-medium text-gray-900">{feature.name}</dt> */}
                  <dd className="mt-2 text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="img/NFT1.png"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/NFT2.png"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/NFT3.png"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="bg-gray-100 rounded-lg"
            />
            <img
              src="img/NFT4.png"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="bg-gray-100 rounded-lg"
            />
          </div>
        </div>
      </div>
    )
  }
