import React from 'react'
import Link from 'next/link'

function NavLinks({title,active,route}) {
  return (
    <Link href={route} className={`px-3 group capitalize  cursor-pointer dark:hover:text-white hover:text-black overflow-hidden ${active.toLowerCase() == title.toLowerCase() ? 'text-black dark:text-white' : 'text-gray-400' } `}>
        {active !== title}
        <div>{title}</div>
        <div className={`h-[1.8px] relative group-hover:top-0 bg-black dark:bg-white w-2/3 mx-auto ${active.toLowerCase() != title.toLowerCase() && 'top-4' }`}/>
    </Link>
  )
}

export default NavLinks