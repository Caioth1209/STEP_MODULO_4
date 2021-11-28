window.onload = () => {
    montarCanvas();
}

function montarCanvas() {

    var canvas = document.getElementById("canvas");

    var ctx = canvas.getContext("2d");

    var cores = [
        "yellow",
        "black",
        "purple",
        "orange",
        "blue",
        "brown",
        "red",
        "blue",
        "green",
        "pink",
        "azure",
        "lime"
    ];   
    
    var coordsAntes = {
        x: 0,
        y: 0
    }

    var cont = 1;

    canvas.addEventListener("click", function(e) {

        let rect = this.getBoundingClientRect();

        let coordDepois = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        }

        if (cont == 1) {

            coordsAntes.x = coordDepois.x;
            coordsAntes.y = coordDepois.y;
            cont++;

        } else {
            
            ctx.beginPath();
            ctx.moveTo(coordsAntes.x, coordsAntes.y);
            ctx.lineTo(coordDepois.x, coordDepois.y);

            let cor = Math.floor(Math.random() * cores.length);

            ctx.strokeStyle = cores[cor];
    
            ctx.stroke();

            ctx.closePath();

            coordsAntes.x = coordDepois.x;
            coordsAntes.y = coordDepois.y;
        }
        
    })

    document.getElementById("btLimpa").addEventListener("click", ()=>{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cont = 1;
    })
}