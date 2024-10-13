function inicializa_xhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}


function escribeLetra(){
	
	var dni=document.getElementById("dni");
	console.log(dni.value.length);
	//validacion dni/nie
	if(dni.value==""){
		// mensajeE+="<li class='milineaerror'>El DNI es obligatorio.</li>"
		buscaE=true;

	}else if(dni.value.length!=8){
		// mensajeE+="<li class='milineaerror'>El DNI no tiene el tamaño adecuado.</li>"
		buscaE=true;	
	}else{
		var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
		var letrasnie=["X","Y","Z"];

		var nifnie=dni.value.substring(0,8);
		console.log(nifnie);
		var errorletra=false;
		var j=0;

		if(isNaN(nifnie.charAt(0))){
			while(j<letrasnie.length&&letrasnie[j]!=nifnie.charAt(0)){//siencontrara una coincidencia j serría menor que dos
				j++;
			}
			if(j<3){
				for(var i=1;i<8;i++){
					if(isNaN(nifnie.charAt(i))){
						errorletra=true;
					}else{
						j+=parseInt(nifnie.charAt(i));
					}
				}
				if(!errorletra){
					divi=Math.trunc(j/23);
					nifnie+=letras[divi];
					dni.value=nifnie;
				}else{
					buscaE=true;
				}
			}else{
				// mensajeE+="<li class='milineaerror'>Si es NIE ha empezado con una letra distinta a X, Y o Z.</li>"
				buscaE=true;
			}
		}else{
			for(var i=0;i<8;i++){
				if(isNaN(nifnie.charAt(i))){
					errorletra=true;
				}else{
					j+=parseInt(nifnie.charAt(i));
				}
			}
			if(!errorletra){
				divi=Math.trunc(j/23);
				nifnie+=letras[divi];
				dni.value=nifnie;
			}else{
				// mensajeE+="<li class='milineaerror'>DNI/NIE: as escrito una letra donde debería haber un número.</li>"
				buscaE=true;
			}
		}
	}
}

function focoSiguiente(){
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	
	if(dia.length==2){
		document.getElementById("mes").focus();
	}
	if(mes.length==2){
		document.getElementById("anio").focus();
	}
}

function validarFecha(){

	var anio=document.getElementById("anio").value;
	
	if(anio.length==4){
		var dia=document.getElementById("dia").value;
		var mes=document.getElementById("mes").value;
		
		anio=parseInt(anio);
		dia=parseInt(dia);
		mes=parseInt(mes);
		
		var dias = [0,31,28,31,30,31,30,31,31,30,31,30,31];
		var diasb = [0,31,29,31,30,31,30,31,31,30,31,30,31];
		var diasc=[" ","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
				"Septiembre","Octubre","Noviembre","Diciembre"];

		if(mes>12||dia==0){
			alert("La fecha introducida es incorrecta.");
		}else{
			if(dia<=dias[mes]){
				alert("La fecha "+dia+"/"+diasc[mes]+"/"+anio+" introducida es correcta");
				boton=document.getElementById("entrar");
				boton.addEventListener("click",activarBoton);
			}else{
				alert("La fecha introducida es incorrecta.")
			}
		}
	}
}
function foco(){
	b0=document.getElementById("b0").value;
	b1=document.getElementById("b1").value;
	b2=document.getElementById("b2").value;
	b3=document.getElementById("b3").value;
	b4=document.getElementById("b4").value;
	b5=document.getElementById("b5").value;
	if(b0.length==1){
		document.getElementById("b1").focus();
	}
	if(b1.length==1){
		document.getElementById("b2").focus();
	}
	if(b2.length==1){
		document.getElementById("b3").focus();
	}
	if(b3.length==1){
		document.getElementById("b4").focus();
	}
	if(b4.length==1){
		document.getElementById("b5").focus();
	}
	if(b5.length==1){
		console.log("xd");
	}
}

