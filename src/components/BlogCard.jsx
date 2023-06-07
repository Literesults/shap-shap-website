import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function BlogCard({ data }) {
    const time = data.created_at.split("T")[0]
    console.log(data.image);
    return (
        <Link href={`/blogs/${data.slug}`} className="space-y-3 mb-3">
            <div className="h-44 bg-gray-400 rounded-md">
                {/* <Image src={`${data.image}`} alt='#' width={'100'} height={'100'} draggable={false} className='w-full h-full' /> */}
            </div>
            <div className="text-xs text-gray-400">{time} || by {data.author_name}</div>
            <div className="font-[1000] dark:text-white">{data.title}</div>
            <div className="text-sm text-gray-400 trunck-text">{data.body}</div>
        </Link>
    )
}

export default BlogCard