let nome = prompt("Digite seu nome");

document.writeln(nome);

sessionStorage.setItem('nome', nome);
//            definaItem('nomedoitem', variavel)

class Pessoa{
    nome;
    idade;
    sexo;
}

function Pessoa2(){
    this.nome;
    this.idade;
    this.sexo;
}

let p1 = new Pessoa();

p1.nome = "Juca Bala";
p1.idade = 30;
p1.sexo = "Masculino";

let p2 = new Pessoa2();

p2.nome = "Bela Bala";
p2.idade = 18;
p2.sexo = "Feminino";

sessionStorage.setItem("pessoa1", JSON.stringify(p1));

sessionStorage.setItem("pessoa2", JSON.stringify(p2));