function activarBoton(){
	var mensaje="<label>Introduce tu clave de seguridad:</label><br>";
	mensaje+="<input id='b0' size='1' maxlength='1'><input id='b1' size='1' maxlength='1'><input id='b2' size='1' maxlength='1'><input id='b3' size='1' maxlength='1'><input id='b4' size='1' maxlength='1'><input id='b5' size='1' maxlength='1'><br>";
	mensaje+="<button id='borrar'>borrar</button><button id='aceptar'>aceptar</button>"
	document.getElementById("acceso").innerHTML=mensaje;
	for(var i=0;i<6;i++){
		campo=document.getElementById("b"+i);
		campo.addEventListener("keyup",foco);
	}
	document.getElementById("aceptar").addEventListener("click",validacion_examen);
}

//validacionAJAX
function procesaRespuesta_examen_php(){
	if(peticion_http_examen.readyState==4){
		if(peticion_http_examen.status==200){
			var respuesta=peticion_http_examen.responseText;
			console.log(respuesta);
			var error=false;
			var mensajeE="<ul>"
			if (respuesta=="incorrecto_fecha"){
				mensajeE+="<li style='color:red;'>Fecha incorrecta.</li>";
				error=true;
			}else if(respuesta=="incorrecto"){
				mensajeE+="<li style='color:red;'>Usuario no registrado.</li>";
				error=true;
			}else{
				var datos=respuesta.split(",");
				var dni=document.getElementById("dni").value;
				if(dni!=datos[0]){
					mensajeE+="<li style='color:red;'>El dni es incorrecto</li>";
					error=true;
				}
				var pass="";
				for(var i=0;i<6;i++){
					valor=document.getElementById("b"+i).value;
					pass+=valor;
				}
				console.log(pass);
				if(pass!=datos[2]){
					mensajeE+="<li style='color:red;'>La pass no corresponde.</li>";
					error=true;
				}
				
				var dia=document.getElementById("dia").value;
				var mes=document.getElementById("mes").value;
				var anio=document.getElementById("anio").value;
				
				//aa-mm-dd
				var fechan=anio+"-"+mes+"-"+dia;
				if(fechan!=datos[1]){
					mensajeE+="<li style='color:red;'>La fecha de nacimiento no corresponde.</li>";
					error=true;
				}
			}
			if(!error){
				mensajeE+="<li style='color:green;'>Acceso correcto.</li>";
				document.getElementById("errores").innerHTML=mensajeE;
			}else{
				document.getElementById("errores").innerHTML=mensajeE;
			}
		}else{
			console.log("No se han podido recuperar datos.");
		}
	}
		
	
}

function validacion_examen(){
	var dni =document.getElementById("dni").value;
	
	var dia=document.getElementById("dia").value;
	var mes=document.getElementById("mes").value;
	var anio=document.getElementById("anio").value;
	
	//aa-mm-dd
	var fechan=anio+"-"+mes+"-"+dia;
	console.log(fechan);
	var pass="";
	for(var i=0;i<6;i++){
		valor=document.getElementById("b"+i).value;
		pass+=valor;
	}
	console.log(pass);

	peticion_http_examen=inicializa_xhr();
	peticion_http_examen.onreadystatechange=procesaRespuesta_examen_php;
	peticion_http_examen.open("POST","./librerias/php/validacion_examen.php",true);;//podemos abrir de aquí archivos como los csv,html,txt,etc
	peticion_http_examen.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	
	var query_examen = "dni_js="+encodeURIComponent(dni)+"&fechan_js="+encodeURIComponent(fechan)+"&pass_js="+encodeURIComponent(pass)+"&nocache=";
	peticion_http_examen.send(query_examen);
}













function asignarEventos(){
	if (document.readyState=="complete"){
		dni=document.getElementById("dni");
		dni.addEventListener("keyup",escribeLetra);
		
		dia=document.getElementById("dia");
		mes=document.getElementById("mes");
		
		dia.addEventListener("keyup",focoSiguiente);
		mes.addEventListener("keyup",focoSiguiente);
		
		anio=document.getElementById("anio");
		anio.addEventListener("keyup",validarFecha);
	}
}

document.addEventListener("readystatechange",asignarEventos);

window.onload=function(){
	focoSiguiente();//al cargar la page ejecuta la funcion 
}



	