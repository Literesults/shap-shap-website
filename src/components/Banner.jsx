import React, { useEffect } from 'react'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import mockup from '../../public/images/Shapcab3.png'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="h-[70vh] md:h-screen banner">
            <div className="h-full w-full [background:linear-gradient(90.06deg,#050400_-1.71%,rgba(87,70,0,0.25)_56.42%,rgba(151,120,0,0.83)_113.82%)]">
                <div className="max-w-7xl h-full mx-auto grid md:grid-cols-5">
                    <div data-aos="fade-up" className="md:col-span-3 flex items-center  h-full">
                        <div className="w-full p-3 space-y-4 text-white py-4">
                            <div className="relative top-4">Looking For A Quick Ride?</div>
                            <div className="font-[1000] text-4xl lg:text-[70px] lg:leading-[70px]">
                                <div className="">Unlock Seamless</div>
                                <div className="">Journeys With</div>
                                <div className="">Shap Cab</div>
                            </div>
                            <div className="max-w-sm text-gray-200 text-sm">Effortlessly travel, connect, and explore with our reliable and innovative ride-sharing platform.</div>
                            <div className="flex gap-5">
                                <Image src={google} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                                <Image src={apple} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2 hidden h-screen overflow-hidden lg:grid grid-cols-2 gap-16">
                        <div className="h-[200%] relative bottom-96 overflow-hidden space-y-6">
                            <div className="h-1/3 bannerMockup"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup"><Image alt='' src={mockup} className="h-full w-full" /></div>
                        </div>
                        <div className="h-[200%] relative bottom-96 overflow-hidden space-y-6">
                            <div className="h-1/3 bannerMockup2"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup2"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup2"><Image alt='' src={mockup} className="h-full w-full" /></div>
                            <div className="h-1/3 bannerMockup2"><Image alt='' src={mockup} className="h-full w-full" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner