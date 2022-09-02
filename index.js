// Escolhi fazer sobre séries:

// Primeira:

const nomeSerie1 = "Game of Thrones"
const genero1 = "Ficção Científica"
const duracaoTemp1 = Number(8)
const anoLancamento1 = Number(2011)
const remake1 = false
const estiloSerie1 = ["Disputa por poder", "guerras épicas", "dragões"]
console.log(`Nome da Série: ${nomeSerie1.toUpperCase()}
Gênero: ${genero1}
Quantidade de Temporadas: ${duracaoTemp1}
Ano de Lançamento: ${anoLancamento1}
É remake de alguma série? ${remake1}
Essa série gira em torno de: ${estiloSerie1}`)

// Segunda:

const nomeSerie2 = "Breaking Bad"
const genero2 = "Ação"
const duracaoTemp2 = Number(5)
const anoLancamento2 = Number(2008)
const remake2 = false
const estiloSerie2 = ["Tráfico", "violência", "drama"]
console.log(`Nome da Série: ${nomeSerie2.toUpperCase()}
Gênero: ${genero2}
Quantidade de Temporadas: ${duracaoTemp2}
Ano de Lançamento: ${anoLancamento2}
É remake de alguma série? ${remake2}
Essa série gira em torno de: ${estiloSerie2}`)

// Terceira:

const nomeSerie3 = "Prinson Break"
const genero3 = "Suspense"
const duracaoTemp3 = Number(4)
const anoLancamento3 = Number(2005)
const remake3 = false
const estiloSerie3 = ["Crimes", "injustiça", "sistema carcerário"]
console.log(`Nome da Série: ${nomeSerie3.toUpperCase()}
Gênero: ${genero3}
Quantidade de Temporadas: ${duracaoTemp3}
Ano de Lançamento: ${anoLancamento3}
É remake de alguma série? ${remake3}
Essa série gira em torno de: ${estiloSerie3}`)

//Quarta:

const nomeSerie4 = "Stranger Things"
const genero4 = "Aventura"
const duracaoTemp4 = Number(4)
const anoLancamento4 = Number(2015)
const remake4 = false
const estiloSerie4 = ["Monstros", "mundo paralelo", "super poderes"]
console.log(`Nome da Série: ${nomeSerie4.toUpperCase()}
Gênero: ${genero4}
Quantidade de Temporadas: ${duracaoTemp4}
Ano de Lançamento: ${anoLancamento4}
É remake de alguma série? ${remake4}
Essa série gira em torno de: ${estiloSerie4}`)

//Quinta:

const nomeSerie5 = "Friends"
const genero5 = "Comédia"
const duracaoTemp5 = Number(10)
const anoLancamento5 = Number(1994)
const remake5 = false
const estiloSerie5 = ["Amigos", "festas", "paixões"]
console.log(`Nome da Série: ${nomeSerie5.toUpperCase()}
Gênero: ${genero5}
Quantidade de Temporadas: ${duracaoTemp5}
Ano de Lançamento: ${anoLancamento5}
É remake de alguma série? ${remake5}
Essa série gira em torno de: ${estiloSerie5}`)

//Cálculo da Média:

const mediaTemp = (8+5+4+4+10) / 5;
console.log("A média das temporadas de todas as séries em conjunto daria:", mediaTemp, "temporadas.");


//Verificação booleanas:

const verificacao = remake1 && remake2 && remake3 && remake4 && remake5;
console.log("Essas séries são remakes:", verificacao)















