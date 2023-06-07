
import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import img4 from '../../public/images/Rectangle7.png'
import img2 from '../../public/images/Rectangle9.png'
import img1 from '../../public/images/Rectangle8.png'
import img3 from '../../public/images/Rectangle6.png'


function SubBanner() {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="">
            <div>
                <div className="pt-24 bg-gray-50 dark:bg-gray-900 px-3">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div data-aos="zoom-in" className="flex w-full gap-5 flex-col justify-center">
                            <div className="cursor-default">
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize">Welcome  to<span className="text-yellow-600"> Shap</span></div>
                                <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-600 capitalize"> Cab</div>
                            </div>
                            <div className="">
                                <div className="max-w-sm dark:text-white">
                                    The cutting-edge solution for all your transportation needs. With our advanced ride-sharing app, we&apos;re revolutionizing the way you travel, ensuring that every journey is smooth, convenient, and tailored to your preferences.
                                </div>
                            </div>
                            <div className="flex gap-5">
                                <Image src={google} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                                <Image src={apple} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            </div>
                            <div className="max-w-sm grid dark:text-gray-300 text-gray-600 grid-cols-3 gap-4">
                                <div className="py-1 md:pb-20">
                                    <div className="text-2xl font-bold">24K +</div>
                                    <div className="text-base">
                                        <div className="">Customer</div>
                                    </div>
                                </div>
                                <div className="py-1 md:pb-20">
                                    <div className="text-2xl font-bold">24K +</div>
                                    <div className="text-base">
                                        <div className="">Riders</div>
                                    </div>
                                </div>
                                <div className="py-1 md:pb-20">
                                    <div className="text-2xl font-bold">24/7</div>
                                    <div className="text-base">
                                        <div className="">Ride Availability</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" space-y-4">
                            <div className="grid grid-cols-5 gap-3">
                                <div data-aos="fade-down" className="col-span-3 h-44"><Image src={img1} alt="" srcSet="" className="w-full h-full" draggable="false" /></div>
                                <div data-aos="fade-left" className="h-44 col-span-2"><Image src={img2} alt="" srcSet="" className="w-full h-full" draggable="false" /></div>
                            </div>
                            <div className="grid grid-cols-5 gap-3">
                                <div data-aos="fade-right" className="h-44 col-span-2"><Image src={img3} alt="" srcSet="" className="w-full h-full" draggable="false" /></div>
                                <div data-aos="fade-up" className="col-span-3 h-44"><Image src={img4} alt="" srcSet="" className="w-full h-full" draggable="false" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-3 pt-12 w-full">
                    <div className="relative -top-2 py-12 pt-0 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-5">
                        <div data-aos="zoom-in-right" className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                            <div className="pb-6 border-yellow-600">
                                <div className="text-gray-200 dark:text-gray-500 text-3xl">01</div>
                                <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Efficiency</span> Unleashed</div>
                                <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                    Streamline your travels with our efficient platform that ensures prompt pickups and quick routes
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                            <div className="h-full pb-6 border-yellow-600">
                                <div className="text-gray-200 dark:text-gray-500 text-3xl">02</div>
                                <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Safety</span> First</div>
                                <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                    Rest assured knowing that your well-being is our top priority, with stringent safety measures and trained drivers.
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block lg:hidden"></div>
                        <div data-aos="zoom-in-left" className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                            <div className="h-full pb-6 border-yellow-600">
                                <div className="text-gray-200 dark:text-gray-500 text-3xl">03</div>
                                <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Low</span> Pricing</div>
                                <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                    Experience the best value for your money with our competitive and pocket-friendly rates.
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block lg:hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBanner