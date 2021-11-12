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

    let login = $("#login").val();
    let senha = $("#senha").val();
    let achou = false;

    if (login == "root" && senha == "root123") {
        localStorage.setItem("tipo", "admin");
        achou = true;

    } else if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));

        for (i = 0; i < cadastros.length; i++){
            if (login == cadastros[i].login && senha == cadastros[i].senha) {
        
                if (cadastros[i].tipo == "Padrão") {
                    localStorage.setItem("tipo", "padrao");
                } else {
                    localStorage.setItem("tipo", "admin");
                }

                localStorage.setItem("logado", JSON.stringify(i));

                achou = true;

                break;
            }
        }
    } 

    document.formLogin.reset();

    if(achou){
        //Variavel para ver se está logado ou nao se
        //alguem tentar entrar em alguma pagina pela url. 
        //Vai ser acessada na function verificaLogin.
        localStorage.setItem("log", "1");
        /////
        window.location.replace("home.html");
    } else {

        $("#msgErro").css("display", "block");

        setTimeout(() => {

            $("#msgErro").css("display", "none");
            
        }, 5000);
    }

}

function cadastrarUsuario() {

    let nome = $("#nome").val();

    let login = $("#login").val();

    let senha = $("#senha").val();

    let tipo = $("#tipo").val();

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

        $("#msgExito").css("display", "block");
        $("#msgErro").css("display", "none");

        setTimeout(() => {

            $("#msgExito").css("display", "none");
                
        }, 5000);

    } else {

        $("#msgExito").css("display", "none");
        $("#msgErro").css("display", "block");

        setTimeout(() => {

            $("#msgErro").css("display", "none");
            
        }, 5000);
        
    }

    document.formCadastro.reset();
    // limpa o formulario
}

function editarUsuario() {

    let index = $("#id").val();

    let nome = $("#nome").val();

    let login = $("#login").val();

    let senha = $("#senha").val();

    let tipo = $("#tipo").val();

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

        $("#msgErro").css("display", "none");
        $("#msgExito").css("display", "block");

        setTimeout(() => {

            $("#msgExito").css("display", "none");
                
        }, 5000);

    } else {

        $("#msgExito").css("display", "none");
        $("#msgErro").css("display", "block");

        setTimeout(() => {

            $("#msgErro").css("display", "none");
            
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
        localStorage.setItem("apagado", "1")
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

        if (localStorage.getItem("apagado") != null) {

            $("#msgExito").css("display", "block");

            $("#usuarios").html("<p class='text-danger'>Nenhum usuário cadastrado até o momento</p>");

            setTimeout(() => {
                $("#msgExito").css("display", "none");
                localStorage.removeItem("apagado");
            }, 3000);
            
        } else {
            $("#usuarios").html("<p class='text-danger'>Nenhum usuário cadastrado até o momento</p>");
        }

    } else {

        if (localStorage.getItem("apagado") != null) {

            $("#msgExito").css("display", "block");

            $("#usuarios").html(texto);

            setTimeout(() => {
                $("#msgExito").css("display", "none");    
                localStorage.removeItem("apagado");        
            }, 3000);
            
        } else {
            $("#usuarios").html(texto);
        }
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

    $("#id").val(index);
    $("#nome").val(cadastros[index].nome);
    $("#login").val(cadastros[index].login);
    $("#senha").val(cadastros[index].senha);
    $("#tipo").val(cadastros[index].tipo);
}

function verificaTipoUser(){

    if (localStorage.getItem("tipo") != null) {
        
        let tipo = localStorage.getItem("tipo");

        if (tipo == "padrao") {
            $("#padrao").css("display", "block");
            $("#admin").css("display", "none");
        } else {
            $("#admin").css("display", "block");
            $("#padrao").css("display", "none");
        }
    } else {
        window.location.replace("index.html");
    }
}

function verificaLogin() {
    if (localStorage.getItem("log") == null) {
        window.location.replace("index.html")
    }
}

function atualizaInformacoes() {
    localStorage.removeItem("logado");
    localStorage.removeItem("tipo");
    localStorage.removeItem("log");
}