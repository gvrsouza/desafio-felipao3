//criação da classe
class heroi{
    //metodo da classe
    constructor(nome, idade, tipo){
        //variaveis declaradas
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    //metodo atacar com suas condicionais para atender os requisitos do desafio
    atacar(){
        let ataque;
        if(this.tipo === "mago"){
            ataque = "magia"
        }else
        if(this.tipo === "guerreiro"){
            ataque = "espada"
        }else
        if(this.tipo === "monge"){
            ataque = "artes marciais"
        }else
        if(this.tipo === "ninja"){
            ataque = "shuriken"
        }        
        console.log("O " + this.tipo + " atacou usando " + ataque) 
    }
}

//declaracao e leitura das variaveis
let readlineSync = require('readline-sync');
let nome = readlineSync.question("Qual o nome do herói? => ");
let idade = readlineSync.question("Qual a idade do herói? => ");
let tipo = readlineSync.question("Qual o tipo do herói? [mago/guerreiro/monge/ninja] => ");

//instanciando novo objeto
let novoHeroi = new heroi(nome,idade,tipo)
novoHeroi.atacar()