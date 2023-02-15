import styles from "./Header.module.css";

export default function Header(){

    return(
        <header >
            <div className={styles.header}>
            <img 
            src="/Frigideira.png" 
            alt="Imagem de uma frigideira com um ovo" />
            <div>
                <h1>Fritando ovo</h1>
                <h2>Receitas fáceis</h2>
            </div>
            </div>
        </header>
    )
}