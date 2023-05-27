import Image from 'next/image'
import React from 'react'
import riding from '../../public/images/riding.jpg'
import RideProcess from './RideProcess'

function BookingRide() {
    return (
        <div>
            <div className="py-8 px-3 lg:px-0">
                <div className="md:w-3/4 lg:ml-auto relative rounded-2xl lg:rounded-r-none mx-auto lg:mx-0 p-8 bg-yellow-100 dark:bg-gray-400 grid lg:grid-cols-3">
                    <div className="py-4">
                        <div className="lg:absolute lg:w-1/2 mx-auto h-full top-0 flex items-center lg:-left-44 xl:-left-72">
                            <div className="bg-black w-full md:h-96 rounded-3xl overflow-hidden">
                                <Image src={riding} alt="" srcSet="" className="w-full h-full" draggable="false" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div className="font-bold text-4xl dark:text-gray-600">
                            BOOKING A
                            <span className="text-yellow-600"> RIDE</span>
                        </div>
                        <div>
                            <RideProcess />
                            <RideProcess />
                            <RideProcess />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingRide