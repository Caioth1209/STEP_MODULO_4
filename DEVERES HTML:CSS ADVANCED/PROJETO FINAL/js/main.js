var bt_reservar =  document.getElementById("reservar");
var bt_login = document.getElementById("bt-login");
var bt_ver_reservas =  document.getElementById("ver-reservas");
var bt_logout = document.getElementById("bt-logout");
var msg_exito = document.getElementById("msg-exito");
var msg_erro = document.getElementById("msg-erro");

if (sessionStorage.getItem("logado") != null) {
    bt_reservar.style.display = "none";
    bt_login.style.display = "none";
    bt_ver_reservas.style.display = "block";
    bt_logout.style.display = "block";
}

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

            msg_exito.style.display = "block";

            sessionStorage.setItem("logado", "logado");

            setTimeout(() => {

                document.getElementsByClassName("btn-close")[0].click();
                msg_exito.style.display = "none";

                bt_reservar.style.display = "none";
                bt_login.style.display = "none";
                bt_ver_reservas.style.display = "block";
                bt_logout.style.display = "block";

                document.getElementById("input-login").value = "";
                document.getElementById("input-senha").value = "";

            }, 5000)
        
        } else{

            msg_erro.style.display = "block";
            document.getElementById("input-login").value = "";
            document.getElementById("input-senha").value = "";

            setTimeout(() => {

                msg_erro.style.display = "none";

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
    sessionStorage.removeItem("logado");
    bt_reservar.style.display = "block";
    bt_login.style.display = "block";
    bt_ver_reservas.style.display = "none";
    bt_logout.style.display = "none";
}

class Cliente{
    nome;
    email;

    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }
}

class Reserva{
    cliente = new Cliente();
    dt_chegada;
    dt_saida;
    qntd_quartos;

    constructor(cliente, dt_chegada, dt_saida, qntd_quartos){
        this.cliente = cliente;
        this.dt_chegada = dt_chegada;
        this.dt_saida = dt_saida;
        this.dt_saida = qntd_quartos;
    }
}