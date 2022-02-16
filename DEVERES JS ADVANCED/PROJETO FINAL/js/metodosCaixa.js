// faz cadastro
$("#formularioCadastroCaixa").submit((e)=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa($("#nomeCaixa").val(), $("#login").val(), $("#senha").val());

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

    let c = new Caixa(nome, login, senha);

    c.editar(listaCaixas,id);

    c.consultar(listaCaixas);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralCaixas").click(()=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa();

    c.consultar(listaCaixas);
})

//exclui o caixa
$("#excluirCaixa").click(() => {

    let listaCaixas = [];

    if(localStorage.getItem("listaCaixas") != null){
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let id = $("#idExcluirCaixa").val();

    let c = new Caixa();

    c.excluir(listaCaixas, id);

    $(".btn-close").click();
})
////////////////////////////

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

    $("#abrirModalEditarCaixa").click();
}
////////////////////////////

// funcao usada para levar o id ate o modal de exclusao
function pegarIdExcluirCaixa(id) {

    $("#formularioExcluirCaixa").find("#idExcluirCaixa").val(id);

    $("#abrirModalExcluirCaixa").click(); 

}
////////////////////////////  