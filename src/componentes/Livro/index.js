import './Livro.css'

const Livro = ({ livro, corDeFundo, linkInfo }) => {
  // Tratar compatibilidade se for string (versão antiga) ou objeto (versão nova)
  const linkCompra = typeof linkInfo === 'string' ? linkInfo : (linkInfo?.comprar || '');
  const imagemExibida = (typeof linkInfo === 'object' && linkInfo?.imagem) ? linkInfo.imagem : livro.imagem;

  return (
    <div className='livro'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={imagemExibida} alt={livro.titulo} />
      </div>
      <div className='rodape'>
        <div className="livro-info">
          <h4>{livro.titulo}</h4>
          <h5>{livro.autor}</h5>
        </div>
        {linkCompra ? (
          <a 
            href={linkCompra} 
            target="_blank" 
            rel="noreferrer" 
            className="botao-comprar"
            style={{ '--hover-color': corDeFundo }}
          >
            Comprar
          </a>
        ) : (
          <button className="botao-comprar indisponivel" disabled>
            Indisponível
          </button>
        )}
      </div>
    </div>
  )
}

export default Livro