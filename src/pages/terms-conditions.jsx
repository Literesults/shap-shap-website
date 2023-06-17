import Layout from '@/components/Layout'
import React from 'react'
import banerIMg from '../../public/images/driver-job-description.jpg'

function Termsconditions() {
  const termsconditions = [
    {
      title: 'Account Registration',
      description: [
        'In order to use the App, you must register for an account and provide accurate and complete information.',
        'You are responsible for maintaining the confidentiality of your account credentials and for any activity that occurs under your account.'
      ]
    },
    {
      title: 'App Usage',
      description: [
        'The App provides a platform for users to request transportation services from independent drivers.',
        'You agree to use the App solely for personal, non-commercial purposes and in compliance with applicable laws and regulations.',
        'You shall not use the App to engage in any unlawful or fraudulent activities or interfere with the proper functioning of the App.'
      ]
    },
    {
      title: 'Ride Bookings and Payments',
      description: [
        'You may request rides through the App, and the availability of drivers is not guaranteed.',
        'The fares for rides are determined by the App and displayed to you before confirming the booking.',
        'Payment for rides will be processed through the App using the designated payment method.',
        'Any cancellation or no-show fees will be clearly communicated to you before confirming the booking.'
      ]
    },
    {
      title: 'User Conduct',
      description: [
        'You agree to treat drivers and other users with respect and courtesy.',
        'You shall not engage in any behavior that is offensive, abusive, discriminatory, or violates the rights of others.',
        'You are responsible for any content you submit through the App, and you represent that such content is accurate and lawful.'
      ]
    },
    {
      title: 'Intellectual Property',
      description: [
        'The App and its content, including but not limited to logos, trademarks, and software, are the property of Shap Cab or its licensors.',
        'You are granted a limited, non-exclusive, non-transferable license to use the App solely for your personal, non-commercial purposes.'
      ]
    },
    {
      title: 'Privacy',
      description: [
        'The collection and use of your personal information are governed by our Privacy Policy, which is incorporated into this Agreement by reference.',
        'By using the App, you consent to the collection, storage, and processing of your personal information as described in the Privacy Policy.'
      ]
    },
    {
      title: 'Limitation of Liability',
      description: [
        'Shap Cab shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App or the services provided by drivers.',
        "Shap Cab's total liability to you for any claim arising under this Agreement shall not exceed the total amount paid by you for the specific ride giving rise to the claim."
      ]
    },
    {
      title: 'Termination',
      description: [
        'Shap Cab may suspend or terminate your access to the App at any time without prior notice and for any reason.',
        " Upon termination, all rights and licenses granted to you under this Agreement will cease."
      ]
    },
    {
      title: 'Governing Law and Jurisdiction',
      description: [
        "This Agreement shall be governed by and construed in accordance with the laws of [jurisdiction].",
        "Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of [jurisdiction]."
      ]
    },
    {
      title: 'Amendments',
      description: [
        "Shap Cab reserves the right to modify or amend this Agreement at any time.",
        "Any changes to this Agreement will be effective upon posting the revised version on the App."
      ]
    }
  ]

  const policy = []

  
  return (
    <Layout active={'terms-conditions'}>
      <div className="bgImg">
        <div className="pt-24 bg-gray-50 dark:bg-gray-800 bg-opacity-70 dark:bg-opacity-70 pb-20 px-3">
          <div className="max-w-7xl mx-auto py-12">
            <div className="text-center">
              <div className="">
                <div className="text-xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize"><span className="underline">Terms</span> <span className="text-xl md:text-3xl dark:text-gray-200">&</span><span className="text-xl sm:text-6xl font-extrabold text-yellow-600 capitalize"> Conditions</span></div>
                <div className="max-w-lg mx-auto mt-5 text-sm text-black dark:text-gray-200">
                  Lorem, ipsum dolor sit amet consectetur  nesciunt voluptatum eligendi magnam corrupti earum iusto nam illo inventore, dignissimos, sapiente atque officia aliquid ipsam!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl dark:text-gray-300 px-3 mx-auto py-12">
        <div className="space-y-3">
          <div className="text-lg font-bold dark:text-white">Terms & Conditions</div>
          <div className="space-y-5 text-sm md:text-base">
            <p>Please read these Terms and Conditions ("Agreement") carefully before accessing or using the Shap Cab mobile application ("App") and its associated services. This Agreement sets forth the legally binding terms and conditions for your use of the App.</p>
            <p>By accessing or using the App, you agree to be bound by this Agreement. If you do not agree with any part of this Agreement, you must not access or use the App.</p>
            <div className="space-y-2">
              {
                termsconditions.map((termscondition, index) => (
                  <div className="" key={termsconditions[index]}>
                    <div className="font-bold">{index + 1}. {termscondition.title}</div>
                    <div className="pl-3">
                      {
                        termscondition.description.map((description, inx) => (
                          <div className="" key={inx}>{index + 1}.{inx + 1} {description}</div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
            <p>By using the Shap Cab App, you acknowledge that you have accepted this Terms and Conditions.</p>
          </div>
        </div>
        <div id="policy" className="space-y-3 pt-12">
          <div className="text-lg font-bold dark:text-white">Policy</div>
          <div className="space-y-5 text-sm md:text-base">

          </div>
        </div>
      </div>

    </Layout>
  )
}

export default Termsconditions