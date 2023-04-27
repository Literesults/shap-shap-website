import React from 'react'
import Image from 'next/image'
import map from '../../public/images/map.png'

function Services() {
  return (
    <div>
        <div className="">
          <div className="text-center text-4xl font-bold text-yellow-600 capitalize">Services</div>
          <div className="max-w-2xl mx-auto text-gray-400 text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi tempore possimus reiciendis doloribus impedit rem distinctio quam pariatur officiis facilis omnis reprehenderit, dignissimos laborum veritatis ipsam! Explicabo quia quam voluptates?
          </div>
        </div>
        <div className="w-full px-3 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <div className="flex gap-3 items-end w-full py-5">
              <div className="lg:text-right flex-grow order-1 text-gray-400 lg:order-none first-line:uppercase first-line:tracking-widest first-letter:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci iure natus ipsam quas doloribus impedit quidem soluta temporibus eius recusandae nisi porro, in maiores possimus beatae nemo quisquam. Voluptatum.
              </div>
              <div className="">
                <div className="h-16 w-16 rounded-xl flex justify-center items-center bg-yellow-500 text-white text-2xl leading-4" style={{ 'fontFamily':'impact' }}>01</div>
              </div>
            </div>
            <div className="py-5 md:row-span-4 lg:row-span-2 order-first flex items-center justify-center lg:order-none">
                <Image src={map} width={'550'} height={'954'} alt='' draggable="false" />
            </div>
            <div className="flex gap-3 items-end w-full py-5">
              <div className="">
                <div className="h-16 w-16 rounded-xl flex text-black justify-center items-center lg:bg-opacity-100 lg:bg-yellow-500 lg:text-white bg-opacity-50 dark:text-gray-100 bg-gray-200 text-2xl leading-4" style={{ 'fontFamily':'impact' }}>02</div>
              </div>
              <div className="flex-grow text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci iure natus ipsam quas doloribus impedit quidem soluta temporibus eius recusandae nisi porro, in maiores possimus beatae nemo quisquam. Voluptatum.
              </div>
            </div>
            <div className="flex gap-3 items-end w-full py-5">
              <div className="flex-grow text-gray-400  lg:text-right order-1 lg:order-none first-line:uppercase first-line:tracking-widest first-letter:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci iure natus ipsam quas doloribus impedit quidem soluta temporibus eius recusandae nisi porro, in maiores possimus beatae nemo quisquam. Voluptatum.
              </div>
              <div className="">
                <div className="h-16 w-16 rounded-xl flex justify-center items-center text-white lg:text-black bg-yellow-500 lg:bg-opacity-50 lg:dark:text-gray-100 lg:bg-gray-200 text-2xl leading-4" style={{ 'fontFamily':'impact' }}>03</div>
              </div>
            </div>
            <div className="flex gap-3 items-end w-full py-5">
              <div className="">
                <div className="h-16 w-16 rounded-xl flex justify-center items-center bg-opacity-50 dark:text-gray-100 bg-gray-200 text-2xl leading-4" style={{ 'fontFamily':'impact' }}>04</div>
              </div>
              <div className="flex-grow text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:font-bold">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi adipisci iure natus ipsam quas doloribus impedit quidem soluta temporibus eius recusandae nisi porro, in maiores possimus beatae nemo quisquam. Voluptatum.
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services