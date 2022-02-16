class Caixa{
    nome;
    login;
    senha;

    constructor(nome, login, senha){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    static login(login, senha, listaCaixas){

        let achou = false;

        if (login == "root" && senha == "root123") {
            achou = true;
        }

        if (listaCaixas != null) {

            for (let i = 0; i < listaCaixas.length; i++){

                if (login == listaCaixas[i].login && senha == listaCaixas[i].senha) {
                    sessionStorage.setItem("caixaLogado", login);
                    achou = true;
                    break;
                }
            }
            
        }

        if(achou) {
            sessionStorage.setItem("logado", "sim");
            window.location.replace("inicio.html");
        } else {

            $("#msgErro").show();
            $("#login").val("");
            $("#senha").val("");

            setTimeout(() => {

                $("#msgErro").hide();
                
            }, 3000);
        }
    }

    cadastrar(listaCaixas){

        let isValid = true;

        for (let i = 0; i < listaCaixas.length; i++){
            if (this.login == listaCaixas[i].login || this.senha == listaCaixas[i].senha) {
                isValid = false;   
            }
        }

        if (this.login == "root" || this.senha == "root123") {
            isValid = false;   
        }

        if (isValid) {

            listaCaixas.push(this);
            
            localStorage.setItem("listaCaixas", JSON.stringify(listaCaixas));

            $("#msgExitoCaixa").show();
            $("#msgErroCaixa").hide();

        } else {
            $("#msgExitoCaixa").hide();
            $("#msgErroCaixa").show();
        }

        $("#nomeCaixa").val("");
        $("#login").val("");
        $("#senha").val("");

        setTimeout(() => {
            $("#msgExitoCaixa").hide();
            $("#msgErroCaixa").hide();
        }, 3000);
 
    }

    consultar(listaCaixas){

        let texto = "";

        texto = `<thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Login</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody id="insereCaixas">`;

        

        for(let i = 0; i < listaCaixas.length; i++){

            texto += `<tr>
                        <td>${listaCaixas[i].nome}</td>
                        <td>${listaCaixas[i].login}</td>
                        <td>
                            <button type='button' onclick="pegarIdEditarCaixa(${i})" class='btn btn-primary'>Editar</button>
                            <button type='button' onclick='pegarIdExcluirCaixa(${i})' class='btn btn-danger'>Excluir</button>
                        </td>
                    </tr>`;
        }

        texto += `</tbody>`;

        $("#foiConsultado").html("Caixas: Geral");
        $("#tabelaConsulta").html(texto);

        if (listaCaixas.length == 0) {
            $("#insereCaixas").html(
                "<tr>" +
                    "<td colspan='3' class='text-danger text-center'> Nenhum caixa cadastrado até o momento.</tr>" +
                "</tr>"
            );
        }

    }

    editar(listaCaixas, id){

        let isValid = true;

        for (let i = 0; i < listaCaixas.length; i++){
    
            // se for igual não tem porque verificar se o dado da pessoa é igual ao da mesma
            if(i != id){
                if ((this.login == listaCaixas[i].login || this.senha == listaCaixas[i].senha)) {
                    isValid = false;
                    break;
                }
            }
        }
    
        if(isValid){
            
            listaCaixas[id] = this;
    
            localStorage.setItem("listaCaixas", JSON.stringify(listaCaixas));
        
            $("#msgExitoCaixa").show();
            $("#msgErroCaixa").hide();   
        
        } else {
            $("#msgExitoCaixa").hide();
            $("#msgErroCaixa").show();   
        }

        setTimeout(() => {
    
            $("#msgExitoCaixa").hide();
            $("#msgErroCaixa").hide();
                
        }, 3000);
 
    }

    excluir(listaCaixas, id){

        if (sessionStorage.getItem("caixaLogado") == listaCaixas[id].login) {
            window.location.replace("index.html");
        }

        listaCaixas.splice(id, 1);

        localStorage.setItem("listaCaixas", JSON.stringify(listaCaixas));

    }
}