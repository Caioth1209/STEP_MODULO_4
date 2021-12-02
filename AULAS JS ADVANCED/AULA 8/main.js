$("#canvas").ready(()=>{

    let canvas = $("#canvas")[0];
    
    let ctx = canvas.getContext("2d");

    let desenhando = false;

    let arraylinhas = [];

    let casaArray = 0;

    $("#canvas").mousedown(function(evento) {

        let rect = this.getBoundingClientRect();

        let ponto = {
            x: evento.clientX - rect.left,
            y: evento.clientY - rect.top,
            desenho: []
        }
        
        ctx.moveTo(ponto.x, ponto.y);
        desenhando = true;

        arraylinhas.push(ponto);
    })

    $("#canvas").mouseup(function() {
        desenhando = false;
        casaArray++;
        console.log(arraylinhas);
    })

    $("#canvas").mousemove(function(evento) {

        if (desenhando) {

            let rect = this.getBoundingClientRect();

            let ponto = {
                x: evento.clientX - rect.left,
                y: evento.clientY - rect.top
            }

            ctx.lineTo(ponto.x, ponto.y);
            
            arraylinhas[casaArray].desenho.push(ponto);
            
            ctx.stroke();
        }
    })


    $("#limpar").click(()=>{
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // casaArray = 0;
        // arraylinhas = [];
    })

    $("#gravar").click(()=>{

        localStorage.setItem("desenho", JSON.stringify(arraylinhas));
        
    })

    $("#lerGravado").click(()=>{
        if (localStorage.getItem("desenho") != null) {
    
            let gravado = JSON.parse(localStorage.getItem("desenho"));

            for(i = 0; i < gravado.length; i++){

                ctx.moveTo(
                    gravado[i].x,
                    gravado[i].y
                );
                
                for(j = 0; j < gravado[i].desenho.length; j++){

                    ctx.lineTo(
                        gravado[i].desenho[j].x,
                        gravado[i].desenho[j].y
                    );

                }

                ctx.stroke();
            }
        } else {
            alert("Não tem nada gravado!");
        }
    })
})
