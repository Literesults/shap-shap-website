import React, { useState } from 'react'
import BlogCard from './BlogCard'
import Link from 'next/link'

function BlogChip() {
    const [recentBlog, setRecentBlog] = useState([
        {
            image: '/images/Imageframe.png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            image: '/images/Imageframe(1).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        },
        {
            image: '/images/Imageframe(2).png',
            title: 'How to choose perfect gadgets',
            body: 'When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper s ...',
            createdAt: 'January 4, 2023',
            author: 'Milez'
        }
    ])
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