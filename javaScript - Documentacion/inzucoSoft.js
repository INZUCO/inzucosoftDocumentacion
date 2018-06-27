

/*Funciones*/
function holaMundo1(){
	alert('hola desde la funcion');
}

function holaMundo2($parametro){
	alert('hola ' + $parametro + ' desde la funcion')
}

function holaMundo3(a,b){
	$resultado = a * b;
	alert('EL resultado es ... ' + $resultado);
}

function recuperarDatos(id1, nombre2, valor3){
	/*Recuperar los datos de un boton*/
	var mensaje1 = "El ID del boton es... " + id1 + "\n";
	var mensaje2 = "El NOMBRE del boton es... " + nombre2 + "\n";
	var mensaje3 = "El VALOR del boton es... " + valor3 + "\n";
	alert(mensaje1 + mensaje2 + mensaje3);
}


/*======================================================
					ID
======================================================*/
var DivUno = document.getElementById('div1').innerHTML;
/*alert(DivUno);*/
/*Modifica el texto...*/
document.getElementById('div1').innerHTML = "<p> .: Este es el nuevo Contenido DIV :. </p>";


/*======================================================
					Historial
======================================================*/
/*https://www.w3schools.com/jsref/obj_history.asp*/
function siguiente(){
	history.forward()
}

function atras(){
	history.back()
}

/* LOCATION */
function conservaH(){
	document.location.href = "https://www.youtube.com/";
}

function borraH(){
	document.location.replace('https://www.youtube.com/');
}

function recarga1(){
	document.location.reload();
}
function recarga2(){
	document.location.reload(true);
}

/*NAVIGATOR*/

var txt = "";
txt += "<table>";
txt += "<p><strong>	Browser CodeName:</strong> " + navigator.appCodeName + "</p>";
txt += "<p><strong>	Browser Name:</strong> " + navigator.appName + "</p>";
txt += "<p><strong>	Browser Version:</strong> " + navigator.appVersion + "</p>";
txt += "<p><strong>	Cookies Enabled:</strong> " + navigator.cookieEnabled + "</p>";
txt += "<p><strong>	Browser Language:</strong> " + navigator.language + "</p>";
txt += "<p><strong>	Browser Online:</strong> " + navigator.onLine + "</p>";
txt += "<p><strong>	Platform: </strong>" + navigator.platform + "</p>";
txt += "<p><strong>	User-agent </strong>header: " + navigator.userAgent + "</p>";
txt += "</table>";

document.getElementById("demo").innerHTML = txt;

