function toggleMode () {
  const html = document.documentElement //pegando o html
  html.classList.toggle("light") // o toggle troca uma classe, removendo quando está presente e adicionando se está ausente. Então, se eu clico no switch, ele adiciona/retira o que está ativo

  // pegar a tag img,  pesquisa o seletor css #profile img
  const img = document.querySelector("#profile img")
  // substituir a imagem quando trocar o modo
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/luiza-avatar2.png");
    img.setAttribute("alt", "foto da luiza escrevendo")
  } else {
    // se tiver sem light mode, mantem o padrão
    img.setAttribute("src", "./assets/luiza-avatar1.png");
    img.setAttribute('alt', 'foto da luiza sorrindo');
  }
}