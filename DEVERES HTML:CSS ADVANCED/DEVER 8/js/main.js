var play = document.getElementsByClassName("play");
var pause = document.getElementsByClassName("pause");
var midia = document.getElementsByClassName("midia");

function playPause(index){

    switch (index) {

        case 0:{

            if(midia[0].paused){
                midia[0].play();
                play[0].style.display = 'none';
                pause[0].style.display = 'inline';
            } else {
                midia[0].pause();
                pause[0].style.display = 'none';
                play[0].style.display = 'inline';
            }

            break;
        }

        case 1:{

            if(midia[1].paused){
                midia[1].play();
                play[1].style.display = 'none';
                pause[1].style.display = 'inline';
            } else {
                midia[1].pause();
                pause[1].style.display = 'none';
                play[1].style.display = 'inline';
            }

            break;
        }

        case 2:{

            if(midia[2].paused){
                midia[2].play();
                play[2].style.display = 'none';
                pause[2].style.display = 'inline';
            } else {
                midia[2].pause();
                pause[2].style.display = 'none';
                play[2].style.display = 'inline';
            }

            break;
        }

    }
}

function volume(index, valor) {

    switch (index) {

        case 0:{
            
            midia[0].volume += valor;

            break;
        }

        case 1:{
            
            midia[1].volume += valor;

            break;
        }

        case 2:{
            
            midia[2].volume += valor;

            break;
        }
   
    }
}
