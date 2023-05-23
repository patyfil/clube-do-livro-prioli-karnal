import Livro from '../Livro'
import './Ano.css'

const Ano = (props) => {
    const css = { backgroundColor: props.corSecundaria }
    return (
        // props.livros.length > 0 &&
        (props.livros.length > 0) ?
        <section className="ano" style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='livros'>
                {props.livros.map(livro => <Livro corDeFundo={props.corPrimaria} key={livro.nome}
                    nome={livro.nome}
                    autor={livro.autor}
                />)}
            </div>
        </section >
        : ''
    )
}

export default Ano