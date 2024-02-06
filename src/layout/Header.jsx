import shieldCheck from '../icons/headerIcons/ShieldCheck.png'
import creditCard from '../icons/headerIcons/CreditCard.png'
import truck from '../icons/headerIcons/Truck.png'
import logo from '../icons/headerIcons/Logo.png'
import box from '../icons/headerIcons/Box.png'
import heart from '../icons/headerIcons/Heart.png'
import user from '../icons/headerIcons/User.png'
import market from '../icons/headerIcons/Market.png'
import assinatura from '../icons/headerIcons/Assinatura.png'

import styles from './Header.module.css'

export default function Header() {
    return(
        <header className={styles.cabecalho}>
            <div className={styles.topHeader}>
                <div className={styles.spanIcons}>
                    <img src={shieldCheck} alt="Símbolo de ShieldCheck"/>
                    <p>Compra <span className={styles.destaqueTexto}>100% segura</span></p>
                </div>
                <div className={styles.spanIcons}>
                    <img src={truck} alt="Símbolo de Truck" />
                    <p><span className={styles.destaqueTexto}>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className={styles.spanIcons}>
                    <img src={creditCard} alt="Símbolo de CreditCard" />
                    <p><span className={styles.destaqueTexto}>Parecele</span> suas compras</p>
                </div>
            </div>
            <div className={styles.midHeader}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo da VTEX"/>
                    <p className={styles.destaqueTexto}>VTEX</p>
                </div>
                <div>
                    <form>
                        <input className={styles.input} type="text" placeholder='O que você está buscando?'/>
                    </form>
                </div>
                <div className={styles.midHeader_icons}>
                    <img src={box} alt="Ícone de Box" id={styles["box"]}/>
                    <img src={heart} alt="Ícone de Heart" />
                    <img src={user} alt="Ícone de User"/>
                    <img src={market} alt="Ícone de Market" />
                </div>
            </div>
            <div className={styles.categorias}>
                <p>Todas as categorias</p>
                <p>Supermercado</p>
                <p>Ofertas do dia</p>
                <p>Livros</p>
                <p>Moda</p>
                <p>Lançamentos</p>
                <p className={styles.destaqueTexto}>Ofertas do dia</p>
                <div className={styles.premiumIcon}>
                    <img src={assinatura} alt="Ícone de assinatura" />
                    <p>Assinatura</p>
                </div>
            </div>
        </header>
    )
} 