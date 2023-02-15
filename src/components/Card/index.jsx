import styles from "./Card.module.css";

export default function Card({titulo,tempoPreparo,porcoes}){

return(
    <div className={styles.card}>
        <h2>{titulo}</h2>
        <div>
        <span className={styles.card_info}>{tempoPreparo} minutos </span>
        <span>{porcoes} pessoas</span>
        </div>
    </div>
)
}