var botonEncriptar = document.getElementById("encriptar");

var botonDesencriptar = document.getElementById("desencriptar");

var botonCopiar = document.getElementById("boton-copiar");

var textoUsuario = document.getElementById("texto-usuario");

var textoResultado = document.getElementById("texto-resultado");


botonCopiar.classList.add("esconder");

botonEncriptar.addEventListener("click", function(){

    
    var ningunMensaje = document.querySelector(".noResultado");
    var errores = validar(textoUsuario);

    var encriptar = textoUsuario.value;
    var encriptarMensaje = 
    encriptar
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

    if(errores.length > 0){
        ningunMensaje.classList.remove("esconder");
        botonCopiar.classList.add("esconder");
        textoUsuario.value = "";
        return textoResultado.value = "";
    }else{
        textoResultado.value = encriptarMensaje;

    }

    /*Desaparecer y aparecer la imagen del muneco y el boton copiar*/

    if(textoResultado.value == encriptarMensaje){
        ningunMensaje.classList.add("esconder");
        botonCopiar.classList.remove("esconder")
        
        
    }

    if (textoResultado.value == ""){
        ningunMensaje.classList.remove("esconder");
        botonCopiar.classList.add("esconder");
        
        
    }
    
    
});

    









