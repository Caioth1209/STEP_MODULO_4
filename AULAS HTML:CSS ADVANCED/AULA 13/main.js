/*function anima() {
    document.getElementById("anima").className += " anima"
    //atribui a classe a essa div que tem esse id
}
*/

var fotos = document.getElementsByClassName("some");

var fotoAtual = 0;

fotos[0].className="mostraFoto";

function mudaImg () {
    if (fotoAtual == 0) {
        fotos[0].className="someFoto";
        fotos[1].className="mostraFoto";
        fotoAtual++;
    } else{
        fotos[0].className="mostraFoto";
        fotos[1].className="someFoto";
        fotoAtual = 0;
    }
}