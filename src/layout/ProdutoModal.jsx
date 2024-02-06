import React, { useState } from "react";
import styles from "./ProdutoModal.module.css"
import incremento from '../icons/ModalIcons/Incremento.png'
import decremento from '../icons/ModalIcons/Decremento.png'

export default function ProdutoModal({ isOpen, setModalOpen, productName, descriptionShort, photo, price }) {

    const [qntItem, setQntItem] = useState(0)

    const incrementar = () => {
        setQntItem(qntItem + 1)
    }

    const decrementar = () => {
        if(qntItem > 0) {
            setQntItem(qntItem - 1)
        }
    }

    if(isOpen) {
        return(
            <div className={styles.backgroundModal}>
                <div className={styles.containerModal}>
                    <img src={photo} alt="Foto do produto" />
                    <div className={styles.contentModal}>
                        <h3>{productName}</h3>
                        <p id={styles["price"]}>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                        <p id={styles["description"]}>Many desktop publishing packages and web page editors <br />now many desktop publishing</p>
                        <p id={styles["details"]}>Ver mais detalhes do produto ></p>
                        <div className={styles.containerQntItens}>
                            <img src={decremento} alt="" onClick={decrementar} />
                            <p id={styles["qntTextoItem"]}>{qntItem}</p>
                            <img src={incremento} alt="Botão de incremento" onClick={incrementar}/>
                        </div>
                        <button className={styles.btnComprar}>Comprar</button>
                    </div>
                    <p id={styles["closeButton"]} onClick={setModalOpen}>X</p>
                </div>
            </div>
        )
    }
}