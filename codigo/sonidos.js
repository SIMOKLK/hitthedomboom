 document.addEventListener("click", function(event){
            let instrumento = event.target.dataset.instrumento;
            const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
            
            let bordes = document.getElementsByClassName("botones");
            const animacion = document.querySelectorAll("button[data-instrumento"+ bordes + "]")
            bordes.style.border = (bordes.style.border === "none") ? "block" : "none";
            if(!sonido) return;
            sonido.currentTime = 0;
            sonido.play();
            animacion.on();
            console.log(instrumento);
        });
