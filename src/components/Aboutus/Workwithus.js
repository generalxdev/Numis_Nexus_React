const links = [
    { name: 'Open roles', href: '#' },
    { name: 'Internship program', href: '#' },
    { name: 'Our values', href: '#' },
    { name: 'Meet our leadership', href: '#' },
  ]
  const stats = [
    { name: 'Offices worldwide', value: '1' },
    { name: 'Full-time colleagues', value: '3+' },
    { name: 'Hours per week', value: '40' },
    { name: 'Paid time off', value: 'Unlimited' },
  ]
  
  export default function Example() {
    return (
      <div className="relative py-24 duration-500 overflow-hidde isolate sm:py-32 fadeInLeft">
        <img
          src="img/aboutus.png"
          alt=""
          className="absolute inset-0 object-cover object-right w-full h-full -z-10 md:object-center"
        />
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We usher in a new era of digital Collectibles.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-10 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 text-base font-semibold leading-7 text-white gap-x-8 gap-y-6 sm:grid-cols-2 md:flex lg:gap-x-10">
              {links.map((link) => (
                <a key={link.name} href={link.href}>
                  {link.name} <span aria-hidden="true">&rarr;</span>
                </a>
              ))}
            </div>
            <dl className="grid grid-cols-1 gap-8 mt-16 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.name} className="flex flex-col-reverse">
                  <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                  <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  