function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML = "<p class='exemplo-meta'>Campo de pesquisa está em branco</p>";
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

  console.log(campoPesquisa)

  // Inicializa uma string vazia para armazenar os resultados da pesquisa
  let resultados = "";
  let titulo = "";
  let lancamento = "";
  let descricao = "";
  let genero = "";
  let diretor = "";
  let cast = "";
  let streaming = "";

  // Itera sobre cada item (filme ou série) no array de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    titulo = dado.lancamento.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    genero = dado.genero.toLowerCase()
    diretor = dado.diretor.toLowerCase()
    cast = dado.cast.toLowerCase()
    streaming = dado.streaming.toLowerCase()

    if (titulo.includes(campoPesquisa) || lancamento.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || diretor.includes(campoPesquisa) || cast.includes(campoPesquisa) || streaming.includes(campoPesquisa)) {
      // Constrói o HTML para cada item, formatando as informações do objeto 'dado'
      resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="exemplo-meta">Lançamento</p><p class="descricao-meta">${dado.lancamento}</p>
        <p class="exemplo-meta">Descrição</p><p class="descricao-meta">${dado.descricao}</p>        
        <p class="exemplo-meta">Gênero</p><p class="descricao-meta">${dado.genero}</p>
        <p class="exemplo-meta">Diretor</p><p class="descricao-meta">${dado.diretor}</p>
        <p class="exemplo-meta">Artistas</p><p class="descricao-meta">${dado.cast}</p>
        <p class="exemplo-meta">Duração</p><p class="descricao-meta">${dado.duracao}</p>
        <p class="exemplo-meta">Nota</p><p class="descricao-meta">${dado.rating}</p>
        <p class="exemplo-meta">Onde assistir</p><p class="descricao-meta">${dado.streaming}</p>
        <p class="exemplo-meta">Link</p><a href=${dado.link} target="_blank"> Mais informações </a>
      </div>
                    `;

    }
  }

  if (!resultados) {
    resultados = "<p class='exemplo-meta'>Nenhum filme foi encontrado</p>"
  }
  // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
  section.innerHTML = resultados;
}

// Seleciona o campo de pesquisa
const campoPesquisa = document.getElementById("campo-pesquisa");

// Adiciona um ouvinte de eventos para a tecla Enter
campoPesquisa.addEventListener('keypress', (event) => {
  // Verifica se a tecla pressionada é Enter
  if (event.key === 'Enter') {
    // Chama a função de pesquisa
    pesquisar();
  }
});