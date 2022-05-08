var escritura = document.querySelector("#texto-usuario");

escritura.addEventListener("keyup", function(){

    escritura.classList.remove("lapiz-escribiendo");

  
})

escritura.addEventListener("keydown", function(){
    escritura.classList.add("lapiz-escribiendo");
})

  


