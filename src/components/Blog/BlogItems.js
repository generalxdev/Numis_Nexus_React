const posts = [
    {
      id: 1,
      title: 'Q3',
      href: '#',
      description:['- Official launch of Numis Nexus.','- Integration with Ethereum Network and IoT devices.', '- Partnerships with major cargo transportation businesses in the USA.'],
      date: '2023',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 2,
      title: 'Q4',
      href: '#',
      description:['- Launch of premium features.','- Integration with additional APIs.', '- Expansion to LATAM markets.'],
      date: '2023',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 3,
      title: 'Q1',
      href: '#',
      description:['- Launch of API integration services.','- Collaboration with additional strategic partners.', '- Expansion to European markets'],
      date: '2024',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 4,
      title: 'Q2',
      href: '#',
      description:['- Release of Numis Nexus white-label solutions.','- Enhancement of smart contract capabilities.', '- Expansion to African markets.'],
      date: '2024',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 5,
      title: 'Q3',
      href: '#',
      description:['- Integration with more diverse IoT devices.','- Launch of advanced analytics features.', '- Further expansion to other markets globally.'],
      date: '2024',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    {
      id: 6,
      title: 'Q4',
      href: '#',
      description:['- Continuous refinement and enhancement of Numis Nexus platform based on user feedback and industry trends.','- Ongoing global expansion and partnerships.', '- Exploration and adoption of new technologies to further improve Numis Nexus.'],
      date: '2024 and Beyond',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
    },
    // More posts...
  ]
  
  export default function Example() {
    return (
      <div className="py-24 bg-white border border-gray-300 fadeInRight">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Roadmap</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              See how fast our business is growing
            </p>
          </div>
          <div className="grid max-w-2xl grid-cols-1 pt-10 mx-auto mt-10 text-left border-t border-gray-200 gap-x-8 gap-y-16 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex flex-col items-start max-w-xl">
                <div className="flex items-center text-xs gap-x-4">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  {/* <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a> */}
                </div>
                <div className="relative group">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex flex-col mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                    {post.description.map((des) => (
                      <p>{des}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  }
  