var botonDesencriptar = document.getElementById("desencriptar");

var textoUsuario = document.getElementById("texto-usuario");

var textoResultado = document.getElementById("texto-resultado");

var botonCopiar = document.getElementById("boton-copiar");


botonCopiar.classList.add("esconder");


botonDesencriptar.addEventListener("click", function(){

    var ningunMensaje = document.querySelector(".noResultado");

    var errores = validar(textoUsuario);

    var desencriptar = textoUsuario.value;
    var desencriptarMensaje = 
    desencriptar
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

    if(errores.length > 0){
        ningunMensaje.classList.remove("esconder");
        botonCopiar.classList.add("esconder");
        return textoResultado.value = "";
    }else{
        textoResultado.value = desencriptarMensaje;
    }

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


/* VALIDADOR */

function validar (textoUsuario){
    var errores = [];

    if (textoUsuario.value == 0){
        errores.push(+1);
    }
    return errores;
}