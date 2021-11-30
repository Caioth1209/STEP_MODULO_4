window.onload = () => {
    montarCanvas();
}

function montarCanvas() {

    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    var tamanho;

    var lugarX;
        
    var lugarY;

    var pontos = 0;
    
    let intervalo = gerarIntervalo();

    canvas.addEventListener("click", function(evento) {

        var rect = this.getBoundingClientRect();
        
        var coord = {
            x: evento.clientX - rect.left,
            y: evento.clientY - rect.top
        }

        if (coord.x >= lugarX && // onde começa
            coord.x <= lugarX + tamanho && // onde começa + tamanho
            coord.y >= lugarY && // onde começa
            coord.y <= lugarY + tamanho // onde começa + tamanho
            ) {
             
            pontos += 10;
            console.log("Somou 10 pontos, parabéns!");
            console.log("Placar: " + pontos);
            clearInterval(gerarIntervalo());
            intervalo = gerarIntervalo();
        } else {
            console.log("errou!");

        }

    })
    
    function gerarIntervalo() {
        return setInterval(function() {
    
            ctx.clearRect(lugarX, lugarY, tamanho, tamanho); 
    
            tamanho = Math.floor((Math.random() * (25 - 10 + 1) + 10));
    
            lugarX = Math.floor((Math.random() * (600 - 50 + 1) + 50));
            
            lugarY = Math.floor((Math.random() * (600 - 50 + 1) + 50));
            
            ctx.fillRect(lugarX, lugarY, tamanho, tamanho);
            
        }, 3000);
    }
}
