var botonDesencriptar = document.getElementById("desencriptar");

var textoUsuario = document.getElementById("texto-usuario");

var textoResultado = document.getElementById("texto-resultado");

var botonCopiar = document.getElementById("boton-copiar");


botonCopiar.classList.add("esconder");


botonDesencriptar.addEventListener("click", function(){

    var ningunMensaje = document.querySelector(".noResultado");


    var desencriptar = textoUsuario.value;
    var desencriptarMensaje = 
    desencriptar
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    textoResultado.value = desencriptarMensaje;

    /*Desaparecer y aparecer la imagen del muneco y el boton copiar*/
    
    if(textoResultado.value == desencriptarMensaje){
        ningunMensaje.classList.add("esconder");
        botonCopiar.classList.remove("esconder")
       
    }

    if (textoResultado.value == ""){
        ningunMensaje.classList.remove("esconder");
        botonCopiar.classList.add("esconder");
        
    }
})

/* BOTON COPIAR */

botonCopiar.addEventListener("click", function(){
    var mensajeEncriptado = textoResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
})

