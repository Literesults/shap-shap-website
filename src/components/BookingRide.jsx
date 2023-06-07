import Image from 'next/image'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import riding from '../../public/images/Rectangle10.png'
import RideProcess from './RideProcess'

function BookingRide() {
    useEffect(() => {
        AOS.init();
    }, [])
    const process = [
        {
            step: "Select Your Destination",
            Description: "Enter your desired destination in the user-friendly booking interface. Whether it's an airport, office, or your favorite restaurant, simply input the address and let us take care of the rest."
        },
        {
            step: "Choose Your Ride",
            Description: "Browse through a variety of ride options tailored to your needs. From economy cars to premium cars."
        },
        {
            step: "Confirm and Enjoy",
            Description: " Review your ride details, including the estimated fare and arrival time. Once you're satisfied, confirm your booking with a single tap. Sit back, relax, and enjoy your ride as our professional driver arrives promptly to take you to your destination. Track your ride in real-time and feel free to reach out to our 24/7 support team for any assistance."
        }
    ]
    return (
        <div className="py-10">
            <div className="py-8 px-3 lg:px-0">
                <div data-aos="fade-left" className="md:w-3/4 lg:ml-auto relative rounded-2xl lg:rounded-r-none mx-auto lg:mx-0 p-8 bg-yellow-100 dark:bg-gray-400 grid lg:grid-cols-3">
                    <div className="py-4">
                        <div data-aos="fade-right" className="lg:absolute lg:w-1/2 mx-auto h-full top-0 flex items-center lg:-left-64">
                            <div className=" w-full md:h-96 rounded-3xl overflow-hidden">
                                <Image src={riding} alt="" srcSet="" className="w-full h-full" draggable="false" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 space-y-8">
                        <div className="font-[1000] text-yellow-600 text-4xl">
                            BOOKING A
                            <span className="text-black dark:text-gray-600"> RIDE</span>
                        </div>
                        <div>
                            {
                                process.map((pros, i) => (
                                    <RideProcess key={i} data={pros} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingRide