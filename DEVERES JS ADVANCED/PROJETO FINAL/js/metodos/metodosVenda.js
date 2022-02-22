// faz cadastro de venda no balcao
$("#formularioCadastroVendaBalcao").submit((e)=>{

    if($("#valorTotalVendaBalcao").val().replace(",00", "") == 0){
        $("#msgErroVendaBalcao").show();
        
        setTimeout(() => {
            $("#msgErroVendaBalcao").hide();
        }, 3000);
    } else {
        
        $("#msgErroVendaBalcao").hide();

        let listaVendas = [];

        if (localStorage.getItem("listaVendas") != null) {
            listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
        }

        let listaClientes = [];

        if (localStorage.getItem("listaClientes") != null) {
            listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
        }
        
        let c = new Cliente();

        c = listaClientes[$("#escolhaClienteVendaBalcao").val()];

        let listaProdutos = [];

        if (localStorage.getItem("listaProdutos") != null) {
            listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
        }

        let carrinho = [];

        for(let i = 0; i < listaProdutos.length; i++){

            let quantidadeProdutos = $("#quantidade" + i + "balcao").val();
            
            if (quantidadeProdutos > 0) {
                carrinho.push({
                    quantidade: quantidadeProdutos,
                    produto: listaProdutos[i]
                })
            }

        }

        let v = new Venda(
            c,
            carrinho,
            $("#formaPagamentoBalcao").val(),
            $("#valorTotalVendaBalcao").val(),
            "Não tem entregador",
            moment(new Date()).format("DD/MM/YYYY")
        );

        v.cadastrarBalcao(listaVendas);
    }

    e.preventDefault();
});

// faz cadastro de venda entrega
$("#formularioCadastroVendaEntrega").submit((e)=>{

    if($("#valorTotalVendaEntrega").val().replace(",00", "") == 0){
        $("#msgErroVendaEntrega").show();
        
        setTimeout(() => {
            $("#msgErroVendaEntrega").hide();
        }, 3000);
    } else {
        
        $("#msgErroVendaEntrega").hide();

        let listaVendas = [];

        if (localStorage.getItem("listaVendas") != null) {
            listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
        }

        let listaClientes = [];

        if (localStorage.getItem("listaClientes") != null) {
            listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
        }
        
        let c = new Cliente();

        c = listaClientes[$("#escolhaClienteVendaEntrega").val()];

        let listaEntregadores = [];

        if (localStorage.getItem("listaEntregadores") != null) {
            listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
        }
        
        let en = new Entregador();

        en = listaEntregadores[$("#escolhaEntregadorVendaEntrega").val()];

        let listaProdutos = [];

        if (localStorage.getItem("listaProdutos") != null) {
            listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
        }

        let carrinho = [];

        for(let i = 0; i < listaProdutos.length; i++){

            let quantidadeProdutos = $("#quantidade" + i + "entrega").val();
            
            if (quantidadeProdutos > 0) {
                carrinho.push({
                    quantidade: quantidadeProdutos,
                    produto: listaProdutos[i]
                })
            }

        }

        let v = new Venda(
            c,
            carrinho,
            $("#formaPagamentoEntrega").val(),
            $("#valorTotalVendaEntrega").val(),
            en,
            moment(new Date()).format("DD/MM/YYYY")
        );

        v.cadastrarEntrega(listaVendas);
    }

    e.preventDefault();
});

function addProduto(tipoVenda, id) {

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    switch(tipoVenda){

        case "balcao":{

            let quantidade = parseInt($("#quantidade"+id+"balcao").val());

            quantidade++;

            $("#quantidade"+id+"balcao").val(quantidade);

            let valorTotal = $("#valorTotalVendaBalcao").val();
        
            var valorFormatado = listaProdutos[id].preco.replace('.', '').replace(',', '.');

            $("#valorTotalVendaBalcao").val((parseFloat(valorTotal.replace(",",".")) + 
            parseFloat(valorFormatado)).toFixed(2).replace(".",","));

            break;
        }

        case "entrega":{

            let quantidade = parseInt($("#quantidade"+id+"entrega").val());

            quantidade++;

            $("#quantidade"+id+"entrega").val(quantidade);

            let valorTotal = $("#valorTotalVendaEntrega").val();

            var valorFormatado = listaProdutos[id].preco.replace('.', '').replace(',', '.');

            $("#valorTotalVendaEntrega").val((parseFloat(valorTotal.replace(",",".")) + 
            parseFloat(valorFormatado)).toFixed(2).replace(".",","));

            break;
        }
    }
}

