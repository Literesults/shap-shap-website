import Link from 'next/link'
import React from 'react'

function RiderBtn() {
  return (
    <Link href="/become-rider">
        <div className="bg-yellow-500 text-white py-2 text-center rounded-md cursor-pointer hover:bg-yellow-400">Become a Rider</div>
    </Link>
  )
}

export default RiderBtn