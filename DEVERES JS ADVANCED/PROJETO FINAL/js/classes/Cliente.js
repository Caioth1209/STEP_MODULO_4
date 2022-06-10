class Cliente{
    nome;
    telefone;
    cpf;
    dataNasc;
    endereco;
    status;

    constructor(nome, telefone, cpf, dataNasc, endereco, status){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.endereco = endereco;
        this.status = status;
    }

    cadastrar(listaClientes){

        let isValid = true;

        for (let i = 0; i < listaClientes.length; i++){
            if (this.telefone == listaClientes[i].telefone || this.cpf == listaClientes[i].cpf) {
                isValid = false;   
            }
        }

        if (isValid) {

            listaClientes.push(this);
            
            localStorage.setItem("listaClientes", JSON.stringify(listaClientes));

            $("#nomeCliente").val("");
            $("#cpfCliente").val("");
            $("#telefoneCliente").val("");
            $("#dataNasc").val("");
            $("#endereco").val("");

            $("#msgExitoCliente").show();
            $("#msgErroCliente").hide();

        } else {
            $("#cpfCliente").val("");
            $("#telefoneCliente").val("");

            $("#msgExitoCliente").hide();
            $("#msgErroCliente").show();
        }

        setTimeout(() => {
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").hide();
        }, 3000);
 
    }

    consultarGeral(listaClientes){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Nascimento</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereClientes">`;

        for(let i = 0; i < listaClientes.length; i++){

            texto += `<tr>
                        <td> <span>Nome:</span> &nbsp; ${listaClientes[i].nome}</td>
                        <td> <span>CPF:</span> &nbsp; ${listaClientes[i].cpf}</td>
                        <td> <span>Telefone:</span> &nbsp; ${listaClientes[i].telefone}</td>
                        <td> <span>Nascimento:</span> &nbsp; ${listaClientes[i].dataNasc}</td>
                        <td> <span>Endereço:</span>${listaClientes[i].endereco}</td>
                        <td> <span>Status:</span> &nbsp; ${listaClientes[i].status}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarCliente(${i})" class='btn btn-primary'>Editar</button>
                            ${listaClientes[i].status == "ativo" ? 
                            `<button type="button" onclick="desativarCliente(${i})" class='btn btn-danger'>Desativar</button>` : 
                            `<button type="button" onclick="ativarCliente(${i})" class='btn btn-success'>Ativar</button>`
                            }
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Clientes: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaClientes.length == 0) {
            $("#insereClientes").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Nenhum cliente cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    consultarAniversariantesMes(listaClientes){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Nascimento</th>
                        <th scope="col">Endereço</th>
                    </tr>
                </thead>
                <tbody id="insereClientes">`;
        
        let existeAniversariante = false;

        for(let i = 0; i < listaClientes.length; i++){
            
            let mesCliente = listaClientes[i].dataNasc.substring(3,5);

            if (mesCliente == moment(new Date()).format("MM")) {
                existeAniversariante = true;
                texto += `<tr>
                        <td>${listaClientes[i].nome}</td>
                        <td>${listaClientes[i].cpf}</td>
                        <td>${listaClientes[i].telefone}</td>
                        <td>${listaClientes[i].dataNasc}</td>
                        <td>${listaClientes[i].endereco}</td>
                    </tr>`;   
            }
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Clientes: Aniversariantes do Mês");
        $("#tabelaConsulta").html(texto);

        if (!existeAniversariante) {
            $("#insereClientes").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger text-center'> Nenhum cliente aniversariante do mês.</tr>" +
                "</tr>"
            );
        }

    }

    consultarComprasUltimoMes(listaVendas){

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
                <tbody id="insereClientes">`;
        
        let existeComprasUltimoMes = false;

        for(let i = 0; i < listaVendas.length; i++){

            let ultimoMes = moment().format("MM");

            ultimoMes = ultimoMes == "01" ? "12" : ultimoMes-1;

            ultimoMes = ultimoMes < 10 ? "0" + ultimoMes : ultimoMes;

            if (listaVendas[i].dataVenda.substring(3,5) == ultimoMes) {

                existeComprasUltimoMes = true;

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
                        <td>${listaVendas[i].entregador == "Não tem" ? listaVendas[i].entregador  : 
                        listaVendas[i].entregador.nome + " | " + listaVendas[i].entregador.cpf}</td>
                        <td>${listaVendas[i].formaPagamento}</td>
                        <td>R$ ${listaVendas[i].valorTotal}</td>
                        <td>${listaVendas[i].dataVenda}</td>
                    </tr>`;   
            }
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Clientes: Compras no ultimo mês");
        $("#tabelaConsulta").html(texto);

        if (!existeComprasUltimoMes) {
            $("#insereClientes").html(
                "<tr>" +
                    "<td colspan='6' class='text-danger text-center'> Nenhum cliente fez compras no último mês.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaClientes, id, listaVendas, tipo){

        let isValid = true;

        for (let i = 0; i < listaClientes.length; i++){
    
            // se for igual, não tem porque verificar se o dado da pessoa é igual ao da mesma
            if(i != id){
                if ((this.cpf == listaClientes[i].cpf || this.telefone == listaClientes[i].telefone)) {
                    isValid = false;
                    break;
                }
            }
        }
    
        if(isValid){

            // atualizando a lista de vendas com a atualizacao 
            // das informacoes do cliente

            if (tipo == "edicaoStatus") {
                if (listaClientes[id].status == "ativo") {
                    listaClientes[id].status = "desativado";
                } else {
                    listaClientes[id].status = "ativo";
                }
            }

            for (let i = 0; i < listaVendas.length; i++) {
                if (mesmoObjeto(listaClientes[id], listaVendas[i].cliente)) {
                    if (tipo == "edicaoStatus") {
                        listaVendas[i].cliente = listaClientes[id];   
                    } else {
                        listaVendas[i].cliente = this;
                    }  
                }
            }

            if (tipo == "edicaoStatus") {
                if (listaClientes[id].status == "ativo") {
                    listaClientes[id].status = "desativado";
                } else {
                    listaClientes[id].status = "ativo";
                }
            }
    
            localStorage.setItem("listaVendas", JSON.stringify(listaVendas));
            
            if (tipo == "edicaoNormal") {
                listaClientes[id] = this;
            }    
            
            localStorage.setItem("listaClientes", JSON.stringify(listaClientes));
        
            if (tipo == "edicaoNormal") {
                $("#msgExitoCliente").show();
                $("#msgErroCliente").hide();   
            } else{
                $("#msgExitoStatus").show();  
            }
        
        } else {
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").show();   
        }

        setTimeout(() => {
    
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").hide();
            $("#msgExitoStatus").hide();  
                
        }, 3000);
 
    }
    
}