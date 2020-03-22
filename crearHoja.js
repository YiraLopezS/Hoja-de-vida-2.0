$(document).ready(crear);

function crear(){
    document.getElementById("Nombre").innerHTML = window.localStorage.getItem("name");
    document.getElementById("Telefono").innerHTML = window.localStorage.getItem("phone");
    document.getElementById("Correo").innerHTML = window.localStorage.getItem("email");
    document.getElementById("Direccion").innerHTML = window.localStorage.getItem("add");
    document.getElementById("Cedula").innerHTML = window.localStorage.getItem("document");
    document.getElementById("Edad").innerHTML = window.localStorage.getItem("age");
	document.getElementById("Experiencia").innerHTML = window.localStorage.getItem("exp");
    document.getElementById("secD").innerHTML = window.localStorage.getItem("secD");
    document.getElementById("secH").innerHTML = window.localStorage.getItem("secH");
    document.getElementById("uniD").innerHTML = window.localStorage.getItem("uniD");
    document.getElementById("uniH").innerHTML = window.localStorage.getItem("uniH");

}