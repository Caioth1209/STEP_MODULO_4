$("#formularioCadastroCaixa").submit((e)=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa($("#nomeCaixa").val(), $("#login").val(), $("#senha").val());

    c.cadastrar(listaCaixas);

    e.preventDefault();
});

$("#cGeralCaixas").click(()=>{

    let listaCaixas = [];

    if (localStorage.getItem("listaCaixas") != null) {
        listaCaixas = JSON.parse(localStorage.getItem("listaCaixas"));
    }

    let c = new Caixa();

    c.consultar(listaCaixas);
})