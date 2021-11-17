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

$(document).ready(() => {

    //funcao de cadastro
    $("#formularioCadastro").submit((event)=>{

        
        event.preventDefault();
    })

    // tratando nome
    $("#nome").change(()=>{

        let nome = $("#nome");

        if (nome.val().length < 4) {
            $("#erroNome").css({
                "display": "block"
            })

            nome.val("");

        } else {

            $("#erroNome").css({
                "display": "none"
            })

        }
    })
})