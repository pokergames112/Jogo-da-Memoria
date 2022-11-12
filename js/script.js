(function(){
    var images = [];
    for (var i = 0; i < 10; i++){
        var img = {
            src: "img/" + i + ".png",
            id: i%5 
        };
        images.push(img);
    }
    startGame();

    function startGame(){
        var frontFaces = document.getElementsByClassName("front");
        for(var i = 0; i < 10; i++){
            var card = document.querySelector("#card" + i);               // Função que distribui as cartas no container
            card.style.left = i % 5 === 0 ? 5 + "px" : i % 5 * 210 + 5 + "px";
            card.style.top = i < 5 ? 5 + "px" : 300 + "px"

            card.addEventListener("click", flipCard,false);

            frontFaces[i].style.background = "url('"+ images[i].src +"')";
            frontFaces[i].setAttribute("id", images[i].id);
            console.log(frontFaces[i].id);
        }
    }

    function flipCard(){
        var faces = this.getElementsByClassName("face"); // variável para ser atribuida nos elementos com classe face
        faces[0].classList.toggle("flipped"); // indice 0 componhe a classe back
        faces[1].classList.toggle("flipped"); // indice 1 componhe a classe front
        
    }
}());
