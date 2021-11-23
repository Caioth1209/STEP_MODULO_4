
function setCookie(nome, valor, expirar) {

    let data = new Date();

    data.setTime(data.getTime() + (expirar*24*60*60*1000));
    // a data será os dias para expirar em milisegundos

    let expiracao = "expires=" + data.toGMTString();
    // data no padrao GMT para expiração

    // nome é a chave
    document.cookie = nome + "=" + valor + ";" + expiracao + "; path=/";
}

function getCookie(nome){

    let name = nome + "=";    

    let decode = decodeURIComponent(document.cookie);

    let separador = decode.split(";");

    for(i = 0; i < separador.length; i++){

        let cookie = separador[i];

        while (cookie.charAt(0) == " ") {
            cookie = cookie.substring(1);
        }

        if (cookie.indexOf(name) == 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }

    return "";
}

function checkCookie() {

    let logado = getCookie("logado");

    if (logado != "") {
        $("#logado").html(logado);
        $("#nome").addClass("hide");
        $("#nome").removeClass("show");
        $("h4 .hide").removeClass("hide");
        $("h4").addClass("show");
    } else {
        $("#nome").removeClass("hide");
        $("#nome").addClass("show");
        $("#nome").val("");
    }
}

$(document).ready(()=>{

    checkCookie();

    $("#logar").click(()=>{
        setCookie("logado", $("#nome").val(), 30);
        checkCookie();
    })
})