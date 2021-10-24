if (sessionStorage.getItem("pre-reservas") != null) {

    pre_reservas = JSON.parse(sessionStorage.getItem("pre-reservas"));

    let texto = "";

    for(var i = 0; i < pre_reservas.length; i++){
        
        texto += "<div class='bloco-reservas'>" +
                     "<p> <span class='atributo'> Nome: </span>" + pre_reservas[i].cliente.nome + "</p>" +
                     "<p> <span class='atributo'> E-mail: </span>" + pre_reservas[i].cliente.email + "</p>" +
                     "<p> <span class='atributo'> Data de chegada: </span>" + pre_reservas[i].dt_chegada + "</p>" +
                     "<p> <span class='atributo'> Data de saída: </span>" + pre_reservas[i].dt_saida + "</p>" + 
                     "<p> <span class='atributo'> Quantidade de quartos: </span>" + pre_reservas[i].qntd_quartos + "</p>" +
                 "</div>"
    }

    document.getElementById("td-pre-reservas").innerHTML = texto;
    
} else {
    document.getElementById("msg-sem-reservas").style.display = "block";
}


//////////////////// VALIDAÇÃO DE LOGIN ////////////////////////////////

///sessionStorage.removeItem("pre-reservas")
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

        var close_login = document.getElementById("close-login");
        var btn_entrar_login = document.getElementById("btn-entrar-login");
        var btn_fechar_login = document.getElementById("btn-fechar-login");

        if (this.login === "func000" && this.senha === "func123") {

            msg_exito.style.display = "block";
            close_login.disabled = true; 
            btn_entrar_login.disabled = true; 
            btn_fechar_login.disabled = true; 

            sessionStorage.setItem("logado", "logado");

            setTimeout(() => {

                close_login.disabled = false; 
                btn_entrar_login.disabled = false; 
                btn_fechar_login.disabled = false; 

                close_login.click();
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

/////////////////// VALIDAÇÃO DE PRÉ RESERVAS E PRÉ RESERVA///////////////////////////////

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

    var btnPreReserva = document.getElementById("btn-preReserva");

    if (c.value > dtc.value) {
        msg.style.display = "none";
        validDts = 0;
        if ((validNome + validEmail + validDts + validDtc)==0) {
            btnPreReserva.disabled = false;
        }
    } else {
        c.value = "";
        msg.style.display = "block";
        validDts = 1;
        btnPreReserva.disabled = true;
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

var pre_reservas = [];

class Reserva{
    cliente = new Cliente();
    dt_chegada;
    dt_saida;
    qntd_quartos;

    constructor(cliente, dt_chegada, dt_saida, qntd_quartos){
        this.cliente = cliente;
        this.dt_chegada = dt_chegada;
        this.dt_saida = dt_saida;
        this.qntd_quartos = qntd_quartos;
    }

    verificaPreReserva(){

        document.getElementById("input-nome").value = "";

        document.getElementById("input-email").value = "";

        document.getElementById("input-dt-chegada").value = "";

        document.getElementById("input-dt-saida").value = "";

        document.getElementById("dt-saida").style.display = "none";

        document.getElementById("input-qntd-quartos").value = 1;

        validNome = 1;
        validEmail = 1;
        validDts = 1;
        validDtc = 1;

        document.getElementById("btn-preReserva").disabled = true;
        document.getElementById("btn-fechar-preReserva").disabled = true;
        document.getElementById("close-reserva").disabled = true;


        var dtc = new Date(this.dt_chegada);
        var dts = new Date(this.dt_saida);

        this.dt_chegada = dtc.getDate() + "/" + mes[dtc.getMonth()]  + "/" + dtc.getFullYear();
        this.dt_saida = dts.getDate() + "/" + mes[dts.getMonth()]  + "/" + dts.getFullYear();

        var reserva = new Reserva(this.cliente, this.dt_chegada, this.dt_saida, this.qntd_quartos);
        
        pre_reservas.push(reserva);

        sessionStorage.setItem("pre-reservas", JSON.stringify(pre_reservas));

        let texto = "";

        for(var i = 0; i < pre_reservas.length; i++){
            
            texto += "<div class='bloco-reservas bg-success'>" +
                        "<p> <span class='atributo'> Nome: </span>" + pre_reservas[i].cliente.nome + "</p>" +
                        "<p> <span class='atributo'> E-mail: </span>" + pre_reservas[i].cliente.email + "</p>" +
                        "<p> <span class='atributo'> Data de chegada: </span>" + pre_reservas[i].dt_chegada + "</p>" +
                        "<p> <span class='atributo'> Data de saída: </span>" + pre_reservas[i].dt_saida + "</p>" + 
                        "<p> <span class='atributo'> Quantidade de quartos: </span>" + pre_reservas[i].qntd_quartos + "</p>" +
                    "</div>"
        }

        document.getElementById("td-pre-reservas").innerHTML = texto;

        document.getElementById("msg-sem-reservas").style.display = "none";

        document.getElementById("msg-exito-reserva").style.display = "block";

        setTimeout(() => {

            document.getElementById("btn-fechar-preReserva").disabled = false;
            document.getElementById("close-reserva").disabled = false;

            document.getElementById("msg-exito-reserva").style.display = "none";
            document.getElementById("close-reserva").click()

        }, 5000)

    }
}

function preReservar() {

    let nome = document.getElementById("input-nome").value;

    let email = document.getElementById("input-email").value;

    let dtChegada = document.getElementById("input-dt-chegada").value;

    let dtSaida = document.getElementById("input-dt-saida").value;

    let qntd_quartos = document.getElementById("input-qntd-quartos").value;

    var cliente = new Cliente(nome,email);

    var reserva = new Reserva(cliente, dtChegada, dtSaida, qntd_quartos);

    reserva.verificaPreReserva();
}

