import styles from './ProdutosRelacionados.module.css'

export default function ProdutosRelacionados() {
    return(
        <section className={styles.containerProdutosRelacionados}>
            <h2>Produtos relacionados</h2>
            <p>Ver todos</p>
            <div className={styles.containerCardProdutosRelacionados}>
                <div className={styles.cardProdutosRelacionados}>
                    <h4>Produtos</h4>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <button className={styles.btnCardProdutosRelacionados}>Confira</button>
                </div>
                <div className={styles.cardProdutosRelacionados}>
                    <h4>Produtos</h4>
                    <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                    <button className={styles.btnCardProdutosRelacionados}>Confira</button>
                </div>
            </div>
        </section>
    )
}