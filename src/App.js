import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Rodape from './componentes/Rodape';
import Ano from './componentes/Ano';


function App() {

  const edicao = [
    {
      nome: 'Edição 2023',
      corPrimaria: '#D9F7E9',
      corSecundaria: '#57C278'
    },
    {
      nome: 'Edição 2022',
      corPrimaria: '#E8F8FF',
      corSecundaria: '#82CFFA'
    },
    {
      nome: 'Edição 2021',
      corPrimaria: '#F0F8E2',
      corSecundaria: '#A6D157'
    },
    {
      nome: 'Edição 2020',
      corPrimaria: '#FDE7E8',
      corSecundaria: '#E06B69'
    },
  ]

  const inicial = [
    {
      titulo: "A hora da estrela",
      autor: "Clarice Lispector",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/01.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Arendt, entre o amor e o mal",
      autor: "Ann Heberlein",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/02.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Capitalismo sem rivais",
      autor: "Branko Milanovic",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/03.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/04.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Ideologias",
      autor: "Gabriela Prioli",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/05.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Modernidade Líquida",
      autor: "Zygmunt Bauman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/06.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "O Estrangeiro",
      autor: "Albert Camus",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/07.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "O olho mais azul",
      autor: "Toni Morrison",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/08.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Pecar e Perdoar",
      autor: "Leandro Karnal",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/09.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "Ruído",
      autor: "Daniel Kahneman e demais autores.",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/4-2023/10.jpg?raw=true",
      ano: edicao[0].nome
    },
    {
      titulo: "A Mente Moralista",
      autor: "Jonathan Haidt",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/01.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Galileu e os negadores da ciência",
      autor: "Mario Livio",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/02.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Algoritmos da destruição em massa",
      autor: "Cathy O’Neil",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/03.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "O naufrágio das civilizações",
      autor: "Amin Maalouf",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/04.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Aprender a Viver: Filosofia para os novos tempos",
      autor: "Luc Ferry",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/05.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Hibisco Roxo",
      autor: "Chimamanda Ngozi",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/06.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "O Avesso da Pele",
      autor: "Jeferson Tenório",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/07.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Sociedade do Cansaço",
      autor: "Byung-Chul Han",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/08.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "O Anel de Giges",
      autor: "Eduardo Giannetti",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/3-2022/09.jpg?raw=true",
      ano: edicao[1].nome
    },
    {
      titulo: "Humanidade",
      autor: "Rutger Bregman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/01.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "Eu sou dinamite!",
      autor: "Sue Prideaux",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/02.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "Fascismo à brasileira",
      autor: "Pedro Doria",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/03.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "As grandes estratégias",
      autor: "John Lewis Gaddis",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/04.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "Novas formas de amar",
      autor: "Regina Navarro Lins ",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/05.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "Internacionalismo ou extinção",
      autor: "Noam Chomsky",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/06.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "A metamorfose",
      autor: "Franz Kafka",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/07.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "O dilema do porco-espinho",
      autor: "Leandro Karnal",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/2-2021/08.jpg?raw=true",
      ano: edicao[2].nome
    },
    {
      titulo: "História da Riqueza do Homem - Do Feudalismo ao Século XXI",
      autor: "Leo Huberman",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/01.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "Justiça: O que é fazer a coisa certa",
      autor: "Michael J. Sandel",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/02.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "Conservadorismo: Um convite a grande tradição",
      autor: "Roger Scruton",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/03.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "O chamado da tribo: Grandes pensadores para o nosso tempo",
      autor: "Mario Vargas Llosa",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/04.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "Caminhos da esquerda - Elementos para uma reconstrução",
      autor: "Ruy Fausto",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/05.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "Sobre o autoritarismo brasileiro",
      autor: "Lilia M. Schwarcz",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/06.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "O valor das ideias: Debate em tempos turbulentos",
      autor: "Marcos Lisboa e Samuel Pessôa",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/07.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "O povo contra a democracia: Por que nossa liberdade corre perigo e como salvá-la",
      autor: "Yascha Mounk",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/08.jpg?raw=true",
      ano: edicao[3].nome
    },
    {
      titulo: "A revolução dos bichos: Um conto de fadas",
      autor: "George Orwell",
      imagem: "https://github.com/patyfil/clube-do-livro-prioli-karnal/blob/main/public/imagens/1-2020/09.jpg?raw=true",
      ano: edicao[3].nome
    },
  ]
  const [livros, setLivros] = useState(inicial)

  return (
    <div>
      <Banner />
      <Formulario edicao={edicao.map(ano => ano.nome)}
        aoCadastrar={livro =>
          setLivros([...livros, livro])} />
      <section className='edicao'>
        <h1>Livros</h1>
        {edicao.map((ano, indice) => <Ano
          key={indice}
          ano={ano}
          livros={livros.filter(livro => livro.ano === ano.nome)} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App
