import * as React from 'react';


import Head from "next/head"
import Navbar from '../ui/Navbar';

type Props = {
    children?: React.ReactNode,
    title?: string
}

const origin = (typeof window === 'undefined') ? '' : window.location.origin;

export const Layout: React.FC<Props> = ({ children, title }) => {
    return (
        <>
            <Head>

                <title >{title || 'Pokemon'}</title>
                <meta name="author" content="cris" />
                <meta name="descripcion" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={` ${title},pokemon,pokedex`} />
                <meta property="og:title" content={`Información sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre  ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />

            </Head>

            <Navbar />

            <main style={{
                padding: '1rem',
            }}>
                {children}
            </main>

        </>
    )
}
