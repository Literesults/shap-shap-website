import React from 'react'
import { FiPlay } from 'react-icons/fi'
import Bullets from './Bullets'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import Image from 'next/image'

function BecomeRider() {
    return (
        <div>
            <div className="BecomeRider">
                <div className="pt-24 pb-20 bg-black bg-opacity-25 backdrop-blur-md px-3">
                    <div className="max-w-7xl py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex w-full items-center">
                            <div className="">
                                <div className="text-3xl text-gray-50">Become a <span className="bg-white p-6 py-[1px] uppercase text-black">Rider</span></div>
                                <div className="text-yellow-200 text-2xl">Ride & Earn</div>
                                <div className="text-4xl font-extrabold text-gray-50 capitalize"><span className="underline">Quick</span> <span className="text-3xl text-gray-200">Guide</span></div>
                                <div className="py-6 space-y-4">
                                    <Bullets />
                                    <Bullets />
                                    <Bullets />
                                </div>
                                <div className="space-y-2">
                                    <div className="text-white text-lg">Download app Now</div>
                                    <div className="flex gap-5">
                                        <Image src={google} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                                        <Image src={apple} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="bg-black cursor-pointer md:bg-transparent flex items-center rounded-full gap-4 text-white ">
                                <div className="h-16 relative after:absolute after:w-full after:h-full after:animate-ping after:rounded-full after:bg-white w-16 rounded-full border-2 border-white text-white flex items-center justify-center">
                                    <FiPlay className="relative left-[2px] text-white" />
                                </div>
                                <div className="pr-4 md:hidden">Watch Video</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeRider