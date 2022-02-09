// console.log(moment().format("D/MM/YYYY")); 

$("#btRecebeData").click(()=>{
    let data = $("#idata").val();

    let result = "";
    
    result = moment(data).format("D/MM/YYYY") + "<br>" +
            moment(data).format("MM/D/YYYY") + "<br>" +
            moment(data).format("MM-D-YYYY") + "<br>" +
            moment(data).add(300, 'days').calendar() + "<br>" +
            moment(data).endOf('day').fromNow();

    $("#resultados").html(result);
    
})

$("#preco").mask("#.##0,00", {reverse: true});

$('#cep').mask('00000-000');

$('#cpf').mask('000.000.000-00', {reverse: true});

$('#cnpj').mask('00.000.000/0000-00', {reverse: true});