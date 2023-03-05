function validacion() {

    validarRedireccion()

}
function validarRedireccion() {
    if (formulario.nombre.value != 0 && formulario.apellido.value != 0 && formulario.fecha.value != 0 && formulario.cedula.value != 0 && formulario.correo.value != 0 && formulario.clave.value) {
        window.location = "../vista/index2.html";
    }
    else {
        alert("complete los campos");
    }

}

function validacionU(){
    validarRedireccionU()
}
function validarRedireccionU() {
    if (formulario.nombre.value != 0 && formulario.correo.value !=0 && formulario.clave.value ) {
        window.location = "../vista/index2.html";
    }
    else{
        alert('complete los campos');
    }
    
}

