import React from 'react'
import {TbTargetArrow} from 'react-icons/tb'

function Bullets() {
  return (
    <div>
        <div className="text-white font-bold flex gap-1 items-center text-xl"><TbTargetArrow size={'19px'} className="relative top-[2px]" /> Title</div>
        <div className="pl-6 text-white max-w-lg text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, blanditiis? Distinctio accusamus facilis, aliquam</div>
    </div>
  )
}

export default Bullets