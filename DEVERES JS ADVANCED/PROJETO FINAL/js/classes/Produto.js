class Produto{
    nome;
    tamanho;
    descricao;
    preco;
    quantidadeVendas;
    status;

    constructor(nome, tamanho, descricao, preco, quantidadeVendas, status){
        this.nome = nome;
        this.tamanho = tamanho;
        this.descricao = descricao;
        this.preco = preco;
        this.quantidadeVendas = quantidadeVendas;
        this.status = status;
    }

    cadastrar(listaProdutos){

        let isValid = true;

        for (let i = 0; i < listaProdutos.length; i++){
            if (this.nome == listaProdutos[i].nome && this.tamanho == listaProdutos[i].tamanho) {
                isValid = false;   
            }
        }
        if (isValid) {
            listaProdutos.push(this);
            
            localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));

            $("#nomeProduto").val("");
            $("#preco").val("");
            $("#tamanho").val("");
            $("#descricao").val("");

            $("#msgExitoProduto").show();   
            $("#msgErroProduto").hide();  
        } else {

            $("#nomeProduto").val("");
            $("#tamanho").val("");

            $("#msgExitoProduto").hide();   
            $("#msgErroProduto").show();
        }

        setTimeout(() => {
            $("#msgExitoProduto").hide();
            $("#msgErroProduto").hide();  
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
                        <th scope="col">Status</th>
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
                        <td>${listaProdutos[i].quantidadeVendas} venda(s)</td>
                        <td>${listaProdutos[i].status}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarProduto(${i})" class='btn btn-primary'>Editar</button>
                            ${listaProdutos[i].status == "ativo" ? 
                                `<button type="button" onclick="desativarProduto(${i})" class='btn btn-danger'>Desativar</button>` : 
                                `<button type="button" onclick="ativarProduto(${i})" class='btn btn-success'>Ativar</button>`
                            }
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaProdutos.length == 0) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='7' class='text-danger text-center'> Nenhum produto cadastrado até o momento.</tr>" +
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
            totalVendas += parseInt(listaProdutos[i].quantidadeVendas);
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
                            <td>${listaProdutos[i].quantidadeVendas} venda(s)</td>
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
            totalVendas += parseInt(listaProdutos[i].quantidadeVendas);
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
                            <td>${listaProdutos[i].quantidadeVendas} venda(s)</td>
                        </tr>`;   
            }
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Produtos: Mais Vendidos");
        $("#tabelaConsulta").html(texto);

        if (!maisVendidos) {
            $("#insereProdutos").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger text-center'> Nenhum produto mais vendido.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaProdutos, id, listaVendas, tipo){

        let isValid = true;

        for (let i = 0; i < listaProdutos.length; i++){

            if (i != id) {
                if (this.nome == listaProdutos[i].nome && this.tamanho == listaProdutos[i].tamanho) {
                    isValid = false;   
                    break;
                }   
            }
        }
        if (isValid) {

            // atualizando a lista de vendas com a atualizacao 
            // das informacoes dos produtos

            if (tipo == "edicaoStatus") {
                if (listaProdutos[id].status == "ativo") {
                    listaProdutos[id].status = "desativado";
                } else {
                    listaProdutos[id].status = "ativo";
                }
            }

            for (let i = 0; i < listaVendas.length; i++) {
            
                for (let j = 0; j < listaVendas[i].carrinho.length; j++) {
    
                    if (mesmoObjeto(listaProdutos[id], listaVendas[i].carrinho[j].produto)) {
                        if (tipo == "edicaoStatus") {
                            listaVendas[i].carrinho[j].produto = listaProdutos[id];   
                        } else {
                            listaVendas[i].carrinho[j].produto = this;
                        }
                    }
                
                }
                
            }

            if (tipo == "edicaoStatus") {
                if (listaProdutos[id].status == "ativo") {
                    listaProdutos[id].status = "desativado";
                } else {
                    listaProdutos[id].status = "ativo";
                }
            }
    
            localStorage.setItem("listaVendas", JSON.stringify(listaVendas));

            if (tipo == "edicaoNormal") {
                listaProdutos[id] = this;
            }    
            
            localStorage.setItem("listaProdutos", JSON.stringify(listaProdutos));
        
            if (tipo == "edicaoNormal") {
                $("#msgExitoProduto").show();
                $("#msgErroProduto").hide();   
            } else {
                $("#msgExitoStatus").show();  
            }

        } else {
            
            $("#nomeProduto").val("");
            $("#tamanho").val("");

            $("#msgExitoProduto").hide();   
            $("#msgErroProduto").show();
        }

        setTimeout(() => {
            $("#msgExitoProduto").hide();
            $("#msgErroProduto").hide();  
            $("#msgExitoStatus").hide();  
        }, 3000);

    }
    
}