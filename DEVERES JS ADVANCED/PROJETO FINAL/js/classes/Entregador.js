class Entregador{
    nome;
    telefone;
    cpf;
    status;

    constructor(nome, telefone, cpf, status){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
        this.status = status;
    }

    cadastrar(listaEntregadores){

        let isValid = true;

        for (let i = 0; i < listaEntregadores.length; i++){
            if (this.telefone == listaEntregadores[i].telefone || this.cpf == listaEntregadores[i].cpf) {
                isValid = false;   
            }
        }

        if (isValid) {

            listaEntregadores.push(this);
            
            localStorage.setItem("listaEntregadores", JSON.stringify(listaEntregadores));

            $("#nomeEntregador").val("");
            $("#cpfEntregador").val("");
            $("#telefoneEntregador").val("");

            $("#msgExitoEntregador").show();
            $("#msgErroEntregador").hide();

        } else {
            $("#cpfEntregador").val("");
            $("#telefoneEntregador").val("");

            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").show();
        }

        setTimeout(() => {
            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").hide();
        }, 3000);
 
    }

    consultar(listaEntregadores){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">CPF</th>
                        <th scope="col">Telefone</th>
                        <th scope="col">Status</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereEntregadores">`;

        for(let i = 0; i < listaEntregadores.length; i++){

            texto += `<tr>
                        <td>${listaEntregadores[i].nome}</td>
                        <td>${listaEntregadores[i].cpf}</td>
                        <td>${listaEntregadores[i].telefone}</td>
                        <td>${listaEntregadores[i].status}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarEntregador(${i})" class='btn btn-primary'>Editar</button>
                            ${listaEntregadores[i].status == "ativo" ? 
                                `<button type="button" onclick="desativarEntregador(${i})" class='btn btn-danger'>Desativar</button>` : 
                                `<button type="button" onclick="ativarEntregador(${i})" class='btn btn-success'>Ativar</button>`
                            }
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Entregadores: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaEntregadores.length == 0) {
            $("#insereEntregadores").html(
                "<tr>" +
                    "<td colspan='5' class='text-danger text-center'> Nenhum Entregador cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaEntregadores, id, listaVendas, tipo){

        let isValid = true;

        for (let i = 0; i < listaEntregadores.length; i++){
    
            // se for igual, não tem porque verificar se o dado da pessoa é igual ao da mesma
            if(i != id){
                if ((this.cpf == listaEntregadores[i].cpf || this.telefone == listaEntregadores[i].telefone)) {
                    isValid = false;
                    break;
                }
            }
        }
    
        if(isValid){

            // atualizando a lista de vendas com a atualizacao 
            // das informacoes do entregador

            if (tipo == "edicaoStatus") {
                if (listaEntregadores[id].status == "ativo") {
                    listaEntregadores[id].status = "desativado";
                } else {
                    listaEntregadores[id].status = "ativo";
                }
            }

            for (let i = 0; i < listaVendas.length; i++) {
            
                if (mesmoObjeto(listaEntregadores[id], listaVendas[i].entregador)) {
                    if (tipo == "edicaoStatus") {
                        listaVendas[i].entregador = listaEntregadores[id];   
                    } else {
                        listaVendas[i].entregador = this;
                    }    
                }
                
            }

            if (tipo == "edicaoStatus") {
                if (listaEntregadores[id].status == "ativo") {
                    listaEntregadores[id].status = "desativado";
                } else {
                    listaEntregadores[id].status = "ativo";
                }
            }
    
            localStorage.setItem("listaVendas", JSON.stringify(listaVendas));
            
            if (tipo == "edicaoNormal") {
                listaEntregadores[id] = this;
            } 
    
            localStorage.setItem("listaEntregadores", JSON.stringify(listaEntregadores));
        
            if (tipo == "edicaoNormal") {
                $("#msgExitoEntregador").show();
                $("#msgErroEntregador").hide();     
            } 
        
        } else {
            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").show();   
        }

        setTimeout(() => {
    
            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").hide();
                
        }, 3000);
 
    }
}