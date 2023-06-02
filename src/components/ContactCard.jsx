import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import booking from '../../public/images/ride-booker.png'

function ContactCard() {
  return (
    <div className="max-w-5xl mx-auto  px-3 py-24">
        <div className="bg-yellow-600 rounded-lg shadow-lg px-4 relative overflow-hidden text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 md:place-items-end">
                <div className="py-20 px-4">
                    <div className="uppercase text-4xl font-bold">get in touch now</div>
                    <div className="space-y-6">
                        <div>
                            A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. <br /> Always ready to speak with you +234 813 0075 358
                        </div>
                        <div className="">
                            <Link href={'/contactus'} className="uppercase py-3 px-5 text-white cursor-pointer bg-yellow-400 rounded-md">More Contact </Link>
                        </div>
                    </div>
                </div>
                <div className="relative flex justify-center px-12">
                    <div className="absolute h-96 w-96 bg-yellow-400 rounded-full -bottom-48"></div>
                    <Image src={booking} alt="" className="mx-auto w-96 md:w-60 z-20" draggable="false" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactCard