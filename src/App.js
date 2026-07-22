import { useState, useEffect } from 'react';
import Banner from './componentes/Banner';
import Rodape from './componentes/Rodape';
import Ano from './componentes/Ano';
import Header from './componentes/Header';

function App() {

  const edicao = [
    {
      nome: 'Edição 2026',
      corPrimaria: '#FFE8F4',
      corSecundaria: '#FE65A9'
    },
    {
      nome: 'Edição 2025',
      corPrimaria: '#FFF5D9',
      corSecundaria: '#FFBA05'
    },
    {
      nome: 'Edição 2024',
      corPrimaria: '#E8E5FF',
      corSecundaria: '#6246EA'
    },
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
  ];

  const livros = [
    // --- Edição 2026 ---
    {
      titulo: "Orgulho e Preconceito",
      autor: "Jane Austen",
      imagem: "/imagens/7-2026/01.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "O Dilema das Galinhas Felizes",
      autor: "Leandro Karnal e Gustavo Arns",
      imagem: "/imagens/7-2026/02.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Ressurreição",
      autor: "Liev Tolstói",
      imagem: "/imagens/7-2026/03.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Seremos Dados",
      autor: "Marcus Bruzzo",
      imagem: "/imagens/7-2026/04.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "A Cabeça do Brasileiro",
      autor: "Alberto Carlos Almeida",
      imagem: "/imagens/7-2026/05.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "A Nona Sinfonia",
      autor: "Harvey Sachs",
      imagem: "/imagens/7-2026/06.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Conceição Evaristo: Voz Insubmissa",
      autor: "Yasmin Santos",
      imagem: "/imagens/7-2026/07.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Lendo Lolita em Teerã",
      autor: "Azar Nafisi",
      imagem: "/imagens/7-2026/08.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Fantasmas",
      autor: "Daniel Munduruku",
      imagem: "/imagens/7-2026/09.webp",
      ano: 'Edição 2026'
    },
    {
      titulo: "Bartleby, o Escrivão",
      autor: "Herman Melville",
      imagem: "/imagens/7-2026/10.webp",
      ano: 'Edição 2026'
    },

    // --- Edição 2025 ---
    {
      titulo: "Doze Contos Peregrinos",
      autor: "Gabriel García Márquez",
      imagem: "/imagens/6-2025/01.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "Autocracia S.A.",
      autor: "Anne Applebaum",
      imagem: "/imagens/6-2025/02.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "O que nos faz bons ou maus",
      autor: "Paul Bloom",
      imagem: "/imagens/6-2025/03.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "A Arte de Amar",
      autor: "Christian Dunker",
      imagem: "/imagens/6-2025/04.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "O Velho e o Mar",
      autor: "Ernest Hemingway",
      imagem: "/imagens/6-2025/05.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "Igualdade: Significado e Importância",
      autor: "Michael Sandel e Thomas Piketty",
      imagem: "/imagens/6-2025/06.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "O Sol é Para Todos",
      autor: "Harper Lee",
      imagem: "/imagens/6-2025/07.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "Factfulness",
      autor: "Hans Rosling",
      imagem: "/imagens/6-2025/08.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "Não Se Esqueça!",
      autor: "Mario Sérgio Cortella",
      imagem: "/imagens/6-2025/09.webp",
      ano: 'Edição 2025'
    },
    {
      titulo: "Tarsila: Uma Vida Doce-Amarga",
      autor: "Mary Del Priore",
      imagem: "/imagens/6-2025/10.webp",
      ano: 'Edição 2025'
    },

    // --- Edição 2024 ---
    {
      titulo: "As Meninas",
      autor: "Lygia Fagundes Telles",
      imagem: "/imagens/5-2024/01.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "A Insustentável Leveza do Ser",
      autor: "Milan Kundera",
      imagem: "/imagens/5-2024/02.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "Fora de Série (Outliers)",
      autor: "Malcolm Gladwell",
      imagem: "/imagens/5-2024/03.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "A Cor Púrpura",
      autor: "Alice Walker",
      imagem: "/imagens/5-2024/04.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "O Alienista",
      autor: "Machado de Assis",
      imagem: "/imagens/5-2024/05.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "A Fé e o Fuzil",
      autor: "Bruno Paes Manso",
      imagem: "/imagens/5-2024/06.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "Estranhos a Nós Mesmos",
      autor: "Rachel Aviv",
      imagem: "/imagens/5-2024/07.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "A Próxima Onda",
      autor: "Mustafa Suleyman e Michael Bhaskar",
      imagem: "/imagens/5-2024/08.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "Preconceito: Uma História",
      autor: "Leandro Karnal e Luiz Estevam",
      imagem: "/imagens/5-2024/09.webp",
      ano: 'Edição 2024'
    },
    {
      titulo: "Véspera",
      autor: "Carla Madeira",
      imagem: "/imagens/5-2024/10.webp",
      ano: 'Edição 2024'
    },

    // --- Edição 2023 ---
    {
      titulo: "A hora da estrela",
      autor: "Clarice Lispector",
      imagem: "/imagens/4-2023/01.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Arendt, entre o amor e o mal",
      autor: "Ann Heberlein",
      imagem: "/imagens/4-2023/02.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Capitalismo sem rivais",
      autor: "Branko Milanovic",
      imagem: "/imagens/4-2023/03.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      imagem: "/imagens/4-2023/04.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Ideologias",
      autor: "Gabriela Prioli",
      imagem: "/imagens/4-2023/05.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Modernidade Líquida",
      autor: "Zygmunt Bauman",
      imagem: "/imagens/4-2023/06.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "O Estrangeiro",
      autor: "Albert Camus",
      imagem: "/imagens/4-2023/07.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "O olho mais azul",
      autor: "Toni Morrison",
      imagem: "/imagens/4-2023/08.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Pecar e Perdoar",
      autor: "Leandro Karnal",
      imagem: "/imagens/4-2023/09.webp",
      ano: 'Edição 2023'
    },
    {
      titulo: "Ruído",
      autor: "Daniel Kahneman e demais autores.",
      imagem: "/imagens/4-2023/10.webp",
      ano: 'Edição 2023'
    },

    // --- Edição 2022 ---
    {
      titulo: "A Mente Moralista",
      autor: "Jonathan Haidt",
      imagem: "/imagens/3-2022/01.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "Galileu e os negadores da ciência",
      autor: "Mario Livio",
      imagem: "/imagens/3-2022/02.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "Algoritmos da destruição em massa",
      autor: "Cathy O’Neil",
      imagem: "/imagens/3-2022/03.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "O naufrágio das civilizações",
      autor: "Amin Maalouf",
      imagem: "/imagens/3-2022/04.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "Aprender a Viver: Filosofia para os novos tempos",
      autor: "Luc Ferry",
      imagem: "/imagens/3-2022/05.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "Hibisco Roxo",
      autor: "Chimamanda Ngozi",
      imagem: "/imagens/3-2022/06.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "O Avesso da Pele",
      autor: "Jeferson Tenório",
      imagem: "/imagens/3-2022/07.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "Sociedade do Cansaço",
      autor: "Byung-Chul Han",
      imagem: "/imagens/3-2022/08.webp",
      ano: 'Edição 2022'
    },
    {
      titulo: "O Anel de Giges",
      autor: "Eduardo Giannetti",
      imagem: "/imagens/3-2022/09.webp",
      ano: 'Edição 2022'
    },

    // --- Edição 2021 ---
    {
      titulo: "Humanidade",
      autor: "Rutger Bregman",
      imagem: "/imagens/2-2021/01.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "Eu sou dinamite!",
      autor: "Sue Prideaux",
      imagem: "/imagens/2-2021/02.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "Fascismo à brasileira",
      autor: "Pedro Doria",
      imagem: "/imagens/2-2021/03.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "As grandes estratégias",
      autor: "John Lewis Gaddis",
      imagem: "/imagens/2-2021/04.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "Novas formas de amar",
      autor: "Regina Navarro Lins ",
      imagem: "/imagens/2-2021/05.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "Internacionalismo ou extinção",
      autor: "Noam Chomsky",
      imagem: "/imagens/2-2021/06.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "A metamorfose",
      autor: "Franz Kafka",
      imagem: "/imagens/2-2021/07.webp",
      ano: 'Edição 2021'
    },
    {
      titulo: "O dilema do porco-espinho",
      autor: "Leandro Karnal",
      imagem: "/imagens/2-2021/08.webp",
      ano: 'Edição 2021'
    },

    // --- Edição 2020 ---
    {
      titulo: "História da Riqueza do Homem - Do Feudalismo ao Século XXI",
      autor: "Leo Huberman",
      imagem: "/imagens/1-2020/01.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "Justiça: O que é fazer a coisa certa",
      autor: "Michael J. Sandel",
      imagem: "/imagens/1-2020/02.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "Conservadorismo: Um convite a grande tradição",
      autor: "Roger Scruton",
      imagem: "/imagens/1-2020/03.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "O chamado da tribo: Grandes pensadores para o nosso tempo",
      autor: "Mario Vargas Llosa",
      imagem: "/imagens/1-2020/04.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "Caminhos da esquerda - Elementos para uma reconstrução",
      autor: "Ruy Fausto",
      imagem: "/imagens/1-2020/05.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "Sobre o autoritarismo brasileiro",
      autor: "Lilia M. Schwarcz",
      imagem: "/imagens/1-2020/06.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "O valor das ideias: Debate em tempos turbulentos",
      autor: "Marcos Lisboa e Samuel Pessôa",
      imagem: "/imagens/1-2020/07.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "O povo contra a democracia",
      autor: "Yascha Mounk",
      imagem: "/imagens/1-2020/08.webp",
      ano: 'Edição 2020'
    },
    {
      titulo: "A revolução dos bichos: Um conto de fadas",
      autor: "George Orwell",
      imagem: "/imagens/1-2020/09.webp",
      ano: 'Edição 2020'
    },
  ];

  const [edicaoAtiva, setEdicaoAtiva] = useState('Edição 2026');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = edicao.find(e => e.nome.includes(hash));
        if (found) {
          setEdicaoAtiva(found.nome);
          return;
        }
      }
      // Se não houver hash válido, direciona para o ano mais recente (2026) e atualiza a URL
      setEdicaoAtiva('Edição 2026');
      window.location.hash = '#2026';
    };

    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const anoAtivo = edicao.find(ano => ano.nome === edicaoAtiva) || edicao[0];

  return (
    <div>
      <Header edicao={edicao} edicaoAtiva={edicaoAtiva} />
      <Banner />

      <section className='edicao'>
        {anoAtivo && (
          <Ano
            key={anoAtivo.nome}
            ano={anoAtivo}
            livros={livros.filter(livro => livro.ano === anoAtivo.nome)} 
          />
        )}
      </section>
      
      <Rodape />
    </div>
  );
}

export default App;