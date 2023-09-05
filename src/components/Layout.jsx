import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
import ContactCard from './ContactCard'
import Notification from 'react-toast-notifier';
import { useRouter } from 'next/router'
import Head from 'next/head';


function Layout({ children, active }) {
    const router = useRouter()
    const [ready, setReady] = useState(false)
    useEffect(() => {
        setReady(true)
    }, [router.query.name, router.isReady])

    return (
        <div className="overflow-x-hidden">
            <Head>
                <title style="text-transform: capitalize;">{active}</title>
                <meta name='title' content='https://shapcab.com' />
            </Head>
            {ready && <Notification />}
            <Navigation active={active} />
            <div className="min-h-screen">{children}</div>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default Layout