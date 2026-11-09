const botonAbrirModal = document.getElementById("abrirmodal")
const modal = document.getElementById("modal")

botonAbrirModal.addEventListener("click",function(){

    // modal.style.display = "flex"
    
    console.log("Boton funcionando")
    
    modal.style.display = "flex";
});


// botones de modal
const botonGuardarDatos = document.getElementById("guardardatosmodal");

// funcionalidad del boton
botonGuardarDatos.addEventListener("click", function(){
    // Variable valor usuario

    const nombreUsuario = document.getElementById("nombreusuario").value;
    const apellidoUsuario = document.getElementById("apellidousuario").value;

    console.log("Entrando");
    console.log("Nombre: ", nombreUsuario);
    console.log("Apellido: ", apellidoUsuario);
});