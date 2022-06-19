var imagens = ['tenis10.png','tenis2.png','tenis3.png','tenis4.png'];

var index = 0;

function mudarFoto(){
    let img = document.getElementById("imagem");
    img.src = "./images/" + imagens[index];
    index > imagens.length-2 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(mudarFoto, 3000);
};