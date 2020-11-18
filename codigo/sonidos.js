 document.addEventListener("click", function(event){
            let numero = event.target.dataset.numero;
            const sonido = document.querySelector("audio[data-numero="+ numero +"]");
            if(!sonido) return;
            sonido.currentTime = 0;
            sonido.play();
            console.log(numero);
        });