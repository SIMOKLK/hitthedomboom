 document.addEventListener("click", function(event){
            let instrumento = event.target.dataset.instrumento;
            const sonido = document.querySelector("audio[data-instrumento="+ instrumento +"]");
            let cambio = ({
                borderwidth: "2px",
                orderstyle: "outset",
                bordercolor: "-internal-light-dark(rgb(118, 118, 118), rgb(195, 195, 195))",
                borderimage: "initial"
            };

            if(!sonido) return;
            sonido.currentTime = 0;
            cambio.play();
            sonido.play();
            console.log(instrumento);
        });