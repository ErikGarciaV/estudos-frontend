console.log('hello word');
// comentario de linha
/*
varias
linhas
*/
const nome = "Érik";
let idade = 20;
const namorando = true;

let a = 10;
let b = 5;

console.log(a/b);
let mensagem = "olá, " + nome + "!";


function saudacao(nome) {
    console.log(`olá, ${nome}!`);
}
saudacao('erik');

function soma(a, b){
    return a + b;
}
let resultado = soma(13,5);
console.log(resultado);

if (idade >= 18){
    console.log('você é maior de idade');
} else if (idade < 18){
    console.log('você é menor de idade');
} else {
 console.log('erro');
}
/* for (let i = 0; i <= 5; i++){
    console.log('contando: ' + i);
}
let contador = 0;
while (contador < 3) {
    console.log('loop com while: ' + contador);
    contador++;
} 
let frutas = ['maça', 'banana', 'laranja'];
frutas[1] = 'uva'; // troca banana por uva
frutas.push('abacaxi'); // adciona no final
frutas.unshift('morango'); //adciona no inicio
frutas.pop(); //remove o ultimo
frutas.shift() // remove o primeiro
console.log(frutas.length);
console.log(frutas.includes('uva'));
//console.log(frutas[2]);
//for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
frutas.forEach(function(fruta) {
    console.log('fruta: ' + fruta);
})
*/

let pessoa = {
    nome: 'Érik',
    idade:20,
    profissao: 'Designer'
} ;
console.log(pessoa.nome);

//document.getElementById(''); //por id
//document.querySelector(); //por seletor css (1 que encontrar)
//document.querySelectorAll(); // todos que tenham esse seletor

let titulo = document.getElementById('titulo');
titulo.textContent = "Dia 2";


