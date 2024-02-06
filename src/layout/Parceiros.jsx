import styles from './Parceiros.module.css'

import parceiros from '../icons/Parceiros.jpg'

export default function Parceiros() {
    return(
        <section className={styles.parceiroContainer}>
            <div className={styles.parceiroCard}>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                <button className={styles.btnParceiro}>Confira</button>
            </div>
            <div className={styles.parceiroCard}>
                <h2>Parceiros</h2>
                <p>Lorem ipsum dolor sit <br /> amet, consectetur</p>
                <button className={styles.btnParceiro}>Confira</button>
            </div>
        </section>
    )
}