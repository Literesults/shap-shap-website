import React from 'react'

function ThemeToggler({isDark}) {
    // this will check the current state of your browser if it 
    // is dark it will set the initial theme state as dark else it will be light mode
    if (typeof window !== 'undefined') {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }

    // this will change the theme state to either dark or light 
    function toggleTheme(){
        let htmlClasses = document.querySelector('html').classList
        if (localStorage.theme == 'dark') {
            localStorage.removeItem('theme')
            htmlClasses.remove('dark')
        } else {
            localStorage.theme = 'dark'
            htmlClasses.add('dark')
        }
        isDark()
    }


    return (
        <div onClick={()=> toggleTheme()} className="bg-gray-700 dark:bg-white cursor-pointer rounded-full w-12 h-6 relative p-1">
            <div className="absolute w-4 h-4 dark:right-1 rounded-full bg-white dark:bg-gray-700"></div>
        </div>
    )
}

export default ThemeToggler