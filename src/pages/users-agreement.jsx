import Layout from '@/components/Layout'
import React, { useState } from 'react'

function Agreement() {
    const [userAgreement, setUserAgreement] = useState([
        {
            point: 'Services',
            detail: 'Company provides Drivers with a mobile application that enables them to connect with people who are seeking rides. Drivers will use the application to provide transportation services to Customers.'
        },
        {
            point: 'Driver Requirements',
            detail: "Drivers must comply with all applicable laws and regulations in the jurisdiction in which they are operating, including, but not limited to, licensing and driver safety requirements. Drivers must have a valid driver's license, automobile insurance, and must be of legal age."
        },
        {
            point: 'Payment',
            detail: 'Drivers will be paid a rate per ride, as determined by Company. Payment to Drivers will be made via bank transfer on a weekly basis.'
        },
        {
            point: 'Liability',
            detail: 'Drivers are solely responsible for any and all liability arising from the provision of services. Company is not responsible for any liability associated with Drivers’ performance of services.'
        },
        {
            point: 'Termination',
            detail: 'Either party may terminate this Agreement at any time for any reason. Upon termination, Drivers must return all materials and property belonging to Company.'
        },
        {
            point: 'Governing Law',
            detail: 'This Agreement shall be governed by and interpreted in accordance with the laws of Nigeria.'
        },
        {
            point: 'Change of address.',
            detail: 'In case of relocation, the driver shall be placed on default until he identifies with the office of this company incharge of his new location.'
        },
        {
            point: 'Dispute Resolution',
            detail: 'Any dispute arising out of or in connection with this Agreement shall be finally settled by arbitration in. '
        }
    ])

    return (
        <Layout active={'terms-conditions'}>
            <div className="bgImg">
                <div className="pt-24 bg-gray-50 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 pb-20 px-3">
                    <div className="max-w-7xl mx-auto py-12">
                        <div className="text-center">
                            <div className="">
                                <div className="text-xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize"><span className="">Our Users Agreement</span></div>
                                <div className="max-w-lg mx-auto mt-5 text-sm text-black dark:text-gray-200">
                                    Our Users Agreement page is a testament to our commitment to providing a safe and reliable experience for all Shap Cab  users. It outlines the guidelines and expectations that promote a respectful and inclusive community.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl dark:text-gray-300 px-3 mx-auto py-12">
                <div id="users-agreement" className="space-y-3 pt-12">
                    <div className="text-lg font-bold dark:text-white">Users Agreement</div>
                    <div className="space-y-5 text-sm md:text-base">
                        <p>
                            User Agreement  between SHAPCAB and its users in Nigeria. <br />
                            This Agreement sets forth the legally binding terms and conditions for your use of the Company&apos;s services.
                        </p>
                        {
                            userAgreement.map((agreement, index) => (
                                <div key={index}>
                                    <div className="">{index + 1}{'. ' + agreement.point}</div>
                                    <div className="pl-4">{agreement.detail}</div>
                                </div>
                            ))
                        }
                        <p>
                            Arbitration clause: no action in tort shall be brought against the company without first; refering same to an arbitration body which shall make up of persons providing similar transportation services.
                        </p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Agreement