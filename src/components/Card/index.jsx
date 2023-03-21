import styles from "./Card.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Card({id,titulo,tempoPreparo,porcoes,url}){

return(
    <div className={styles.card}>
        <Link href={`/visualizar/${id}`}>  
        <div className={styles.card_img_title}>
        <Image src={url} width="387" height="272"/>
        <div className={styles.card_title}>
        <h2>{titulo}</h2>
        </div>
        </div>
        <div>
        <div className={styles.complete_card_info}>
            <img src="/time.svg" alt="" />
            <span className={styles.card_info}>{tempoPreparo} minutos </span>
        </div>
        <div className={styles.complete_card_info}>
            <img src="/pot-of-food.svg" alt="" />
            <span className={styles.card_info}>{porcoes} pessoas</span>
        </div>
        
        </div>
        </Link>
    </div>
)
}