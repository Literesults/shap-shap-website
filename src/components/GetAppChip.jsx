import Image from 'next/image'
import React from 'react'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import mockup from '../../public/images/Image13.png'

function GetAppChip() {
    return (
        <div className="px-4 py-10">
            <div className="max-w-6xl black-bg rounded-md w-11/12 md:w-auto gap-4 mx-auto grid md:grid-cols-2">
                <div className="my-auto p-16 py-20">
                    <div className="space-y-4">
                        <div className="space-y-3">
                            <div className="text-white">Your Journey Starts Here</div>
                            <div className="text-5xl text-yellow-500 font-[1000]">
                                <div className="">Get the <span className="text-white">Shap</span></div>
                                <div className=""> <span className="text-white">Cab</span> App Today! </div>
                            </div>
                            <p className="text-gray-300 text-sm max-w-md">
                                Ready to embark on a new era of transportation? Download the Sharp Ride app and gain access to a world of convenience, reliability, and extraordinary rides. With just a few taps, you&apos;ll unlock the power to travel seamlessly and explore without limits.
                            </p>
                        </div>
                        <div className="flex gap-5">
                            <Image src={google} alt='' width={'130'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            <Image src={apple} alt='' width={'130'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center">
                <Image src={mockup} alt='' className="rounded-lg cursor-pointer h-full" draggable="false" />
                </div>
            </div>
        </div>
    )
}

export default GetAppChip