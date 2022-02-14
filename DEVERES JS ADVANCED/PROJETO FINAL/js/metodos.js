$("#escolhaCadastro").change((e)=>{
    
    switch (e.target.value) {

        case "caixa":{
            $(".cadastro-caixa").show();
        }
    }
})