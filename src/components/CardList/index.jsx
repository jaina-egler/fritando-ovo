import Card from "../Card";
import styles from "./CardList.module.css";


export default function CardList(){

    return(
        <>
         <div className={styles.CardList}>
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
         </div>
        </>
    )
}