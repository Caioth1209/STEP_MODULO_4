class Caixa{
    nome;
    login;
    senha;

    constructor(nome, login, senha){
        this.nome = nome;
        this.login = login;
        this.senha = senha;
    }

    cadastrar(listaCaixas){

        let isValid = true;

        for (i = 0; i < listaCaixas.length; i++){
            if (login == listaCaixas[i].login || senha == listaCaixas[i].senha) {
                isValid = false;   
            }
        }

        if (login == "root" || senha == "root123") {
            isValid = false;   
        }

        if (isValid) {

            listaCaixas.push(this);
            
            localStorage.setItem("listaCaixas", JSON.stringify(listaCaixas));

            $("#msgExitoCaixa").show();
            $("#msgErroCaixa").hide();

            setTimeout(() => {
                $("#msgExitoCaixa").hide();
            }, 5000);

        } else {
            $("#msgExitoCaixa").hide();
            $("#msgErroCaixa").show();

            setTimeout(() => {
                $("#msgErroCaixa").hide();
            }, 5000);
        }
 
    }
}