function tirarProduto(tipoVenda, id) {

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    switch(tipoVenda){

        case "balcao":{

            let quantidade = parseInt($("#quantidade"+id+"balcao").val());

            if (quantidade > 0) {

                quantidade--;

                let valorTotal = $("#valorTotalVendaBalcao").val();

                var valorFormatado = listaProdutos[id].preco.replace('.', '').replace(',', '.');

                $("#valorTotalVendaBalcao").val((parseFloat(valorTotal.replace(",",".")) - 
                parseFloat(valorFormatado)).toFixed(2).replace(".",","));
            }

            $("#quantidade"+id+"balcao").val(quantidade);

            break;
        }

        case "entrega":{
            
            let quantidade = parseInt($("#quantidade"+id+"entrega").val());

            if (quantidade > 0) {
                quantidade--;

                let valorTotal = $("#valorTotalVendaEntrega").val();

                var valorFormatado = listaProdutos[id].preco.replace('.', '').replace(',', '.');

                $("#valorTotalVendaEntrega").val((parseFloat(valorTotal.replace(",",".")) - 
                parseFloat(valorFormatado)).toFixed(2).replace(".",","));
            }

            
            $("#quantidade"+id+"entrega").val(quantidade);

            break;
        }
    }
}

// faz consulta geral
$("#cGeralVendas").click((e)=>{

    escondeInputConsultaVendas("geral");

    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    let v = new Venda();

    v.consultarGeral(listaVendas);
})

// clique para aparecer um select.
// nesse select, o user vai escolher um cliente
// para aparecer as vendas dele
$("#cPorClienteVendas").click(()=>{
    escondeInputConsultaVendas("porCliente");
    apareceClientes("consulta");
})

$('#escolhaClienteConsultaVendas').change((e)=>{

    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    let v = new Venda();
    v.consultarPorCliente(listaVendas, listaClientes, e.target.value);
})
//////////////////////////////////////////////////

// clique para aparecer um select.
// nesse select, o user vai escolher um entregador
// para aparecer as vendas dele
$("#cPorEntregadorVendas").click(()=>{
    escondeInputConsultaVendas("porEntregador");
    apareceEntregadores("consulta");
})

$('#escolhaEntregadorConsultaVendas').change((e)=>{
    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    let v = new Venda();

    v.consultarPorEntregador(listaVendas,listaEntregadores, e.target.value);
})
//////////////////////////////////////////////////

// clique para aparecer um select.
// nesse select, o user vai escolher um produto
// para aparecer as vendas dele
$("#cPorProdutoVendas").click(()=>{
    escondeInputConsultaVendas("porProduto");
    apareceProdutos("consulta");
})

$('#escolhaProdutoConsultaVendas').change((e)=>{
    let listaVendas = [];

    if (localStorage.getItem("listaVendas") != null) {
        listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
    }

    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    let v = new Venda();

    v.consultarPorProduto(listaVendas, listaProdutos, e.target.value);
})
//////////////////////////////////////////////////

// clique para aparecer um select.
// nesse select, o user vai escolher um período
// para aparecer as vendas desse período
$("#cPorPeriodoVendas").click(()=>{
    escondeInputConsultaVendas("porPeriodo");
})

$('#consultaPeriodo').click(()=>{

    if($("#escolhaPorPeriodoInicialVendas").val() == "" || $("#escolhaPorPeriodoFinalVendas").val() == ""){
         $("#msgEscolhaPeriodo").show();

         setTimeout(() => {
            $("#msgEscolhaPeriodo").hide();
         }, 3000);
    } else {

        $("#msgEscolhaPeriodo").hide();
        
        let listaVendas = [];

        if (localStorage.getItem("listaVendas") != null) {
            listaVendas = JSON.parse(localStorage.getItem("listaVendas"));
        }

        let v = new Venda();

        let periodoInicial = moment($("#escolhaPorPeriodoInicialVendas").val()).format("DD/MM/YYYY");
        let periodoFinal = moment($("#escolhaPorPeriodoFinalVendas").val()).format("DD/MM/YYYY");

        v.consultarPorPeriodo(listaVendas, periodoInicial, periodoFinal);
    }
})
//////////////////////////////////////////////////

