import Card from "../Card";
import styles from "./CardList.module.css";


export default function CardList({receitas}){

    return(
        <>
         <div className={styles.CardList}>
            {receitas.map( receita => (
         <Card 
         url={receita.image}
         key={receita.id}
      titulo = {receita.titulo}
      tempoPreparo = {receita.tempoPreparo}
      porcoes = {receita.porcoes} />
      ))}
         </div>
        </>
    )
}