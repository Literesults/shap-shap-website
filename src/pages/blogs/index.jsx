import BlogBanner from '@/components/BlogBanner'
import Layout from '@/components/Layout'
import React, { useEffect, useState } from 'react'
import img from '../../../public/images/Rectanglei7.png'
import Image from 'next/image'
import BlogCard from '@/components/BlogCard'
import axios from 'axios'
import { AiOutlineFileSearch } from 'react-icons/ai'

function Index() {
    const [recentBlog,setRecentBlog] = useState([])
    const base = 'https://api.hmxexpress.com/api';
    const [firstBlog,setFirstBlog] = useState({})

    const fetchFaq = () => {
        axios.post(`${base}/blog/frontend-fetch-posts`).then((res) => {
            setRecentBlog(res.data.data.posts);
            setFirstBlog(res.data.data.posts[0]);
        })
    }

    useEffect(() =>{
        fetchFaq();
    },[])

    return (
        <Layout active={'Blog'}>
            <BlogBanner />
            <div className="grid md:grid-cols-2 gap-5 items-center py-24 max-w-7xl mx-auto p-3 ">
                <div className="md:order-1 space-y-6">
                    <div className="text-shap-800">{firstBlog.category}</div>
                    <div className="dark:text-white font-[1000] text-3xl lg:text-5xl">{firstBlog.title}</div>
                    <div className="text-gray-400">{firstBlog.body}</div>
                    <div className="text-shap-800">05 June, 2023 - by {firstBlog.author_name}</div>
                </div>
                <div className="">
                    <Image src={img} alt='#' className='w-full h-full' />
                </div>
            </div>
            <div className="max-w-7xl mx-auto">
                <div className="max-w-sm bg-white dark:text-white dark:border-gray-600 dark:bg-gray-800 rounded-lg overflow-hidden border relative">
                    <div className="absolute top-3 left-2">
                        <AiOutlineFileSearch size={'24px'} />
                    </div>
                    <input type="text" className="w-full pl-9 bg-transparent h-full focus:outline-none p-3" placeholder="Search by Blog Title" />
                </div>
            </div>
            <div className="max-w-7xl py-4 mx-auto grid px-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-7">
                {
                    recentBlog.map((blog,index)=>(
                        <div className="" key={index}><BlogCard data={blog} /></div>
                    ))
                }
            </div>
        </Layout>
    )
}

export default Index