var i = 2;

setInterval(() => {

    if (i == 4) {
        i = 1;
    }
    
    document.getElementById("back-img").style.backgroundImage = 'url("../img/fml2.jpeg")';

    i++;
}, 1000);