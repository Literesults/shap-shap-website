import React from 'react'

function Bullets({data}) {
  return (
    <div>
        <div className="p-8 py-2 pt-0 leading-4 border-l-2 border-dashed border-white relative before:absolute before:w-5 before:bg-gray-400 before:h-5 before:-top-1 before:rounded-full before:-left-[10px] after:absolute after:w-3 after:bg-white after:h-3 after:-top-[0px] after:rounded-full after:-left-[6.1px]">
            <div className="font-bold text-white text-xl relative bottom-2">
              {data?.step}
            </div>
            <div className="max-w-lg text-gray-300 text-xs relative bottom-1">
               {data?.Description}
            </div>
        </div>
    </div>
  )
}

export default Bullets