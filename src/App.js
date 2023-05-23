import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Ano from './componentes/Ano';
import Rodape from './componentes/Rodape';

function App() {

  const edicao = [
    {
      nome: 'Edição 2023',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Edição 2022',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF',
    },
    {
      nome: 'Edição 2021',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2',
    },
    {
      nome: 'Edição 2020',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8',
    },
  ]
  const [livros, setLivros] = useState([])

  const aoNovoLivroAdicionado = (livro) => {
    // console.log(livro)
    // debugger
    setLivros([...livros, livro])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario edicao={edicao.map(ano => ano.nome)} aoLivroCadastrado={livro => aoNovoLivroAdicionado(livro)} />

      {edicao.map(ano => <Ano
        key={ano.nome}
        titulo={ano.nome}
        corPrimaria={ano.corPrimaria}
        corSecundaria={ano.corSecundaria} 
        livros={livros.filter(livro => livro.ano === ano.nome)}
        />)}
      <Rodape />
    </div>
  );
}

export default App
