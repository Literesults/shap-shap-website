import Image from 'next/image'
import React from 'react'
import { AiFillStar } from 'react-icons/ai'

function Testimony() {

  const topDrivers = [
    {
      user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'http://www.gravatar.com/avatar/johndoe'
      },
      rating: 4,
    },
    {
      user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'http://www.gravatar.com/avatar/johndoe'
      },
      rating: 4,
    },
    {
      user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'http://www.gravatar.com/avatar/johndoe'
      },
      rating: 4,
    },
    {
      user: {
        firstname: 'John',
        lastname: 'Doe',
        email: 'johndoe@gmail.com',
        avatar: 'http://www.gravatar.com/avatar/johndoe'
      },
      rating: 4,
    }
  ]


  return (
    <div className="dark:bg-gray-800 bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="pl-12 md:pl-0 text-2xl [fontFamily:MV_Boli] dark:text-white">Top Riders</div>
        <div className="">
          <div className="w-full flex">
            <div className="flex justify-center gap-3 flex-wrap">
              {
                topDrivers.map((driver, index) => (
                  <div key={index} className="inline-flex flex-wrap items-center gap-2 px-3 py-1 w-64 bg-white dark:bg-black rounded-md shadow-sm">
                    <div className="h-16 w-16 rounded-full bg-gray-400"></div>
                    <div className="leading-4">
                      <div className="font-bold dark:text-white">John Doe</div>
                      <div className="text-sm text-gray-400 dark:text-gray-200">johndoe@gmail.com</div>
                      <div className="text-yellow-400 inline-flex gap-1">
                        <AiFillStar size={'10px'} className="" />
                        <AiFillStar size={'10px'} className="" />
                        <AiFillStar size={'10px'} className="" />
                        <AiFillStar size={'10px'} className="" />
                        <AiFillStar size={'10px'} className="" />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimony