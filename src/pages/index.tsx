import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Card from "../components/Card"
import Header from "../components/Header"
import CardList from "../components/CardList"
import Pagination from "../components/Pagination"
import Footer from "../components/Footer"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const receitas = [
   {id:1, titulo: "Roscov", tempoPreparo : "25", porcoes: "2", image: "/ovo1.png"}, 
   {id:2, titulo: "Arroz com pepino", tempoPreparo : "35", porcoes: "3" ,image: "/ovo2.png"}, 
   {id:3, titulo: "Ovo com abacate", tempoPreparo : "15", porcoes: "1",  image: "/ovo3.png"},
   {id:4, titulo: "Ovo de codorna", tempoPreparo : "25", porcoes: "2", image: "/ovo4.png"}, 
   {id:5, titulo: "Omelete com abacate", tempoPreparo : "35", porcoes: "3" ,image: "/ovo5.png"}, 
   {id:6, titulo: "Ovo com manteiga", tempoPreparo : "15", porcoes: "1",  image: "/ovo6.png"},
   {id:7, titulo: "Ovo de codorna", tempoPreparo : "25", porcoes: "2", image: "/ovo1.png"}, 
   {id:8, titulo: "Omelete com abacate", tempoPreparo : "35", porcoes: "3" ,image: "/ovo3.png"}, 
   {id:9, titulo: "Ovo com manteiga", tempoPreparo : "15", porcoes: "1",  image: "/ovo6.png"}
  ]
  return (
    <>
      <Header></Header>
      <div className={styles.Content}>
      <CardList receitas={receitas}></CardList>
      <Pagination></Pagination>
      </div>
      <Footer></Footer>
      
    </>
  )
}
