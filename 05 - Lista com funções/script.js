// function addMovie() {
//   let movieFav = document.querySelector('#filme').value
//   let fav = document.createElement("img")
//   fav.src = movieFav
//   document.getElementById('listaFilmes').appendChild(fav)

// }


function addMovie() {
  let movie = document.querySelector('#filme')
  let movieFav = movie.value

  if (movieFav.endsWith('.jpg') || movieFav.endsWith('.png')) {
    filmeNaTela(movieFav)
  } else {
    alert('Este link não funciona, coloque um endereço de imagem correto!!')
  }

  movie.value = ''


}

function filmeNaTela(filme) {
  let listaFilmes = document.querySelector('#listaFilmes')
  let imgFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + imgFilme
}







// https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg