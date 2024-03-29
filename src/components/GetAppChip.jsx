import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import mockup from '../../public/images/Image13.png'

function GetAppChip() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="px-4 py-10">
            <div data-aos="zoom-in-down" className="max-w-7xl black-bg rounded-md md:w-auto gap-4 mx-auto grid md:grid-cols-2">
                <div className="my-auto p-3 sm:p-16 py-20">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <div className="text-white">Your Journey Starts Here</div>
                            <div className="text-5xl text-yellow-500 font-[1000]">
                                <div className="">Get the <span className="text-white">Shap</span></div>
                                <div className=""> <span className="text-white">Cab</span> App Today! </div>
                            </div>
                            <p className="text-gray-300 text-sm max-w-md">
                                Ready to embark on a new era of transportation? Download the Shap Cab app and gain access to a world of convenience, reliability, and extraordinary rides. With just a few taps, you&apos;ll unlock the power to travel seamlessly and explore without limits.
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

export default GetAppChip