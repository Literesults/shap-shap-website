import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image'
import map from '../../public/images/map.png'

function Services() {
  useEffect(() => {
      AOS.init();
  }, [])
  return (
    <div className="max-w-7xl mx-auto px-3 py-8 space-y-4">
      <div className="">
        <div className="text-center text-4xl font-bold text-yellow-600 capitalize">Services</div>
        <div className="max-w-2xl mx-auto text-gray-400 text-center">
          Shap Cab is more than just a ride-sharing app. Explore our comprehensive suite of services designed to cater to your diverse transportation needs. Whether you&apos;re commuting to work, heading to the airport, or planning a night out, we have you covered with our exceptional offerings.
        </div>
      </div>
      <div className="w-full px-3 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div data-aos="fade-left" className="flex gap-3 items-end w-full py-5">
            <div className="lg:text-right flex-grow order-1 text-gray-400 lg:order-none first-line:uppercase first-line:tracking-widest first-letter:font-bold">
              Airport Transfers <br /> Start your journey hassle-free with our reliable airport transfer service. Enjoy comfortable rides to and from the airport, with timely pickups and drop-offs that ensure you never miss a flight.
            </div>
            <div className="">
              <div className="h-16 w-16 rounded-xl flex justify-center items-center bg-yellow-500 text-white text-2xl leading-4" style={{ 'fontFamily': 'impact' }}>01</div>
            </div>
          </div>
          <div className="py-5 md:row-span-4 lg:row-span-2 order-first flex items-center justify-center lg:order-none">
            <Image src={map} width={'550'} height={'954'} alt='' draggable="false" />
          </div>
          <div data-aos="fade-right" className="flex gap-3 items-end w-full py-5">
            <div className="">
              <div className="h-16 w-16 rounded-xl flex text-black justify-center items-center lg:bg-opacity-100 lg:bg-yellow-500 lg:text-white bg-opacity-50 dark:text-gray-100 bg-gray-200 text-2xl leading-4" style={{ 'fontFamily': 'impact' }}>02</div>
            </div>
            <div className="flex-grow text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:font-bold">
              Business Travel Solutions <br /> Experience seamless business travel with our dedicated services. From corporate transfers to executive car services, we provide professionalism and comfort for your important meetings and events.
            </div>
          </div>
          <div data-aos="fade-left" className="flex gap-3 items-end w-full py-5">
            <div className="flex-grow text-gray-400  lg:text-right order-1 lg:order-none first-line:uppercase first-line:tracking-widest first-letter:font-bold">
              Group Transportation <br /> Traveling with a group? Our spacious and well-equipped vehicles are perfect for group transportation. Whether it&apos;s a family outing or a team-building event, we ensure everyone travels together comfortably.
            </div>
            <div className="">
              <div className="h-16 w-16 rounded-xl flex justify-center items-center text-white lg:text-black bg-yellow-500 lg:bg-opacity-50 lg:dark:text-gray-100 lg:bg-gray-200 text-2xl leading-4" style={{ 'fontFamily': 'impact' }}>03</div>
            </div>
          </div>
          <div data-aos="fade-right" className="flex gap-3 items-end w-full py-5">
            <div className="">
              <div className="h-16 w-16 rounded-xl flex justify-center items-center bg-opacity-50 dark:text-gray-100 bg-gray-200 text-2xl leading-4" style={{ 'fontFamily': 'impact' }}>04</div>
            </div>
            <div className="flex-grow text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:font-bold">
              City Tours and Excursions <br /> Discover the best of your destination with our city tours and excursions. Sit back and let our knowledgeable drivers take you to popular attractions, hidden gems, and local hotspots for an unforgettable experience.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services