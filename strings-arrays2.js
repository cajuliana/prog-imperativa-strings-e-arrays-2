// Array invertido

let nomes = ["carla", "juliana", "andré", "luis", "paulo"];

function imprimirInverso(arr){

    console.log(arr[4]);
    console.log(arr[3]);
    console.log(arr[2]);
    console.log(arr[1]);
    console.log(arr[0]);
    }
    
imprimirInverso(nomes);    

// Array invertido 2

let nomes2 = ["carla", "juliana", "andré", "luis", "paulo"];
let nomesInverso = nomes2.reverse();

console.log(nomesInverso);

// Somar 

function somarArray(){
    return [10, 5, 10]
}
function soma(){
 let soma = somarArray()[0] + somarArray()[1] + somarArray()[2];
 return soma
}
console.log(soma());

//  Array.join()

function join(){
    return ["o", "l", "á"];
}

function joinAtivo(){
    let joinSimulado = join()[0] + join()[1] + join()[2];
    return joinSimulado
}

console.log(joinAtivo());

//  Coleção de filmes

let filmeSeries = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

function filmeLista(){
console.log(filmeSeries[0]);
console.log(filmeSeries[1]);
console.log(filmeSeries[2]);
console.log(filmeSeries[3]);
console.log(filmeSeries[4]);
}

filmeLista()

let filmeSeriesM = ["star wars".toUpperCase(), "matrix".toUpperCase(), "mr. robot".toUpperCase(), "o preço do amanhã".toUpperCase(), "a vida é bela".toUpperCase()];

console.log(filmeSeriesM);

let animacao = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"]

let animacaoM = ["toy story".toUpperCase(), "finding Nemo".toUpperCase(), "kung-fu panda".toUpperCase(), "wally".toUpperCase(), "fortnite".toUpperCase()];

animacaoM.pop()

let games = ["fortnite"];

console.log(animacaoM);

filmeSeriesM.push(...animacaoM)

console.log(filmeSeriesM);

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 4];

function comparar() {
   
    if (asiaScores.length === euroScores.length) {
        return true;
    } else {
        return false;
    }
}
console.log(comparar());