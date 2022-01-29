$("#bt").click(()=>{
	$.ajax({
		url : 'SvAula',
		data: { nome: "Pedro", cpf: "174.851.637-01" },
		success: function( x ){ 
			$("#nomeCadastro").val(x.nome);
		
			$("#cpfCadastro").val(x.cpf);
		},	
		error: function(){
			alert("Errro")
		}
	});
	
})
