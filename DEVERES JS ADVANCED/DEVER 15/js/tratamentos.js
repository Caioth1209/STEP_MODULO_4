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

    // tratando idade
    $("#idade").change(()=>{

        let idade = $("#idade");

        if (idade < 1) {

            $("#erroIdade").show();

            setTimeout(() => {
                $("#erroIdade").hide();
            }, 5000);

            idade.val("");

        } else {
            $("#erroIdade").hide();
        }
    })
    ////////////////////////////

    // tratando peso
    $("#peso").mask("#.##0,00", {reverse: true});
    ////////////////////////////

    // tratando altura
    $("#altura").mask("#.##0,00", {reverse: true});
    ////////////////////////////
    
})