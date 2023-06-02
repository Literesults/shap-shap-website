import React from 'react'
import { FiPlay } from 'react-icons/fi'
import Bullets from './Bullets'
import img from '../../public/images/Shapcab31.png'
import apple from '../../public/images/images.jpg'
import Image from 'next/image'
import { RiPlayFill } from 'react-icons/ri'

function BecomeRider() {
    const process = [
        {
            step: "Sign Up and Verify",
            Description: "Begin your journey as a Sharp Ride driver by signing up on our platform. Fill out a simple registration form and provide the necessary information. Once submitted, our team will verify your details to ensure the safety and security of our community."
        },
        {
            step: "Complete Your Profile",
            Description: "Create a compelling driver profile that showcases your skills and experience. Add details such as your driving history, vehicle information, and any additional qualifications you possess. A complete and well-crafted profile increases your chances of attracting riders and building a positive reputation."
        },
        {
            step: "Start Driving and Earning",
            Description: "Once your profile is approved, you're ready to hit the road! Log into the Sharp Ride driver app and start accepting ride requests. Navigate the city with the help of our user-friendly app, picking up passengers and providing them with exceptional service. Enjoy the flexibility to choose your own working hours and maximize your earnings."
        }
    ]
    return (
        <div className="py-10">
            <div className="BecomeRider">
                <div className=" bg-[radial-gradient(50%_50%_at_50%_50%,rgba(22,18,0,0.35)_0%,#161200_100%)]">
                    <div className="max-w-6xl relative px-3 py-16 mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex w-full items-center">
                            <div className="">
                                <div className="text-gray-50 text-sm">Become a Rider</div>
                                <div className="text-white text-4xl font-extrabold ">Ride & <span className="text-yellow-400">Earn</span></div>
                                <div className="capitalize text-sm text-yellow-500">Quick Guide</div>
                                <div className="py-6">
                                    {
                                        process.map((pros, i) => (
                                            <Bullets key={i} data={pros} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="md:absolute bottom-0 right-0 w-[340px] flex md:items-center md:justify-center">
                            <Image src={img} alt='#' className="md:absolute hidden md:block bottom-0 right-6" />
                            <div className="">
                                <div className="bg-black cursor-pointer md:bg-transparent md:relative bottom-44 right-4 flex items-center rounded-full gap-4 text-white ">
                                    <div className="h-16 relative after:absolute after:w-full after:h-full bg-white after:animate-ping after:rounded-full after:bg-black w-16 rounded-full border-2 border-white text-white flex items-center justify-center">
                                        <RiPlayFill size={'25px'} className="relative left-[0px] text-yellow-500" />
                                    </div>
                                    <div className="pr-4 md:hidden">Watch Video</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BecomeRider