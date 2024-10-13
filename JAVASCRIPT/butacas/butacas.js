function inicializa_xhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}

function cargar_sala_php(){
	var idSa="";
	var accion="cargar_valor_sala";
	peticion_http_cargar_sala=inicializa_xhr();
	peticion_http_cargar_sala.onreadystatechange=procesaRespuesta_cargar_sala_php;//si pongo parentesis me da error
	peticion_http_cargar_sala.open("POST","./butacas.php",true);
	peticion_http_cargar_sala.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var query_sala="idSa_js="+encodeURIComponent(idSa)+"&accion_js="+encodeURIComponent(accion)+"&nocache=";
	peticion_http_cargar_sala.send(query_sala);
}

function procesaRespuesta_cargar_sala_php(){
	if(peticion_http_cargar_sala.readyState==4){
		if(peticion_http_cargar_sala.status==200){
			var respuesta=peticion_http_cargar_sala.responseText;
			cargarOpciones(respuesta);
			console.log(respuesta);
		}else{
			console.log("No se han podido recuperar datos.");
		}
	}
}

function cargar_butacas_php(id){
	var idSa=id;
	console.log("IDDDDD "+id);
	var accion="cargar_butacas";
	peticion_http_butacas=inicializa_xhr();
	peticion_http_butacas.onreadystatechange=procesaRespuesta_butacas_php;//si pongo parentesis me da error
	peticion_http_butacas.open("POST","./butacas.php",true);
	peticion_http_butacas.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	var query_butacas="idSa_js="+encodeURIComponent(idSa)+"&accion_js="+encodeURIComponent(accion)+"&nocache=";
	peticion_http_butacas.send(query_butacas);
}


function procesaRespuesta_butacas_php(){
	console.log("ReadyState="+peticion_http_butacas.readyState);
	if(peticion_http_butacas.readyState==4){
		if(peticion_http_butacas.status==200){
			eliminarTabla();
			var respuesta=peticion_http_butacas.responseText;
			crearTabla(respuesta);
		}else{
			console.log("No se han podido recuperar datos.");
		}
	}
}

function cargarOpciones(respuesta){
	var datostotales=respuesta;
	var datosfila=datostotales.split(";");
	var nuevooption;
	var datos;
	for(var i=0;i<datosfila.length-1;i++){
		nuevooption=document.createElement("option");
		nuevooption.setAttribute("value",datosfila[i]);
		nuevooption.innerHTML=datosfila[i];
		document.getElementById("selectSalas").appendChild(nuevooption);
	}
	cargaSala();
	asignarEventosSelect();
}

function cargaSala(){
	var elemento=document.getElementById("selectSalas");
	var hijos=elemento.childNodes;
	var elementoseleccionado;
	for(var i=0;i<hijos.length;i++){
		if(hijos[i].selected==true){
			elementoseleccionado=hijos[i];
		}
	}
	var valorID=elementoseleccionado.value;
	cargar_butacas_php(valorID);
}



function eliminarTabla(){
	document.getElementById("tablabutaca").innerHTML="";
}

function cambiarColor(e){ 
	var seleccionadas=document.getElementsByClassName("asignado");
	var cell = e.target || window.event.srcElement;
	if(seleccionadas.length<3){
		if(cell.className=="libre"){
			cell.className="asignado";
		}else if(cell.className=="asignado"){
			cell.className="libre";
		}else if(cell.className=="ocupado"){
			alert("Ese asiento está ocupado, seleccione otro.");
		}	
	}else{
		if(cell.className=="asignado"){
			cell.className="libre";
		}else if(cell.className=="ocupado"){
			alert("Ese asiento está ocupado, seleccione otro.");
		}else{
			alert("Solo puedes seleccionar 3 asientos");
		}
	}
}


