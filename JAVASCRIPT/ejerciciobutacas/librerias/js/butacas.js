//variables

function aleatorio(inicio,fin) {
	var rango=fin-inicio + 1; 
	var numAleatorio = parseInt((Math.random()*rango)+inicio);
	return numAleatorio;
}

function filaAleatoria(pos){
	var filaAleatoria=new Array (pos);
	var i=0;
	filaAleatoria[i]=aleatorio(0,14);
	for(i=1;i<filaAleatoria.length;i++){
		filaAleatoria[i]=aleatorio(0,14);
		for(var j=0;j<i;j++){
			if(filaAleatoria[i]==filaAleatoria[j]){
				i--;
			}
		}
	}
	return filaAleatoria;
 }

function cambiarColor(e){ // e target es donde lanzamos evento MUY IMPORTANTE PARA APLICAR EVENTOS 
	var cell = e.target || window.event.srcElement;
	if(cell.className=="libre"){
		cell.className="asignado";
	}else if(cell.className=="asignado"){
		cell.className="libre";
	}else if(cell.className=="ocupado"){
		alert("Ese asiento está ocupado, seleccione otro.");
	}
}


// function asignarEventos(){ //asigna cada uno de mis elementos los eventos adapatarlo a dos bucles for 00,01,02... (en tabla) cambiar el id
	// if (document.readyState=="complete"){															//de los elementos de mi tabla
		// for(var i=0;i<10;i++){
			// for(var j=0;j<15;j++){
				// if(j>9){
					// celda=document.getElementById("celda0"+i+j);
				// }else{
					// celda=document.getElementById("celda0"+i+"0"+j);
				// }
				// celda.addEventListener("click",cambiarColor);
			// }
		// }
	// }
// }
var arrayLibres=[];
console.log(arrayLibres);

function crearTabla(){
	var contadorLibres=0;
	var filasAleatorias;
	var body=document.getElementsByTagName("body")[0];//importante si coges el body poner el [0]
	var tabla = document.createElement("table");
	body.appendChild(tabla);
	for(var i=0;i<10;i++){
		var tr=document.createElement("tr");
		tabla.appendChild(tr);
		filasAleatorias=filaAleatoria(13);
		for(var j=0;j<15;j++){
			var td = document.createElement("td");
			if(j>9){
				td.setAttribute("id","celda0"+i+j);
			}else{
				td.setAttribute("id","celda0"+i+"0"+j);
			}
			if(filasAleatorias.includes(j)){
				td.setAttribute("class","ocupado");
			}else{
				td.setAttribute("class","libre");
				if(j>9){
					pos=(""+0+i+j);
				}else{
					pos=(""+0+i+0+j);
				}
				arrayLibres[contadorLibres]=pos;
				contadorLibres++;
			}
			tr.appendChild(td);
		}
	}
	tabla.addEventListener("click",cambiarColor);
}


function generaAsientos(){
	var celda1;
	var celda2;
	var pos;
	var i=0;
	
	var encontrado=false;
	while(i<arrayLibres.length-1){
		if((arrayLibres[i+1]-arrayLibres[i])==1){
			encontrado=true;
			pos=i;
			i=arrayLibres.length+1;
		}
		i++;
	}
	
	if(encontrado){
		celda1=document.getElementById("celda"+arrayLibres[pos]);
		celda2=document.getElementById("celda"+arrayLibres[pos+1]);
		
		celda1.className="asignado";
		celda2.className="asignado";
	}else{
		alert("No se han podido encontrar dos asientos contiguos. Por favor, seleccione los que quiera.");
	}
}

// function generaAsientos(){ // e target es donde lanzamos evento MUY IMPORTANTE PARA APLICAR EVENTOS 
	// var asiento1;
	// var asiento2;
	// var encontrado=false;
	// var i=0;
	// var j=0;
	// while(i<10){
		// while(j<15){
			// if(j>9){
				// asiento1=document.getElementById("celda0"+i+j);
				// console.log(document.getElementById("celda0"+i+j));
				// asiento2=document.getElementById("celda0"+i+(j+1));
				// console.log(document.getElementById("celda0"+i+(j+1)));
			// }else{
				// asiento1=document.getElementById("celda0"+i+"0"+j);
				// console.log(document.getElementById("celda0"+i+j));
				// asiento2=document.getElementById("celda0"+i+"0"+(j+1));
				// console.log(document.getElementById("celda0"+i+(j+1)));
			// }
			// if(asiento1.className=="libre"&&asiento2.className=="libre"){
				// j=15;
				// i=10;
				// encontrado=true;
			// }else{
				// j++;
			// }
		// }
		// j=0;
		// i++;
	// }
	
	// if(encontrado==true){
		// asiento1.className=="asignado";
		// asiento2.className=="asignado";
	// }else{
		// alert("No se han podido encontrar dos asientos contiguos. Seleccione los que quiera.");
	// }
// }




// function generaAsientos(){
	// var celda;
	// // var celdaContigua;
	// var j=aleatorio(0,14);
	// for(var i=0;i<10;i++){
		// for(var j=0;j<15;j++){
			// if(j>9){
				// celda=document.getElementById("celda0"+i+j);
				// // celdaContigua=document.getElementById("celda0"+i+(j+1));
			// }else{
				// celda=document.getElementById("celda0"+i+"0"+j);
				// // celdaContigua=document.getElementById("celda0"+i+"0"+j+1);
			// }
			// if(celda.className=="libre"){
				// celda.className="asignado";
				// // celdaContigua.className=="asignado";
			// }else{
				// alert ("No se han podido seleccionar dos asientos contiguos. Por favor seleccione los que quiera.");
			// }
			
		// }
	// }
// }


function botonAsignar(){
	var body=document.getElementsByTagName("body")[0];
	var boton=document.createElement("button");
	boton.setAttribute("id","botoncito");
	boton.setAttribute("class","boton");
	var texto=document.createTextNode("genera asientos");
	boton.appendChild(texto);
	body.appendChild(boton);
	boton=document.getElementById("botoncito");
	boton.addEventListener("click",generaAsientos);
}


window.onload=function(){
	crearTabla();//al cargar la page ejecuta la funcion 
	botonAsignar();
}
// document.addEventListener("readystatechange",asignarEventos);

// function asignarEventos(){ //asigna cada uno de mis elementos los eventos adapatarlo a dos bucles for 00,01,02... (en tabla) cambiar el id
	// if(document.readyState=="complete"){															//de los elementos de mi tabla
		// boton=document.getElementById("btngenerar");
		// boton.addEventListener("click",generaAsientos(arrayLibres));	
	// }
// }

// document.addEventListener("readystatechange",asignarEventos);



