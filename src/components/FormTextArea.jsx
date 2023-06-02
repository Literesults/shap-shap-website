import { current } from '@reduxjs/toolkit'
import React, { useState } from 'react'

function FormTextArea({Icon,name,placeholder}) {

    return (
        <div className="bg-white dark:bg-gray-700 p-2 px-3 h-52 dark:text-white rounded-md flex gap-2 relative">
            <span className="dark:text-white">{Icon}</span>
            <textarea cols="30" rows="10" required name={name} placeholder={placeholder} className="bg-transparent py-2 resize-none w-full border-0 absolute bottom-[1px] right-0 h-full pl-10 focus-within:outline-none" />
        </div>
    )
}

export default FormTextArea