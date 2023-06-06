import React from 'react'

function BlogBanner() {
  return (
    <div className="blogImg">
        <div className="[background:linear-gradient(90.06deg,#050400_-1.71%,rgba(87,70,0,0.25)_56.42%,rgba(151,120,0,0.83)_113.82%)] h-[75vh] flex items-center">
            <div className="text-white w-full">
                <div className="max-w-7xl p-3 mx-auto space-y-2 md:space-y-8">
                    <div className="[letter-spacing:0.175em]">Blog</div>
                    <div className="font-[1000] text-2xl md:text-5xl">Journey into Inspiration:</div>
                    <div className="text-shap-800 font-[1000] text-3xl md:text-5xl">
                        <div className="">Discover the Stories</div>
                        <div className="">Behind the Rides</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogBanner