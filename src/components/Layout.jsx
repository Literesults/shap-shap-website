import React from 'react'
import Navigation from './Navigation'
// import Footer from './footer'

function Layout({children,active}) {
    return (
        <div className="overflow-x-hidden">
            <Navigation active={active} />
            <div className="min-h-screen pt-12">{children}</div>
            {/* <Footer /> */}
        </div>
    )
}

export default Layout