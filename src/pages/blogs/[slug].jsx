import Layout from '@/components/Layout'
import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import img from '../../../public/images/Rectanglei7.png'
import React, { useEffect, useState } from 'react'
import { HiShare } from 'react-icons/hi'

function Blog() {
    const router = useRouter()
    const { slug } = router.query
    const base = 'https://api.hmxexpress.com/api';
    const [blog, setBlog] = useState({})
    useEffect(() => {
        axios.post(`${base}/blog/frontend-fetch-a-post`, { slug }).then((res) => {
            setBlog(res.data.data.post);
        }).catch((err) => {
            console.log(err);
        });
    }, [router.query.name, router.isReady, slug])
    return (
        <Layout active={'Blog'}>
            <div className="h-[55vh] bg-yellow-900 dark:bg-gray-900 p-3 flex items-center">
                <div className="w-full">
                    <div className="max-w-7xl mx-auto space-y-4">
                        <div className="[letter-spacing:0.175em] text-shap-800">{blog.category}</div>
                        <div className="max-w-5xl font-[1000] text-3xl md:text-5xl text-white">{blog.title}</div>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl py-10 md:py-24 space-y-6 p-3 mx-auto">
                <div className="rounded-xl overflow-hidden">
                    <div className={`max-w-7xl mx-auto h-[500px]`}>
                        <Image src={blog.image} alt={blog.title} width={'100'} height={'100'} draggable={false} className='w-full h-full' />
                    </div>
                </div>
                <div className="space-y-6 max-w-5xl mx-auto">
                    <div className="text-sm text-shap-800"> {blog.created_at?.split("T")[0]} - by {blog.author_name}</div>
                    <div className="dark:text-white"  dangerouslySetInnerHTML={{ __html: blog.body }} />
                    <div className="flex">
                        <div className="text-shap-800 flex-grow"></div>
                        <div className="bg-[linear-gradient(180deg,#E09800_0%,#322200_100%)] text-white p-3"><HiShare /> </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog