

function generaTabla(){
	nuevatabla=document.createElement("table");
	nuevatabla.setAttribute("id","tabla_elementos");
	nuevatabla.setAttribute("style","text-align:center;width:100%;border-collapse:collapse");
	div = document.getElementById("tabla");
	div.appendChild(nuevatabla);
	nuevoth=document.createElement("th");
	nuevatabla.appendChild(nuevoth);
	//filas de momento 6, siempre han de ser pares
	for(var i=0;i<5;i++){
		nuevotr=document.createElement("tr");
		nuevatabla.appendChild(nuevotr);
		for(var j=0;j<5;j++){			
			nuevotd=document.createElement("td");
			nuevotd.setAttribute("style","border:1px solid black;");
			valor=aleatorio(0,4);
			if(valor==0){
				nuevoinput=document.createElement("input");
				nuevoinput.setAttribute("type","radio");
				nuevotd.appendChild(nuevoinput);
			}else if(valor==1){
				nuevoinput=document.createElement("input");
				nuevoinput.setAttribute("type","checkbox");
				nuevotd.appendChild(nuevoinput);
			}else if(valor==2){
				nuevoinput=document.createElement("input");
				nuevoinput.setAttribute("type","text");
				nuevotd.appendChild(nuevoinput);
			}else if(valor==3){
				nuevoinput=document.createElement("input");
				nuevoinput.setAttribute("type","button");
				nuevotd.appendChild(nuevoinput);
			}
			nuevotr.appendChild(nuevotd);
		}
	}
	asignarEventos();
}

function aleatorio(inicio,fin) {
	var rango=fin-inicio + 1; 
	var numAleatorio = parseInt((Math.random()*rango)+inicio);
	return numAleatorio;
}

// function queElemento(e){
	// var cell=e.target||window.event.srcElement;
	// console.log("celda valor:"+cell.tagName);
	// console.log("celda valor:"+cell.type);
	// if(cell.tagName=="input"){
		// console.log("INPUT");
	// }else{
		// columna=parseInt(cell.cellIndex);
		// fila=parseInt(cell.parentNode.rowIndex);
		// console.log("Fila: "+fila+" Columna: "+columna);
		// var elemento=document.getElementById("tabla_elementos").rows[fila].cells[columna];
		// var hijos=elemento.childNodes;
		// if(elemento.hasChildNodes()){
			// console.log(hijos[0]);
			// if(hijos[0].type=="text"){
				// alert("Es un input tipo text");
			// }else if(hijos[0].type=="radio"){
				// alert("Es un input tipo radio");
			// }else if(hijos[0].type=="checkbox"){
				// alert("Es un input tipo checkbox");
			// }else if(hijos[0].type=="button"){
				// alert("Es un input tipo button");
			// }
		// }else{
			// alert("Esta casilla no tiene input");
		// }
	// }
// }


function queElementoI(e){
	var cell=e.target||window.event.srcElement;
	console.log("celda valor:"+cell.tagName);
	console.log("celda valor:"+cell.type);
	if(cell.type=="text"){
		alert("Es un input tipo text");
	}else if(cell.type=="radio"){
		alert("Es un input tipo radio");
	}else if(cell.type=="checkbox"){
		alert("Es un input tipo checkbox");
	}else if(cell.type=="button"){
		alert("Es un input tipo button");
	}else{
		columna=parseInt(cell.cellIndex);
		fila=parseInt(cell.parentNode.rowIndex);
		console.log("Fila: "+fila+" Columna: "+columna);
		var elemento=document.getElementById("tabla_elementos").rows[fila].cells[columna];
		var hijos=elemento.childNodes;
		if(elemento.hasChildNodes()){
			console.log(hijos[0]);
			if(hijos[0].type=="text"){
				alert("Es un input tipo text");
			}else if(hijos[0].type=="radio"){
				alert("Es un input tipo radio");
			}else if(hijos[0].type=="checkbox"){
				alert("Es un input tipo checkbox");
			}else if(hijos[0].type=="button"){
				alert("Es un input tipo button");
			}
		}else{
			alert("Esta casilla no tiene input");
		}
	}
}


// function elementoInput(e){
	// var elemento=e.target||window.event.srcElement;
	// console.log("Es un input");
// }

function asignarEventos(){ //asigna a los elementos que aparecen los eventos que vemos
	if (document.readyState=="complete"){
		//extender info
		var tds=document.getElementsByTagName("td");
		for(var i=0;i<tds.length;i++){
			tds[i].addEventListener("click",queElementoI);
		}
		// var inputs=document.getElementsByTagName("input");
		// for(var j=0;j<inputs.length;j++){
			// inputs[j].addEventListener("click",queElementoI);
		// }
	}
}

window.onload=function(){
	generaTabla();
}
