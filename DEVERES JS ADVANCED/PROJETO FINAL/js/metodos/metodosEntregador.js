// faz cadastro
$("#formularioCadastroEntregador").submit((e)=>{

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let en = new Entregador(
        $("#nomeEntregador").val(),
        $("#telefoneEntregador").val(),
        $("#cpfEntregador").val()
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

    let en = new Entregador(nome, telefone, cpf);

    en.editar(listaEntregadores,id);

    en.consultar(listaEntregadores);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralEntregadores").click(()=>{

     // esconde os inputs de consulta de vendas
     escondeInputConsultaVendas();

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let en = new Entregador();

    en.consultar(listaEntregadores);
})

//exclui o Entregador
$("#excluirEntregador").click(() => {

    let listaEntregadores = [];

    if(localStorage.getItem("listaEntregadores") != null){
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let id = $("#idExcluirEntregador").val();

    let en = new Entregador();

    en.excluir(listaEntregadores, id);

    en.consultarGeral(listaEntregadores);
    
    $(".btn-close").click();
})
////////////////////////////

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

    $("#abrirModalEditarEntregador").click();
}
////////////////////////////

// funcao usada para levar o id ate o modal de exclusao
function pegarIdExcluirEntregador(id) {
    $("#formularioExcluirEntregador").find("#idExcluirEntregador").val(id);

    $("#abrirModalExcluirEntregador").click(); 
}
////////////////////////////  