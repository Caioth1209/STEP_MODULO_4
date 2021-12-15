class Pessoa{
    nome;
    telefone;
    email;
    dataNasc;

    constructor(nome, telefone, email, dataNasc){
        this.nome = nome;
        this.telefone = telefone;
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

        let telefone = $("#telefone").val().trim();

        let email = $("#email").val().trim();

        let dtNasc = $("#dtNasc").val().trim();

        let aux = new Date(dtNasc);
        dtNasc = (aux.getDate() < 31 ? (aux.getDate() + 1 < 10 ? "0" + aux.getDate() : aux.getDate()) : "0" + 1) + "/" + (mes[aux.getMonth()] < 10 ? "0" + mes[aux.getMonth()] : mes[aux.getMonth()]) + "/" + aux.getFullYear();

        let isValid = true;

        for(i = 0; i < cadastros.length; i++){

            if (email === cadastros[i].email) {
                if (email != "") {
                    isValid = false;
                    break;
                }
            }
        }

        if (isValid) {
            
            let pessoa = new Pessoa(nome, telefone, email, dtNasc);

            cadastros.push(pessoa);

            localStorage.setItem("cadastros", JSON.stringify(cadastros));

            $("#msgErro").hide();
            $("#msgExito").show();

            setTimeout(() => {

                $("#msgExito").hide();
                
            }, 5000);

        } else {

            $("#msgExito").hide();
            $("#msgErro").show();

            setTimeout(() => {

                $("#msgErro").hide();
                
            }, 5000);
        }

        $("#nome").val("");

        $("#telefone").val("");

        $("#email").val("");

        $("#dtNasc").val("");

        event.preventDefault();
    })

    // tratando nome
    $("#nome").change(()=>{

        let nome = $("#nome");

        if (nome.val().trim().length < 4) {

            $("#erroNome").show();

            setTimeout(() => {
                $("#erroNome").hide();
            }, 5000);

            nome.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNome").show();

                setTimeout(() => {
                    $("#erroNome").hide();
                }, 5000);

                nome.val("");

            } else {

                $("#erroNome").hide();

            }
        }
    })
    ////////////////////////////

   // tratando telefone
   $("#telefone").change(() =>{

    let telefone = $("#telefone");

    let regexNacional = /\(\d{2}\) [9]?\d{4}\-\d{4}$/;

    if (regexNacional.test(telefone.val().trim())) {

        $("#erroTelefone").hide();

    } else {

        $("#erroTelefone").show();

        setTimeout(() => {
            $("#erroTelefone").hide();
        }, 5000);

        telefone.val("");

    }

   })
    ////////////////////////////

    // tratando email
    $("#email").change(() =>{

        let email = $("#email");

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (!regex.test(email.val().trim())) {

            $("#erroEmail").show();

            setTimeout(() => {
                $("#erroEmail").hide();
            }, 5000);

            email.val("");

        } else {

            $("#erroEmail").hide();

        }
    })
    ////////////////////////////


    // tratando data de nascimento
    $("#dtNasc").change(() =>{

        let dtNasc = $("#dtNasc");
        let aux = new Date();
        let dtAtual = aux.getFullYear() + "-" + mes[aux.getMonth()] + "-" + aux.getDate();

        if (dtNasc.val() > dtAtual) {

            $("#erroDataNasc").show();

            setTimeout(() => {
                $("#erroDataNasc").hide();
            }, 5000);

            dtNasc.val("");

        } else {

            $("#erroDataNasc").hide();

        }
    })
    ////////////////////////////

})

async function getPessoas(){

    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    return cadastros;
}

async function imprimePessoasMenoresIdade() {

    let cadastros = await getPessoas();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (idade(cadastros[i].dataNasc) < 18) {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].dataNasc} </td>
                        <td> ${cadastros[i].email} </td>
                        <td> ${cadastros[i].telefone} </td>
                     </tr>`;
        }
    }

    if (texto == "") {
        $("#colunasMenoresIdade").html(
            "<tr>" +
                "<td colspan='4' class='text-danger'> Nenhuma pessoa menor de idade cadastrada até o momento.</tr>" +
            "</tr>"
        );
    } else {
        $("#colunasMenoresIdade").html(texto);
    }
}

async function imprimePessoasMaioresIdade() {

    let cadastros = await getPessoas();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (idade(cadastros[i].dataNasc) >= 18) {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].dataNasc} </td>
                        <td> ${cadastros[i].email} </td>
                        <td> ${cadastros[i].telefone} </td>
                     </tr>`;
        }
    }

    if (texto == "") {
        $("#colunasMaioresIdade").html(
            "<tr>" +
                "<td colspan='4' class='text-danger'> Nenhuma pessoa maior de idade cadastrada até o momento.</tr>" +
            "</tr>"
        );
    } else {
        $("#colunasMaioresIdade").html(texto);
    }
}

async function imprimePessoasSemEmail() {

    let cadastros = await getPessoas();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (cadastros[i].email == "") {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].dataNasc} </td>
                        <td> ${cadastros[i].email} </td>
                        <td> ${cadastros[i].telefone} </td>
                     </tr>`;
        }
    }

    if (texto == "") {
        $("#colunasSemEmail").html(
            "<tr>" +
                "<td colspan='4' class='text-danger'> Nenhuma pessoa sem email cadastrada até o momento.</tr>" +
            "</tr>"
        );
    } else {
        $("#colunasSemEmail").html(texto);
    }
}

async function imprimePessoasSemTel() {

    let cadastros = await getPessoas();

    let texto = "";

    for(i = 0; i < cadastros.length; i++){
        if (cadastros[i].telefone == "") {
            texto += `<tr> 
                        <td> ${cadastros[i].nome} </td>
                        <td> ${cadastros[i].dataNasc} </td>
                        <td> ${cadastros[i].email} </td>
                        <td> ${cadastros[i].telefone} </td>
                     </tr>`;
        }
    }

    if (texto == "") {
        $("#colunasSemTel").html(
            "<tr>" +
                "<td colspan='4' class='text-danger'> Nenhuma pessoa sem telefone cadastrada até o momento.</tr>" +
            "</tr>"
        );
    } else {
        $("#colunasSemTel").html(texto);
    }
}

function idade(data){

    var nasc = new Date(data);
    var dataAtual = new Date();
            
    // analisando os anos
    var idade = dataAtual.getFullYear() - nasc.getFullYear()
    
    //analisando os meses
    if (dataAtual.getMonth() != nasc.getMonth()) {
        
        // verificando a diferença dos meses
        if (dataAtual.getMonth() < nasc.getMonth()) {
            idade--;
        }
    }
    
    else{
        //análise do dia do mês
        if (dataAtual.getDate() < nasc.getDate()) {
            idade--;
        }
    }

    return idade;
}