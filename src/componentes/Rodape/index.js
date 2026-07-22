import './Rodape.css'

const Rodape = () => {
    const socialIcons = {
        instagram: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        ),
        facebook: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
        ),
        x: (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="social-icon">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
        youtube: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="social-icon">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
            </svg>
        )
    };

    return (
        <footer className="footer-container">
            <div className="footer-grid">
                {/* Coluna 1: Logo e Descrição */}
                <div className="footer-column brand-col">
                    <img src="/imagens/rodape.webp" alt="Logo Clube do Livro" className="footer-logo-img" />
                    <p className="footer-description">
                        Uma jornada literária guiada pelo desenvolvimento intelectual, filosofia, história e análise crítica do mundo.
                    </p>
                    <div className="club-socials">
                        <a href="https://www.instagram.com/clubedolivropriolikarnal2026" target="_blank" rel="noreferrer" title="Instagram do Clube">
                            {socialIcons.instagram}
                        </a>
                    </div>
                </div>

                {/* Coluna 2: Gabriela Prioli */}
                <div className="footer-column">
                    <h4 className="footer-heading">Gabriela Prioli</h4>
                    <p className="curator-description">Advogada, professora, apresentadora e escritora brasileira.</p>
                    <div className="curator-socials">
                        <a href="https://www.instagram.com/gabrielaprioli/" target="_blank" rel="noreferrer" title="Instagram - Gabriela Prioli">
                            {socialIcons.instagram}
                        </a>
                        <a href="https://x.com/GabrielaPrioli" target="_blank" rel="noreferrer" title="X (Twitter) - Gabriela Prioli">
                            {socialIcons.x}
                        </a>
                        <a href="https://www.facebook.com/gaprioli" target="_blank" rel="noreferrer" title="Facebook - Gabriela Prioli">
                            {socialIcons.facebook}
                        </a>
                    </div>
                </div>

                {/* Coluna 3: Leandro Karnal */}
                <div className="footer-column">
                    <h4 className="footer-heading">Leandro Karnal</h4>
                    <p className="curator-description">Historiador, palestrante, professor e escritor brasileiro.</p>
                    <div className="curator-socials">
                        <a href="https://www.instagram.com/leandro_karnal" target="_blank" rel="noreferrer" title="Instagram - Leandro Karnal">
                            {socialIcons.instagram}
                        </a>
                        <a href="https://www.facebook.com/prof.leandrokarnal" target="_blank" rel="noreferrer" title="Facebook - Leandro Karnal">
                            {socialIcons.facebook}
                        </a>
                        <a href="https://www.youtube.com/prazerkarnal" target="_blank" rel="noreferrer" title="YouTube - Leandro Karnal">
                            {socialIcons.youtube}
                        </a>
                        <a href="https://x.com/leandrokarnal" target="_blank" rel="noreferrer" title="X (Twitter) - Leandro Karnal">
                            {socialIcons.x}
                        </a>
                        
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-divider"></div>
                <div className="footer-bottom-content">
                    <p className="copyright-text">
                        &copy; {new Date().getFullYear()} Clube do Livro Prioli &amp; Karnal. Todos os direitos reservados.
                    </p>
                    <p className="credits-text">
                        Desenvolvido por <span className="highlight-author">patyfil</span>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Rodape