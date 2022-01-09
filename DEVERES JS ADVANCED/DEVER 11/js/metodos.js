let cadastros = [];

function verificaTipoUser(){

    if (typeof localStorage.getItem("tipo") != null) {

        let tipo = localStorage.getItem("tipo");

        if (tipo == "func") {
            $(".func").show();
        } else {
            $(".func").hide();
        }
    } else {
        window.location.replace("index.html");
    }
}

function permissaoAcesso(){

    if (typeof localStorage.getItem("tipo") != null) {

        let tipo = localStorage.getItem("tipo");

        if (tipo == "func") {
            $(".func").show();
        } else {
            window.location.replace("index.html");
        }
    }
}

$("#formLogin").submit((e)=>{

    let login = $("#login");
    let senha = $("#senha");
    let achou = false;

    if (login.val() == "root" && senha.val() == "root123") {
        localStorage.setItem("tipo", "func");
        achou = true;

    } else if (localStorage.getItem("cadastros") != null) {
            
        cadastros = JSON.parse(localStorage.getItem("cadastros"));

        for (i = 0; i < cadastros.length; i++){

            if (login.val() == cadastros[i].login && senha.val() == cadastros[i].senha) {

                achou = true;

                if (cadastros[i].tipo == "cliente") {
                    localStorage.setItem("tipo", "cliente");
                } else {
                    localStorage.setItem("tipo", "func");
                }
            }
        }
    } else {

        $("#msgErro").show();

        setTimeout(() => {

            $("#msgErro").hide();
            
        }, 5000);
    }

    login.val("");
    senha.val("");

    if(achou) {
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

    for (i = 0; i < cadastros.length; i++){

        if (login == cadastros[i].login || senha == cadastros[i].senha) {
            isValid = false;   
        }
    }

    if (login == "root" || senha == "root123") {
        isValid = false;   
    }

    if(isValid){

        let usuario;

        if (sessionStorage.getItem("tipoCad") == "cliente") {

            let tipo = "cliente";

            usuario = new Cliente(nome, login, senha, tipo);

        } else {

            let tipo = "funcionario";

            usuario = new Funcionario(nome, login, senha, tipo, cargo, salario);
        }  
        
        if (localStorage.getItem("cadastros") != null) {
            cadastros = JSON.parse(localStorage.getItem("cadastros"));
        }

        cadastros.push(usuario);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        $("#nome").val("");

        $("#login").val("");

        $("#senha").val("");

        $("#cargo").val("");

        $("#salario").val("");

        $("#msgExito").show();
        $("#msgErro").hide();

        setTimeout(() => {

            $("#msgExito").hide();

        }, 5000);

    } else {

        login.val("");
        senha.val("");

        $("#msgErro").show();
        $("#msgExito").hide();

        setTimeout(() => {

            $("#msgErro").hide();

        }, 5000);
        
    }

    e.preventDefault();
})

async function getCadastros() {

    $(".table").show();
    $("#colunas").html(
        `<tr>
            <td colspan="5" class="text-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </td>
        </tr>`        
    )

    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    return cadastros;
}

$("#cTodos").click( async () =>{

    let cadastros = await getCadastros();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        texto += `<tr> 
                    <td> ${cadastros[i].nome} </td>
                    <td> ${cadastros[i].login} </td>
                    <td> ${cadastros[i].cargo == null ? "Não tem" : cadastros[i].cargo} </td>
                    <td> ${cadastros[i].salario == null ? "Não tem" : cadastros[i].salario} </td>
                    <td> ${cadastros[i].tipo} </td>
                 </tr>`;
    }

    setTimeout(() => {
        
        if (texto == "") {
            $("#colunas").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger alinharTabela'> Nenhuma pessoa cadastrada até o momento.</tr>" +
                "</tr>"
            );

        } else {
            $("#colunas").html(texto);
        }

    }, 3000);

})

$("#consultaNome").click( async () =>{

    let cadastros = await getCadastros();

    let texto = "";

    let nomeProcurado = $("#nomeProcura");

    for(i = 0; i < cadastros.length; i++){

        if (cadastros[i].nome.toUpperCase().indexOf(nomeProcurado.val().toUpperCase()) != -1) {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].login} </td>
                        <td> ${cadastros[i].cargo == null ? "Não tem" : cadastros[i].cargo} </td>
                        <td> ${cadastros[i].salario == null ? "Não tem" : cadastros[i].salario} </td>
                        <td> ${cadastros[i].tipo} </td>
                      </tr>`;   
        }
    }

    setTimeout(() => {
        
        if (texto == "") {
            $("#colunas").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger alinharTabela'> Nenhuma pessoa cadastrada com esse nome até o momento.</tr>" +
                "</tr>"
            );
        } else {
            $("#colunas").html(texto);
        }

        nomeProcurado.val("");

    }, 3000);

})

$("#cCliente").click( async () =>{

    let cadastros = await getCadastros();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (cadastros[i].tipo == "cliente") {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].login} </td>
                        <td> Não tem </td>
                        <td> Não tem </td>
                        <td> ${cadastros[i].tipo} </td>
                      </tr>`;
        }
    }

    setTimeout(() => {
        
        if (texto == "") {
            $("#colunas").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger alinharTabela'> Nenhum cliente cadastrado até o momento.</tr>" +
                "</tr>"
            );
        } else {
            $("#colunas").html(texto);
        }

    }, 3000);

})

$("#cFunc").click( async () =>{

    let cadastros = await getCadastros();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (cadastros[i].tipo == "funcionario") {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].login} </td>
                        <td> ${cadastros[i].cargo} </td>
                        <td> ${cadastros[i].salario} </td>
                        <td> ${cadastros[i].tipo} </td>
                      </tr>`;
        }
    }

    setTimeout(() => {
        
        if (texto == "") {
            $("#colunas").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger alinharTabela'> Nenhum funcionário cadastrado até o momento.</tr>" +
                "</tr>"
            );
        } else {
            $("#colunas").html(texto);
        }

    }, 3000);

})