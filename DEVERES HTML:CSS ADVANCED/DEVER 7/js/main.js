var midia = document.getElementById("midia");
var play = document.getElementById("play");
var pause = document.getElementById("pause");

function playPause(){
    if(midia.paused){
        midia.play();
        play.style.display = 'none';
        pause.style.display = 'inline';
    } else {
        midia.pause();
        pause.style.display = 'none';
        play.style.display = 'inline';
    }
}

function volume(valor) {
    midia.volume += valor;
}
