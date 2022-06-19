import * as React from 'react';


import Head from "next/head"
import Navbar from '../ui/Navbar';

type Props = {
    children?: React.ReactNode,
    title?: string
}


export const Layout: React.FC<Props>  = ({ children, title }) => {
    return (
        <>
            <Head>

                <title>{title || 'Pokemon'}</title>
                <meta name="author" content="cris" />
                <meta name="descripcion" content={`Información sobre el pokemon ${title}`} />
                <meta name="keywords" content={` ${title},pokemon,pokedex`} />

            </Head>

            <Navbar/>

            <main style={{
                padding: '1rem',
            }}>
                {children}
            </main>

        </>
    )
}
