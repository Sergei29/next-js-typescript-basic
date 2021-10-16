import type { NextPage } from 'next'
import { useEffect, useState } from "react";
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
const [strMessage, setStrMessage] = useState<string>('');

useEffect(() => {
  const API_URL = process.env.NODE_ENV === 'development'? 'http://localhost:3000/api/hello': '/api/hello';
  fetch(API_URL).then(res=>res.json()).then(({name}) => {
    setStrMessage(name);
  }).catch(e=>{console.log(`error: `, e); setStrMessage('fetch error occured')});
}, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
      </Head>

      <main className={styles.main}>
        <h4>Message: {strMessage}</h4>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}

export default Home
