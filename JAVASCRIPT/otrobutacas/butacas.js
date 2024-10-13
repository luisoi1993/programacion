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
	var cell = e.target || window.event.srcElement;
	if(cell.className=="libre"){
		cell.className="asignado";
	}else if(cell.className=="asignado"){
		cell.className="libre";
	}else if(cell.className=="ocupado"){
		alert("Ese asiento está ocupado, seleccione otro.");
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
	var ocupados=["0001","0009","0001","0001","0003","0112","0007","0107","0109","0110","0101","0103"];
	var elemento;
	for(var i=0;i<ocupados.length;i++){
		elemento=document.getElementById(ocupados[i]);
		elemento.className="ocupado";
		
	}
	document.getElementById("encontrar").addEventListener("click",generaAsientos);
}

function generaAsientos(){
	var celda1;
	var celda2;
	var celda3;
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


window.onload=function(){
	cargar_sala_php();
}