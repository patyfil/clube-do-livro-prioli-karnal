import Livro from '../Livro'
import './Ano.css'

const Ano = ({ ano, livros, links = {} }) => {
    return (

        livros.length > 0 && 
        <section className="ano" 
        style={{ backgroundImage: 'url(/imagens/fundo.webp)', backgroundColor: ano.corPrimaria }}>
            <h3 style={{ borderColor: ano.corSecundaria }}>{ano.nome}</h3>
            <div className='livros'>
                {livros.map((livro, indice) => {
                    const key = `${livro.titulo}-${livro.autor}`;
                    return (
                        <Livro 
                            key={indice} 
                            livro={livro} 
                            corDeFundo={ano.corSecundaria}
                            linkInfo={links[key]}
                        />
                    );
                })}
            </div>
        </section>
    )
}

export default Ano