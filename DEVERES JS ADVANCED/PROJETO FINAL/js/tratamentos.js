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
                apareceClientes("balcao");
                apareceProdutos("balcao");
                $("#valorTotalVendaBalcao").val("0");
                $("#formularioCadastroEntregador").hide();
                $("#formularioCadastroProduto").hide();
                $("#formularioCadastroCliente").hide();
                $("#formularioCadastroCaixa").hide();
                $("#formularioCadastroVendaEntrega").hide();
                break;
            };
    
            case "vendaEntrega":{
                $("#formularioCadastroVendaEntrega").show();
                apareceClientes("entrega");
                apareceEntregadores("entrega");
                apareceProdutos("entrega");
                $("#valorTotalVendaEntrega").val("0");
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

        $("#erroNomeCaixa").hide();
        
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

            }
        }
    })

    $("#nomeCliente").change((e)=>{

        $("#erroNomeCliente").hide();

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

            }
        }
    })

    $("#nomeEntregador").change((e)=>{

        $("#erroNomeEntregador").hide();

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

            }
        }
    })

    $("#nomeProduto").change((e)=>{

        $("#erroNomeProduto").hide();

        if (e.target.value.trim().length < 4) {

            $("#erroNomeProduto").show();

            setTimeout(() => {
                $("#erroNomeProduto").hide();
            }, 5000);

            e.target.value = "";

        }
    })

    ////////////////////////////

    // tratando login de caixa
    $("#login").change((e)=>{

        $("#erroLogin").hide();

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

            }
        }
    })
    ////////////////////////////

    // tratando senha de caixa
    $("#senha").change((e)=>{

        $("#erroSenha").hide();

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

            }
        }
    })
    ////////////////////////////

    ///////////// tratando cpfs

    $("#cpfCliente").mask('000.000.000-00', {reverse: true});

    $("#cpfCliente").change((e)=>{

        $("#erroCpfCliente").hide();

        if (e.target.value.length != 14) {

            $("#erroCpfCliente").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroCpfCliente").hide();
            }, 3000);

        }
        
    })

    $("#cpfEntregador").mask('000.000.000-00', {reverse: true});

    $("#cpfEntregador").change((e)=>{

        $("#erroCpfEntregador").hide();

        if (e.target.value.length != 14) {

            $("#erroCpfEntregador").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroCpfEntregador").hide();
            }, 3000);

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

        $("#erroTelefoneCliente").hide();

        if (e.target.value.length < 14) {

            $("#erroTelefoneCliente").show();
            e.target.value = "";
        }

        let regexNacional = /\(\d{2}\) [9]?\d{4}\-\d{4}$/;

        if(!regexNacional.test(e.target.value)){
            $("#erroTelefoneCliente").show();
            e.target.value = "";
        }

        setTimeout(() => {
            $("#erroTelefoneCliente").hide();
        }, 3000);
    })

    $("#telefoneEntregador").change((e)=>{

        $("#erroTelefoneEntregador").hide();

        if (e.target.value.length < 14) {

            $("#erroTelefoneEntregador").show();
            e.target.value = "";

        }

        let regexNacional = /\(\d{2}\) [9]?\d{4}\-\d{4}$/;

        if(!regexNacional.test(e.target.value)){
            $("#erroTelefoneEntregador").show();
            e.target.value = "";
        }

        setTimeout(() => {
            $("#erroTelefoneEntregador").hide();
        }, 3000);
    })

    ///////////////////////////

    ////////// tratando data de nascimento
    
    $("#dataNasc").change((e)=>{
        $("#erroDataNasc").hide();

        if (moment(new Date(e.target.value)).startOf('day').fromNow().includes("in")) {
            $("#erroDataNasc").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroDataNasc").hide();
            }, 3000);
        }
    })

    /////////// tratando endereco
    
    $("#endereco").change((e)=>{
        $("#erroEndereco").hide();

        if (e.target.value.trim().length < 10) {
            $("#erroEndereco").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroEndereco").hide();
            }, 3000);
        }
    })

    /////////// tratando descricao
    
    $("#descricao").change((e)=>{
        $("#erroDescricao").hide();

        if (e.target.value.trim().length < 10) {
            $("#erroDescricao").show();
            e.target.value = "";

            setTimeout(() => {
                $("#erroDescricao").hide();
            }, 3000);
        }
    })

    ////////// tratando preco e valor total de venda

    $("#preco").mask('#.##0,00', { reverse: true });

    $("#preco").change((e)=>{
        $("#erroPreco").hide();

        if (e.target.value.length == 0) {
            $("#erroPreco").show();

            setTimeout(() => {
                $("#erroPreco").hide();
            }, 3000);
        }
    })

})

const mesmoObjeto = function(obj1, obj2) {
    const obj1Length = Object.keys(obj1).length;
    const obj2Length = Object.keys(obj2).length;

    if (obj1Length === obj2Length) {
        return Object.keys(obj1).every(
            key => obj2.hasOwnProperty(key)
                && obj2[key] === obj1[key]);
    }
    return false;
}
