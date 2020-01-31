document.getElementById("immagine").addEventListener("mouseover", function(){mouseOver("immagine")});
document.getElementById("immagine").addEventListener("mouseleave", function(){mouseLeave("immagine")});
document.getElementById("immagine").addEventListener("click", mouseClick);
    
function mouseClick(){
    location.href="http:\\www.google.it";
}

function mouseOver(s){
    document.getElementById(s).style.transform = "scale(1.5)";
}

function mouseLeave(s){
    document.getElementById(s).style.transform = "scale(1)";
}