(function(){
    var images = [];

    var flippedCards = [];

    var modalGameover = document.querySelector("#modalGameOver");

    for (var i = 0; i < 10; i++){
        var img = {
            src: "img/" + i + ".png",
            id: i%5 
        };
        images.push(img);
    }
    startGame();

    function startGame(){
        flippedCards = [];
        images = randomSort(images); // função para embaralhar as cartas

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

    function randomSort(oldArray){
        //console.log(Math.floor(Math.random()*11)); //gera 1 número aleatório que não chega a 11 ou seja de 0 a 10
        //var arrTeste = ["Banana", "Morango", "Maca"];
        //console.log(arrTeste.length);

        var newArray = [];

        while(newArray.length !== oldArray.length){
            var i = Math.floor(Math.random()*oldArray.length);

            if(newArray.indexOf(oldArray[i]) < 0){
                newArray.push(oldArray[i]);
            }

        }

        return newArray;
    }

    function flipCard(){
        if (flippedCards.length < 2 ){
            var faces = this.getElementsByClassName("face"); // variável para ser atribuida nos elementos com classe face

            if(faces[0].classList.length > 2){
                return;
            }

        faces[0].classList.toggle("flipped"); // indice 0 componhe a classe back
        faces[1].classList.toggle("flipped"); // indice 1 componhe a classe front

        flippedCards.push(this);
        } else {
            flippedCards[0].childNodes[1].classList.toggle("flipped");
            flippedCards[0].childNodes[3].classList.toggle("flipped");
            flippedCards[1].childNodes[1].classList.toggle("flipped");
            flippedCards[1].childNodes[3].classList.toggle("flipped");

            flippedCards = [];
        }
    
    }

    function gameOver(){
        modalGameover.style.zIndex = 10;
    }

}());
