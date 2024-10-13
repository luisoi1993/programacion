var seleccionado; //=document.getElementById("raiz")
function queElemento(e) {
	var elemento = e.target || window.event.srcElement;
	//borramos y volvemos a colocar el nombre de su clase original
	if(seleccionado!=null){
		if((seleccionado.textContent).charAt(0)=="/"){
			seleccionado.className="raiz";
		}else{
			seleccionado.className="hijo";
		}
	}
	//sel elemento
	seleccionado=elemento;
	//pintamos elemento seleccionado
	if((seleccionado.textContent).charAt(0)=="/"){
		console.log(seleccionado.textContent);
		seleccionado.className="raizS";
	}else{
		console.log(seleccionado.textContent);
		seleccionado.className="hijoS";
	}
}


function generaElemento(){
	var hijos=seleccionado.childNodes;
	//con el length de los hijos vemos si se añade solo una li (si ya tiene un ul definido) o también añadimos un ul en el caso contrario
	if(hijos.length>1){
		console.log("ESTE ELEMENTO TIENE HIJOS");
		//sacamos los hijos del elemento 1, el elemento 0 es el textContent
		var hijos2=hijos[1].childNodes;
		nuevoitem=document.createElement("li");
		nuevoitem.setAttribute("class","hijo");
		nombrepadre=(seleccionado.firstChild).textContent;//saco el nombre del primer hijo del elemento seleccionado en el caso de que sí tenga otros li
		var nombrecarpeta;								  //esto me servirá para nombrar las carpetas con sus números correspondientes
		if(nombrepadre=="/"){
			nombrecarpeta="Elemento "+(hijos2.length);//los hijos directos de la carpeta raíz, Elemento + posición que ocupan en la lista o array
		}else{
			nombrecarpeta=nombrepadre+(hijos2.length); //nombre del firstChild más la posición que ocupan en la lista o array
		}
		nuevotexto=document.createTextNode(nombrecarpeta);
		nuevoitem.appendChild(nuevotexto);
		hijos[1].appendChild(nuevoitem);
	}else{
		console.log("ESTE ELEMENTO NO TIENE HIJOS");
		var hijos2=seleccionado.childNodes;
		nuevoarbol=document.createElement("ul");
		nuevoitem=document.createElement("li");
		nuevoitem.setAttribute("class","hijo");//clase que le da el icono a los puntos
		nombrepadre=seleccionado.innerHTML;//en este caso como no tiene hijos, tenemos que sacar el nombre del elemento seleccionado para nombrar al hijo
		var nombrecarpeta;
		if(nombrepadre=="/"){
			nombrecarpeta="Elemento 0";//primer elemento creado se llamará así
		}else{
			nombrecarpeta=nombrepadre+0;//Elemento 0, Elemento 00, Elemento 000...
		}
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

//función que da la clase para pintar directorio raíz
function pintaRaiz(){
	document.getElementById("raiz").className="raiz";
}
window.onload=function(){
	pintaRaiz();
}