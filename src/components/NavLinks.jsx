import React, { useEffect } from 'react'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';

function NavLinks({title,active,route}) {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <Link  data-aos="fade-up" href={route} className={`px-2 group capitalize py-2 md:py-0 cursor-pointer dark:hover:text-white hover:text-black overflow-hidden ${active.toLowerCase() == title.toLowerCase() ? 'text-yellow-300' : ' text-black dark:text-white' } `}>
        {active !== title}
        <div>{title}</div>
        <div className={`h-[1.8px] hidden md:block relative group-hover:top-0 bg-black dark:bg-white md:w-2/3 mx-auto ${active.toLowerCase() != title.toLowerCase() && 'top-4' }`}/>
    </Link>
  )
}

export default NavLinks