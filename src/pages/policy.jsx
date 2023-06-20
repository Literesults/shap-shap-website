import Layout from '@/components/Layout'
import React from 'react'
import banerIMg from '../../public/images/driver-job-description.jpg'

function Policy() {
    const policies = [
        {
            title: 'Information Collection',
            description: [
                'Personal Identification Information: We may collect personal identification information from users in various ways, including when users register an account, book a ride, or interact with the App. The information we may collect includes but is not limited to name, email address, phone number, and payment details.',
                'Non-Personal Identification Information: We may collect non-personal identification information about users whenever they interact with the App. This information may include the type of device used, the operating system, the browser used, and other technical information.',
            ]
        },
        {
            title: 'Information Usage',
            description: [
                'To Provide Services: We may use the information collected from users to provide transportation services, process payments, and communicate with users regarding their bookings and account.',
                'To Improve User Experience: We may use the information to understand how users interact with the App, analyze usage patterns, and improve the functionality and user experience of the App.',
                "To Personalize User Experience: We may use the information to customize and personalize the content and offerings within the App based on users' preferences.",
                "To Send Periodic Emails: We may use the email address provided by users to send them information and updates pertaining to their bookings, as well as promotional content and company news. Users may opt-out of receiving such emails at any time."
            ]
        },
        {
            title: 'Information Protection',
            description: [
                'We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of personal information and data stored in the App.',
            ]
        },
        {
            title: 'Information Disclosure',
            description: [
                'Service Providers: We may engage third-party service providers to assist us in operating the App and delivering services to users. These service providers will have access to the necessary information to perform their tasks but are obligated not to disclose or use it for any other purpose.',
                'Legal Compliance: We may disclose personal information if required to do so by law or in response to valid legal requests, such as a court order or government investigation.',
            ]
        },
        {
            title: "Children's Privacy",
            description: [
                'The App is not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If we discover that we have inadvertently collected information from a child, we will promptly delete it.',
            ]
        },
        {
            title: 'Changes to this Privacy Policy',
            description: [
                'Shap Cab reserves the right to update or change this Privacy Policy at any time. Users are encouraged to review this Privacy Policy periodically to stay informed about how we are protecting and using their information. The updated Privacy Policy will be effective immediately upon posting on the App.',
            ]
        },
        {
            title: 'Your Acceptance of these Terms',
            description: [
                'By using the Shap Cab App, you signify your acceptance of this Privacy Policy. If you do not agree to this Privacy Policy, please do not use the App.',
            ]
        }
    ]


    return (
        <Layout active={'terms-conditions'}>
            <div className="bgImg">
                <div className="pt-24 bg-gray-50 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 pb-20 px-3">
                    <div className="max-w-7xl mx-auto py-12">
                        <div className="text-center">
                            <div className="">
                                <div className="text-xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize">Policy</div>
                                <div className="max-w-lg mx-auto mt-5 text-sm text-black dark:text-gray-200">
                                    This Privacy Policy governs the manner in which Shap Cab collects, uses, maintains, and discloses information collected from users (referred to as &quot;you&quot; or &quot;users&quot;) of the Shap Cab mobile application (&quot;App&quot;). This Privacy Policy applies to the App and all products and services offered by Shap Cab.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl dark:text-gray-300 px-3 mx-auto py-12">
                <div id="policy" className="space-y-3 pt-12">
                    <div className="text-lg font-bold dark:text-white">Policy</div>
                    <div className="space-y-5 text-sm md:text-base">
                        <p>Effective Date: [Insert Date]</p>
                        <div className="space-y-3">
                            {
                                policies.map((policy, index) => (
                                    <div className="" key={policy[index]}>
                                        <div className="font-bold">{index + 1}. {policy.title}</div>
                                        <div className="pl-3">
                                            {
                                                policy.description.map((description, inx) => (
                                                    <div className="" key={inx}> {
                                                        policy.description.length > 1 && <div className="">{index + 1}.{inx + 1}</div>
                                                    } {description}</div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <p>If you have any questions about this Privacy Policy, please contact us at [insert contact information].</p>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default Policy