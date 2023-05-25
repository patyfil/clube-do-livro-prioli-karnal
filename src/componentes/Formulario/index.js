import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, edicao }) => {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [imagem, setImagem] = useState('')
  const [ano, setAno] = useState('')

  const aoSubmeter = (evento) => {
    evento.preventDefault()
    console.log('Cadastrado!', titulo, autor, imagem, ano)
    aoCadastrar({
      titulo,
      autor,
      imagem,
      ano
    })
  }

  return (
    <section className='formulario-container'>
      <form className="formulario" onSubmit={aoSubmeter}>
        <h2>Preencha os dados para criar o card do livro</h2>
        <CampoTexto
          obrigatorio={true}
          label='Título'
          placeholder="Digite o nome do livro "
          valor={titulo}
          aoAlterado={valor => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o nome do autor "
          valor={autor}
          aoAlterado={valor => setAutor(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço (URL) da imagem "
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label='Ano da edição do clube '
          items={edicao}
          valor={ano}
          aoAlterado={valor => setAno(valor)}
        />
        {/* <Botao>Criar Card</Botao> */}
        <Botao texto='Criar card' />
      </form>
    </section>
  )
}

export default Formulario