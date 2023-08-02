import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import extraImg from '../../public/images/business-desktop.png'
import { serialize } from '@/hooks/Serilize'
import axios from 'axios'
import { notifier } from 'react-toast-notifier';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Contactus() {
    useEffect(() => {
        AOS.init();
    }, [])
    const [isLoading,setisLoading] = useState(false)
    const sendFeedBack = async (e) => {
        setisLoading(true)
        e.preventDefault()
        const data = serialize(e.target)
        const base = process.env.NEXT_PUBLIC_API_BASE_URL;
        const form = document.getElementById('feedBackForm')
        await axios.post(`${base}/support/send-feedback`, data).then((res) => {
            notifier({ type: "success", message: res.data.message, autoDismissTimeout: 5000 });
            form.reset()
        }).catch((error) => {
            console.log(error.response);
        })
        setisLoading(false)
    }

    return (
        <Layout active={'contact us'}>
            <div className="abtBg">
                <div className="p-3 pt-24 [background:linear-gradient(90.03deg,#0E0B00_-1.33%,rgba(137,110,1,0.13)_48.95%,#171300_108.86%)]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 mb-16">
                        <div className="shadow-lg text-white p-5 bg-black dark:bg-gray-800 rounded-lg divide-y relative top-24 lg:top-0 lg:left-32">
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">E-mail</div>
                                <div className="">shapshap@gmail.com</div>
                            </div>
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">Phone</div>
                                <div className="">+234 813 0075 358</div>
                            </div>
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">Phone</div>
                                <div className="">+234 813 0075 358</div>
                            </div>
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">FaceBook</div>
                                <div className="">shapshap@gmail.com</div>
                            </div>
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">Instagram</div>
                                <div className="">shapshap@gmail.com</div>
                            </div>
                            <div className="py-2 cursor-pointer hover:text-gray-300">
                                <div className="">Twitter</div>
                                <div className="">shapshap@gmail.com</div>
                            </div>
                        </div>
                        <div data-aos="fade-left" className="md:col-span-2 flex items-center bg-gray-100 dark:bg-gray-600 rounded-3xl px-5 pb-5 pt-28 lg:pl-36 lg:py-5 lg:pr-5">
                            <div className="space-y-7 w-full">
                                <div className="">
                                    <div className="text-center md:text-4xl font-bold text-yellow-600 text-xl">Let&apos;s Stay Connected</div>
                                    <div className="mx-auto max-w-lg text-center text-gray-400 text-sm">
                                        We value your feedback and insights. Whether you have a suggestion, a compliment, or even a concern, we&apos;re here to listen. Your feedback helps us improve our services and ensure that every ride with Shap Cab exceeds your expectations.
                                    </div>
                                </div>
                                <form onSubmit={sendFeedBack} id="feedBackForm" className="px-3 md:px-16 py-8 space-y-3">
                                    <FormInput Icon={<BiUserCircle size={'24px'} />} name={'name'} placeholder={'Enter Fullname'} type={'text'} />
                                    <FormInput Icon={<BiUserCircle size={'24px'} />} name={'contact_info'} placeholder={'Enter Phone or Mail'} type={'text'} />
                                    <FormTextArea Icon={<BiUserCircle size={'24px'} />} name={'message'} placeholder={'Write Your Message here'} />
                                    <button disabled={isLoading} type="submit" className="bg-gray-900 disabled:cursor-default disabled:bg-gray-400 w-full rounded-lg text-white text-center py-2 uppercase text-lg cursor-pointer hover:bg-black">
                                        {isLoading ? 'Sending Message':'drop message'}
                                        
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Contactus