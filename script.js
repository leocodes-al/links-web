function toggleMode() {
  const html = document.documentElement
  /*
  if(html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  O evento a cima vai verificar se o html vai está no modo light, se estiver ele remove e vai para o modo escuro, caso nao esteja no modo light, ele add o modo light -- JA O CODIGO ABAIXO, faz o mesmo papel do de cima e é muito mas facil*/

  html.classList.toggle("light")
}
