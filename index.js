// Escolhi fazer sobre séries:

// Primeira:

const serie1 = {
Nome: "Game of Thrones",
Gênero: "Ficção Científica",
Temporadas: Number(8),
Lançamento: Number(2011),
Remake: true,
Estilo: "Disputa por poder,guerras épicas,dragões"}

// console.log("Nome da Série:", serie1.nomeSerie.toUpperCase(),
// "Gênero:", serie1.genero,
// "Quantidade de Temporadas:", serie1.duracaoTemp,
// "Ano de Lançamento:", serie1.anoLancamento,
// "É remake de alguma série?", serie1.remake,
// "Essa série gira em torno de:", serie1.estiloSerie)

for(let i in serie1){
  console.log(i,serie1[i])}

const funcao = (objeto) => {
    const string = []
  string.push(objeto.Estilo)
 return string
 }
console.log(funcao(serie1))



// Segunda:

const serie2 = {
Nome: "Breaking Bad",
Gênero: "Ação",
Temporadas: Number(5),
Lançamento: Number(2008),
Remake: true,
Estilo: "Tráfico, violência,drama"}

// console.log("Nome da Série:", serie2.nomeSerie.toUpperCase(),
// "Gênero:", serie2.genero,
// "Quantidade de Temporadas:", serie2.duracaoTemp,
// "Ano de Lançamento:", serie2.anoLancamento,
// "É remake de alguma série?", serie2.remake,
// "Essa série gira em torno de:", serie2.estiloSerie)

for(let i in serie2){
  console.log(i,serie2[i])}

  const funcao2 = (objeto) => {
    const string = []
    string.push(objeto.Estilo)
    return string
  }
  
  console.log(funcao(serie2))



// Terceira:

const serie3 = {
Nome: "Prinson Break",
Gênero: "Suspense",
Temporadas: Number(4),
Lançamento: Number(2005),
Remake: true,
Estilo: "Crimes,injustiça, sistema carcerário"}

// console.log("Nome da Série:", serie3.nomeSerie.toUpperCase(),
// "Gênero:", serie3.genero,
// "Quantidade de Temporadas:", serie3.duracaoTemp,
// "Ano de Lançamento:", serie3.anoLancamento,
// "É remake de alguma série?", serie3.remake,
// "Essa série gira em torno de:", serie3.estiloSerie)

for(let i in serie3){
  console.log(i,serie3[i])}


  const funcao3 = (objeto) => {
    const string = []
    string.push(objeto.Estilo)
    return string
  }
  
  console.log(funcao(serie3))





//Quarta:

const serie4 = {
Nome: "Stranger Things",
Gênero: "Aventura",
Temporadas: Number(4),
Lançamento: Number(2015),
Remake: true,
Estilo: "Monstros, mundo paralelo, super poderes"}

// console.log("Nome da Série:", serie4.nomeSerie.toUpperCase(),
// "Gênero:", serie4.genero,
// "Quantidade de Temporadas:", serie4.duracaoTemp,
// "Ano de Lançamento:", serie4.anoLancamento,
// "É remake de alguma série?", serie4.remake,
// "Essa série gira em torno de:", serie4.estiloSerie)

for(let i in serie4){
  console.log(i,serie4[i])}


  const funcao4 = (objeto) => {
    const string = []
    string.push(objeto.Estilo)
    return string
  }
  
  console.log(funcao(serie4))






//Quinta:

const serie5 = {
Nome: "Friends",
Gênero: "Comédia",
Temporadas: Number(10),
Lançamento: Number(1994),
Remake: true,
Estilo: "Amigos, festas, paixões"}

// console.log("Nome da Série:", serie5.nomeSerie.toUpperCase(),
// "Gênero:", serie5.genero,
// "Quantidade de Temporadas:", serie5.duracaoTemp,
// "Ano de Lançamento:", serie5.anoLancamento,
// "É remake de alguma série?", serie5.remake,
// "Essa série gira em torno de:", serie5.estiloSerie)

for(let i in serie5){
  console.log(i,serie5[i])}

  const funcao5 = (objeto) => {
    const string = []
    string.push(objeto.Estilo)
    return string
  }
  
  console.log(funcao(serie5))





//Cálculo da Média:

const mediaTemp = (8+5+4+4+10) / 5;
console.log("A média das temporadas de todas as séries em conjunto daria:", mediaTemp, "temporadas.");


//Verificação booleanas:

const verificacao = serie1.Remake && serie2.Remake && serie3.Remake && serie4.Remake && serie5.Remake;
console.log("Essas séries são remakes:", verificacao)

let arraySeries = []

if(serie1.Remake === true){
  arraySeries.push(serie1.Nome)
} else {
  // alert("Item não será adicionado ao array")
}

if(serie2.Remake === true){
  arraySeries.push(serie2.Nome)
} else {
  // alert("Item não será adicionado ao array")
}

if(serie3.Remake === true){
  arraySeries.push(serie3.Nome)
} else {
  // alert("Item não será adicionado ao array")
}

if(serie4.Remake === true){
  arraySeries.push(serie4.Nome)
} else {
  // alert("Item não será adicionado ao array")
}

if(serie5.Remake === true){
  arraySeries.push(serie5.Nome)
} else {
  // alert("Item não será adicionado ao array")
}
console.log(arraySeries)


const button = document.getElementById("Buscar")

button.addEventListener("click", buscaPorNome)

const buscaPorNome = (todasAsSeries, string) =>{
  console.log(todasAsSeries)
  console.log(string)
  const resultado = todasAsSeries.filter((objeto) => {
    return objeto.Nome.toLowerCase() === string
  })
  if(resultado.length > 0){
    console.log(resultado)
  } else {
    alert("Nenhum item encontrado")
  }
}

console.log(buscaPorNome(todasAsSeries, "Game of Thrones"))

const busca = () => {
  const input = document.querySelector(".input")
  const valor = input.value.toLowerCase()
  const listaSeries = document.querySelector(".arraySeries").querySelectorAll("section")
  for (let i of listaSeries ) {
    if(i.className === valor){
      return i.innerHTML
    }
  }
  alert("Não foi encontrada nenhuma série")
  document.querySelector(".input").value=""
}







// const botao = document.getElementById("Buscar")

// const funcaoGeral = (array, string) => {
//   console.log(array)
//   console.log(string)
  
//       for(string of array){
//    for(let i in array){
//     console.log(i)
//        if("i" === string){
//          return i
         
//      } else {
//        return("Não foi encontrado nenhum item")
//      }
     
//   //  }
//   }
// }}
// console.log(funcaoGeral(array, "Game of Thrones"))


//  const selecionaFilmes = (filmes) => {
//   const novaSelecao = arraySeries.filter((item) => {
//     return (filmes === item)
//   })
//   console.log(novaSelecao)
//  }


 



// document.getElementById("Buscar").onclick = dofunction (funcaoGeral) 



// {
//   for(string of arraySeries){
//     for(let i in arraySeries){
//          if("i" === string){
//            return i
//        } else {
//          return("Não foi encontrado nenhum item")
//        }
  
//     }
//   }

//  };






// const funcaoGeral = (arraySeries, string) => {
//   for(nome of arraySeries){
//   console.log("entrou no for nome")
// //  for(let i in nome){
// //   console.log("i", i)
//    if(nome === string){
//     console.log("nome", nome)
//      return nome
//    } else {
//      return("Não foi encontrado nenhum item")
//    }
// //  }
// }
 
