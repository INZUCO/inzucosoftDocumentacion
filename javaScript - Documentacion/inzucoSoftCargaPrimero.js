/*FUNCIONES*/
function retornoDatos(radio){
	this.radio = radio;
	return 3.1416 * (radio*radio)
}

/*Variable global...
  Al estar fuera de la funcion es una variable global*/
var $total = 0;


/*FECHA y HORA*/
function fechahora1(){
	var salida01 = "";
	var datos01 = new Date();

	salida01 += "<br> FECHA: " 		+ datos01.getDate();
	salida01 += "<br> MES: " 		+ datos01.getMonth();
	salida01 += "<br> AÑO: " 		+ datos01.getFullYear();
	salida01 += "<br> HORAS: " 		+ datos01.getHours();
	salida01 += "<br> MINITOS: " 	+ datos01.getMinutes();
	salida01 += "<br> SEGUNDOS: " 	+ datos01.getSeconds();
	document.getElementById("demo1").innerHTML = salida01;
}
