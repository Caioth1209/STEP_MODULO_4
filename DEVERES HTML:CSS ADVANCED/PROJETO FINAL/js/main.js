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

    var f1 = new Funcionario(login, senha);
    
    f1.verificaLogin();
}

function logout() {
    sessionStorage.removeItem("logado");
    bt_reservar.style.display = "block";
    bt_login.style.display = "block";
    bt_ver_reservas.style.display = "none";
    bt_logout.style.display = "none";
}

window.onload = function(){ 
    
    document.getElementById("input-nome").value = "";
    document.getElementById("input-email").value = "";
    document.getElementById("input-dt-chegada").value = "";
    document.getElementById("input-dt-saida").value = "";
    document.getElementById("btn-preReserva").disabled = true;
}

let validNome = 1;

function validaNome(c){

    var msg = document.getElementById("msg-erro-nome");
	
    var nome = c.value.replace(" ", "");

    var regex = /[0-9]/;
    
    if(regex.test(nome)){
    
        c.value = "";

        msg.style.display = "block";

        validNome = 1;
        document.getElementById("btn-preReserva").disabled = true;
                
    } else {
    
        if (c.value.trim().length < 3) {
        
            c.value = "";
    
            msg.style.display = "block";	
        
            validNome = 1;

            document.getElementById("btn-preReserva").disabled = true;
                        
        } else {
            msg.style.display = "none";
            validNome = 0;
            if ((validNome + validEmail + validDts + validDtc)==0) {
                document.getElementById("btn-preReserva").disabled = false;
            }
        }

    }
        
}

let validEmail = 1;

function validaEmail(c){

    var msg = document.getElementById("msg-erro-email");
	
    var regex = /\S+@\S+\.\S+/;

    if (regex.test(c.value)) {
        msg.style.display = "none";
        validEmail = 0;
        if ((validNome + validEmail + validDts + validDtc)==0) {
            document.getElementById("btn-preReserva").disabled = false;
        }
    } else {
        c.value = "";
        msg.style.display = "block";
        validEmail = 1;
        document.getElementById("btn-preReserva").disabled = true;
    }
        
}

var mes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

let validDtc = 1;

function validaDtChegada(c){
    var dtSaida = document.getElementById("dt-saida");
    var input_dtSaida = document.getElementById("input-dt-saida");
    var msg = document.getElementById("msg-erro-dtc");

    var data = new Date();

    var dtAtual = data.getFullYear() + "-" + mes[data.getMonth()] + "-" + data.getDate();

    if (c.value >= dtAtual) {
        msg.style.display = "none";
        validDtc = 0;
        dtSaida.style.display = "block";

        if (input_dtSaida.value < c.value) {
            input_dtSaida.value = "";
            validDts = 1;
            document.getElementById("btn-preReserva").disabled = true;
        }

    } else {
        c.value = "";
        msg.style.display = "block";
        dtSaida.style.display = "none";
        validDtc = 1;
        document.getElementById("btn-preReserva").disabled = true;
    }   
}

let validDts = 1;

function validaDtSaida(c){

    var msg = document.getElementById("msg-erro-dts");

    var dtc = document.getElementById("input-dt-chegada");

    var data = new Date();

    if (c.value > dtc.value) {
        msg.style.display = "none";
        validDts = 0;
        if ((validNome + validEmail + validDts + validDtc)==0) {
            document.getElementById("btn-preReserva").disabled = false;
        }
    } else {
        c.value = "";
        msg.style.display = "block";
        validDts = 1;
        document.getElementById("btn-preReserva").disabled = true;
    }   
}

function validaQuartos(c) {
    
    if (isNaN(c.value) || c.value < 1 || c.value > 10) {
        c.value = 1;
    }

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

    verificaReserva(){
        

    }
}