let cadastros = [];

function logar() {

    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;
    let achou = false;

    if (login == "root" && senha == "root123") {
        localStorage.setItem("tipo", "funcionario");
        achou = true;

    } else if (localStorage.getItem("cadastros") != null) {
        cadastros = JSON.parse(localStorage.getItem("cadastros"));

        for (i = 0; i < cadastros.length; i++){
            if (login == cadastros[i].login && senha == cadastros[i].senha) {
                achou = true;

                if (cadastros[i].tipo == "Cliente") {
                    localStorage.setItem("tipo", "cliente");
                } else {
                    localStorage.setItem("tipo", "funcionario");
                }

                localStorage.setItem("logado", JSON.stringify(i));
            }
        }
    } else {

        document.getElementById("msgErro").style.display = "block";

        setTimeout(() => {

            document.getElementById("msgErro").style.display = "none";
            
        }, 5000);
    }

    document.formLogin.reset();

    if(achou){
        window.location.replace("home.html");
    } 

}

function cadastrarUsuario() {

    let nome = document.getElementById("nome").value;

    let login = document.getElementById("login").value;

    let senha = document.getElementById("senha").value;

    let tipo = document.getElementById("tipo").value;

    if(localStorage.getItem("cadastros") != null){
        cadastros = JSON.parse(localStorage.getItem("cadastros"));
    }

    let isValid = true;

    for (i = 0; i < cadastros.length; i++){

        if (login == cadastros[i].login || senha == cadastros[i].senha) {
            isValid = false;   
        }
    }

    if (login == "root" || senha == "root123") {
        isValid = false;   
    }

    if(isValid){

        let user = new User(nome,login,senha,tipo);

        cadastros.push(user);

        localStorage.setItem("cadastros", JSON.stringify(cadastros));

        document.getElementById("msgExito").style.display = "block";
        document.getElementById("msgErro").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgExito").style.display = "none";
                
        }, 5000);

    } else {

        document.getElementById("msgErro").style.display = "block";
        document.getElementById("msgExito").style.display = "none";

        setTimeout(() => {

            document.getElementById("msgErro").style.display = "none";
            
        }, 5000);
        
    }

    document.formCadastro.reset();
    // limpa o formulario
}