function crearTabla(respuesta){
	var totaldatos=respuesta;
	var datos=totaldatos.split('/');
	var arraySalas=datos[1].split(';');
	var filatabla=datos[2];
	var coltabla=arraySalas.length;
	var contadorLibres=0;
	var body=document.getElementById("tablabutaca");//añadido al div vacío de tablabutaca
	var tabla = document.createElement("table");
	tabla.setAttribute("id","tablapintada");
	tabla.setAttribute("style","margin:auto;");
	body.appendChild(tabla);
	for(var i=0;i<coltabla;i++){
		var tr=document.createElement("tr");
		tabla.appendChild(tr);
		for(var j=0;j<filatabla;j++){
			var td = document.createElement("td");
			tr.appendChild(td);
		}
	}
	var espacios;//numero de columna que se va a pintar en fila (j en este caso)
	var datosfila;
	var comienzo;
	var numerofila;
	var options=document.getElementsByTagName("option");
	var fila;
	var contador=0;
	for(var j=0;j<coltabla-1;j++){
		datosfila=arraySalas[j].split(',');
		comienzo=parseInt((filatabla-datosfila[1])/2);
		espacios=parseInt(datosfila[1])+comienzo;//he tenido que parsear el dato a int porque me venia como cadena de la base de datos
		if(j>10){
			fila=j;
		}else{
			fila="0"+j;
		}
		for(var k=comienzo;k<espacios;k++){
			document.getElementById("tablapintada").rows[j].cells[k].className="libre";
			if(contador<10){
				document.getElementById("tablapintada").rows[j].cells[k].id=fila+"0"+contador;
			}else{
				document.getElementById("tablapintada").rows[j].cells[k].id=fila+""+contador;
			}
			contador++;
		}
		contador=0;
	}
	cargarOcupadas();
	tabla.addEventListener("click",cambiarColor);
}

function asignarEventosSelect(){ 
	if (document.readyState=="complete"){															
		document.getElementById("selectSalas").addEventListener("change",cargaSala);
	}
}


function cargarOcupadas(){
	var ocupados=["0005","0009","0105","0001","0003","0112","0007","0107","0109","0110","0101","0103"];
	var elemento;
	for(var i=0;i<ocupados.length;i++){
		elemento=document.getElementById(ocupados[i]);
		elemento.className="ocupado";
		
	}
	// document.getElementById("encontrar").addEventListener("click",generaAsientos);
}

function generaAsientos(){
	var butacas = document.getElementsByClassName("libre");
	var asignado=document.getElementsByClassName("asignado");
	console.log(butacas);
	var fila;
	var mismafila;
	var mismafila3;
	var numero1;
	var numero2;
	var numero3;
	var resta;
	var resta2;
	var elemento1;
	var elemento2;
	var elemento3;
	var boleano=false;
	if(asignado.length==0){
		for(var i=0;i<butacas.length;i++){
			fila=(butacas[i].id).substr(0,2);
			mismafila=(butacas[i+1].id).substr(0,2);
			if(typeof butacas[i+2] == 'undefined'){
				boleano=true;
				i=butacas.length;
			}else{
				mismafila3=(butacas[i+2].id).substr(0,2);
				if(fila==mismafila&&fila==mismafila3){
					numero1=(butacas[i].id).substr(2,4);
					elemento1=butacas[i];
					numero2=(butacas[i+1].id).substr(2,4);
					elemento2=butacas[i+1];
					numero3=(butacas[i+2].id).substr(2,4);
					elemento3=butacas[i+2];
					resta=numero2-numero1;
					resta2=numero3-numero2;
					if(resta==1&&resta2==1){
						elemento1.className="asignado";
						elemento2.className="asignado";
						elemento3.className="asignado";
						i=butacas.length;
					}
				}	
			}

		}
		if(boleano){
			alert("No hemos podido encontrar 3 asientos contiguos, por favor seleccione los que desee.");
		}
	}else{
		alert("Ya se han asignado 3 asientos o has seleccionado asientos.");
	}

	
}

function reservar(){
	var seleccionadas=document.getElementsByClassName("asignado");
	var cadena="Se han reservado los asientos:";
	if(seleccionadas.length!=0){
		for(var i=0;i<seleccionadas.length;i++){
			cadena+="\n- "+seleccionadas[i].id;
		}
		
		alert(cadena);
	}else{
		alert("No se han seleccionado butacas");
	}
}

window.onload=function(){
	cargar_sala_php();
	document.getElementById("encontrar").addEventListener("click",generaAsientos);
	document.getElementById("reservar").addEventListener("click",reservar);
}