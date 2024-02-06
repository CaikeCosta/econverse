import styles from './Vitrine.module.css'
import 'react-multi-carousel/lib/styles.css';

import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import CardProduto from './CardProduto'

export default function Vitrine() {

    const [produto, setProduto] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProduto(data)
        })
        .catch(err => console.log(err))
    }, [])

    const responsive = {
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

    const cardProduto = produto.map((produto) => <CardProduto productName={produto.productName} descriptionShort={produto.descriptionShort} photo={produto.photo} price={produto.price} />)

    return(
        <section className={styles.vitrineContainer}>
            <h2>Produtos relacionados</h2>
            <div className={styles.categoriasProdutos}>
                <p className={styles.produto} id={styles["destaqueTexto"]}>Celular</p>
                <p className={styles.produto}>Acessórios</p>
                <p className={styles.produto}>Tablets</p>
                <p className={styles.produto}>Notebooks</p>
                <p className={styles.produto}>Tvs</p>
                <p className={styles.produto}>Ver todos</p>
            </div>
            <div className={styles.containerCardProduto}>
                {cardProduto}
            </div>
        </section>
    )
}