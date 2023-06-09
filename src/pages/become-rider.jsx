import Layout from '@/components/Layout'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import Image from 'next/image'
import img1 from '../../public/images/Rectangle15.png'
import img2 from '../../public/images/Rectangl7.png'
import img3 from '../../public/images/Rectanglei8.png'
import img4 from '../../public/images/Rectanglei9.png'
import img5 from '../../public/images/Rect19.png'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Steps from '@/components/Steps'
import { TfiCar } from 'react-icons/tfi'
import Journey from '@/components/Journey'

function BecomeRider() {
    useEffect(() =>{
        AOS.init();
    },[])
    const process = [
        {
            step: "Flexibility",
            Description: "Set your own schedule and drive whenever it works for you. Whether you're looking for a full-time gig or a part-time opportunity, Shap Ride offers the flexibility to fit your lifestyle."
        },
        {
            step: "Earn More",
            Description: "With competitive fares and incentives, driving with Shap Ride can be a lucrative source of income. The more you drive, the more you can earn."
        },
        {
            step: "Supportive Community",
            Description: "Join a community of like-minded drivers who are passionate about providing exceptional rides. Benefit from support, resources, and ongoing training to help you excel in your role."
        },
        {
            step: "Safety First",
            Description: "Your safety and the safety of your passengers are our top priorities. We implement rigorous screening processes, real-time GPS tracking, and a dedicated support team to ensure a secure and comfortable ride experience."
        },
        {
            step: "Easy-to-Use Technology",
            Description: "Our driver app is designed with simplicity in mind. Get real-time ride requests, turn-by-turn navigation, and seamless payment processing all in one user-friendly interface."
        }
    ]
    const process2 = [
        {
            step: "Sign Up and Verify",
            Description: "Begin your journey as a Sharp Ride driver by signing up on our platform. Fill out a simple registration form and provide the necessary information. Once submitted, our team will verify your details to ensure the safety and security of our community."
        },
        {
            step: "Complete Your Profile",
            Description: "Create a compelling driver profile that showcases your skills and experience. Add details such as your driving history, vehicle information, and any additional qualifications you possess. A complete and well-crafted profile increases your chances of attracting riders and building a positive reputation."
        },
        {
            step: "Attend an orientation session",
            Description: "Once approved, attend an orientation session to familiarize yourself with our platform, policies, and best practices."
        },
        {
            step: "Start Driving and Earning",
            Description: "Once your profile is approved, you're ready to hit the road! Log into the Sharp Ride driver app and start accepting ride requests. Navigate the city with the help of our user-friendly app, picking up passengers and providing them with exceptional service. Enjoy the flexibility to choose your own working hours and maximize your earnings."
        }
    ]
    const requirements = [
        'Be at least 21 years old',
        "Hold a valid driver's license",
        "Have a clean driving record",
        "Own a vehicle that meets our specified requirements",
        "Pass our comprehensive background check and vehicle inspection"
    ]
    return (
        <Layout active={''}>
            <div className="abtBg">
                <div className="h-[60vh] flex w-full items-center [background:linear-gradient(90.03deg,#0E0B00_-1.33%,rgba(137,110,1,0.13)_48.95%,#171300_108.86%)]">
                    <div className="w-full">
                        <div data-aos="fade-up" className="max-w-7xl px-2 space-y-4 text-white mx-auto py-5">
                            <div className="[letter-spacing:0.175em]">Become a Shap Cab Rider</div>
                            <div className="font-[1000] space-y-2 text-3xl md:text-5xl">
                                <div className="">Join Our Driver </div>
                                <div className="">Community</div>
                            </div>
                            <div className="max-w-md text-sm">
                                At Shap Cab, we value the drivers who power our platform. Join our driver community and become part of a dedicated network that connects passengers to their destinations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl p-3 gap-12 mx-auto items-center py-24 grid md:grid-cols-2">
                <div className="md:order-1 space-y-8">
                    <div className="font-[1000] text-3xl md:text-5xl">
                        <div className="dark:text-white">Why Drive With</div>
                        <div className="text-shap-800">Shap Cab</div>
                    </div>
                    <div className="">
                        {
                            process.map((pros, i) => (
                                <div key={i} data-aos="fade-up"><Steps data={pros} /></div>
                            ))
                        }
                    </div>
                </div>
                <div className="grid min-h-[400px] grid-cols-2 gap-8">
                    <div className="h-full flex gap-8 flex-col">
                        <div data-aos="fade-down" className="h-1/3 rounded-xl">
                            <Image src={img1} alt="" srcSet="" className="w-full h-full" draggable="false" />
                        </div>
                        <div data-aos="fade-right" className="flex-grow rounded-xl">
                            <Image src={img2} alt="" srcSet="" className="w-full h-full" draggable="false" />
                        </div>
                    </div>
                    <div className="h-full flex gap-8 flex-col">
                        <div data-aos="fade-left" className="flex-grow rounded-xl">
                            <Image src={img3} alt="" srcSet="" className="w-full h-full" draggable="false" />
                        </div>
                        <div data-aos="fade-up" className="h-1/3 rounded-xl">
                            <Image src={img4} alt="" srcSet="" className="w-full h-full" draggable="false" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="bg-black dark:bg-gray-800 py-16 ">
                <div className="md:grid-cols-2 items-center grid gap-6 max-w-7xl mx-auto">
                    <div className="space-y-6 p-3">
                        <div className="font-[1000] text-2xl md:text-4xl">
                            <div className="text-shap-800">Requirements to <span className="text-white">Become a </span></div>
                            <div className="text-white">Driver</div>
                        </div>
                        <div className="text-gray-200 max-w-lg">To become a Shap Cab driver, you&apos;ll need to meet the following requirements</div>
                        <div className="space-y-3">
                            {
                                requirements.map((txt, i) => (
                                    <div data-aos="fade-up" key={i} className="flex gap-3">
                                        <TfiCar size={'20px'} className="text-yellow-400 relative bottom-0" />
                                        <div className="text-white max-w-md">{txt}</div>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                    <div data-aos="zoom-in" className="">
                        <Image src={img4} alt="" srcSet="" className="w-full h-full" draggable="false" />
                    </div>
                </div>
            </div>


            <div className="max-w-7xl p-3 gap-12 mx-auto items-center py-24 grid md:grid-cols-2">
                <div className="md:order-1 space-y-8">
                    <div className="font-[1000] text-3xl md:text-5xl">
                        <div className="dark:text-white">How to Get <span className="text-shap-800">Started</span></div>

                    </div>
                    <div className="space-y-5">
                        <div className="">
                            {
                                process2.map((pros, i) => (
                                    <div key={i} data-aos="fade-up"><Steps data={pros} /></div>
                                ))
                            }
                        </div>
                        <div className="flex gap-5">
                            <Image src={google} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                            <Image src={apple} alt='' width={'140'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="grid min-h-[400px]">
                    <Image src={img5} alt="" srcSet="" className="w-full h-full" draggable="false" />
                </div>
            </div>
            <Journey />
        </Layout>
    )
}

export default BecomeRider