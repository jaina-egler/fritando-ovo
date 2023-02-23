import styles from "./Footer.module.css";

export default function Footer(){

    return(
        <footer >
            <link href="https://fonts.googleapis.com/css2?family=Quicksand" rel="stylesheet" />
            <div className={styles.footer}>
            <img className={styles.footer_img}
            src="/Frigideira.png" 
            alt="Imagem de uma frigideira com um ovo" />
            <div className={styles.page_footer_titles}>
                <h1 className={styles.footer_title}>Fritando ovo - Receitas fáceis</h1>
                <h2 className={styles.footer_subtitle}>2022</h2>
            </div>
            </div>
        </footer>
    )
}