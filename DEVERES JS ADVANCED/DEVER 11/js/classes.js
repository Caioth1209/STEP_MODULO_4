class Usuario{
    nome;
    login;
    senha;
    tipo;

    constructor(nome, login, senha, tipo){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
        this.tipo = tipo;
    }
}

class Cliente extends Usuario{
    constructor(){
        super();
    }
}

class Funcionario extends Usuario{
    cargo;
    salario;

    constructor(cargo, salario){
        super();
        this.cargo = cargo;
        this.salario = salario;
    }
}