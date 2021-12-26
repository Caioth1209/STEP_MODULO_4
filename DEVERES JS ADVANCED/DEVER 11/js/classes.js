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
    constructor(nome, login, senha, tipo){
        super(nome, login, senha, tipo);
    }

}

class Funcionario extends Usuario{
    cargo;
    salario;

    constructor(nome, login, senha, tipo, cargo, salario){
        super(nome, login, senha, tipo);
        this.cargo = cargo;
        this.salario = salario;
    }
}