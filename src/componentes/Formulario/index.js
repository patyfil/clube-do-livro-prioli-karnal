import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
  const [titulo, setTitulo] = useState('')
  const [autor, setAutor] = useState('')
  const [imagem, setImagem] = useState('')
  const [ano, setAno] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoLivroCadastrado({
      titulo, 
      autor,
      imagem,
      ano,
    })
    setTitulo('')
    setAutor('')
    setImagem('')
    setAno('')
    // console.log('Cadastrado!', titulo, autor, imagem, anoEdicao)
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do livro</h2>
        <CampoTexto
          obrigatorio={true}
          label="Título"
          placeholder="Digite o nome do livro"
          valor={titulo}
          aoAlterado={valor => setTitulo(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o nome do autor"
          valor={autor}
          aoAlterado={valor => setAutor(valor)}
        />
        <CampoTexto
          // obrigatorio={true}
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <ListaSuspensa
          obrigatorio={true}
          label="Ano da edição do clube"
          itens={props.edicao}
          valor={ano}
          aoAlterado={valor => setAno(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  )
}

export default Formulario