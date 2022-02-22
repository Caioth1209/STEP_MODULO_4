// faz login
$("#formLogin").submit((e)=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }
    
    Caixa.login($("#login").val(), $("#senha").val(), listaCaixas);

    e.preventDefault();
})

// faz cadastro
$("#formularioCadastroCaixa").submit((e)=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa($("#nomeCaixa").val(), $("#login").val(), $("#senha").val(), $("#caixaStatus").val());

    c.cadastrar(listaCaixas);

    e.preventDefault();
});

// faz edicao
$("#formularioEditarCaixa").submit((e)=>{
    
    let listaCaixas = [];

    if(localStorage.getItem("listaCaixas") != null){
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let id = $("#formularioEditarCaixa").find("#idEditarCaixa").val();

    let nome = $("#formularioEditarCaixa").find(".mb-3 > #nomeCaixa").val();

    let login = $("#formularioEditarCaixa").find(".row > .col-md-6 > #login").val();

    let senha = $("#formularioEditarCaixa").find(".row > .col-md-6 > #senha").val();

    let status = $("#formularioEditarCaixa").find("#caixaStatus").val();

    let c = new Caixa(nome, login, senha, status);

    c.editar(listaCaixas,id,"edicaoNormal");

    c.consultar(listaCaixas);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralCaixas").click(()=>{

    // esconde os inputs de consulta de vendas
    escondeInputConsultaVendas("geral");
    
    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa();

    c.consultar(listaCaixas);
})

// funcao usada para levar o id ate o formulario de edição
function pegarIdEditarCaixa(id) {

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    $("#formularioEditarCaixa").find("#idEditarCaixa").val(id);
    $("#formularioEditarCaixa").find(".mb-3 > #nomeCaixa").val(listaCaixas[id].nome);
    $("#formularioEditarCaixa").find(".row > .col-md-6 > #login").val(listaCaixas[id].login);
    $("#formularioEditarCaixa").find(".row > .col-md-6 > #senha").val(listaCaixas[id].senha);
    $("#formularioEditarCaixa").find("#caixaStatus").val(listaCaixas[id].status);

    $("#abrirModalEditarCaixa").click();
}
////////////////////////////


function desativarCaixa(id) {

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    listaCaixas[id].status = "desativado";

    let c = new Caixa(listaCaixas[id].nome,
        listaCaixas[id].login,
        listaCaixas[id].senha,
        listaCaixas[id].status);

    c.editar(listaCaixas, id, "edicaoStatus");

    c.consultar(listaCaixas);

    let caixaLogado = JSON.parse(sessionStorage.getItem("caixaLogado"));
    
    if (id == caixaLogado.id) {
        window.location.replace("index.html");
    }
}
////////////////////////////  

function ativarCaixa(id) {

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    listaCaixas[id].status = "ativo";

    let c = new Caixa(listaCaixas[id].nome,
        listaCaixas[id].login,
        listaCaixas[id].senha,
        listaCaixas[id].status);

    c.editar(listaCaixas, id, "edicaoStatus");

    c.consultar(listaCaixas);
}
////////////////////////////

// funcao que verifica se está logado
function verificaLogin() {
    if (sessionStorage.getItem("logado") == null) {
        window.location.replace("index.html");
    }
}