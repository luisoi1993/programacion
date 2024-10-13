//Declarar tabla de 5x5 (asientos de una sala de cine) Sala01, quiero que todas las cajas aparezcan
//con el fondo verde. Al hacer click sobre una celda la ponemos en color rojo
//debemos usar el getElementById y classname document.getElementById().classname="rojo";
//											 document.getElementById().style="background-color:rojo";
//segundo click amarilla y tercer click vuelve a su estado inicial (verde)
//eventarget => id para lo de los colores ver para realizar el cambio de color


function cambioRojo(i){
	document.getElementById(i).className="rojo";
}

function cambioAmarillo(i){
	document.getElementById(i).className="amarillo";
}

function cambioVerde(i){
	document.getElementById(i).className="verde";
}
function asignarEventos(){
		for(var i=1;i<=25;i++){
			if(document.getElementById("cuadro"+i).className=="verde"){
				document.getElementById("cuadro"+i).addEventListener("click",cambioRojo("cuadro"+i));
			}else if(document.getElementById("cuadro"+i).className=="rojo"){
				document.getElementById("cuadro"+i).addEventListener("click",cambioAmarillo("cuadro"+i));
			}else if(document.getElementById("cuadro"+i).className=="amarillo"){
				document.getElementById("cuadro"+i).addEventListener("click",cambioVerde("cuadro"+i));
			}
		}
}

// var cuadros=document.getElementsByClassName("verde");
// console.log(cuadros);
// for(var i=0;i<cuadros.length;i++){
	// cuadros[i].addEventListener('click',function(){
		// alert("Puto javascript de mierdaasaaaaasasdasdffgefg sdfd");
	// });
// }


document.addEventListener("click",asignarEventos);

