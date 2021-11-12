// ao se referir a um valor, usar sempre '$';

// $(document).ready(alert("Documento carregado com sucesso!"));

// $(document).ready(() => {
//     alert("Por arrow function");
// })

$("h1").click(function() {
    alert("Clicou em um título h1");
})

$(".txtPadrao").click(() => {
    alert("Clicou no parágrafo");
})

// $("#subtitulo").hover(() => {
//     alert("Passou por cima do subtitulo");
// })

$("#trecho .texto").hover(function(){
    $(this).css("color", "red");
})

$(".lang").change(function() {

    let valor = $(".lang option:selected").text();

    console.log(`Vc escolheu: ${valor}`);
})

$("#herois").change(() => {
    let heroi = "";

    $("#herois option:selected").each(function(){
        heroi += $(this).text() + " ";
    })

    console.log("Escolhidos: " + heroi);
})

let html = "<h3> Texto inserido por JQuery </h3>";
$("#append").append(html);
$("#append").append(html);
$("#append").html(html); // substitui o que colocou antes

let texto = "Uma bela frase";
$("#span").text(texto);

// $("#carregaHtml").load1('pagina2.html');