function apareceClientes(tipo) {

    let listaClientes = [];

    if (localStorage.getItem("listaClientes") != null) {
        listaClientes = JSON.parse(localStorage.getItem("listaClientes"));
    }

    switch(tipo){
        case "balcao":{

            $("#escolhaClienteVendaBalcao").html("");

            $("#escolhaClienteVendaBalcao").append(
                `<option selected disabled value="">Escolha um cliente para a venda</option>`
            );

            for (let i = 0; i < listaClientes.length; i++) {
                if (listaClientes[i].status == "ativo") {
                    $("#escolhaClienteVendaBalcao").append(
                        `<option value="${i}">${listaClientes[i].nome + " | " + listaClientes[i].cpf}</option>`
                    );
                } else {
                    $("#escolhaClienteVendaBalcao").append(
                        `<option disabled value="">${listaClientes[i].nome + " | " + listaClientes[i].cpf}</option>`
                    );
                }    
            }
            
            if (listaClientes.length == 0) {
                $("#escolhaClienteVendaBalcao").html(
                    `<option selected disabled value="">Não existem clientes cadastrados!</option>`
                );
            }

            break;
        }

        case "entrega":{

            $("#escolhaClienteVendaEntrega").html("");

            $("#escolhaClienteVendaEntrega").append(
                `<option selected disabled value="">Escolha um cliente para a venda</option>`
            );

            for (let i = 0; i < listaClientes.length; i++) {
                if (listaClientes[i].status == "ativo") {
                    $("#escolhaClienteVendaEntrega").append(
                        `<option value="${i}">${listaClientes[i].nome + " | " + listaClientes[i].cpf}</option>`
                    );
                } else {
                    $("#escolhaClienteVendaEntrega").append(
                        `<option disabled value="">${listaClientes[i].nome + " | " + listaClientes[i].cpf}</option>`
                    );
                }   
            }
            
            if (listaClientes.length == 0) {
                $("#escolhaClienteVendaEntrega").html(
                    `<option selected disabled value="">Não existem clientes cadastrados!</option>`
                );
            }

            break;
        }

        case "consulta":{

            $("#escolhaClienteConsultaVendas").html("");

            $("#escolhaClienteConsultaVendas").append(
                `<option selected disabled value="">Escolha um cliente para a consulta</option>`
            );

            for (let i = 0; i < listaClientes.length; i++) {
                $("#escolhaClienteConsultaVendas").append(
                    `<option value="${i}">${listaClientes[i].nome + " | " + listaClientes[i].cpf}</option>`
                );          
            }
            
            if (listaClientes.length == 0) {
                $("#escolhaClienteConsultaVendas").html(
                    `<option selected disabled value="">Não existem clientes cadastrados!</option>`
                );
            }

            break;
        }
    }

}

function apareceEntregadores(tipo) {

    let listaEntregadores = [];

    if (localStorage.getItem("listaEntregadores") != null) {
        listaEntregadores = JSON.parse(localStorage.getItem("listaEntregadores"));
    }

    switch(tipo){

        case "entrega":{
            $("#escolhaEntregadorVendaEntrega").html("");

            $("#escolhaEntregadorVendaEntrega").append(
                `<option selected disabled value="">Escolha um entregador para a venda</option>`
            );
        
            for (let i = 0; i < listaEntregadores.length; i++) {
                if (listaEntregadores[i].status == "ativo") {
                    $("#escolhaEntregadorVendaEntrega").append(
                        `<option value="${i}">${listaEntregadores[i].nome + " | " + listaEntregadores[i].cpf}</option>`
                    );   
                } else {
                    $("#escolhaEntregadorVendaEntrega").append(
                        `<option disabled value="">${listaEntregadores[i].nome + " | " + listaEntregadores[i].cpf}</option>`
                    ); 
                }  
            }
            
            if (listaEntregadores.length == 0) {
                $("#escolhaEntregadorVendaEntrega").html(
                    `<option selected disabled value="">Não existem entregadores cadastrados!</option>`
                );
            }

            break;
        }

        case "consulta":{

            $("#escolhaEntregadorConsultaVendas").html("");

            $("#escolhaEntregadorConsultaVendas").append(
                `<option selected disabled value="">Escolha um entregador para a consulta</option>`
            );

            for (let i = 0; i < listaEntregadores.length; i++) {
                
                $("#escolhaEntregadorConsultaVendas").append(
                    `<option value="${i}">${listaEntregadores[i].nome + " | " + listaEntregadores[i].cpf}</option>`
                );
                
            }
            
            if (listaEntregadores.length == 0) {
                $("#escolhaEntregadorConsultaVendas").html(
                    `<option selected disabled value="">Não existem entregadores cadastrados!</option>`
                );
            }

            break;
        }
    }

}

