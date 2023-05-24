import React, { useState } from 'react'
import NavLinks from './NavLinks';
import ThemeToggler from './ThemeToggler';
NavLinks

function Navigation({active}) {
  const [menu,setMenu] = useState(false);
  const toggleNow = () => {
    setMenu(!menu)
  }
  return (
    <div className="fixed bg-white dark:bg-black w-full top-0 z-50">
        <div className="max-w-6xl mx-auto p-3 flex">
          <div className="flex-grow md:flex-grow-0">logo</div>
          <div className={`flex-grow fixed md:relative h-screen md:h-auto transition-all duration-300 w-72 bg-gray-100 dark:bg-gray-800 dark:md:bg-transparent md:bg-transparent top-0 ${menu ? 'left-0':'-left-72 md:left-0'} flex flex-col md:flex-row`}>
            <div className="flex-grow flex-col md:flex-row flex justify-center">
              <NavLinks route="/" title="Home" active={active} />
              {/* <NavLinks route="/about" title="About" active={active} /> */}
              <NavLinks route="/contactus" title="Contact us" active={active} />
              {/* <NavLinks route="/terms-conditions" title="Terms-Conditions" active={active} /> */}
              <NavLinks route="/faq" title="Faq" active={active} />
            </div>
            <div className="flex py-12 md:py-0 px-4 md:px-0 gap-3 items-center">
              {/* <div>extra</div> */}
              <ThemeToggler />
            </div>
          </div>
          <div className="md:hidden">
            <div onClick={()=> toggleNow()} className="space-y-2 w-8 h-8 relative bottom-1 left-1 md:hidden rounded-md flex flex-col items-center justify-center cursor-pointer">
              <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 transition-all duration-700 ${menu ? 'w-full transform rotate-45 absolute':'w-2/3'}`}></div>
              <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 relative transform transition-all duration-700 ${menu ? 'rotate-180 w-0' : 'w-full'}`}></div>
              <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 transition-all duration-700 ${menu ? 'w-full transform -rotate-45 absolute':'w-2/3'}`}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navigation