class Pessoa{
    nome;
    numMatricula;
    cpf;
    telefone;

    constructor(nome, numMatricula, cpf, telefone){
        this.nome = nome;
        this.numMatricula = numMatricula;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

let cadastros = [];

$(document).ready(() => {

    //funcao de cadastro
    $("#formularioCadastro").submit((event)=>{

        if (localStorage.getItem("cadastros") != null) {
            cadastros = JSON.parse(localStorage.getItem("cadastros"));
        }

        let nome = $("#nome").val().trim();

        let numMatricula = $("#numMatricula").val().trim();

        let cpf = $("#cpf").val().trim();

        let telefone = $("#telefone").val().trim();

        let isValid = true;

        for(i = 0; i < cadastros.length; i++){

            if (numMatricula === cadastros[i].numMatricula || cpf === cadastros[i].cpf) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            
            let pessoa = new Pessoa(nome, numMatricula, cpf, telefone);

            cadastros.push(pessoa);

            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            $("#msgErro").css({"display": "none"});
            $("#msgExito").css({"display": "block"});

            setTimeout(() => {

                $("#msgExito").css({"display": "none"});
                
            }, 5000);

        } else {

            $("#msgExito").css({"display": "none"});
            $("#msgErro").css({"display": "block"});

            setTimeout(() => {

                $("#msgErro").css({"display": "none"});
                
            }, 5000);
        }

        $("#nome").val("");

        $("#cpf").val("");

        $("#numMatricula").val("");

        $("#telefone").val("");

        event.preventDefault();
    })

    // tratando nome
    $("#nome").change(()=>{

        let nome = $("#nome");

        if (nome.val().trim().length < 4) {
            $("#erroNome").css({
                "display": "block"
            })

            nome.val("");

        } else {

            // nao pode conter letras
            let regex = /[^A-Za-z ]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNome").css({
                    "display": "block"
                })
    
                nome.val("");

            } else {

                $("#erroNome").css({
                    "display": "none"
                })

            }
        }
    })
    ////////////////////////////

    // tratando cpf
    $("#cpf").change(()=>{

        let cpf = $("#cpf");

        let regexCpf = /\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}/;

        if (!regexCpf.test(cpf.val().trim())) {

            $("#erroCpf").css({
                "display": "block"
            })

            cpf.val("");

        } else {

            if (cpf.val().trim().length != 11) {
                
                if (cpf.val().trim().length != 14) {
                    
                    $("#erroCpf").css({
                        "display": "block"
                    })
        
                    cpf.val("");

                } else {
                    $("#erroCpf").css({
                        "display": "none"
                    })
                }
            } else {
                $("#erroCpf").css({
                    "display": "none"
                })
            }
           
        }
    })
    ////////////////////////////

    // tratando numero de matricula
    $("#numMatricula").change(() =>{

        let matricula = $("#numMatricula");

        let regex = /[A-Za-z]{3}[-][0-9]{4}[-][0-9|A-Za-z]/;

        if (!regex.test(matricula.val().trim())) {

            $("#erroMatricula").css({
                "display": "block"
            })

            matricula.val("");

        } else {

            $("#erroMatricula").css({
                "display": "none"
            })

        }
    })
    ////////////////////////////

    // tratando telefone
    $("#telefone").change(() =>{

        let telefone = $("#telefone");

        let regexNacional = /\(\d{2}\) [9]?\d{4}\-\d{4}$/;
        let regexUSA = /\(\d{3}\) \d{3}\-\d{4}$/;

        if (regexNacional.test(telefone.val().trim())) {

            $("#erroTelefone").css({
                "display": "none"
            })

        } else {

            if (regexUSA.test(telefone.val().trim())) {

                $("#erroTelefone").css({
                    "display": "none"
                })
        
            } else {
                        
                $("#erroTelefone").css({
                    "display": "block"
                })
        
                telefone.val("");
            }
        }


    })
    ////////////////////////////


    // mostra os cadastros
    $("#btVerCadastros").click(() => {

        $("#formularioCadastro").css({"display":"none"});
        $("#cadastros").css({"display":"block"});

        
        if (localStorage.getItem("cadastros") != null) {
            cadastros = JSON.parse(localStorage.getItem("cadastros"));
        }

        let texto = "";

        $("#lista").html(texto);

        for (i = 0; i < cadastros.length; i++) {

            texto += "<tr>" +
                        "<td>" + (i+1) + "</td>" +
                        "<td>" + cadastros[i].nome + "</td>" +
                        "<td>" + cadastros[i].cpf + "</td>" +
                        "<td>" + cadastros[i].numMatricula + "</td>" +
                        "<td>" + cadastros[i].telefone + "</td>" +
                    "</tr>";
            
        }

        if (texto == "") {

            $("#lista").html("<p class='text-danger p-3'> Nenhuma pessoa cadastrada até o momento! </p>");

        } else{
            $("#lista").html(
                "<table class='table table-striped'>" +
                    "<thead>" +
                        "<tr>" +
                            "<th scope='col'>ID</th>" +
                            "<th scope='col'>Nome</th>" +
                            "<th scope='col'>CPF</th>" +
                            "<th scope='col'>Número de Matrícula</th>" +
                            "<th scope='col'>Telefone</th>" +
                        "</tr>" +
                    "</thead>" +

                    "<tbody>" +
                        texto +
                    "</tbody>" +
                "</table>"
            );

        }
    })
    ////////////////////////////

    //mostra o formulario de cadastro
    $("#btVoltar").click(() =>{
        $("#cadastros").css({"display":"none"});
        $("#formularioCadastro").css({"display":"block"});
    })
    ////////////////////////////
})