import './Livro.css'

const Livro = ({ livro, corDeFundo, linkCompra }) => {
  return (
    <div className='livro'>
      <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
        <img src={livro.imagem} alt={livro.titulo} />
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