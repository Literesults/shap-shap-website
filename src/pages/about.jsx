import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import google from '../../public/images/psA1TtmLqiU.jpg'
import apple from '../../public/images/images.jpg'
import Services from '@/components/Services'

function about() {
  return (
    <Layout active={'about'}>
      <div>
        <div className="bannerImg max-w-7xl mx-auto py-24">
          <div className="grid md:grid-cols-2 items-center p-3 h-full">
            <div className="space-y-5">
              <div>
                <div style={{ 'fontFamily': 'Segoe Script' }} className=" dark:text-white">Ride like a King</div>
                <div className="font-extrabold text-5xl dark:text-white">
                  <div>Find the <span className="text-yellow-600">Best</span></div>
                  <div>Taxi <span className="text-yellow-600">Ride Around</span></div>
                  <div></div>
                </div>
              </div>
              <div className="max-w-sm text-sm dark:text-white bg-white border-gray-400 dark:bg-black dark:bg-opacity-40 p-3 rounded-md shadow-md border bg-opacity-40 backdrop-blur-lg dark:backdrop-blur-lg">
                A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.
                A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.
              </div>
              <div className="flex flex-wrap gap-2">
                <Image src={google} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
                <Image src={apple} alt='' width={'150'} height={'54'} className="rounded-lg cursor-pointer" draggable="false" />
              </div>
            </div>
            <div className="flex flex-col h-full pb-12 w-full">
              <div className="flex-grow flex justify-center md:justify-end items-center">
                <div className="w-1/4 h-80 rounded-xl scale-75 bgAbt1"></div>
                <div className="w-1/4 h-80 rounded-xl bgAbt2"></div>
                <div className="w-1/4 h-80 rounded-xl scale-75 bgAbt3"></div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <div className="space-y-4 p-3 py-24 md:py-44">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-12">
              <div className="">
                <div className="text-center text-4xl font-bold text-yellow-600 capitalize">Testimonies</div>
                <div className="max-w-lg mx-auto text-gray-400 text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tempore possimus reiciendis doloribus impedit rem
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-0">
              <div className="w-1/4 h-80 rounded-xl scale-75 bgAbt1"></div>
              <div className="w-1/4 h-80 rounded-xl bgAbt2"></div>
              <div className="w-1/4 h-80 rounded-xl scale-75 bgAbt3"></div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default about