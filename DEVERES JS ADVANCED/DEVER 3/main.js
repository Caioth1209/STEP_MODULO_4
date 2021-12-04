class Pessoa{
    nome;
    cpf;
    email;
    dataNasc;

    constructor(nome, cpf, email, dataNasc){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.dataNasc = dataNasc;
    }
}

let cadastros = [];

let mes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

$(document).ready(() => {

    //funcao de cadastro
    $("#formularioCadastro").submit((event)=>{

        if (localStorage.getItem("cadastros") != null) {
            cadastros = JSON.parse(localStorage.getItem("cadastros"));
        }

        let nome = $("#nome").val().trim();

        let cpf = $("#cpf").val().trim();

        let email = $("#email").val().trim();

        let dtNasc = $("#dtNasc").val().trim();

        let aux = new Date(dtNasc);
        dtNasc = (aux.getDate() < 31 ? (aux.getDate() + 1) : 1) + "/" + mes[aux.getMonth()] + 
        "/" + aux.getFullYear();

        let isValid = true;

        for(i = 0; i < cadastros.length; i++){

            if (cpf === cadastros[i].cpf || email === cadastros[i].email) {
                isValid = false;
                break;
            }
        }

        if (isValid) {
            
            let pessoa = new Pessoa(nome, cpf, email, dtNasc);

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

        $("#email").val("");

        $("#emailConfirm").val("");

        $("#dtNasc").val("");

        event.preventDefault();
    })


    $("#formularioCadastro").children().bind("paste", (event)=>{
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

            let regex = /[0-9]/;
            
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

        let regex = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/;

        if (!regex.test(cpf.val().trim())) {

            $("#erroCpf").css({
                "display": "block"
            })

            cpf.val("");

        } else {

            $("#erroCpf").css({
                "display": "none"
            })

        }
    })
    ////////////////////////////

    // tratando email
    $("#email").change(() =>{

        let email = $("#email");

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(email.val().trim())) {

            $("#erroEmail").css({
                "display": "block"
            })

            email.val("");

        } else {

            $("#erroEmail").css({
                "display": "none"
            })

        }
    })
    ////////////////////////////

    // tratando confirmação de email
    $("#emailConfirm").change(() =>{

        let email = $("#email");
        let emailConfirm = $("#emailConfirm");

        if (emailConfirm.val().trim() !== email.val().trim()) {

            $("#erroEmailConfirm").css({
                "display": "block"
            })

            emailConfirm.val("");

        } else {

            $("#erroEmailConfirm").css({
                "display": "none"
            })

        }

    })
    ////////////////////////////

    // tratando data de nascimento
    $("#dtNasc").change(() =>{

        let dtNasc = $("#dtNasc");
        let aux = new Date();
        let dtAtual = aux.getFullYear() + "-" + mes[aux.getMonth()] + "-" + aux.getDate();

        if (dtNasc.val() > dtAtual) {

            $("#erroDataNasc").css({
                "display": "block"
            })

            dtNasc.val("");

        } else {

            $("#erroDataNasc").css({
                "display": "none"
            })

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

            texto = "<div class='p-3'>" +
                        "<p> Nome: " + cadastros[i].nome + "</p>" +
                        "<p> CPF: " + cadastros[i].cpf + "</p>" +
                        "<p> Email: " + cadastros[i].email + "</p>" +
                        "<p> Data de Nascimento: " + cadastros[i].dataNasc + "</p>" +
                    "</div> <hr>";
            
            $("#lista").append(texto);
        }

        if (texto == "") {
            $("#lista").html("<p class='text-danger p-3'> Nenhuma pessoa cadastrada até o momento! </p>");
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