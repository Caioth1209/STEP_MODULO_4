class Funcionario{
    login;
    senha;

    constructor(login,senha){
        this.login = login;
        this.senha = senha;
    }

    // login: func000
    // senha: func123

    verificaLogin(){

        if (this.login === "func000" && this.senha === "func123") {

            document.getElementById("msg-exito").style.display = "block";

            setTimeout(() => {

                document.getElementsByClassName("btn-close")[0].click();
                document.getElementById("msg-exito").style.display = "none";

                document.getElementById("reservar").style.display = "none";
                document.getElementById("bt-login").style.display = "none";
                document.getElementById("ver-reservas").style.display = "block";
                document.getElementById("bt-logout").style.display = "block";

                document.getElementById("input-login").value = "";
                document.getElementById("input-senha").value = "";

            }, 5000)
        
        } else{

            document.getElementById("msg-erro").style.display = "block";
            document.getElementById("input-login").value = "";
            document.getElementById("input-senha").value = "";

            setTimeout(() => {

                document.getElementById("msg-erro").style.display = "none";

            }, 5000)
        }

    }
}

function login() {

    let login = document.getElementById("input-login").value;
    let senha = document.getElementById("input-senha").value;

    var f1 = new Funcionario(login,senha);
    
    f1.verificaLogin();
}

function logout() {
    location.reload();
}