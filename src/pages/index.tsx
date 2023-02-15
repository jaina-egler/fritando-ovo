import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from "../components/Card"
import Header from "../components/Header"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header></Header>
      <Card 
      titulo = "Ovo com abacate"
      tempoPreparo = "25"
      porcoes = "2" />
      <Card 
      titulo = "Omelete" 
      tempoPreparo = "15" 
      porcoes = "5" />
      <Card 
      titulo = "Ovo com neston"
      tempoPreparo = "5" 
      porcoes = "3" />
    </>
  )
}
