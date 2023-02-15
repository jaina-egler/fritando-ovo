import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from "../components/Card"
import Header from "../components/Header"
import CardList from "../components/CardList"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header></Header>
      <CardList></CardList>
    </>
  )
}
