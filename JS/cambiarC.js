function validacionC(){
    validarClave()
}
function validarClave() {
    if (formulario.clave1.value != 0 && formulario.clave2.value !=0 && formulario.clave3.value  ) {
        window.location = "../app/login.html";
    }
    else{
        alert('complete los campos');
    }
    
}

