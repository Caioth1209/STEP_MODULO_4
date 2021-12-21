$(document).ready(() => {

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
        $("#erroLogin").hide();
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

        if (senha.split(" ").length > 1) {

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

    // tratando cargo
    $("#cargo").change(()=>{

        let cargo = $("#cargo");

        if (cargo.val().trim().length < 4) {

            $("#erroCargo").show();

            setTimeout(() => {
                $("#erroCargo").hide();
            }, 5000);

            cargo.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(cargo.val().trim())) {

                $("#erroCargo").show();

                setTimeout(() => {
                    $("#erroCargo").hide();
                }, 5000);

                cargo.val("");

            } else {

                $("#erroCargo").hide();

            }
        }
    })
    ////////////////////////////

    // tratando salario
    $("#salario").change(()=>{

        let salario = $("#salario");

        if (isNaN(salario.val())) {

            $("#erroSalario").show();

            setTimeout(() => {
                $("#erroSalario").hide();
            }, 5000);

            salario.val("");

        } else {
            $("#erroSalario").hide();
        }
    })
    ////////////////////////////

    $("#escolhaFunc").click(()=>{

        $("#escolhaFunc").css({"background-color":"black"})
        $("#escolhaFunc > a").css({"color":"white"})

        $("#escolhaCliente").css({"background-color":"white"})
        $("#escolhaCliente > a").css({"color":"#0B59CA"})

        $("#formularioCadastro").show();
        $(".funcCad").show();
    })

    $("#escolhaCliente").click(()=>{

        $("#escolhaCliente").css({"background-color":"black"})
        $("#escolhaCliente > a").css({"color":"white"})

        $("#escolhaFunc").css({"background-color":"white"})
        $("#escolhaFunc > a").css({"color":"#0B59CA"})

        $("#formularioCadastro").show();
        $(".funcCad").hide();
    })

    $("#escolhaCTodos").click(()=>{

        $("#escolhaCTodos").css({"background-color":"black"});
        $("#escolhaCTodos > a").css({"color":"white"});
        $("#cTodos").show();

        $("#escolhaCNome").css({"background-color":"white"});
        $("#escolhaCNome > a").css({"color":"#0B59CA"});
        $("#cNome").hide();

        $("#escolhaCCliente").css({"background-color":"white"});
        $("#escolhaCCliente > a").css({"color":"#0B59CA"});
        $("#cCliente").hide();

        $("#escolhaCFunc").css({"background-color":"white"});
        $("#escolhaCFunc > a").css({"color":"#0B59CA"});
        $("#cFunc").hide();
    })

    $("#escolhaCNome").click(()=>{

        $("#escolhaCNome").css({"background-color":"black"});
        $("#escolhaCNome > a").css({"color":"white"});
        $("#cNome").show();

        $("#escolhaCTodos").css({"background-color":"white"});
        $("#escolhaCTodos > a").css({"color":"#0B59CA"});
        $("#cTodos").hide();

        $("#escolhaCCliente").css({"background-color":"white"});
        $("#escolhaCCliente > a").css({"color":"#0B59CA"});
        $("#cCliente").hide();

        $("#escolhaCFunc").css({"background-color":"white"});
        $("#escolhaCFunc > a").css({"color":"#0B59CA"});
        $("#cFunc").hide();

    })

    $("#escolhaCCliente").click(()=>{

        $("#escolhaCCliente").css({"background-color":"black"});
        $("#escolhaCCliente > a").css({"color":"white"});
        $("#cCliente").show();

        $("#escolhaCTodos").css({"background-color":"white"});
        $("#escolhaCTodos > a").css({"color":"#0B59CA"});
        $("#cTodos").hide();

        $("#escolhaCNome").css({"background-color":"white"});
        $("#escolhaCNome > a").css({"color":"#0B59CA"});
        $("#cNome").hide();

        $("#escolhaCFunc").css({"background-color":"white"});
        $("#escolhaCFunc > a").css({"color":"#0B59CA"});
        $("#cFunc").hide();

    })

    $("#escolhaCFunc").click(()=>{

        $("#escolhaCFunc").css({"background-color":"black"});
        $("#escolhaCFunc > a").css({"color":"white"});
        $("#cFunc").show();

        $("#escolhaCTodos").css({"background-color":"white"});
        $("#escolhaCTodos > a").css({"color":"#0B59CA"});
        $("#cTodos").hide();

        $("#escolhaCNome").css({"background-color":"white"});
        $("#escolhaCNome > a").css({"color":"#0B59CA"});
        $("#cNome").hide();

        $("#escolhaCCliente").css({"background-color":"white"});
        $("#escolhaCCliente > a").css({"color":"#0B59CA"});
        $("#cCliente").hide();
    })
})