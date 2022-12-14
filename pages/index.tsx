import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import NonSSRWrapper from "../components/NoSSRWrapper";
import { ContractMessage } from "../components/Contract";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>RainbowKit App</title>
        <meta
          name="description"
          content="Generated by @rainbow-me/create-rainbowkit"
        />
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <NonSSRWrapper>
          <ContractMessage />
        </NonSSRWrapper>
      </main>
    </div>
  );
};

export default Home;
