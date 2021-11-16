$(document).ready(() => {
    
    // aplica a todos os filhos

    // $("ul").children().css({
    //     "color": "red",
    //     "border": "1px solid red",
    //     "padding": "10px"
    // })

    // parent > child -> especifica o filho que será selecionado
    $("ul > li").css({
        "color": "red",
        "border": "1px solid red",
        "padding": "10px"
    })

    // li o parent ou child mais próximo
    $("li").closest("span").css("color", "green");

    // pesquisando p como child ou parent do span. Sendo que abrange mais de um nível.
    $("span").find("p").css("color", "blue");

    // selecionado o pai do que foi selecionado
    $(".texto").parent().css("backgroundColor","green");


    $("#formulario").submit((event) => {
        alert($("#textoTxt").val());
        $("#textoTxt").val("");

        //prevenindo que a página reinicie
        event.preventDefault();
    })

    $(document).on("click", (event)=>{
        $(event.target).closest("p").css({
            "font-weight": "bolder",
            "color": "gray"
        });
    })

    $(document).bind("cut copy", (event)=>{
        event.preventDefault();
    })

    // quando clicar no mouse
    $(document).children().mousedown((event) => {

        switch (event.which) {
            case 1:{
                event.preventDefault();
                break;
            }
                
            case 2:{
                alert("Botão central");
                break;
            }

            case 3:{
                alert("Botão invertido");
                break;
            }

            default:{
                alert("Mouse gamer");
                break;
            }
            
        }
    })
})
