import './Rodape.css'

const Rodape = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="https://www.facebook.com/gaprioli" target="_blank" rel="noreferrer">
                            <img src="/imagens/fb.webp" alt="facebook da Prioli" />
                        </a>
                        <a href="https://www.facebook.com/prof.leandrokarnal" target="_blank" rel="noreferrer">
                            <img src="/imagens/fb.webp" alt="facebook da Karnal" />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/GabrielaPrioli" target="_blank" rel="noreferrer">
                            <img src="/imagens/x.webp" alt="X da Prioli" />
                        </a>
                        <a href="https://x.com/leandrokarnal" target="_blank" rel="noreferrer">
                            <img src="/imagens/x.webp" alt="X da Karnal" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/gabrielaprioli" target="_blank" rel="noreferrer">
                            <img src="/imagens/instagram.webp" alt="instagram da Gabriela" />
                        </a>
                        <a href="https://www.instagram.com/leandro_karnal" target="_blank" rel="noreferrer">
                            <img src="/imagens/instagram.webp" alt="instagram do Karnal" />
                        </a>

                    </li>
                </ul>
            </section>
            <section className='logo'>
                <img src="/imagens/rodape.webp" alt="Logo Rodapé" />
            </section>
            <section>
                <p>
                    Desenvolvido por patyfil.
                </p>
            </section>
        </footer>
    )
}

export default Rodape