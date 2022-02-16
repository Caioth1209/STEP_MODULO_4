class Cliente{
    nome;
    telefone;
    cpf;
    dataNasc;
    endereco;

    constructor(nome, telefone, cpf, dataNasc, endereco){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.endereco = endereco;
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

            $("#msgExitoCliente").show();
            $("#msgErroCliente").hide();

        } else {
            $("#cpfCliente").val("");
            $("#telefoneCliente").val("");
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").show();
        }

        $("#nomeCliente").val("");
        $("#nomeCliente").val("");
        $("#cpfCliente").val("");
        $("#telefoneCliente").val("");
        $("#dataNasc").val("");
        $("#endereco").val("");

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
                        <th scope="col">Data Nascimento</th>
                        <th scope="col">Endereço</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereCaixas">`;

        

        for(let i = 0; i < listaClientes.length; i++){

            texto += `<tr>
                        <td>${listaClientes[i].nome}</td>
                        <td>${listaClientes[i].login}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarCliente(${i})" class='btn btn-primary'>Editar</button>
                            <button type='button' onclick='pegarIdExcluirCliente(${i})' class='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Clientes: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaClientes.length == 0) {
            $("#insereCaixas").html(
                "<tr>" +
                    "<td colspan='3' class='text-danger text-center'> Nenhum cliente cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaClientes, id){

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
            
            listaClientes[id] = this;
    
            localStorage.setItem("listaClientes", JSON.stringify(listaClientes));
        
            $("#msgExitoCliente").show();
            $("#msgErroCliente").hide();   
        
        } else {
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").show();   
        }

        setTimeout(() => {
    
            $("#msgExitoCliente").hide();
            $("#msgErroCliente").hide();
                
        }, 3000);
 
    }

    excluir(listaClientes, id){

        listaClientes.splice(id, 1);

        localStorage.setItem("listaClientes", JSON.stringify(listaClientes));

    }
}