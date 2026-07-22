import './Header.css';

const Header = ({ edicao, edicaoAtiva }) => {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-container">
          <img src="/imagens/logo2.webp" alt="Logo do Clube do Livro" className="header-logo" />
        </div>
        <nav className="navigation-menu">
          {edicao.map((ano) => {
            const anoLimpo = ano.nome.replace('Edição ', '');
            const isActive = edicaoAtiva === ano.nome;
            return (
              <a
                key={ano.nome}
                href={`#${anoLimpo}`}
                className={`menu-link ${isActive ? 'active' : ''}`}
                style={{
                  '--hover-color': ano.corSecundaria,
                  borderColor: isActive ? ano.corSecundaria : 'transparent',
                  color: isActive ? ano.corSecundaria : '#555555'
                }}
              >
                {anoLimpo}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
