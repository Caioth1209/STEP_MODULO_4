$(document).ready(()=>{

    // aparece os formularios da escolha do usuario
    $("#escolhaCadastro").change((e)=>{
    
        switch (e.target.value) {
    
            case "caixa":{
                $("#formularioCadastroCaixa").show();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroVendaBalcao").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "cliente":{
                $("#formularioCadastroCliente").show();
                $("#formularioCadastroCaixa").hide();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroVendaBalcao").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "produto":{
                $("#formularioCadastroProduto").show();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroCaixa").hide();
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroVendaBalcao").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "entregador":{
                $("#formularioCadastroEntregador").show();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroCaixa").hide();
                $("#formularioCadastroVendaBalcao").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "vendaBalcao":{
                $("#formularioCadastroVendaBalcao").show();
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroCaixa").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "vendaEntrega":{
                $("#formularioCadastroVendaEntrega").show();
                $("#formularioCadastroVendaBalcao").hide();
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroCaixa").hide();
                break;
            };
            
        }
    })

    /////////// tratando nomes

    $("#nomeCaixa").change(()=>{

        let nome = $("#nomeCaixa");

        if (nome.val().trim().length < 4) {

            $("#erroNomeCaixa").show();

            setTimeout(() => {
                $("#erroNomeCaixa").hide();
            }, 5000);

            nome.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNomeCaixa").show();

                setTimeout(() => {
                    $("#erroNomeCaixa").hide();
                }, 5000);

                nome.val("");

            } else {
                $("#erroNomeCaixa").hide();
            }
        }
    })

    $("#nomeCliente").change(()=>{

        let nome = $("#nomeCliente");

        if (nome.val().trim().length < 4) {

            $("#erroNomeCliente").show();

            setTimeout(() => {
                $("#erroNomeCliente").hide();
            }, 5000);

            nome.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNomeCliente").show();

                setTimeout(() => {
                    $("#erroNomeCliente").hide();
                }, 5000);

                nome.val("");

            } else {
                $("#erroNomeCliente").hide();
            }
        }
    })

    $("#nomeEntregador").change(()=>{

        let nome = $("#nomeEntregador");

        if (nome.val().trim().length < 4) {

            $("#erroNomeEntregador").show();

            setTimeout(() => {
                $("#erroNomeEntregador").hide();
            }, 5000);

            nome.val("");

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(nome.val().trim())) {

                $("#erroNomeEntregador").show();

                setTimeout(() => {
                    $("#erroNomeEntregador").hide();
                }, 5000);

                nome.val("");

            } else {
                $("#erroNomeEntregador").hide();
            }
        }
    })

    $("#nomeProduto").change(()=>{

        let nome = $("#nomeProduto");

        if (nome.val().trim().length < 4) {

            $("#erroNomeProduto").show();

            setTimeout(() => {
                $("#erroNomeProduto").hide();
            }, 5000);

            nome.val("");

        } else {
            $("#erroNomeProduto").hide();
        }
    })

    ////////////////////////////

    // tratando login de caixa
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

    // tratando senha de caixa
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