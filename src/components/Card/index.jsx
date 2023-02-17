import styles from "./Card.module.css";

export default function Card({titulo,tempoPreparo,porcoes,url,text_alt}){

return(
    <div className={styles.card}>
        <div className={styles.card_img_title}>
        <img  className={styles.card_img} src={url} alt={text_alt}/>
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
    </div>
)
}