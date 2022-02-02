let cadastros = [];

function calcularImc(peso, altura){
    
    return (peso/(altura*altura)).toFixed(2).replace(".",",");
}

function calcularPosicaoMediaIdade(cadastros, pessoa){
    let somaIdade = 0;

    cadastros.forEach(e => {
        somaIdade += parseInt(e.idade);
    });

    let media = Math.floor(somaIdade/cadastros.length);

    if (media > pessoa.idade) {
        return "Abaixo da Média";
    }

    if (media < pessoa.idade) {
        return "Acima da Média";
    }

    if (media == pessoa.idade) {
        return "Na Média";
    }
    
}

$("#btVoltarCadastrar").click(()=>{
    $("#formularioCadastro").show();
    $("#btVoltarCadastrar").hide();
    $("#tableCadastros").hide();
})

$("#btConferirCadastros").click(()=>{

    $("#formularioCadastro").hide();
    $("#btVoltarCadastrar").show();
    $("#tableCadastros").show();

    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    let texto = "";

    for(i = 0; i < cadastros.length; i++){

        texto += `<tr> 
                    <td> ${cadastros[i].nome} </td>
                    <td> ${cadastros[i].idade} anos</td>
                    <td> ${cadastros[i].peso} kg</td>
                    <td> ${cadastros[i].altura} m</td>
                    <td> ${calcularImc(parseFloat(cadastros[i].peso.replace(",", ".")), parseFloat(cadastros[i].altura.replace(",", ".")))} </td>
                    <td> ${calcularPosicaoMediaIdade(cadastros, cadastros[i])} </td>
                </tr>`;
    }

    if (texto == "") {
        $("#colunas").html(
            "<tr>" +
                "<td colspan='6' class='text-danger alinharTabela'> Nenhum cadastro até o momento.</tr>" +
            "</tr>"
        );

    } else {
        $("#colunas").html(texto);
    }
})

$("#formularioCadastro").submit((e)=>{

    let nome = $("#nome").val();

    let idade = $("#idade").val();

    let peso = $("#peso").val();

    let altura = $("#altura").val();

    let pessoa = new Pessoa(nome, idade, peso, altura);

    if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    cadastros.push(pessoa);

    localStorage.setItem("cadastros", JSON.stringify(cadastros));

    $("#nome").val("");

    $("#idade").val("");

    $("#peso").val("");

    $("#altura").val("");

    $("#msgExito").show();

    setTimeout(() => {

        $("#msgExito").hide();

    }, 3000);

    e.preventDefault();
})