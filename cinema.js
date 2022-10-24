const catalogo = require('./database/catalogo.json')

const catalogo = require('./database/catalogo.json')

// listar todos os filmes que estão em cartaz (listarTodosOsFilmesEmCartaz)
const listarTodosOsFilmesEmCartaz = () => {
  catalogo.forEach((filme) => console.log(`Nome do filme: ${filme.titulo}`))
}

// buscar um filme específico pelo código dele (buscarFilme) -> parametro: codigo
const buscarFilme = (codigoParametro) => catalogo.find((filme) => filme.codigo == codigoParametro)

// alterar o status de emCartaz (true -> false e se tiver false -> true) 
// (alterarStatusEmCartaz) -> parametro: codigo
const alterarStatusEmCartaz = (codigo, callback) => {
  let filme = callback(codigo)

  if (!filme) {
    console.log("Filme não encontrado!")
    return null;
  }

  filme.emCartaz == true ? 
    filme.emCartaz = false 
  : filme.emCartaz = true;
  // filme.emCartaz = !filme.emCartaz

  return filme;
}

// adicionar um novo filme no nosso catalogo (adicionarFilme) -> 
// parametro: filme: { codigo, titulo, atores, duracao, anoDeLancamento }
const adicionarFilme = (filme) => {
  const { codigo, titulo, atores, duracao, anoDeLancamento } = filme;

  if (!duracao) {
    console.log("Não é possível adicionar um filme sem duração");
    return
  }

  const filmeParaAdicionar ={
      ...filme,
      emCartaz: true
  }
  
  catalogo.push(filmeParaAdicionar);

  return filmeParaAdicionar;
}
