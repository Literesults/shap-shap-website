import Image from 'next/image'
import React from 'react'

function BlogCard({data}) {
    return (
        <div className="space-y-3">
            <div className="h-44 bg-gray-400 rounded-md">
                <Image src={data.Image} alt='#' width={'100'} height={'100'} className='w-full h-full' />
            </div>
            <div className="text-xs text-gray-400">{data.createdAt} || by {data.author}</div>
            <div className="font-[1000] dark:text-white">{data.title}</div>
            <div className="text-sm text-gray-400">{data.body}</div>
        </div>
    )
}

export default BlogCard