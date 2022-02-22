// faz cadastro
$("#formularioCadastroCliente").submit((e)=>{

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let c = new Cliente(
        $("#nomeCliente").val().trim(),
        $("#telefoneCliente").val(),
        $("#cpfCliente").val(),
        moment($("#dataNasc").val()).format("DD/MM/YYYY"),
        $("#endereco").val().trim(),
        $("#clienteStatus").val()
    );

    c.cadastrar(listaClientes);

    e.preventDefault();
});

// faz edicao
$("#formularioEditarCliente").submit((e)=>{
    
    let listaClientes = [];

    if(localStorage.getItem("listaClientes") != null){
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let id = $("#formularioEditarCliente").find("#idEditarCliente").val();

    let nome = $("#formularioEditarCliente").find(".row > .col-md-6 > #nomeCliente").val().trim();

    let telefone = $("#formularioEditarCliente").find(".row > .col-md-6 > #telefoneCliente").val();

    let cpf = $("#formularioEditarCliente").find(".row > .col-md-6 > #cpfCliente").val();

    let dataNasc = $("#formularioEditarCliente").find(".row > .col-md-6 > #dataNasc").val();

    let endereco = $("#formularioEditarCliente").find(".mb-3 > #endereco").val().trim();

    let status = $("#formularioEditarCliente").find("#clienteStatus").val();

    let c = new Cliente(nome, telefone, cpf, moment(dataNasc).format("DD/MM/YYYY"), endereco, status);
    
    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    c.editar(listaClientes, id, listaVendas, "edicaoNormal");

    c.consultarGeral(listaClientes);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralClientes").click((e)=>{

    // esconde os inputs de consulta de vendas
    escondeInputConsultaVendas("geral");

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let c = new Cliente();

    c.consultarGeral(listaClientes);
})

// faz consulta de aniversariantes do mes
$("#cNiverClientes").click((e)=>{

     // esconde os inputs de consulta de vendas
     escondeInputConsultaVendas("geral");
     
    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let c = new Cliente();

    c.consultarAniversariantesMes(listaClientes);
})

// faz consulta de compras do ultimo mes
$("#cComprasUltimoMesClientes").click((e)=>{

     // esconde os inputs de consulta de vendas
     escondeInputConsultaVendas("geral");

    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    let c = new Cliente();

    c.consultarComprasUltimoMes(listaVendas);
})


// funcao usada para levar o id ate o formulario de edição
function pegarIdEditarCliente(id) {

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    $("#formularioEditarCliente").find("#idEditarCliente").val(id);

    $("#formularioEditarCliente").find(".row > .col-md-6 > #nomeCliente").val(listaClientes[id].nome);

    $("#formularioEditarCliente").find(".row > .col-md-6 > #telefoneCliente").val(listaClientes[id].telefone);

    $("#formularioEditarCliente").find(".row > .col-md-6 > #cpfCliente").val(listaClientes[id].cpf);

    $("#formularioEditarCliente").find(".row > .col-md-6 > #dataNasc").val(moment(listaClientes[id].dataNasc).format("YYYY-DD-MM"));

    $("#formularioEditarCliente").find(".mb-3 > #endereco").val(listaClientes[id].endereco);

    $("#formularioEditarCliente").find("#clienteStatus").val(listaClientes[id].status);

    $("#abrirModalEditarCliente").click();
}
////////////////////////////

function desativarCliente(id) {

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    listaClientes[id].status = "desativado";

    let c = new Cliente(listaClientes[id].nome,
        listaClientes[id].telefone,
        listaClientes[id].cpf,
        listaClientes[id].dataNasc,
        listaClientes[id].endereco,
        listaClientes[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    c.editar(listaClientes, id, listaVendas, "edicaoStatus");

    c.consultarGeral(listaClientes);
}
////////////////////////////  

function ativarCliente(id) {

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    listaClientes[id].status = "ativo";

    let c = new Cliente(listaClientes[id].nome,
        listaClientes[id].telefone,
        listaClientes[id].cpf,
        listaClientes[id].dataNasc,
        listaClientes[id].endereco,
        listaClientes[id].status);

    let listaVendas = [];

    if(localStorage.getItem("listaVendas") != null){
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    c.editar(listaClientes, id, listaVendas, "edicaoStatus");

    c.consultarGeral(listaClientes);
}
////////////////////////////