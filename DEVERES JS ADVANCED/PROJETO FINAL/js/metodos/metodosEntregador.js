// faz cadastro
$("#formularioCadastroEntregador").submit((e)=>{

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let en = new Entregador(
        $("#nomeEntregador").val(),
        $("#telefoneEntregador").val(),
        $("#cpfEntregador").val(),
        $("#entregadorStatus").val()
    );

    en.cadastrar(listaEntregadores);

    e.preventDefault();
});

// faz edicao
$("#formularioEditarEntregador").submit((e)=>{
    
    let listaEntregadores = [];

    if(localStorage.getItem("listaEntregadores") != null){
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let id = $("#formularioEditarEntregador").find("#idEditarEntregador").val();

    let nome = $("#formularioEditarEntregador").find(".row > .col-md-6 > #nomeEntregador").val();

    let telefone = $("#formularioEditarEntregador").find(".row > .col-md-6 > #telefoneEntregador").val();

    let cpf = $("#formularioEditarEntregador").find(".mb-3 > #cpfEntregador").val();

    let status = $("#formularioEditarEntregador").find("#entregadorStatus").val();

    let en = new Entregador(nome, telefone, cpf, status);

    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    en.editar(listaEntregadores,id,listaVendas, "edicaoNormal");

    en.consultar(listaEntregadores);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralEntregadores").click(()=>{

     // esconde os inputs de consulta de vendas
     escondeInputConsultaVendas("geral");

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let en = new Entregador();

    en.consultar(listaEntregadores);
})


// funcao usada para levar o id ate o formulario de edição
function pegarIdEditarEntregador(id) {

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    $("#formularioEditarEntregador").find("#idEditarEntregador").val(id);

    $("#formularioEditarEntregador").find(".row > .col-md-6 > #nomeEntregador").val(listaEntregadores[id].nome);

    $("#formularioEditarEntregador").find(".row > .col-md-6 > #telefoneEntregador").val(listaEntregadores[id].telefone);

    $("#formularioEditarEntregador").find(".mb-3 #cpfEntregador").val(listaEntregadores[id].cpf);

    $("#formularioEditarEntregador").find("#entregadorStatus").val(listaEntregadores[id].status);

    $("#abrirModalEditarEntregador").click();
}
////////////////////////////

function desativarEntregador(id) {

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    listaEntregadores[id].status = "desativado";

    let e = new Entregador(listaEntregadores[id].nome,
        listaEntregadores[id].telefone,
        listaEntregadores[id].cpf,
        listaEntregadores[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    e.editar(listaEntregadores, id, listaVendas, "edicaoStatus");

    e.consultar(listaEntregadores);
}
////////////////////////////  

function ativarEntregador(id) {

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    listaEntregadores[id].status = "ativo";

    let e = new Entregador(listaEntregadores[id].nome,
        listaEntregadores[id].telefone,
        listaEntregadores[id].cpf,
        listaEntregadores[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    e.editar(listaEntregadores, id, listaVendas, "edicaoStatus");

    e.consultar(listaEntregadores);
}
////////////////////////////  