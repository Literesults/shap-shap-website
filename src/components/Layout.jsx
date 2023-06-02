import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import ContactCard from './ContactCard'

function Layout({ children, active }) {
    return (
        <div onScroll={() => handleScroll()} className="overflow-x-hidden">
            <Navigation active={active} />
            <div className="min-h-screen">{children}</div>

            <ContactCard />
            <Footer />
        </div>
    )
}

export default Layout