import { UserCircleIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'

const products = [
    {
      id: 1,
      name: 'Francis Crevatas',
      href: '#',
      imageSrc: 'img/taris.png',
      imageAlt: "Front of men's Basic Tee in black.",
      role: 'Owner and CEO',
    },
    {
      id: 2,
      name: 'Henry Scott',
      href: '#',
      imageSrc: 'img/taris.png',
      imageAlt: "Front of men's Basic Tee in black.",
      role: 'Lead Developer',
    },   
    {
      id: 3,
      name: 'Saadullah Ghori',
      href: '#',
      imageSrc: 'img/taris.png',
      imageAlt: "Front of men's Basic Tee in black.",
      role: 'Lead Designer',
    },   
    // More products...
  ]
  
  export default function Example() {
    return (
      <div className="bg-white fadeInRight">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="pb-16 text-2xl font-bold tracking-tight text-gray-900">Our Teams</h2>
  
          <div className="grid grid-cols-1 mt-6 gap-x-32 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="relative group">
                <div className="w-full overflow-hidden bg-gray-200 rounded-md aspect-h-1 aspect-w-1 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 italic text-gray-500 text-md">{product.role}</p>
                  </div>
                  <div className='flex flex-row items-center gap-3'>
                    <UserCircleIcon className='w-8 h-8'/>
                    <ChatBubbleOvalLeftIcon className='w-8 h-8' />
                  </div>
                  {/* <p className="font-medium text-gray-900 text-md">{product.role}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  