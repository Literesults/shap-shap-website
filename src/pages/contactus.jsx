import FormInput from '@/components/FormInput'
import FormTextArea from '@/components/FormTextArea'
import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import { BiUserCircle } from 'react-icons/bi'
import extraImg from '../../public/images/business-desktop.png'
import { serialize } from '@/hooks/Serilize'
import axios from 'axios'
import { notifier } from 'react-toast-notifier';


function contactus() {
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
            <div>
                <div className="pt-24 pb-20  bg-gray-50 dark:bg-gray-900 px-3">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="flex w-full items-center">
                            <div className="">
                                <div className="text-3xl dark:text-gray-200">Get a</div>
                                <div className="text-4xl sm:text-6xl font-extrabold text-gray-700 dark:text-gray-50 capitalize"><span className="underline">Quick</span> <span className="text-3xl dark:text-gray-200">and</span></div>
                                <div className="text-4xl sm:text-6xl font-extrabold text-yellow-600 capitalize"><span className="text-3xl dark:text-gray-200 text-gray-700">Confortable</span> Ride</div>
                                <div className="max-w-lg mt-5 text-gray-500">
                                    Lorem, ipsum dolor sit amet consectetur  nesciunt voluptatum eligendi magnam corrupti earum iusto nam illo inventore, dignissimos, sapiente atque officia aliquid ipsam!
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Image src={extraImg} alt='' className="rounded-lg cursor-pointer w-full h-full" draggable="false" />
                        </div>
                    </div>
                </div>
                <div className="p-3 pt-24">
                    <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 mb-28">
                        <div className="my-auto px-8 sm:px-16 md:px-24 lg:px-0 lg:py-12">
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
                        <div className="md:col-span-2 flex items-center bg-gray-100 dark:bg-gray-600 rounded-3xl px-5 pb-5 pt-28 lg:pl-36 lg:py-5 lg:pr-5">
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