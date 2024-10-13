//Declarar tabla de 5x5 (asientos de una sala de cine) Sala01, quiero que todas las cajas aparezcan
//con el fondo verde. Al hacer click sobre una celda la ponemos en color rojo
//debemos usar el getElementById y classname document.getElementById().classname="rojo";
//											 document.getElementById().style="background-color:rojo";
//segundo click amarilla y tercer click vuelve a su estado inicial (verde)
//eventarget => id para lo de los colores ver para realizar el cambio de color


// // // // function cambioRojo(i){
	// // // // document.getElementById(i).className="rojo";
// // // // }

// // // // function cambioAmarillo(i){
	// // // // document.getElementById(i).className="amarillo";
// // // // }

// // // // function cambioVerde(i){
	// // // // document.getElementById(i).className="verde";
// // // // }

// var cuadros=document.getElementsByClassName("verde");
// console.log(cuadros);
// for(var i=0;i<cuadros.length;i++){
	// cuadros[i].addEventListener('click',function(){
		// alert("Puto javascript de mierdaasaaaaasasdasdffgefg sdfd");
	// });
// }

function cambiarColor(e){ // e target es donde lanzamos evento MUY IMPORTANTE PARA APLICAR EVENTOS 
	var cell = e.target || window.event.srcElement;
	if(cell.className=="verde"){
		cell.className="rojo";
	}else if(cell.className=="rojo"){
		cell.className="amarillo";
	}else if(cell.className=="amarillo"){
		cell.className="verde";
	// cell.removeEventListener("click", cambiarColor) //para evitar que continue el proceso del cambio de color
	}
}

function asignarEventos(){ //asigna cada uno de mis elementos los eventos adapatarlo a dos bucles for 00,01,02... (en tabla) cambiar el id
	if (document.readyState=="complete"){															//de los elementos de mi tabla
			for (var j = 0; j<25; j++){
				cuadro=document.getElementById("cuadro"+j);
				cuadro.addEventListener("click",cambiarColor);
			}
	}
}

document.addEventListener("readystatechange",asignarEventos);

