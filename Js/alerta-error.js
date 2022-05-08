var botonDesencriptar = document.getElementById("desencriptar");

var botonEncriptar = document.getElementById("encriptar");

var textoResultado = document.getElementById("texto-resultado");

var textoNulo = document.getElementById("texto-nulo");

var textoNuloBoton = document.getElementById("boton-ok");

var cuerpo = document.querySelector("body");





textoNulo.classList.add("esconder");

/*ENCRIPTAR*/
botonEncriptar.addEventListener("click", function(){

    if(textoResultado.value == ""){

        
        crearCaja();

        textoNulo.classList.remove("esconder");
        setTimeout(function(){
            
            textoNulo.classList.add("animacion");
        }, 10); 
         
    }
})

textoNuloBoton.addEventListener("click", function(){
    
    borrarCaja();
    
    setTimeout(function(){
        textoNulo.classList.add("esconder")
        textoNulo.classList.remove("animacion");
    }, 10)
})

/*DESENCRIPTAR*/


botonDesencriptar.addEventListener("click", function(){
    if(textoResultado.value == ""){


        crearCaja();

        textoNulo.classList.remove("esconder");
        setTimeout(function(){
            
            textoNulo.classList.add("animacion");
        }, 10); 
         
    }
})


textoNuloBoton.addEventListener("click", function(){
    
    borrarCaja();
    setTimeout(function(){
        textoNulo.classList.add("esconder");
        textoNulo.classList.remove("animacion");

    }, 10)
})

/* FONDO NEGRO */

function crearCaja(){
    var caja = document.createElement("div");
    caja.setAttribute("id", "fondo-negro")
    caja.setAttribute("class", "fondo-negro")
    
    
    return cuerpo.appendChild(caja);
}

function borrarCaja(){
    document.body.removeChild(document.getElementById("fondo-negro"));
}




