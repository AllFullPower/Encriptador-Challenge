var botonDesencriptar = document.getElementById("desencriptar");

var botonEncriptar = document.getElementById("encriptar");

var textoResultado = document.getElementById("texto-resultado");

var textoNulo = document.getElementById("texto-nulo");

var textoNuloBoton = document.getElementById("boton-ok");

var fondoNegro = document.getElementById("fondo-negro");

fondoNegro.classList.add("esconder");
textoNulo.classList.add("esconder");

/*ENCRIPTAR*/
botonEncriptar.addEventListener("click", function(){

    if(textoResultado.value == ""){
        
        fondoNegro.classList.remove("esconder");
        textoNulo.classList.remove("esconder");
        setTimeout(function(){
            
            textoNulo.classList.add("animacion");
        }, 10); 
         
    }
})

textoNuloBoton.addEventListener("click", function(){
    textoNulo.classList.remove("esconder");
    fondoNegro.classList.remove("ensenar");
    

    setTimeout(function(){

        textoNulo.classList.remove("animacion");
    }, 10)
})

/*DESENCRIPTAR*/


botonDesencriptar.addEventListener("click", function(){
    if(textoResultado.value == ""){

        fondoNegro.classList.remove("esconder");
        textoNulo.classList.remove("esconder");
        setTimeout(function(){
            
            textoNulo.classList.add("animacion");
        }, 10); 
         
    }
})

textoNuloBoton.addEventListener("click", function(){
    

    setTimeout(function(){
        fondoNegro.classList.add("esconder");
        textoNulo.classList.add("esconder");
        textoNulo.classList.remove("animacion");

    }, 10)
})



