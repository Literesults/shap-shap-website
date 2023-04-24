
import React from 'react'

function HomeBanner() {
  return (
    <div className="bannerImg h-screen max-w-6xl mx-auto">
        <div className="bg-gradient-to-b dark:bg-gradient-to-b dark:from-black dark:from-[5%] dark:via-transparent dark:to-transparent from-white from-[5%] via-transparent to-transparent grid md:grid-cols-2 items-center p-3 h-full">
            <div className="space-y-5">
                <div>
                    <div style={{ 'fontFamily': 'Segoe Script'}} className=" dark:text-white">Ride like a King</div>
                    <div className="font-extrabold text-5xl dark:text-white">
                        <div>Find the <span className="text-yellow-600">Best</span></div>
                        <div>Taxi <span className="text-yellow-600">Ride</span> around</div>
                        <div></div>
                    </div>
                </div>
                <div className="max-w-sm text-sm dark:text-white bg-white border-gray-400 dark:bg-black dark:bg-opacity-40 p-3 rounded-md shadow-md border bg-opacity-40 backdrop-blur-lg dark:backdrop-blur-lg">
                    A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.
                    A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.
                </div>
                <div>

                </div>
                <div></div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default HomeBanner