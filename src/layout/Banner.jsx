import styles from './Banner.module.css'

export default function Banner() {
    return(
        <section className={styles.banner}>
            <div>
                <h1>Venha conhecer nossas <br /> promoções</h1>
                <h2>50% Off nos produtos</h2>
            </div>
            <div>
                <button className={styles.bannerBtn}>Ver produto</button>
            </div>
        </section>
    )
}