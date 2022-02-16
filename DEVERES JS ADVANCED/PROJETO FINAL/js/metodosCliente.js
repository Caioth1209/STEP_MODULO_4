// faz cadastro
$("#formularioCadastroCliente").submit((e)=>{

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let c = new Cliente(
        $("#nomeCliente").val(),
        $("#telefoneCliente").val(),
        $("#cpfCliente").val(),
        moment($("#dataNasc").val()).format("D/MM/YYYY"),
        $("#endereco").val()
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

    let nome = $("#formularioEditarCliente").find(".row > .col-md-6 > #nomeCliente").val();

    let telefone = $("#formularioEditarCliente").find(".row > .col-md-6 > #telefoneCliente").val();

    let cpf = $("#formularioEditarCliente").find(".row > .col-md-6 > #cpfCliente").val();

    let dataNasc = $("#formularioEditarCliente").find(".row > .col-md-6 > #dataNasc").val();

    let endereco = $("#formularioEditarCliente").find(".mb-3 #endereco").val();

    let c = new Cliente(nome, telefone, cpf, dataNasc, endereco);

    c.editar(listaClientes,id);

    c.consultarGeral(listaClientes);

    e.preventDefault();
})
////////////////////////////

// faz consulta geral
$("#cGeralClientes").click(()=>{

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let c = new Cliente();

    c.consultar(listaClientes);
})

//exclui o Cliente
$("#excluirCliente").click(() => {

    let listaClientes = [];

    if(localStorage.getItem("listaClientes") != null){
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let id = $("#idExcluirCliente").val();

    let c = new Cliente();

    c.excluir(listaClientes, id);

    c.consultar(listaClientes);
    
    $(".btn-close").click();
})
////////////////////////////

// funcao usada para levar o id ate o formulario de edição
function pegarIdEditarCliente(id) {

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    $("#formularioEditarCliente").find("#idEditarCliente").val(id);
    $("#formularioEditarCliente").find(".mb-3 > #nomeCliente").val(listaClientes[id].nome);
    $("#formularioEditarCliente").find(".row > .col-md-6 > #login").val(listaClientes[id].login);
    $("#formularioEditarCliente").find(".row > .col-md-6 > #senha").val(listaClientes[id].senha);

    $("#abrirModalEditarCliente").click();
}
////////////////////////////

// funcao usada para levar o id ate o modal de exclusao
function pegarIdExcluirCliente(id) {
    $("#formularioExcluirCliente").find("#idExcluirCliente").val(id);

    $("#abrirModalExcluirCliente").click(); 
}
////////////////////////////  