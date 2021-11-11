let cadastros = [];

class User{
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

function logar() {

    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let achou = false;

    if (login == "root" && senha == "root123") {
        localStorage.setItem("tipo", "admin");
        achou = true;

    } else if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));

        for (i = 0; i < cadastros.length; i++){
            if (login == cadastros[i].login && senha == cadastros[i].senha) {
                achou = true;

                if (cadastros[i].tipo == "Padrão") {
                    localStorage.setItem("tipo", "padrao");
                } else {
                    localStorage.setItem("tipo", "admin");
                }

                localStorage.setItem("logado", JSON.stringify(i));
            }
        }
    } else {

        document.getElementById("msgErro").style.display = "block";

        setTimeout(() => {

            document.getElementById("msgErro").style.display = "none";
            
        }, 5000);
    }

    document.formLogin.reset();

    if(achou){
        window.location.replace("home.html");
    } 

}

function cadastrarUsuario() {

    let nome = document.getElementById("nome").value;

    let login = document.getElementById("login").value;

    let senha = document.getElementById("senha").value;

    let tipo = document.getElementById("tipo").value;

    if(localStorage.getItem("cadastros") != null){
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    let isValid = true;

    for (i = 0; i < cadastros.length; i++){

        if (login == cadastros[i].login || senha == cadastros[i].senha) {
            isValid = false;   
        }
    }

    if (login == "root" || senha == "root123") {
        isValid = false;   
    }

    if(isValid){

        let user = new User(nome,login,senha,tipo);

        cadastros.push(user);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        document.getElementById("msgExito").style.display = "block";
        document.getElementById("msgErro").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgExito").style.display = "none";
                
        }, 5000);

    } else {

        document.getElementById("msgErro").style.display = "block";
        document.getElementById("msgExito").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgErro").style.display = "none";
            
        }, 5000);
        
    }

    document.formCadastro.reset();
    // limpa o formulario
}

function editarUsuario() {

    let index = document.getElementById("id").value;

    let nome = document.getElementById("nome").value;

    let login = document.getElementById("login").value;

    let senha = document.getElementById("senha").value;

    let tipo = document.getElementById("tipo").value;

    if(localStorage.getItem("cadastros") != null){
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }
    
    let isValid = true;

    for (i = 0; i < cadastros.length; i++){

        if (i != index) {
            if ((login == cadastros[i].login || senha == cadastros[i].senha)) {
                isValid = false;   
            }
        }
    }

    if (login == "root" || senha == "root123") {
        isValid = false;   
    }

    if(isValid){

        let user = new User(nome,login,senha,tipo);

        cadastros[index] = user;

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        document.getElementById("msgExito").style.display = "block";
        document.getElementById("msgErro").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgExito").style.display = "none";
                
        }, 5000);

    } else {

        document.getElementById("msgErro").style.display = "block";
        document.getElementById("msgExito").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgErro").style.display = "none";
            
        }, 5000);
        
    }

}

function excluirUsuario() {

    let index = document.getElementById("id").value;

    if(localStorage.getItem("cadastros") != null){
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }
    
    cadastros.splice(index, 1);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    if (localStorage.getItem("logado") == index) {
        window.location.replace("index.html");
    } else {
        window.location.replace("listaUsuarios.html");
    }

}

function imprimir(){
 
    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }
    
    let texto = "";
    
    for(i = 0; i < cadastros.length; i++){

        texto += "<div class='mb-3'>" +
                    "<p> Id: " + i + "</p>" +
                    "<p> Nome: " + cadastros[i].nome + "</p>" +
                    "<p> Login: " + cadastros[i].login + "</p>" +
                    "<p> Senha: " + cadastros[i].senha + "</p>" +
                    "<p> Tipo: " + cadastros[i].tipo + "</p>" +
                    "<a href='administrarUsuario.html'>" +
                       "<button type='button' onclick='pegarUsuario(" + i + ")' class='btn btn-primary'>Administrar usuário</button>" +
                    "</a>" + 
                  "</div> <hr>"

    }

    if (texto == "") {
        document.getElementById("usuarios").innerHTML = "<p class='text-danger'>Nenhum usuário cadastrado até o momento</p>";
    } else {
        document.getElementById("usuarios").innerHTML = texto;
    }
}

function pegarUsuario(index) {
    localStorage.setItem("indexUsuario", JSON.stringify(index));
}

function informacoesUsuario() {

    let index;
    
    if (localStorage.getItem("cadastros") != null && localStorage.getItem("indexUsuario") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
        index = JSON.parse(localStorage.getItem("indexUsuario"));
    }

    document.getElementById("id").value = index;
    document.getElementById("nome").value = cadastros[index].nome;
    document.getElementById("login").value = cadastros[index].login;
    document.getElementById("senha").value = cadastros[index].senha;
    document.getElementById("tipo").value = cadastros[index].tipo;
}

function verificaTipoUser(){

    if (localStorage.getItem("tipo") != null) {
        
        let tipo = localStorage.getItem("tipo");

        if (tipo == "padrao") {
            document.getElementById("padrao").style.display = "block";
            document.getElementById("admin").style.display = "none";
        } else {
            document.getElementById("padrao").style.display = "none";
            document.getElementById("admin").style.display = "block";
        }
    } else {
        window.location.replace("index.html");
    }
}

function atualizaInformacoes() {
    localStorage.removeItem("logado");
    localStorage.removeItem("tipo");
}