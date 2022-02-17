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
                        <th scope="col">Nome</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade de vendas</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereProdutos">`;

        for(let i = 0; i < listaVendas.length; i++){

            texto += `<tr>
                        <td>${listaVendas[i].nome}</td>
                        <td>${listaVendas[i].tamanho}</td>
                        <td>${listaVendas[i].descricao}</td>
                        <td>R$ ${listaVendas[i].preco}</td>
                        <td>${listaVendas[i].quantidadeVendas} vendas</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarProduto(${i})" class='btn btn-primary'>Editar</button>
                            <button type='button' onclick='pegarIdExcluirProduto(${i})' class='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaVendas.length == 0) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Nenhum produto cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    consultarMenosVendidos(listaVendas){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade de vendas</th>
                    </tr>
                </thead>
                <tbody id="insereProdutos">`;
        
        let menosVendidos = false;

        let mediaVendas = 0;
        let totalVendas = 0;
        for(let i = 0; i < listaVendas.length; i++){
            totalVendas += listaVendas[i].quantidadeVendas;
        }

        mediaVendas = (totalVendas/listaVendas.length);

        for(let i = 0; i < listaVendas.length; i++){
        
            if (listaVendas[i].quantidadeVendas < mediaVendas && listaVendas[i].quantidadeVendas != 0) {
                menosVendidos = true;
                texto += `<tr>
                            <td>${listaVendas[i].nome}</td>
                            <td>${listaVendas[i].tamanho}</td>
                            <td>${listaVendas[i].descricao}</td>
                            <td>R$ ${listaVendas[i].preco}</td>
                            <td>${listaVendas[i].quantidadeVendas} vendas</td>
                        </tr>`;   
            }
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Menos Vendidos");
        $("#tabelaConsulta").html(texto);

        if (!menosVendidos) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger text-center'> Nenhum produto com poucas vendas.</tr>" +
                "</tr>"
            );
        }

    }

    consultarMaisVendidos(listaVendas){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Tamanho</th>
                        <th scope="col">Descrição</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Quantidade de vendas</th>
                    </tr>
                </thead>
                <tbody id="insereProdutos">`;
        
        let maisVendidos = false;

        let mediaVendas = 0;
        let totalVendas = 0;
        for(let i = 0; i < listaVendas.length; i++){
            totalVendas += listaVendas[i].quantidadeVendas;
        }

        mediaVendas = (totalVendas/listaVendas.length);

        for(let i = 0; i < listaVendas.length; i++){
        
            if (listaVendas[i].quantidadeVendas >= mediaVendas && listaVendas[i].quantidadeVendas != 0) {
                maisVendidos = true;
                texto += `<tr>
                            <td>${listaVendas[i].nome}</td>
                            <td>${listaVendas[i].tamanho}</td>
                            <td>${listaVendas[i].descricao}</td>
                            <td>R$ ${listaVendas[i].preco}</td>
                            <td>${listaVendas[i].quantidadeVendas} vendas</td>
                        </tr>`;   
            }
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Mais Vendidos");
        $("#tabelaConsulta").html(texto);

        if (!maisVendidos) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger text-center'> Nenhum produto com muitas vendas.</tr>" +
                "</tr>"
            );
        }

    }

}