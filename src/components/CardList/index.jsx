import Card from "../Card";
import styles from "./CardList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function CardList(){

    const [cards, setCards] = useState([
        // {id: 1,titulo:"Arquitetura moderna", autor:"Maria",orientador:"José"},
        // {id: 2,titulo:"Arquitetura antiga", autor:"José",orientador:"Maria"}
    ])

    useEffect(() => {
        axios.get('http://localhost:3000/api/receitas').then(resposta => setCards(resposta.data))
    },[]);

    return(
        <>
         <div className={styles.CardList}>
            {cards.map( c => (
         <Card 
         key={c.id}
         id={c.id}
         titulo={c.titulo}
         tempoPreparo={c.tempoPreparo}
         url={c.url}
         porcoes={c.porcoes}
         />
        ))}
         </div>
        </>
    )
}