function apareceProdutos(tipo) {
    
    let listaProdutos = [];

    if (localStorage.getItem("listaProdutos") != null) {
        listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
    }

    switch(tipo){

        case "balcao":{

            $("#listaProdutosVendaBalcao").html("");

            let cont = 0;

            for (let i = 0; i < listaProdutos.length; i++) {

                if (listaProdutos[i].status == "ativo") {
                    $("#msgNaoExistemProdutosBalcao").hide();
                
                    $("#listaProdutosVendaBalcao").append(
                        `<div class="escolhaProdutos p-3">
                            <div class="divNomeProd">
                                <input type="text" id="${i}" readonly value="${"R$" + listaProdutos[i].preco + " - " + listaProdutos[i].nome + " - " + listaProdutos[i].tamanho}">
                            </div>
                
                            <div class="divQuantidadeProd">
                                <button type="button" onclick="tirarProduto('balcao', ${i})" class="btn btn-danger">-</button>
                                <input type="text" readonly value="0" id="quantidade${i}balcao"> 
                                <button type="button" onclick="addProduto('balcao', ${i})" class="btn btn-success">+</button>                       
                            </div>
                        </div>`
                    );
                    
                    cont++;
                }                 
            }
            
            
            if (listaProdutos.length == 0 || cont == 0) {
                $("#msgNaoExistemProdutosBalcao").show();
            }

            break;
        }

        case "entrega":{

            $("#listaProdutosVendaEntrega").html("");

            let cont = 0;

            for (let i = 0; i < listaProdutos.length; i++) {

                if (listaProdutos[i].status == "ativo") {
                    $("#msgNaoExistemProdutosEntrega").hide();
                
                    $("#listaProdutosVendaEntrega").append(
                        `<div class="escolhaProdutos p-3">
                            <div class="divNomeProd">
                                <input type="text" id="${i}" readonly value="${"R$" + listaProdutos[i].preco + " - " + listaProdutos[i].nome + " - " + listaProdutos[i].tamanho}">
                            </div>
                
                            <div class="divQuantidadeProd">
                                <button type="button" onclick="tirarProduto('entrega', ${i})" class="btn btn-danger">-</button>
                                <input type="text" readonly value="0" id="quantidade${i}entrega"> 
                                <button type="button" onclick="addProduto('entrega', ${i})" class="btn btn-success">+</button>                       
                            </div>
                        </div>`
                    );
                    cont++;
                } 
            }
        
            if (listaProdutos.length == 0 || cont == 0) {
                $("#msgNaoExistemProdutosEntrega").show();
            }

            break;
        }

        case "consulta":{

            $("#escolhaProdutoConsultaVendas").html("");

            $("#escolhaProdutoConsultaVendas").append(
                `<option selected disabled value="">Escolha um produto para a consulta</option>`
            );

            for (let i = 0; i < listaProdutos.length; i++) {
                $("#escolhaProdutoConsultaVendas").append(
                    `<option value="${i}">${listaProdutos[i].nome + " - " + listaProdutos[i].tamanho}</option>`
                );    
            }
            
            if (listaProdutos.length == 0) {
                $("#escolhaProdutoConsultaVendas").html(
                    `<option selected disabled value="">Não existem produtos cadastrados!</option>`
                );
            }

            break;
        }
    }

}

function escondeInputConsultaVendas(local){

    switch (local) {

        case "geral":{
            $(".divCPorClienteVendas").hide();
            $(".divCPorPeriodoVendas").hide();
            $(".divCPorEntregadorVendas").hide();
            $(".divCPorProdutoVendas").hide();
            break;
        };

        case "porCliente":{
            $(".divCPorClienteVendas").show();
            $(".divCPorPeriodoVendas").hide();
            $(".divCPorEntregadorVendas").hide();
            $(".divCPorProdutoVendas").hide();
            break;
        };

        case "porPeriodo":{
            $(".divCPorPeriodoVendas").show();
            $(".divCPorClienteVendas").hide();
            $(".divCPorEntregadorVendas").hide();
            $(".divCPorProdutoVendas").hide();
            break;
        };

        case "porEntregador":{
            $(".divCPorEntregadorVendas").show();
            $(".divCPorClienteVendas").hide();
            $(".divCPorPeriodoVendas").hide();
            $(".divCPorProdutoVendas").hide();
            break;
        };

        case "porProduto":{
            $(".divCPorProdutoVendas").show();
            $(".divCPorClienteVendas").hide();
            $(".divCPorPeriodoVendas").hide();
            $(".divCPorEntregadorVendas").hide();
            break;
        };

    }
}
