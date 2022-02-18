class Venda{
    cliente;
    carrinho;
    entregador;
    formaPagamento;
    valorTotal;
    dataVenda;

    constructor(cliente, carrinho, formaPagamento, valorTotal, entregador, dataVenda){
        this.cliente = cliente;
        this.carrinho = carrinho;
        this.formaPagamento = formaPagamento;
        this.valorTotal = valorTotal;
        this.entregador = entregador;
        this.dataVenda = dataVenda;
    }

    cadastrarBalcao(listaVendas){

        listaVendas.push(this);
            
        localStorage.setItem("listaVendas", JSON.stringify(listaVendas));

        $("#escolhaClienteVendaBalcao").val("");
        $("#formaPagamentoBalcao").val("");
        $("#valorTotalVendaBalcao").val("0");
        $("#divQuantidadeProd > input").val("0");

        let listaProdutos = [];

        if (localStorage.getItem("listaProdutos") != null) {
            listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
        }
            
        for(let i = 0; i < listaProdutos.length; i++){

            let quantidadeProdutos = $("#quantidade" + i + "balcao").val();

            if (quantidadeProdutos > 0) {

                // atualiza o numero de vendas dos produtos
                listaProdutos[i].quantidadeVendas += quantidadeProdutos;
    
                localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
            }

        }

        for(let i = 0; i < listaProdutos.length; i++){
            $("#quantidade" + i + "balcao").val("0");
        }

        $("#msgExitoVendaBalcao").show();

        setTimeout(() => {
            $("#msgExitoVendaBalcao").hide();
        }, 3000);
 
    }

    cadastrarEntrega(listaVendas){

        listaVendas.push(this);
            
        localStorage.setItem("listaVendas", JSON.stringify(listaVendas));

        $("#escolhaClienteVendaEntrega").val("");
        $("#escolhaEntregadorVendaEntrega").val("");
        $("#formaPagamentoEntrega").val("");
        $("#valorTotalVendaEntrega").val("0");
        $("#divQuantidadeProd > input").val("0");

        let listaProdutos = [];

        if (localStorage.getItem("listaProdutos") != null) {
            listaProdutos = JSON.parse(localStorage.getItem("listaProdutos"));
        }

        for(let i = 0; i < listaProdutos.length; i++){

            let quantidadeProdutos = $("#quantidade" + i + "entrega").val();

            if (quantidadeProdutos > 0) {
                
                // atualiza o numero de vendas dos produtos
                listaProdutos[i].quantidadeVendas += quantidadeProdutos;
    
                localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
            }

        }

        for(let i = 0; i < listaProdutos.length; i++){
            $("#quantidade" + i + "entrega").val("0");
        }

        $("#msgExitoVendaEntrega").show();

        setTimeout(() => {
            $("#msgExitoVendaEntrega").hide();
        }, 3000);
 
    }

    consultarGeral(listaVendas){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Produtos</th>
                        <th scope="col">Entregador</th>
                        <th scope="col">Pagamento</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Data Venda</th>
                    </tr>
                </thead>
                <tbody id="insereVendas">`;

        for(let i = 0; i < listaVendas.length; i++){

            let produtos = "";

            for(let j = 0; j < listaVendas[i].carrinho.length; j++){
                produtos += 
                            listaVendas[i].carrinho[j].quantidade + "x " +
                            listaVendas[i].carrinho[j].produto.nome + " - " +
                            listaVendas[i].carrinho[j].produto.tamanho + "<br>"
            }

            texto += `<tr>
                        <td>${listaVendas[i].cliente.nome + " | " + listaVendas[i].cliente.cpf}</td>
                        <td>${produtos}</td>
                        <td>${listaVendas[i].entregador == "Não tem entregador" ? listaVendas[i].entregador  : 
                        listaVendas[i].entregador.nome + " | " + listaVendas[i].entregador.cpf}</td>
                        <td>${listaVendas[i].formaPagamento}</td>
                        <td>R$ ${listaVendas[i].valorTotal}</td>
                        <td>${listaVendas[i].dataVenda}</td>
                    </tr>`;   
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Vendas: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaVendas.length == 0) {
            $("#insereVendas").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Nenhuma venda cadastrada até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    consultarPorCliente(listaVendas, listaClientes, idCliente){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Cliente</th>
                        <th scope="col">Produtos</th>
                        <th scope="col">Entregador</th>
                        <th scope="col">Pagamento</th>
                        <th scope="col">Valor Total</th>
                        <th scope="col">Data Venda</th>
                    </tr>
                </thead>
                <tbody id="insereVendas">`;

        let clienteComprou = false;

        for(let i = 0; i < listaVendas.length; i++){

            let produtos = "";

            for(let j = 0; j < listaVendas[i].carrinho.length; j++){
                produtos += 
                            listaVendas[i].carrinho[j].quantidade + "x " +
                            listaVendas[i].carrinho[j].produto.nome + " - " +
                            listaVendas[i].carrinho[j].produto.tamanho + "<br>"
            }

            if (JSON.stringify(listaClientes[idCliente]) == JSON.stringify(listaVendas[i].cliente)) {
                clienteComprou = true;
                texto += `<tr>
                        <td>${listaVendas[i].cliente.nome + " | " + listaVendas[i].cliente.cpf}</td>
                        <td>${produtos}</td>
                        <td>${listaVendas[i].entregador == "Não tem entregador" ? listaVendas[i].entregador  : 
                        listaVendas[i].entregador.nome + " | " + listaVendas[i].entregador.cpf}</td>
                        <td>${listaVendas[i].formaPagamento}</td>
                        <td>R$ ${listaVendas[i].valorTotal}</td>
                        <td>${listaVendas[i].dataVenda}</td>
                    </tr>`;     
            } 
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Vendas: Por cliente");
        $("#tabelaConsulta").html(texto);

        if (!clienteComprou) {
            $("#insereVendas").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Esse cliente não comprou até o momento.</tr>" +
                "</tr>"
            );
        }

    }

}