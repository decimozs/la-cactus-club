import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Title() {
    const route = useRouter()
    
    if(route.pathname == '/') {
        return(
            <Head>
                <title>La Cactus Club</title>
            </Head>
        )
    }

    if(route.pathname == '/shop') {
        return(
            <Head>
                <title>Shop</title>
            </Head>
        )
    }

    if(route.pathname == '/about') {
        return(
            <Head>
                <title>About us</title>
            </Head>
        )
    }

    if(route.pathname == '/blog') {
        return(
            <Head>
                <title>Blog</title>
            </Head>
        )
    }

    return(
        <>
            <Head>
                <title>Error Page 404</title>
            </Head>
        </>
    )

}
