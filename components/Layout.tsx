import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ScrollToViewTag from './ScrollToViewTag'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div className="bg-white">
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <ScrollToViewTag />
        <Header />
        <main className="xl:pt-56 pt-44 lg:pt-52 w-screen flex flex-col justify-center items-center">
            {children}
        </main>
        <Footer />
    </div>
)

export default Layout
