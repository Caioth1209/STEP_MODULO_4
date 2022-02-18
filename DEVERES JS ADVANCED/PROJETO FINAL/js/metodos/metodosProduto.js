// faz cadastro
$("#formularioCadastroProduto").submit((e)=>{

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let p = new Produto(
        $("#nomeProduto").val(),
        $("#tamanho").val(),
        $("#descricao").val(),
        $("#preco").val(),
        $("#quantidadeVendas").val()
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

    let nome = $("#formularioEditarProduto").find(".row > .col-md-6 > #nomeProduto").val();

    let tamanho = $("#formularioEditarProduto").find(".row > .col-md-6 > #tamanho").val();

    let descricao = $("#formularioEditarProduto").find(".row > .col-md-6 > #descricao").val();

    let preco = $("#formularioEditarProduto").find(".row > .col-md-6 > #preco").val();

    let quantidadeVendas = $("#formularioEditarProduto").find("#quantidadeVendas").val();

    let p = new Produto(nome, tamanho, descricao, preco, quantidadeVendas);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    p.editar(listaProdutos, id, listaVendas);

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

//exclui o Produto
$("#excluirProduto").click(() => {

    let listaProdutos = [];

    if(localStorage.getItem("listaProdutos") != null){
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let id = $("#idExcluirProduto").val();

    let p = new Produto();

    p.excluir(listaProdutos, id);

    p.consultarGeral(listaProdutos);
    
    $(".btn-close").click();
})
////////////////////////////

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

    $("#abrirModalEditarProduto").click();
}
////////////////////////////

// funcao usada para levar o id ate o modal de exclusao
function pegarIdExcluirProduto(id) {
    $("#formularioExcluirProduto").find("#idExcluirProduto").val(id);

    $("#abrirModalExcluirProduto").click(); 
}
////////////////////////////  