 document.addEventListener("click", function(event){

    let instrumento = event.target.dataset.instrumento;
    
    let audioInstrumento = document.querySelector("audio[data-instrumento=" + instrumento + "]");

    audioInstrumento.play();
    audioInstrumento.currentTime = 0;
    console.log(instrumento);


    let animado = event.target.classList.add("cambio");
    

           
    

           
            
        });
