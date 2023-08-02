import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'
import axios from 'axios';

function BlogChip() {
    const [recentBlog,setRecentBlog] = useState([])
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    const fetchFaq = () => {
        axios.post(`${base}/blog/frontend-fetch-posts`).then((res) => {
            console.log(res);
            setRecentBlog(res.data.data.posts.slice(0, 3));
        })
    }

    useEffect(() =>{
        fetchFaq();
    },[])

    return (
        <div>
            <div className="space-y-5">
                <div className="text-center space-y-2">
                    <div className="text-yellow-500 font-[700]">Blog</div>
                    <div className="dark:text-white text-4xl md:text-6xl font-extrabold ">Recent <span className="text-yellow-500">Post</span></div>
                </div>
                <div className="max-w-6xl py-4 mx-auto grid px-3 sm:grid-cols-2 md:grid-cols-3 gap-7">
                    {
                        recentBlog.map((blog, index) => (
                            <BlogCard data={blog} key={index} />
                        ))
                    }
                </div>
                <div className="max-w-[120px] mx-auto bg-yellow-500 hover:bg-yellow-400 text-white"><Link href="/blogs" className=""> <div className="w-full text-center py-2"> More Blogs</div> </Link></div>
            </div>
        </div>
    )
}

export default BlogChip