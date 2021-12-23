let cadastros = [];

$("#formLogin").submit((e)=>{

    let login = $("#login");
    let senha = $("#senha");
    let achou = false;

    if (login.val() == "root" && senha.val() == "root123") {
        localStorage.setItem("tipo", "funcionario");
        achou = true;

    }

    // Ler o arquivo dat de cadastros e ver se tem o login e senha
    //  else if (localStorage.getItem("cadastros") != null) {
            
    //     cadastros = JSON.parse(localStorage.getItem("cadastros"));

    //     for (i = 0; i < cadastros.length; i++){

    //         if (login == cadastros[i].login && senha == cadastros[i].senha) {
    //             achou = true;

    //             if (cadastros[i].tipo == "Cliente") {
    //                 localStorage.setItem("tipo", "cliente");
    //             } else {
    //                 localStorage.setItem("tipo", "funcionario");
    //             }

    //             localStorage.setItem("logado", JSON.stringify(i));
    //         }
    //     }
    // }
     else {

        $("#msgErro").show();

        setTimeout(() => {

            $("#msgErro").hide();
            
        }, 5000);
    }

    login.val("");
    senha.val("");

    if(achou){
        window.location.replace("inicio.html");
    } 

    e.preventDefault();
})

$("#formularioCadastro").submit((e)=>{

    let nome = $("#nome").val();

    let login = $("#login").val();

    let senha = $("#senha").val();

    let cargo = $("#cargo").val();

    let salario = $("#salario").val();

    let isValid = true;

    // for (i = 0; i < cadastros.length; i++){

    //     if (login == cadastros[i].login || senha == cadastros[i].senha) {
    //         isValid = false;   
    //     }
    // }

    if (login == "root" || senha == "root123") {
        isValid = false;   
    }

    if(isValid){

        let usuario;

        if (sessionStorage.getItem("tipoCad") == "cliente") {

            let tipo = "cliente";

            usuario = new Cliente(nome, login, senha, tipo);

        } else {

            let tipo = "func";

            usuario = new Funcionario(nome, login, senha, tipo, cargo, salario);
        }

        salvar(usuario);        

        // cadastros.push(user);

        // localStorage.setItem("cadastros", JSON.stringify(cadastros));

        $("#msgExito").show();
        $("#msgErro").hide();

        setTimeout(() => {

            $("#msgExito").hide();

        }, 5000);

    } else {

        $("#msgErro").show();
        $("#msgExito").hide();

        setTimeout(() => {

            $("#msgErro").hide();

        }, 5000);
        
    }

    e.preventDefault();
})

function salvar(usuario) {

    let texto = "";

    if (sessionStorage.getItem("tipoCad") == "cliente") {
        texto = `${usuario.tipo} # ${usuario.nome} # ${usuario.login} #
        ${usuario.senha} # x # x`;

    } else {
        texto = `${usuario.tipo} # ${usuario.nome} # ${usuario.login} #
        ${usuario.senha} # ${usuario.cargo} # ${usuario.salario}`;
    }

    const fs = require("fs");

    fs.writeFile("sample.txt", texto, (err) => {
        if (err){
            throw err.message();
        };
        console.log("Completed!");
    });
    
}