function login(){
    iniciarSesion1();
    iniciarSesion2();
}
function iniciarSesion1(){
    var usuario, clave;
    usuario = document.getElementById("usuario").value;
    clave = document.getElementById("clave").value;
  
    if(usuario == "admin" && clave =="123" ){
        window.location = "../vista/index2.html";}
        
        else if(usuario == "usuario" && clave =="12345"){
            window.location = "../vista/index1.html";
        }
    else{
        alert("El usuario o contraseña es incorrecto");
    }
}
  
