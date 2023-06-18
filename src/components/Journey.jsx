import Image from 'next/image'
import React, { useEffect } from 'react'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import mockup from '../../public/images/Image13.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Journey() {
    useEffect(()=>{
        AOS.init()
    },[])
    return (
        <div className="px-4 py-10">
            <div data-aos="fade-up" className="max-w-7xl black-bg rounded-md md:w-auto gap-4 mx-auto grid md:grid-cols-2">
                <div className="my-auto p-3 sm:p-16 py-20">
                    <div className="space-y-8">
                        <div className="space-y-8">
                            <div className="text-white [letter-spacing:0.175em]">Your Journey Starts Here</div>
                            <div className="text-5xl text-yellow-500 font-[1000]">
                                <div className="">Join the <span className="text-white">Shap Cab</span></div>
                                <div className=""><span className="text-white">Driver</span> Community</div>
                                <div className="">Today</div>
                            </div>
                            <p className="text-gray-300 text-sm max-w-md">
                                Ready to embark on an exciting journey as a Shap Cab driver? Join our driver community today and experience the freedom, flexibility, and rewards that come with being a part of our platform. Sign up now and start making a difference on the road.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Image src={google} alt='' width={'130'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            <Image src={apple} alt='' width={'130'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                        </div>
                    </div>
                </div>
                <div className="md:flex hidden w-full items-center justify-center">
                    <Image src={mockup} alt='' className="rounded-lg cursor-pointer h-full" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default Journey