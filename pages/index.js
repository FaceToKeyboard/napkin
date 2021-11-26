import Head from 'next/head'
import Landing from '../components/Landing.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Napkin</title>
        <meta name="description" content="A simple drawing webapp created in four days" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  )
}
