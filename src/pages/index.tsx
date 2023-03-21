import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from "../components/Card"
import Header from "../components/Header"
import CardList from "../components/CardList"
import Pagination from "../components/Pagination"
import Footer from "../components/Footer"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className={styles.Content}>
      <Link href="/visualizar">Visualizar</Link>
      <CardList/>
      <Pagination></Pagination>
      </div>
      <Footer></Footer>
      
    </>
  )
}
