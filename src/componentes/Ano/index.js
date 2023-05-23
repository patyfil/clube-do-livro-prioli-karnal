import Livro from '../Livro'
import './Ano.css'

const Ano = (props) => {
    const css = { backgroundColor: props.corSecundaria };
    const h3Style = {
        '--cor-primaria': props.corPrimaria, // Define a variável CSS --cor-primaria com a cor primária
    };
    return (

        (props.livros.length > 0) ?
            <section className="ano" style={css}>
                <h3 style={h3Style}>{props.titulo}</h3>
                <div className='livros'>
                    {props.livros.map(livro => <Livro corDeFundo={props.corPrimaria} key={livro.titulo}
                        titulo={livro.titulo}
                        autor={livro.autor}
                        imagem={livro.imagem}
                    />)}
                </div>
            </section>
            : ''
    );
};


export default Ano