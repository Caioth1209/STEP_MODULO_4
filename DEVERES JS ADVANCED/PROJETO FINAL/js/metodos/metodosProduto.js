// faz cadastro
$("#formularioCadastroProduto").submit((e)=>{

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let p = new Produto(
        $("#nomeProduto").val().trim(),
        $("#tamanho").val(),
        $("#descricao").val().trim(),
        $("#preco").val(),
        $("#quantidadeVendas").val(),
        $("#produtoStatus").val()
    );

    p.cadastrar(listaProdutos);

    e.preventDefault();
});

// faz edicao
$("#formularioEditarProduto").submit((e)=>{
    
    let listaProdutos = [];

    if(localStorage.getItem("listaProdutos") != null){
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let id = $("#formularioEditarProduto").find("#idEditarProduto").val();

    let nome = $("#formularioEditarProduto").find(".row > .col-md-6 > #nomeProduto").val().trim();

    let tamanho = $("#formularioEditarProduto").find(".row > .col-md-6 > #tamanho").val();

    let descricao = $("#formularioEditarProduto").find(".row > .col-md-6 > #descricao").val().trim();

    let preco = $("#formularioEditarProduto").find(".row > .col-md-6 > #preco").val();

    let quantidadeVendas = $("#formularioEditarProduto").find("#quantidadeVendas").val();

    let status = $("#formularioEditarProduto").find("#produtoStatus").val();

    let p = new Produto(nome, tamanho, descricao, preco, quantidadeVendas, status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    p.editar(listaProdutos, id, listaVendas, "edicaoNormal");

    p.consultarGeral(listaProdutos);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralProdutos").click(()=>{

    // esconde os inputs de consulta de vendas
    escondeInputConsultaVendas("geral");

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let p = new Produto();

    p.consultarGeral(listaProdutos);
})

// faz consulta de mais vendidos
$("#cMaisVendidosProdutos").click(()=>{

    // esconde os inputs de consulta de vendas
    escondeInputConsultaVendas("geral");  

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let p = new Produto();

    p.consultarMaisVendidos(listaProdutos);
})

// faz consulta de menos vendidos
$("#cMenosVendidosProdutos").click(()=>{

     // esconde os inputs de consulta de vendas
     escondeInputConsultaVendas("geral");

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let p = new Produto();

    p.consultarMenosVendidos(listaProdutos);
})


// funcao usada para levar o id ate o formulario de edição
function pegarIdEditarProduto(id) {

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    $("#formularioEditarProduto").find("#idEditarProduto").val(id);

    $("#formularioEditarProduto").find(".row > .col-md-6 > #nomeProduto").val(listaProdutos[id].nome);

    $("#formularioEditarProduto").find(".row > .col-md-6 > #tamanho").val(listaProdutos[id].tamanho);

    $("#formularioEditarProduto").find(".row > .col-md-6 > #descricao").val(listaProdutos[id].descricao);

    $("#formularioEditarProduto").find(".row > .col-md-6 > #preco").val(listaProdutos[id].preco);

    $("#formularioEditarProduto").find("#quantidadeVendas").val(listaProdutos[id].quantidadeVendas);

    $("#formularioEditarProduto").find("#produtoStatus").val(listaProdutos[id].status);

    $("#abrirModalEditarProduto").click();
}
////////////////////////////

function desativarProduto(id) {

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    listaProdutos[id].status = "desativado";
    
    let p = new Produto(listaProdutos[id].nome,
        listaProdutos[id].tamanho,
        listaProdutos[id].descricao,
        listaProdutos[id].preco,
        listaProdutos[id].quantidadeVendas,
        listaProdutos[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    p.editar(listaProdutos, id, listaVendas, "edicaoStatus");

    p.consultarGeral(listaProdutos);
}
////////////////////////////  

function ativarProduto(id) {

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    listaProdutos[id].status = "ativo";

    let p = new Produto(listaProdutos[id].nome,
                        listaProdutos[id].tamanho,
                        listaProdutos[id].descricao,
                        listaProdutos[id].preco,
                        listaProdutos[id].quantidadeVendas,
                        listaProdutos[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    p.editar(listaProdutos, id, listaVendas, "edicaoStatus");

    p.consultarGeral(listaProdutos);
}
////////////////////////////  