import Link from 'next/link'
import React from 'react'

function RiderBtn() {
  return (
    <Link href="/become-rider">
        <div className="bg-yellow-500 text-white py-2 text-center w-40 rounded-md cursor-pointer hover:bg-yellow-400">Become a rider</div>
    </Link>
  )
}

export default RiderBtn