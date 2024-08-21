import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import styles from '@/styles/Home.module.css';
import Header from "@/components/Header";
import SideMenu from "@/components/SideMenu";
import Dashboard from "./dashboard/Dashboard";
import Login from "@/components/Login";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <SideMenu/>
        <Dashboard/>
        <Login/>
      </main>
    </>
  );
}
