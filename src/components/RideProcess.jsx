import React from 'react'

function RideProcess({data}) {
  return (
    <div>
        <div className="p-8 py-2 pt-0 leading-4 border-l-2 border-dashed border-black relative before:absolute before:w-5 before:bg-gray-300 before:h-5 before:-top-1 before:rounded-full before:-left-[10px] after:absolute after:w-3 after:bg-black after:h-3 after:-top-[0px] after:rounded-full after:-left-[6.1px]">
            <div className="font-bold text-3xl relative bottom-4">
              {data.step}
            </div>
            <div className="max-w-lg text-sm relative bottom-3">
               {data.Description}
            </div>
        </div>
    </div>
  )
}

export default RideProcess