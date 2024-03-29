import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import booking from '../../public/images/ride-booker.png'

function ContactCard() {
    useEffect(() =>{
        AOS.init();
    },[])
  return (
    <div className="max-w-5xl mx-auto  px-3 py-24">
        <div data-aos="zoom-out" className="bg-yellow-600 rounded-lg shadow-lg px-4 relative overflow-hidden text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-end">
                <div className="py-20 px-4">
                    <div className="uppercase text-4xl font-bold">get in touch now</div>
                    <div className="space-y-6">
                        <div>
                        Connect, Communicate, and Create: Reach out to us for all your transportation needs. We&apos;re here to assist you in every step of your journey, providing exceptional service and personalized support. Get in touch with us today and experience the convenience and reliability of Shap Cab!
                        </div>
                        <div className="">
                            <Link href={'/contactus'} className="uppercase py-3 px-5 text-white cursor-pointer bg-yellow-400 rounded-md">More Contact </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center px-12">
                    <div className="absolute h-96 w-96 bg-yellow-400 rounded-full -bottom-48"></div>
                    <Image src={booking} alt="" className="mx-auto w-96 md:w-60 z-20" draggable="false" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard