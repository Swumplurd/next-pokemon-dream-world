import { FC } from "react"

import Head from "next/head"

import { Navbar } from '../ui';

type Props = {
    children: React.ReactNode,
    title?: string
}

export const Layout: FC<Props> = ({ children, title = "PokemonApp" }) => {
  return (
    <>
        <Head>
            <title>{title}</title>
            <meta name="author" content="swumplurd"/>
            <meta name="description" content={`Información sobre el pokemon ${ title }`}/>
            <meta name="keywords" content={`pokemon, pokedex, pokeapi, ${ title }`}/>
        </Head>

        <Navbar/>

        <main style={{
            padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}
