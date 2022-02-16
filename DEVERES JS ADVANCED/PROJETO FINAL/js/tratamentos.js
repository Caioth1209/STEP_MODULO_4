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
    $("#nomeCaixa").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroNomeCaixa").show();

            setTimeout(() => {
                $("#erroNomeCaixa").hide();
            }, 5000);

            e.target.value = "";

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(e.target.value.trim())) {

                $("#erroNomeCaixa").show();

                setTimeout(() => {
                    $("#erroNomeCaixa").hide();
                }, 5000);

                e.target.value = "";

            } else {
                $("#erroNomeCaixa").hide();
            }
        }
    })

    $("#nomeCliente").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroNomeCliente").show();

            setTimeout(() => {
                $("#erroNomeCliente").hide();
            }, 5000);

            e.target.value = "";

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(e.target.value.trim())) {

                $("#erroNomeCliente").show();

                setTimeout(() => {
                    $("#erroNomeCliente").hide();
                }, 5000);

                e.target.value= "";

            } else {
                $("#erroNomeCliente").hide();
            }
        }
    })

    $("#nomeEntregador").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroNomeEntregador").show();

            setTimeout(() => {
                $("#erroNomeEntregador").hide();
            }, 5000);

            e.target.value = "";

        } else {

            let regex = /[0-9]/;
            
            if (regex.test(e.target.value.trim())) {

                $("#erroNomeEntregador").show();

                setTimeout(() => {
                    $("#erroNomeEntregador").hide();
                }, 5000);

                e.target.value = "";

            } else {
                $("#erroNomeEntregador").hide();
            }
        }
    })

    $("#nomeProduto").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroNomeProduto").show();

            setTimeout(() => {
                $("#erroNomeProduto").hide();
            }, 5000);

            e.target.value = "";

        } else {
            $("#erroNomeProduto").hide();
        }
    })

    ////////////////////////////

    // tratando login de caixa
    $("#login").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroLogin").show();

            setTimeout(() => {
                $("#erroLogin").hide();
            }, 5000);

            e.target.value = "";

        } else {
            
            let loginSplit = e.target.value.trim().split(" ");

            if (loginSplit.length > 1) {

                $("#erroLogin").show();

                setTimeout(() => {
                    $("#erroLogin").hide();
                }, 5000);

                e.target.value = "";

            } else {
                $("#erroLogin").hide();
            }
        }
    })
    ////////////////////////////

    // tratando senha de caixa
    $("#senha").change((e)=>{

        if (e.target.value.trim().length < 4) {

            $("#erroSenha").show();

            setTimeout(() => {
                $("#erroSenha").hide();
            }, 5000);

            e.target.value = "";

        } else {

            let senhaSplit = e.target.value.trim().split(" ");

            if (senhaSplit.length > 1) {

                $("#erroSenha").show();

                setTimeout(() => {
                    $("#erroSenha").hide();
                }, 5000);

                e.target.value = "";

            } else {
                $("#erroSenha").hide();
            }
        }
    })
    ////////////////////////////

    ///////////// tratando cpfs

    $("#cpfCliente").mask('000.000.000-00', {reverse: true});

    $("#cpfCliente").change((e)=>{

        if (e.target.value.length != 14) {

            $("#erroCpfCliente").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroCpfCliente").hide();
            }, 3000);

        } else {
            $("#erroCpfCliente").hide();
        }
        
    })

    $("#cpfEntregador").mask('000.000.000-00', {reverse: true});

    $("#cpfEntregador").change((e)=>{

        if (e.target.value.length != 14) {

            $("#erroCpfEntregador").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroCpfEntregador").hide();
            }, 3000);

        } else {
            $("#erroCpfEntregador").hide();
        }
        
    })

    ///////////////////////////

    ///////////// tratando telefones

    var maskOptions = {
        onKeyPress: function(cep, e, field, options) {
          // Use an optional digit (9) at the end to trigger the change
          var masks = ["(00) 0000-00009", "(00) 00000-0000"],
            digits = cep.replace(/[^0-9]/g, "").length,
            mask = digits <= 10 ? masks[0] : masks[1];
    
          $("#telefoneCliente").mask(mask, options);
          $("#telefoneEntregador").mask(mask, options);
        }
      };
    
      $("#telefoneCliente").mask("(00) 0000-0000", maskOptions);
      $("#telefoneEntregador").mask("(00) 0000-0000", maskOptions);

    $("#telefoneCliente").change((e)=>{

        if (e.target.value.length < 14) {

            $("#erroTelefoneCliente").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroTelefoneCliente").hide();
            }, 3000);

        } else {
            $("#erroTelefoneCliente").hide();
        }
    })

    $("#telefoneEntregador").change((e)=>{

        if (e.target.value.length < 14) {

            $("#erroTelefoneEntregador").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroTelefoneEntregador").hide();
            }, 3000);

        } else {
            $("#erroTelefoneEntregador").hide();
        }
    })

    ///////////////////////////

    ////////// tratando data de nascimento
    
    $("#dataNasc").change((e)=>{

        $("#erroDataNasc").hide();

        if (moment(e.target.value).format("D/MM/YYYY") >= moment().format("D/MM/YYYY")) { 
            $("#erroDataNasc").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroDataNasc").hide();
            }, 3000);
        }
    })
})