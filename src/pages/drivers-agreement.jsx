import Layout from '@/components/Layout'
import React, { useState } from 'react'

function Agreement() {
    const [driverAgreement, setDriverAgreement] = useState([
        {
            point: 'This service is only available to users who have attained the age of majority.',
            detail: ''
        },
        {
            point: 'Services',
            detail: 'The Company provides transportation services to the Customer via its website, apps, or other approved means.'
        },
        {
            point: 'User Conduct',
            detail: 'In your use of the Services, you agree to comply with all applicable laws, regulations, and ordinances. You also agree that you will not:',
            subChlide: [
                {
                    alphabet: 'a',
                    text: 'Abuse, harass, threaten, or defame any other user or third party;'
                },
                {
                    alphabet: 'b',
                    text: 'Interfere with or disrupt the Services or any servers or networks connected to the Services;'
                },
                {
                    alphabet: 'c',
                    text: 'Post, store, or transmit any viruses, malicious code, or other material that could interfere with, damage, or disrupt the Services;'
                },
                {
                    alphabet: 'd',
                    text: 'Collect or store any personally identifiable'
                }
            ]
        },
        {
            point: 'The user shall bear all incidental costs while using this service which includes but, not limited to tolls, fees, surcharges etc.',
            detail: ''
        },
        {
            point: 'The user shall ensure that any information provided to the company is correct and valid.',
            detail: ''
        },
        {
            point: 'The Company reserves the right to refuse service to the Customer at any time, for any reason. ',
            detail: ''
        },
        {
            point: 'The Company is not liable for any damages, losses, or injuries that occur as a result of the transportation services provided.',
            detail: ''
        },
        {
            point: 'The user agrees to exonerate the company for any damage(s) loss(es) or personal injury that occurs as a result of the transportation services provided.',
            detail: ''
        },
        {
            point: 'This Agreement is governed by the laws of [enter applicable jurisdiction].',
            detail: ''
        },
        {
            point: 'The Customer agrees that any dispute or legal matter regarding this Agreement must be brought in the jurisdiction specified in this Agreement.',
            detail: ''
        }
    ])


    return (
        <Layout active={'terms-conditions'}>
            <div className="bgImg">
                <div className="pt-24 bg-gray-50 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 pb-20 px-3">
                    <div className="max-w-7xl mx-auto py-12">
                        <div className="text-center">
                            <div className="">
                                <div className="text-xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize"><span className="">Our Commitment to Drivers</span></div>
                                <div className="max-w-lg mx-auto mt-5 text-sm text-black dark:text-gray-200">
                                    Our Drivers Agreement page outlines the mutual understanding between Shap Cab and our valued drivers. We believe in fostering a supportive and transparent relationship that ensures a rewarding experience for all. By adhering to our agreement, drivers can confidently provide exceptional service while enjoying the benefits and opportunities that come with being a part of the Shap Cab community.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl dark:text-gray-300 px-3 mx-auto py-12">
                <div className="space-y-3">
                    <div className="text-lg font-bold dark:text-white">Drivers Agreement</div>
                    <div className="space-y-5 text-sm md:text-base">
                        <p>
                            By accessing or using any of the services, you signify that you have read, understood, and agree to be bound by this Agreement. If you do not agree to any of these terms, you may not use the services.
                        </p>
                        {
                            driverAgreement.map((agreement, index) => (
                                <div key={index}>
                                    <div className="">{index + 1}{'. ' + agreement.point}</div>
                                    <div className="pl-4">{agreement.detail}</div>
                                    {agreement.subChlide && (
                                        <div className="pl-4">
                                            {
                                                agreement.subChlide.map((data, index) => (
                                                    <div className="flex pl-2" key={data[index]}>
                                                        <div className="">{data.alphabet}.</div>
                                                        <div className="pl-2 first-line:pl-0">{data.text}</div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    )}
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