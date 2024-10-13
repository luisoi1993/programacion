var seleccionado; //=document.getElementById("raiz")
function queElemento(e) {
	// if(seleccionado.className=="seleccionado"){
		// seleccionado.className="";
	// }
	var elemento = e.target || window.event.srcElement;
	console.log("Elemento: "+elemento);
	seleccionado=elemento;
	// seleccionado.className="seleccionado";
	// console.log(seleccionado.className);
}

function generaElemento(){
	console.log("Seleccionado: "+seleccionado);
	var hijos=seleccionado.childNodes;
	if(hijos.length>1){
		console.log("ESTE ELEMENTO NO TIENE HIJOS");
		nuevoitem=document.createElement("li");
		nombrecarpeta=prompt("Escribe un nombre para la carpeta: ");
		nuevotexto=document.createTextNode(nombrecarpeta);
		nuevoitem.appendChild(nuevotexto);
		hijos[1].appendChild(nuevoitem);
	}else{		
		console.log("ESTE ELEMENTO TIENE HIJOS");
		nuevoarbol=document.createElement("ul");
		nuevoitem=document.createElement("li");
		nombrecarpeta=prompt("Escribe un nombre para la carpeta: ");
		nuevotexto=document.createTextNode(nombrecarpeta);
		nuevoitem.appendChild(nuevotexto);
		nuevoarbol.appendChild(nuevoitem);
		seleccionado.appendChild(nuevoarbol);
	}
}

function eliminaElemento(){
	if(seleccionado.id=="raiz"){
		alert("No se puede eliminar la carpeta raíz.");
	}else{
		padre=seleccionado.parentNode;
		console.log(padre);
		padre.removeChild(seleccionado);
	}
}

function asignarEventos(){ 
	if (document.readyState=="complete"){
		document.getElementById("arboleada").addEventListener("click",queElemento);
		document.getElementById("agregar").addEventListener("click",generaElemento);
		document.getElementById("eliminar").addEventListener("click",eliminaElemento);
	}
}

document.addEventListener("readystatechange",asignarEventos);
// window.onload=function(){
	// asignarEventos();
// }