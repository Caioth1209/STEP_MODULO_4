class User{
    login;
    senha;

    constructor(login, senha){
        this.login = login;
        this.senha = senha;
    }

}

let cadastros = [];

function cadastrarUsuario() {

    let login = document.getElementById("login").value;

    let senha = document.getElementById("senha").value;

    var user = new User(login,senha);

    console.log(user.login);

    if(localStorage.getItem("cadastros") != null){
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    cadastros.push(user);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    document.formCadastro.reset();
    // limpa o formulario
}

function imprimir(){
 
    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }
    
    let texto = "";
    
    for(let i = 0; i < cadastros.length; i++){
        texto += "Login: " + cadastros[i].login + "<br>" + "Senha: " + cadastros[i].senha + "<hr>";
    }
    document.getElementById("resultados").innerHTML = texto;
}

// let array = ['Juca', 'Ana', 'Zeca', 'Cria'];

// let texto = "Uma frase qualquer.";

// let pessoa = {
//     nome: "Bill Gates",
//     email: "bill@microsoft.com"
// };

// sessionStorage.setItem("frase", texto);
// // Armazena até o fechamento do navegador

// localStorage.setItem("array", JSON.stringify(array));
// // Armazena até limpar o histórico do navegador
// // JSON -> conversor de objetos

// localStorage.setItem("pessoa", JSON.stringify(pessoa));

// // sempre que for guardar, STRINGIFY.
// // sempre que for ler, PARSE.

// console.log(sessionStorage.getItem("frase"));

// console.log(JSON.parse(localStorage.getItem("array")));

// console.log(JSON.parse(localStorage.getItem("pessoa")));

