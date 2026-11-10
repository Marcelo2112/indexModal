const botonAbrirModal = document.getElementById("abrirmodal")
const modal = document.getElementById("modal")

botonAbrirModal.addEventListener("click",function(){

    // modal.style.display = "flex"
    
    console.log("Boton funcionando")
    
    modal.style.display = "flex";
});

const cerrarModal = document.getElementById("cerrarmodal");

cerrarModal.addEventListener("click",function(){

    modal.style.display = "none"

})


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

    if(nombreUsuario === ""){
        alert("El nombre no puede ser vacio");
        return;
    }

    modal.style.display = "none"










});


