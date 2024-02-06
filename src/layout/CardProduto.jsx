import ProdutoModal from './ProdutoModal'
import styles from './CardProduto.module.css'
import { useState } from 'react'

export default function CardProduto({ productName, descriptionShort, photo, price }) {

    const [openModal, setOpenModal] = useState(false)
    return(
        <section className={styles.cardProduto}>
            <img src={photo} alt="Imagem do produto" />
            <h4>{productName}</h4>
            <p id={styles["price"]}>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <p id={styles["parcelaTexto"]}>ou 2x de R$ 49,95 sem juros</p>
            <p id={styles["freteTexto"]}>Frete grátis</p>
            <button className={styles.btnCardProduto} onClick={() =>setOpenModal(true)}>Comprar</button>
            <ProdutoModal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} productName={productName} descriptionShort={descriptionShort} photo={photo} price={price}/>
        </section>
    )
}