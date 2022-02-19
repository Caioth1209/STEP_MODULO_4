class Entregador{
    nome;
    telefone;
    cpf;

    constructor(nome, telefone, cpf){
        this.nome = nome;
        this.telefone = telefone;
        this.cpf = cpf;
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
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereEntregadores">`;

        for(let i = 0; i < listaEntregadores.length; i++){

            texto += `<tr>
                        <td>${listaEntregadores[i].nome}</td>
                        <td>${listaEntregadores[i].cpf}</td>
                        <td>${listaEntregadores[i].telefone}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarEntregador(${i})" class='btn btn-primary'>Editar</button>
                            <button type='button' onclick='pegarIdExcluirEntregador(${i})' class='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Entregadores: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaEntregadores.length == 0) {
            $("#insereEntregadores").html(
                "<tr>" +
                    "<td colspan='4' class='text-danger text-center'> Nenhum Entregador cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaEntregadores, id, listaVendas){

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

            for (let i = 0; i < listaVendas.length; i++) {
            
                if (mesmoObjeto(listaEntregadores[id], listaVendas[i].entregador)) {
                    listaVendas[i].entregador = this;   
                }
                
            }
    
            localStorage.setItem("listaVendas", JSON.stringify(listaVendas));
            
            listaEntregadores[id] = this;
    
            localStorage.setItem("listaEntregadores", JSON.stringify(listaEntregadores));
        
            $("#msgExitoEntregador").show();
            $("#msgErroEntregador").hide();   
        
        } else {
            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").show();   
        }

        setTimeout(() => {
    
            $("#msgExitoEntregador").hide();
            $("#msgErroEntregador").hide();
                
        }, 3000);
 
    }

    excluir(listaEntregadores, id){

        listaEntregadores.splice(id, 1);

        localStorage.setItem("listaEntregadores", JSON.stringify(listaEntregadores));

    }
}