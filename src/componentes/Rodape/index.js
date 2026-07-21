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
                    </li>
                    <li>
                        <a href="https://twitter.com/GabrielaPrioli" target="_blank" rel="noreferrer">
                            <img src="/imagens/tw.webp" alt="twitter da Prioli" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/clubedolivropriolikarnal2023/" target="_blank" rel="noreferrer">
                            <img src="/imagens/instagram.webp" alt="instagram do clube do livro" />
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