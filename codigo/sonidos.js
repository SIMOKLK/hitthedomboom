 document.addEventListener("click", function(event){
            let instrumento = event.target.dataset.instrumento;
            const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
            if(!sonido) return;
            sonido.currentTime = 0;
            sonido.play();
            console.log(instrumento);
        });
