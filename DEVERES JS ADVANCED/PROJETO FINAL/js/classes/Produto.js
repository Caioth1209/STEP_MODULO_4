class Produto{
    nome;
    tamanho;
    descricao;
    preco;
    quantidadeVendas;

    constructor(nome, tamanho, descricao, preco, quantidadeVendas){
        this.nome = nome;
        this.tamanho = tamanho;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidadeVendas = quantidadeVendas;
    }

    cadastrar(listaProdutos){

        listaProdutos.push(this);
            
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

        $("#nomeProduto").val("");
        $("#preco").val("");
        $("#tamanho").val("");
        $("#descricao").val("");

        $("#msgExitoProduto").show();

        setTimeout(() => {
            $("#msgExitoProduto").hide();
        }, 3000);
 
    }

    consultarGeral(listaProdutos){

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

        for(let i = 0; i < listaProdutos.length; i++){
            texto += `<tr>
                        <td>${listaProdutos[i].nome}</td>
                        <td>${listaProdutos[i].tamanho}</td>
                        <td>${listaProdutos[i].descricao}</td>
                        <td>R$ ${listaProdutos[i].preco}</td>
                        <td>${listaProdutos[i].quantidadeVendas} vendas</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarProduto(${i})" class='btn btn-primary'>Editar</button>
                            <button type='button' onclick='pegarIdExcluirProduto(${i})' class='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaProdutos.length == 0) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Nenhum produto cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    consultarMenosVendidos(listaProdutos){

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
        for(let i = 0; i < listaProdutos.length; i++){
            totalVendas += listaProdutos[i].quantidadeVendas;
        }

        mediaVendas = (totalVendas/listaProdutos.length);

        for(let i = 0; i < listaProdutos.length; i++){
        
            if (listaProdutos[i].quantidadeVendas < mediaVendas && listaProdutos[i].quantidadeVendas != 0) {
                menosVendidos = true;
                texto += `<tr>
                            <td>${listaProdutos[i].nome}</td>
                            <td>${listaProdutos[i].tamanho}</td>
                            <td>${listaProdutos[i].descricao}</td>
                            <td>R$ ${listaProdutos[i].preco}</td>
                            <td>${listaProdutos[i].quantidadeVendas} vendas</td>
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

    consultarMaisVendidos(listaProdutos){

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
        for(let i = 0; i < listaProdutos.length; i++){
            totalVendas += listaProdutos[i].quantidadeVendas;
        }

        mediaVendas = (totalVendas/listaProdutos.length);

        for(let i = 0; i < listaProdutos.length; i++){
        
            if (listaProdutos[i].quantidadeVendas >= mediaVendas && listaProdutos[i].quantidadeVendas != 0) {
                maisVendidos = true;
                texto += `<tr>
                            <td>${listaProdutos[i].nome}</td>
                            <td>${listaProdutos[i].tamanho}</td>
                            <td>${listaProdutos[i].descricao}</td>
                            <td>R$ ${listaProdutos[i].preco}</td>
                            <td>${listaProdutos[i].quantidadeVendas} vendas</td>
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

    editar(listaProdutos, id){

    
        listaProdutos[id] = this;
    
        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
    
        $("#msgExitoProduto").show();

        setTimeout(() => {
    
            $("#msgExitoProduto").hide();
                
        }, 3000);
 
    }

    excluir(listaProdutos, id){

        listaProdutos.splice(id, 1);

        localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

    }
}