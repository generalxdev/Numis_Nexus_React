export default function Example() {
    return (
      <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          {/* <img className="h-12 mx-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" /> */}
          <div className="text-3xl font-bold text-gray-900">Nexus Cuprum</div>
          <figure className="mt-10">
            <blockquote className="font-semibold leading-8 text-center text-gray-900 text-md sm:text-md sm:leading-9">
              <p>
              The Second collection of Numis Nexus NFTs and the first collection truly based on the Numis in Numis Nexus.
              Cuprum comes from the old Latin word for copper and fits our first collection based on US currency, the penny.
              We plan to release these with a quality at or above our release for Nexus Genesis and hope you share our joy in exploring the history of the penny with us!
              This will be the first in a line of 5 collections based on US coin mints from initial mint to current day.
              </p>
            </blockquote>
            <figcaption className="mt-10">
              {/* <img
                className="w-10 h-10 mx-auto rounded-full"
                src="img/taris.png"
                alt=""
              /> */}
              <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                
                {/* <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg> */}
                {/* <div className="text-gray-600">Owner & CEO</div> */}
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  