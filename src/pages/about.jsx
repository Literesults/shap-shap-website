import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../public/images/Rectangle15.png'
import img2 from '../../public/images/Imageframe2.png'
import img3 from '../../public/images/Rectangle17.png'
import img4 from '../../public/images/Rectangle16.png'
import img5 from '../../public/images/Rectangle18.png'
import img6 from '../../public/images/Rectangle16(1).png'

function about() {
  useEffect(() =>{
      AOS.init();
  },[])
  return (
    <Layout active={'About Us'}>
      <div className="abtBg">
        <div className="h-[75vh] flex w-full items-center [background:linear-gradient(90.03deg,#0E0B00_-1.33%,rgba(137,110,1,0.13)_48.95%,#171300_108.86%)]">
          <div className="w-full">
            <div data-aos="fade-up" className="max-w-7xl px-2 space-y-4 text-white mx-auto py-5">
              <div className="[letter-spacing:0.175em]">Welcome To Shap Cab</div>
              <div className="font-[1000] space-y-2 text-3xl md:text-5xl">
                <div className="">Where Journey Begins,</div>
                <div className="">Stories Unfold</div>
              </div>
              <div className="max-w-md text-sm">
                Your gateway to seamless transportation and unforgettable moments. Embark on a ride like no other, where every destination becomes a chapter in your personal story. Experience the thrill of exploration, connection, and endless possibilities.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-3">
        <div data-aos="zoom-in" className="max-w-3xl mx-auto sm:flex gap-5 sm:gap-16 md:gap-x-28 relative bottom-16 grid grid-cols-2 sm:grid-cols-4 justify-center py-4 sm:py-9 dark:bg-gray-800 dark:text-white bg-white rounded-lg shadow-md">
          <div className="text-center">
            <div className="font-[1000] text-3xl">24+</div>
            <div className="text-sm">Customer</div>
          </div>
          <div className="text-center">
            <div className="font-[1000] text-3xl">24+</div>
            <div className="text-sm">Riders</div>
          </div>
          <div className="text-center">
            <div className="font-[1000] text-3xl">200+</div>
            <div className="text-sm">Trips Covered</div>
          </div>
          <div className="text-center">
            <div className="font-[1000] text-3xl">$10.1B</div>
            <div className="text-sm">Amount Raised</div>
          </div>
        </div>
      </div>
      <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl pb-28">
        <div data-aos="fade-left" className="sm:order-1 space-y-5">
          <div className="font-[1000] text-3xl md:text-5xl">
            <div className="dark:text-white">Driven by</div>
            <div className="text-yellow-500">Innovation</div>
          </div>
          <div className="text-gray-400 max-w-md">
            Our passion for innovation fuels everything we do. We leverage cutting-edge technology to provide you with a seamless and convenient ride-sharing experience. From our intuitive app to real-time tracking and secure payment options, we&apos;re constantly pushing boundaries to ensure your journey is as smooth as possible.
          </div>
        </div>
        <div data-aos="fade-right" className="">
          <div className="h-96 rounded-lg">
            <Image src={img1} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
          </div>
        </div>
      </div>


      <div className="[background:linear-gradient(257.74deg,#E09800_0%,#322200_98.56%)] py-28">
        <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl">
          <div data-aos="fade-right" className="space-y-5">
            <div className="font-[1000] text-3xl md:text-5xl">
              <div className="text-white">A Community of</div>
              <div className="text-yellow-500">Riders</div>
            </div>
            <div className="text-gray-50 max-w-md">
              Our passion for innovation fuels everything we do. We leverage cutting-edge technology to provide you with a seamless and convenient ride-sharing experience. From our intuitive app to real-time tracking and secure payment options, we&apos;re constantly pushing boundaries to ensure your journey is as smooth as possible.
            </div>
          </div>
          <div data-aos="fade-left" className="">
            <div className="h-96 rounded-lg">
              <Image src={img2} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
            </div>
          </div>
        </div>
      </div>


      <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl py-28">
        <div data-aos="fade-left" className="sm:order-1 space-y-5">
          <div className="font-[1000] text-3xl md:text-5xl">
            <div className="dark:text-white">Safety is Our</div>
            <div className="text-yellow-500">Priority</div>
          </div>
          <div className="text-gray-400 max-w-md">
            Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained to guarantee your peace of mind throughout your journey.
          </div>
        </div>
        <div data-aos="fade-right" className="">
          <div className="h-96 rounded-lg">
            <Image src={img3} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
          </div>
        </div>
      </div>



      <div className="[background:linear-gradient(257.74deg,#322200_0%,#E09800_98.56%)] py-28">
        <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl">
          <div data-aos="fade-right" className="space-y-5">
            <div className="font-[1000] text-3xl md:text-5xl">
              <div className="text-white">Exceptional</div>
              <div className="text-yellow-500">Service, Every Time</div>
            </div>
            <div className="text-gray-50 max-w-md">
              We believe that exceptional service is the key to customer satisfaction. Our team of professional drivers is dedicated to providing you with the highest standard of service, ensuring that each ride exceeds your expectations. From prompt pickups to courteous assistance, we strive to make your experience with Shap Ride unforgettable.
            </div>
          </div>
          <div data-aos="fade-left" className="">
            <div className="h-96 rounded-lg">
              <Image src={img4} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
            </div>
          </div>
        </div>
      </div>



      <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl py-28">
        <div data-aos="fade-left" className="sm:order-1 space-y-5">
          <div className="font-[1000] text-3xl md:text-5xl">
            <div className="dark:text-white">Connecting</div>
            <div className="text-yellow-500">Communities</div>
          </div>
          <div className="text-gray-400 max-w-md">
            At Shap Ride, we understand that transportation plays a vital role in connecting people and communities. Whether you&apos;re traveling to work, exploring a new city, or simply enjoying a night out, our platform is designed to bring people together, foster connections, and make your journeys more enjoyable.
          </div>
        </div>
        <div data-aos="fade-right" className="">
          <div className="h-96 rounded-lg">
            <Image src={img5} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
          </div>
        </div>
      </div>



      <div className="[background:linear-gradient(257.74deg,#E09800_0%,#322200_98.56%)] py-28">
        <div className="grid p-3 sm:grid-cols-2 gap-8 items-center mx-auto max-w-5xl">
          <div data-aos="fade-right" className="space-y-5">
            <div className="font-[1000] text-3xl md:text-5xl">
              <div className="text-white">Join the Shap Ride</div>
              <div className="text-yellow-500">Revolution</div>
            </div>
            <div className="text-gray-50 max-w-md">
              Experience the future of transportation with Sharp Ride. Download our app today and unlock a world of seamless journeys, reliable service, and unforgettable experiences. Join us as we redefine transportation and create a better way to travel.
            </div>
          </div>
          <div data-aos="fade-left" className="">
            <div className="h-96 rounded-lg">
              <Image src={img6} alt='' className="rounded-lg dark:block h-full w-full cursor-pointer" draggable="false" />
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default about