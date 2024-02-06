import styles from './Marcas.module.css'
import logo from '../icons/headerIcons/Logo.png'

export default function Marcas() {
    return(
        <section className={styles.marcasContainer}>
            <h3>Navegue por marcas</h3>
            <div className={styles.marcasItens}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Imagem do logo" />
                    <p>Vtex</p>
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Imagem do logo" />
                    <p>Vtex</p>
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Imagem do logo" />
                    <p>Vtex</p>
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Imagem do logo" />
                    <p>Vtex</p>
                </div>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Imagem do logo" />
                    <p>Vtex</p>
                </div>
            </div>
        </section>
    )
}