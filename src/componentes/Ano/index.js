import Livro from '../Livro'
import './Ano.css'

const Ano = ({ ano, livros }) => {
    return (

        livros.length > 0 && 
        <section className="ano" 
        style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: ano.corPrimaria }}>
            <h3 style={{ borderColor: ano.corSecundaria }}>{ano.nome}</h3>
            <div className='livros'>
                {livros.map((livro, indice) => <Livro 
                key={indice} 
                livro={livro} 
                corDeFundo={ano.corSecundaria} />)}
            </div>
        </section>
    )
}

export default Ano