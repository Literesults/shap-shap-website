import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import extraImg from '../../public/images/business-desktop.png'
import { serialize } from '@/hooks/Serilize'
import axios from 'axios'
import { notifier } from 'react-toast-notifier';
import AOS from 'aos';
import 'aos/dist/aos.css';


function contactus() {
    useEffect(() =>{
        AOS.init();
    },[])
    const sendFeedBack = (e) => {
        e.preventDefault()
        const data = serialize(e.target)
        const base = 'https://api.hmxexpress.com/api';
        const form = document.getElementById('feedBackForm')
        axios.post(`${base}/support/send-feedback`, data ).then((res) => {
            notifier({ type: "success", message: res.data.message , autoDismissTimeout:5000 });
            form.reset()
        }).catch((error) => {
            console.log(error.response);
        })
    }

    return (
        <Layout active={'contact us'}>
            <div className="abtBg">
                <div className="p-3 pt-24 [background:linear-gradient(90.03deg,#0E0B00_-1.33%,rgba(137,110,1,0.13)_48.95%,#171300_108.86%)]">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 mb-16">
                        <div data-aos="fade-right" className="my-auto sm:px-16 md:px-24 lg:px-0 lg:py-12">
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
                        </div>
                        <div data-aos="fade-left" className="md:col-span-2 flex items-center bg-gray-100 dark:bg-gray-600 rounded-3xl px-5 pb-5 pt-28 lg:pl-36 lg:py-5 lg:pr-5">
                            <div className="space-y-7 w-full">
                                <div className="">
                                    <div className="text-center md:text-4xl font-bold text-yellow-600 text-xl">Leave a Quick Message</div>
                                    <div className="mx-auto max-w-lg text-center text-gray-400 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et amet enim ipsa adipisci, consequuntur sunt deleniti nesciunt quibusdam temporibus laborum ipsam rerum earum ea quia facilis nobis vitae soluta!
                                    </div>
                                </div>
                                <form onSubmit={sendFeedBack} id="feedBackForm" className="px-3 md:px-16 py-8 space-y-3">
                                    <FormInput Icon={<BiUserCircle size={'24px'} />} name={'name'} placeholder={'Enter Fullname'} type={'text'} />
                                    <FormInput Icon={<BiUserCircle size={'24px'} />} name={'contact_info'} placeholder={'Enter Phone or Mail'} type={'text'} />
                                    <FormTextArea Icon={<BiUserCircle size={'24px'} />} name={'message'} placeholder={'Write Your Message here'} />
                                    <button type="submit" className="bg-gray-900 w-full rounded-lg text-white text-center py-2 uppercase text-lg cursor-pointer hover:bg-black">
                                        drop message
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

export default contactus