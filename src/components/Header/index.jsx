import styles from "./Header.module.css";

export default function Header(){

    return(
        <header >
            <link href="https://fonts.googleapis.com/css2?family=Quicksand" rel="stylesheet" />
            <div className={styles.header}>
            <img className={styles.header_img}
            src="/Frigideira.png" 
            alt="Imagem de uma frigideira com um ovo" />
            <div className={styles.page_header_titles}>
                <h1 className={styles.header_title}>Fritando ovo</h1>
                <h2 className={styles.header_subtitle}>Receitas fáceis</h2>
            </div>
            </div>
        </header>
    )
}