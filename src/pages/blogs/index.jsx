import BlogBanner from '@/components/BlogBanner'
import Layout from '@/components/Layout'
import React, { useState } from 'react'
import img from '../../../public/images/Rectanglei7.png'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'

function index() {
    const [recentBlog,setRecentBlog] = useState([
        {
            id: 1 ,
            image:'/images/Imageframe.png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            id: 1 ,
            image:'/images/Imageframe(1).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            id: 1 ,
            image:'/images/Imageframe(2).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            id: 1 ,
            image:'/images/Imageframe.png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            id: 1 ,
            image:'/images/Imageframe(1).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            id: 1 ,
            image:'/images/Imageframe(2).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        }
    ])
    return (
        <Layout active={'Blog'}>
            <BlogBanner />
            <div className="grid md:grid-cols-2 gap-5 items-center py-24 max-w-7xl mx-auto p-3 ">
                <div className="md:order-1 space-y-6">
                    <div className="text-shap-800">Rider</div>
                    <div className="dark:text-white font-[1000] text-3xl lg:text-5xl">CRM Insights: Selection the Right One for Your Organization</div>
                    <div className="text-gray-400">Your safety is our utmost priority. We go to great lengths to ensure that every ride you take with Shap Ride is secure and comfortable. Our drivers undergo rigorous background checks, and our vehicles are meticulously maintained to guarantee your peace of mind throughout your journey.</div>
                    <div className="text-shap-800">05 June, 2023 - by Noble Okechi</div>
                </div>
                <div className="">
                    <Image src={img} alt='#' className='w-full h-full' />
                </div>
            </div>
            <div className="max-w-7xl py-4 mx-auto grid px-3 sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-7">
                {
                    recentBlog.map((blog,index)=>(
                        <BlogCard data={blog} key={index} />
                    ))
                }
            </div>
            <div className="max-w-[120px] mx-auto bg-yellow-500 hover:bg-yellow-400 text-white"><Link href="/blogs" className=""> <div className="w-full text-center py-2"> View More</div> </Link></div>
        </Layout>
    )
}

export default index