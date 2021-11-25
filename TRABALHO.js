var prompt = require("prompt-sync")();

// ---------- 
var jogos = []
var genero = []
var preco = []

function titulo(mensa) {
 console.log()
 console.log(mensa)
 console.log("-".repeat(30))
}

// ---------- Adicionar Jogos ----------
function adicionar() {
 titulo("Adicionar Jogos")
 var x = prompt("Digite o nome do jogo: ")
 var y = prompt("Gênero do jogo: ")
 var w = parseInt(prompt("Digite o preço do jogo: "))
 jogos.push(x)
 genero.push(y)
 preco.push(w)
 console.log("Jogo adicionado com sucesso!")
}

// ---------- remover Jogos ----------
function remover() {
 titulo("Remover Jogos")
 var x = prompt("Digite o nome do jogo: ")
 var y = jogos.indexOf(x)
 if (y == -1) {
  console.log("Jogo não encontrado!")
 } else {
  jogos.splice(y, 1)
  preco.splice(y, 1)
  console.log("Jogo removido com sucesso!")
 }
}

// ---------- Pesquisar Jogos ----------
function pesquisar(){

 titulo("Pesquisar Jogos")

 var pesquisar = prompt("Pesquisar: ")

 var existe = 0

 // ----------- Pesquisando por nomes -----------
 for(i = 0; i < jogos.length; i++){
   if(jogos[i].toLowerCase() == pesquisar){
    console.log(
     `Jogo: ${jogos[i]} | Gênero: ${genero[i].padEnd(2)} | Preço R$: ${preco[i].toFixed(2)}`
     )
   existe = 1
   }
 } 

 //---------- Pesquisando por gênero ----------
 for(i = 0; i < genero.length; i++){
   if(genero[i].toLowerCase() == pesquisar){
    console.log(
     `Jogo: ${jogos[i].padEnd(2)} - Gênero: ${genero[i].padEnd(2)} - Preço R$: ${preco[i].toFixed(2)}`)
   existe = 1
   }
 }

 //--------- Pesquisado pelo Preco ----------
 for(i = 0; i < preco.length; i++){
   if(preco[i] == pesquisar){
    console.log(
    `Jogo: ${jogos[i].padEnd(2)} | Gênero: ${genero[i].padEnd(2)} | Preço R$: ${preco[i].toFixed(2)}`)
   existe = 1
   }
 }

 if(existe == 0){
   console.log(`Jogo não Encontrado`)
 }

}

// ---------- Listar Jogos ----------
function listar(){
 titulo("Listar Jogos")
 
 var contador = 0
 var precoTotal = 0

 for(i = 0; i < jogos.length; i++){
   console.log(
   `Jogo: ${jogos[i].padEnd(2)} | Gênero: ${genero[i].padEnd(2)} | Preço R$: ${preco[i].toFixed(2)}`)
    contador++
    precoTotal += preco[i]
   }
    
   // ---------- Dados dos Jogos que estao na lista ----------
   console.log()
   console.log()
   console.log('='.repeat(40))
   console.log(`Quantidades de Jogos: ${contador} | Preço total R$: ${precoTotal.toFixed(2)}`)
   console.log('='.repeat(40))
}

// ----------------------------------- Programa Principal -----------------------------------
do {
titulo("Lista de Jogos");
console.log("1 - Adicionar Jogo");
console.log("2 - Remover Jogo");
console.log("3 - Pesquisar Jogos")
console.log("4 - Listar Jogos");
console.log("5 - Sair");
console.log("-".repeat(30))
console.log()
var opcao = prompt("Digite a opção desejada: ");
if (opcao == 1) {
adicionar();
} else if (opcao == 2) {
remover();
} else if (opcao == 3) {
pesquisar();
} else if (opcao == 4) {
listar();
} else if (opcao == 5) {
console.log("Saindo...");
break;
} else {
console.log("Opção inválida!");
}
} while (true) // Fim do programa
