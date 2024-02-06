import tecnologia from '../icons/CategoriaIcons/Tecnologia.png'
import supermercado from '../icons/CategoriaIcons/Supermercado.png'
import bebidas from '../icons/CategoriaIcons/Bebidas.png'
import ferramentas from '../icons/CategoriaIcons/Ferramentas.png'
import saude from '../icons/CategoriaIcons/Saude.png'
import esporte from '../icons/CategoriaIcons/Esporte.png'
import moda from '../icons/CategoriaIcons/Moda.png'

import styles from './Categorias.module.css'

export default function Categorias() {
    return(
        <section className={styles.categorias}>
            <div>
                <img src={tecnologia} alt="Ícone de Tecnologia" />
                <p className={styles.corDestaque}>Tecnologia</p>
            </div>
            <div>
                <img src={supermercado} alt="Ícone de Supermercado" />
                <p>Supermercado</p>
            </div>
            <div>
                <img src={bebidas} alt="Ícone de Bebidas" />
                <p>Bebidas</p>
            </div>
            <div>
                <img src={ferramentas} alt="ícone de Ferramentas" />
                <p>Ferramentas</p>
            </div>
            <div>
                <img src={saude} alt="Ícone de Saúde" />
                <p>Saúde</p>
            </div>
            <div>
                <img src={esporte} alt="Ícone de Esporte" />
                <p>Esporte</p>
            </div>
            <div>
                <img src={moda} alt="Ícone de Moda" />
                <p>Moda</p>
            </div>
        </section>
    )
}