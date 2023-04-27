
import Image from 'next/image'
import React from 'react'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'

function HomeBanner() {
    return (
        <div>
            <div className="pt-24 bg-gray-50 dark:bg-gray-900 px-3">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex w-full gap-5 flex-col justify-center">
                        <div className="cursor-default">
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize">Taking <span className="text-yellow-600">you</span></div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize">to Your</div>
                            <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-yellow-600 capitalize">destination<span className="text-gray-700 dark:text-gray-50 cursor-pointer">.</span></div>
                        </div>
                        <div className="">
                            <div className="max-w-sm dark:text-white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, dolor! adipisicing elit. Reprehenderit, dolor!
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <Image src={google} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            <Image src={apple} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                        </div>
                        <div className="max-w-sm grid text-gray-300 dark:text-gray-500 grid-cols-2 gap-4">
                            <div className="py-1 md:pb-20">
                                <div className="text-2xl font-bold">24/7</div>
                                <div className="text-base">
                                    <div className="">Ride Availability</div>
                                </div>
                            </div>
                            <div className="py-1 md:pb-20">
                                <div className="text-2xl font-bold">24/7</div>
                                <div className="text-base">
                                    <div className="">Customer Service</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bgaboutImg" />
                </div>
            </div>
            <div className="p-3 pt-0 w-full">
                <div className="relative -top-12 py-12 pt-0 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-5">
                    <div className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                        <div className="border-b-4 pb-6 border-yellow-600">
                            <div className="text-gray-200 dark:text-gray-500 text-2xl">01</div>
                            <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Quick</span> Arrival</div>
                            <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit fuga recusandae, pariatur sapiente veritatis?
                            </div>
                        </div>
                    </div>
                    <div className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                        <div className="border-b-4 pb-6 border-yellow-600">
                            <div className="text-gray-200 dark:text-gray-500 text-2xl">02</div>
                            <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Safe</span> Ride</div>
                            <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit fuga recusandae, pariatur sapiente veritatis?
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block lg:hidden"></div>
                    <div className="p-3 sm:col-span-2 lg:col-span-1 bg-white dark:bg-gray-700 shadow-lg">
                        <div className="border-b-4 pb-6 border-yellow-600">
                            <div className="text-gray-200 dark:text-gray-500 text-2xl">03</div>
                            <div className="px-3 py-4 font-extrabold text-4xl dark:text-gray-50"><span className="text-yellow-600">Low</span> Pricing</div>
                            <div className="px-3 leading-7 text-gray-700 dark:text-gray-300">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas suscipit fuga recusandae, pariatur sapiente veritatis?
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:block lg:hidden"></div>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner