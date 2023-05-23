import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
  const [nome, setNome] = useState('')
  const [autor, setAutor] = useState('')
  const [imagem, setImagem] = useState('')
  const [ano, setAno] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoLivroCadastrado({
      nome, 
      autor,
      imagem,
      ano,
    })
    setNome('')
    setAutor('')
    setImagem('')
    setAno('')
    // console.log('Cadastrado!', nome, autor, imagem, anoEdicao)
  }
  return (
    <section className='formulario'>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do livro</h2>
        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o nome do livro"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <CampoTexto
          obrigatorio={true}
          label="Autor"
          placeholder="Digite o nome do autor"
          valor={autor}
          aoAlterado={valor => setAutor(valor)}
        />
        <CampoTexto
          obrigatorio={true}
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