import React from 'react'

function Preloader() {
    return (
        <div className="flex w-screen h-screen fixed top-0 right-0 z-50 items-center justify-center">
            <div className="spinner bg-black dark:bg-white"></div>
        </div>
        
    )
}

export default Preloader