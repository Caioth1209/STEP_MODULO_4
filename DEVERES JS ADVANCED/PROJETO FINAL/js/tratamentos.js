$(document).ready(()=>{

     // tratando nome
    $("#nome").change(()=>{

        let nome = $("#nome");

        if (nome.val().trim().length < 4) {

            $("#erroNome").show();

            setTimeout(() => {
                $("#erroNome").hide();
            }, 5000);

            nome.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNome").show();

                setTimeout(() => {
                    $("#erroNome").hide();
                }, 5000);

                nome.val("");

            } else {
                $("#erroNome").hide();
            }
        }
    })
    ////////////////////////////

    // tratando login
    $("#login").change(()=>{

    let login = $("#login");

    if (login.val().trim().length < 4) {

        $("#erroLogin").show();

        setTimeout(() => {
            $("#erroLogin").hide();
        }, 5000);

        login.val("");

    } else {
        
        let loginSplit = login.val().trim().split(" ");

        if (loginSplit.length > 1) {

            $("#erroLogin").show();

            setTimeout(() => {
                $("#erroLogin").hide();
            }, 5000);

            login.val("");

        } else {
            $("#erroLogin").hide();
        }
    }
    })
    ////////////////////////////

    // tratando senha
    $("#senha").change(()=>{

    let senha = $("#senha");

    if (senha.val().trim().length < 4) {

        $("#erroSenha").show();

        setTimeout(() => {
            $("#erroSenha").hide();
        }, 5000);

        senha.val("");

    } else {

        let senhaSplit = senha.val().trim().split(" ");

        if (senhaSplit.length > 1) {

            $("#erroSenha").show();

            setTimeout(() => {
                $("#erroSenha").hide();
            }, 5000);

            senha.val("");

        } else {
            $("#erroSenha").hide();
        }
    }
    })
    ////////////////////////////
})