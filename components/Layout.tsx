import React, { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import ScrollToViewTag from './ScrollToViewTag'
import { NextSeo } from 'next-seo'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    children?: ReactNode
    title: string
    description: string
}

const postVariants = {
    initial: { scale: 0.99, y: 0, opacity: 0.4 },
    enter: { scale: 1, y: 0, opacity: 1, transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] } },
    exit: {
      scale: 0.99,
      y: 60,
      opacity: 0.4,
      transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] }
    }
  };

const Layout = ({ children, title, description }: Props) => (
    <AnimatePresence exitBeforeEnter>
        <Head>
            <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
            <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
        <motion.div className="bg-white" key={title}>
            <NextSeo
                title={title}
                description={description}
            />
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <ScrollToViewTag />
            <Header />
            <motion.main initial="initial" animate="enter" exit="exit" variants={postVariants} className="xl:pt-header-xl lg:pt-header-lg pt-header w-screen flex flex-col justify-center items-center">
                {children}
            </motion.main>
            <Footer />
        </motion.div>
    </AnimatePresence>
)

export default Layout
