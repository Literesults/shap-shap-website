import React, { useEffect, useState } from 'react'
import NavLinks from './NavLinks';
import ThemeToggler from './ThemeToggler';
import logoLight from '../../public/images/Logo.png';
import Logodark from '../../public/images/Logodark.png';
import Image from 'next/image';
import RiderBtn from './RiderBtn';

function Navigation({ active }) {
  const [menu, setMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const toggleNow = () => {
    setMenu(!menu)
  }


  useEffect(() => {
    if (localStorage.theme == 'dark') {
      setIsDark(true)
    } else {
      setIsDark(false)
    }
    const handleScroll = () => {
      setScrollTop(window.scrollY / 1000);
      setMenu(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);



  return (

    <div className="fixed dark:bg-black w-full top-0 z-50" style={{
      'backgroundColor': `rgba(${!isDark ? '255,255,255' : '0,0,0'},${scrollTop})`
    }}>
      <div className="max-w-7xl mx-auto p-3 flex">
        <div className="flex-grow md:flex-grow-0">
          <Image src={logoLight} alt='' width={'80'} height={'54'} className="rounded-lg hidden dark:block cursor-pointer" draggable="false" />
          {
            scrollTop < .3 ? <Image src={logoLight} alt='' width={'100'} height={'54'} className="rounded-lg dark:hidden cursor-pointer" draggable="false" /> : <Image src={Logodark} alt='' width={'80'} height={'54'} className="rounded-lg dark:hidden cursor-pointer" draggable="false" />
          }

        </div>
        <div className={`flex-grow fixed md:relative justify-center h-screen md:h-auto transition-all duration-300 w-screen bg-opacity-30 backdrop-blur-md md:backdrop-blur-0 dark:backdrop-blur-md dark:bg-opacity-30 dark:md:backdrop-blur-0 bg-gray-100 dark:bg-gray-800 dark:md:bg-transparent md:bg-transparent top-0 left-0  ${menu ? '' : 'hidden md:flex'} flex-col md:flex-row`}>
          <div className="w-full md:p-0">
            <div className="md:flex mx-auto h-screen md:h-auto bg-white md:bg-transparent dark:bg-gray-900 dark:md:bg-transparent">
              <div className="flex-grow flex-col md:flex-row relative flex gap-16 md:gap-4 justify-center pt-10 md:pt-0">
                <Image src={logoLight} alt='' width={'80'} height={'54'} className="rounded-lg absolute top-3 left-2  hidden dark:block md:dark:hidden cursor-pointer" draggable="false" />
                <Image src={Logodark} alt='' width={'80'} height={'54'} className="rounded-lg absolute top-3 left-2  dark:hidden md:hidden cursor-pointer" draggable="false" />
                <div className="flex-grow flex-col top-12 md:top-0 md:flex-row relative flex gap-2 justify-center">
                  <NavLinks route="/" title="Home" active={active} />
                  <NavLinks route="/about" title="About Us" active={active} />
                  <NavLinks route="/contactus" title="Contact us" active={active} />
                  <NavLinks route="/faq" title="Faq" active={active} />
                  <NavLinks route="/blogs" title="Blog" active={active} />
                </div>
                <div className=" md:hidden relative w-full bottom-1 p-2 pr-6"><RiderBtn /></div>
              </div>
              <div className="flex py-12 md:py-0 px-4 relative md:px-0 gap-3 items-center">
                <div className="hidden md:block absolute right-14 w-40"><RiderBtn /></div>
                <ThemeToggler isDark={() => setIsDark(!isDark)} />
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden flex gap-3 items-center">
          <div onClick={() => toggleNow()} className="space-y-2 w-8 h-8 relative bottom-1 left-1 md:hidden rounded-md flex flex-col items-center justify-center cursor-pointer">
            <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 transition-all duration-700 ${menu ? 'w-full transform rotate-45 absolute' : 'w-2/3'}`}></div>
            <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 relative transform transition-all duration-700 ${menu ? 'rotate-180 w-0' : 'w-full'}`}></div>
            <div className={`h-[2px] bg-gray-600 dark:bg-gray-200 transition-all duration-700 ${menu ? 'w-full transform -rotate-45 absolute top-2' : 'w-2/3'}`}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation