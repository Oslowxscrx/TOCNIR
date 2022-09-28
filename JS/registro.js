function validacion() {


    validarNombre();
    validarApellido();
    validarfecha()
    validarcorreo()
    validarclave()
    validarRedireccion()


}
function validarNombre() {
    if (formulario.nombre.value == 0) {
        alert("Falta nombre");
    }
}
function validarApellido() {
    if (formulario.apellido.value == 0) {
        alert("Falta apellido");
    }
}
function validarfecha() {
    if (formulario.fecha.value == 0) {
        alert("ingrese fecha")
    }
}
function validarcorreo() {
    if (formulario.correo.value == 0) {
        alert("ingrese su correo electronico")
    }
}
function validarclave() {
    if (formulario.clave.value == 0) {
        alert("ingrese su contraseña")
    }
}
function validarRedireccion() {
    if(formulario.correo.value != 0 &&  formulario.apellido.value !=0 && formulario.fecha.value !=0 && formulario.nombre.value !=0 && formulario.clave.value !=0){
        window.location = "../vista/index2.html";
    }
    else{
        alert("complete los campos");
    }
    
}