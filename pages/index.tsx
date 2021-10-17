import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { API_INDEX_URL } from "../constants";

import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [strMessage, setStrMessage] = useState<string>("");
  const [arrNotes, setArrNotes] = useState<Record<string, any>[]>([]);

  useEffect(() => {
    fetch(`${API_INDEX_URL}/hello`)
      .then((res) => res.json())
      .then(({ name }) => {
        setStrMessage(name);
      })
      .catch((e) => {
        console.log(`error: `, e);
        setStrMessage("fetch error occured");
      });
    fetch(`${API_INDEX_URL}/notes`)
      .then((res) => res.json())
      .then(({ data }) => {
        setArrNotes(data);
      })
      .catch((e) => {
        console.log(`error: `, e);
        setStrMessage("fetch error occured");
      });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>My App</title>
      </Head>

      <main className={styles.main}>
        <h4>Message: {strMessage}</h4>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
