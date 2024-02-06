import styles from './Footer.module.css'

import facebook from '../icons/FooterIcons/Facebook.png'
import instagram from '../icons/FooterIcons/Instagram.png'
import youtube from '../icons/FooterIcons/Youtube.png'

import visa from '../icons/FooterIcons/FormasDePagamento/Visa.png'
import elo from '../icons/FooterIcons/FormasDePagamento/Elo.png'
import alelo from '../icons/FooterIcons/FormasDePagamento/Alelo.png'
import dinersClub from '../icons/FooterIcons/FormasDePagamento/DinersClub.png'
import ifood from '../icons/FooterIcons/FormasDePagamento/Ifood.png'
import mastercard from '../icons/FooterIcons/FormasDePagamento/Mastercard.png'
import pix from '../icons/FooterIcons/FormasDePagamento/Pix.png'
import americanExpress from '../icons/FooterIcons/FormasDePagamento/AmericanExpress.png'
import ticket from '../icons/FooterIcons/FormasDePagamento/Ticket.png'
import sodexo from '../icons/FooterIcons/FormasDePagamento/Sodexo.png'

import econverse from '../icons/FooterIcons/Econverse.png'
import vtex from '../icons/FooterIcons/Vtex.png'

export default function Footer() {
    return(
        <section className={styles.containerFooter}>
            <div className={styles.footerContent}>
                <div className={styles.ladoDireito}>
                    <div className={styles.aboutFooter}>
                        <h4>Sobre nós</h4>
                        <div className={styles.footerTexts}>
                            <p>Conheça</p>
                            <p>Como comprar</p>
                            <p>Indicação e desconto</p>
                        </div>
                        <div className={styles.socialIcons}>
                            <img src={facebook} alt="Ícone do Facebook" />
                            <img src={instagram} alt="Ícone do Instagram" />
                            <img src={youtube} alt="Ícone do Youtube" />
                        </div>
                    </div>
                    <div className={styles.informacoesUteis_Footer}>
                        <h4>Informações úteis</h4>
                        <div className={styles.footerTexts}>
                            <p>Fale conosco</p>
                            <p>Dúvidas</p>
                            <p>Prazos de entrega</p>
                            <p>Formas de pagamento</p>
                            <p>Política de privacidade</p>
                            <p>Trocas e devoluções</p>
                        </div>
                    </div>
                    <div className={styles.formasPagamento_Footer}>
                        <h4>Formas de pagamento</h4>
                        <div className={styles.iconsPagamaento}>
                            <img src={visa} id={styles["visa"]} alt="Ícone da Visa"/>
                            <img src={elo} id={styles["elo"]} alt="Ícone da Elo"/>
                            <img src={alelo} id={styles["alelo"]} alt="ícone da Alelo"/>
                            <img src={dinersClub} id={styles["dinersClub"]} alt="ícone da Diners Club"/>
                            <img src={ifood} id={styles["ifood"]} alt="ícone do Ifood" />
                            <img src={mastercard} id={styles["mastercard"]} alt="ícone da Mastercard"/>
                            <img src={pix} id={styles["pix"]} alt="ícone do Pix"/>
                            <img src={americanExpress} id={styles["americanExpress"]} alt="ícone da American Express"/>
                            <img src={ticket} id={styles["ticket"]} alt="ícone da Ticket" />
                            <img src={sodexo} id={styles["sodexo"]} alt="ícone do Sodexo"/>
                        </div>
                    </div>
                </div>
                <div className={styles.ladoEsquerdo}>
                    <div className={styles.newsLetter}>
                        <h4>Cadastre-se e Receba nossas <br /><span>novidades e promoções</span></h4>
                        <p>Excepteur sint occaecat cudatat non ent, sunt in <br /> culpa qui officia lorem ipsum</p>
                        <form>
                            <input type="text" name="email" id="email" placeholder='Seu email'/>
                            <button>Ok</button>
                        </form>
                    </div>
                </div>
            </div>
            <hr />
            <div className={styles.containerCopywrite}>
                <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos. <br /> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</p>
                <div className={styles.iconsCompany}>
                    <img src={econverse} alt="ícone da empresa Econverse"  id={styles["econverse"]}/>
                    <img src={vtex} alt="ícone da empresa Vtex" id={styles["vtex"]}/>
                </div>
            </div>
        </section>
    )
}