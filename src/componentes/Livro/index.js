import './Livro.css'

const Livro = ({ livro, corDeFundo }) => {
  return (<div className='livro'>
    <div className='cabecalho' style={{ backgroundColor: corDeFundo}}>
      <img src={livro.imagem} alt={livro.titulo} />
    </div>
    <div className='rodape'>
      <h4>{livro.titulo}</h4>
      <h5>{livro.autor}</h5>
    </div>
  </div>)
}

export default Livro