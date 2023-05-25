import './Rodape.css'

const Rodape = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/gaprioli" target="_blank" rel="noreferrer" >
                        <img src="imagens/fb.png" alt="facebook da Prioli" />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/GabrielaPrioli" target="_blank" rel="noreferrer" >
                        <img src="/imagens/tw.png" alt="twitter da Prioli" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/clubedolivropriolikarnal2023/" target="_blank" rel="noreferrer" >
                        <img src="/imagens/instagram.png" alt="instagram do clube do livro" />
                    </a>
                </li>
            </ul>
        </section>
        <section className='logo'>
            <img src="/imagens/rodape.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Patrícia M de Souza.
            </p>
        </section>
    </footer>)
}

export default Rodape