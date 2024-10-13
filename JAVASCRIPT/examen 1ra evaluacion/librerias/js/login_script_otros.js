//errores pass
function miCampoErrorL(nombre){
	if(nombre=="email_login"){
		elemento=document.getElementById(nombre);
		elemento.className="text-center micampoerror";
	}else{
		elemento=document.getElementById(nombre);
		elemento.className="passText text-center micampoerror";
	}
}

function miCampoValidoL(nombre){
	if(nombre=="email_login"){
		elemento=document.getElementById(nombre);
		elemento.className="text-center micampovalido";
	}else{
		elemento=document.getElementById(nombre);
		elemento.className="passText text-center micampovalido";
	}
};


function miCampoNormalL(nombre){
	if(nombre=="email_login"){
		elemento=document.getElementById(nombre);
		elemento.className="text-center micamponormal";
	}else{
		elemento=document.getElementById(nombre);
		elemento.className="passText text-center micamponormal";
	}
}


//funcion para crear las peticiones
function inicializa_xhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}


//conexion con bd para validacion email
function procesaRespuesta_login_php(){
	console.log("ReadyState="+peticion_http_valida_login.readyState);
	if(peticion_http_valida_login.readyState==4){
		if(peticion_http_valida_login.status==200){
			var loginDB=peticion_http_valida_login.responseText;//recojo el email que viene de la base de datos
			var cadenaE="<ul>";
			var datos=loginDB.split(",");
			//var email = document.getElementById("email_login").value;//añadir que si lo pongo vacío el pass me de un mensaje de, debes poner contraseña
			var pass="";
			for(var i=0;i<6;i++){
				var passElement=document.getElementById("pass_login_"+i).value;
				if(passElement!="•"){
					pass+=passElement;
				}
			}
			console.log(pass);
			if(pass==""){
				cadenaE+="<li class='milineaerror'>Debes poner una contraseña.</li>";
				for(var i=0;i<6;i++){
					var elemento=document.getElementById("pass_login_"+i).value;
					if(elemento!="•"){
						miCampoErrorL("pass_login_"+i);
					}
				}
			}else{
				if(loginDB==""){//validacion correo, vemos si está en la base de datos y si la bd no devuelve nada es que no está registrado
					cadenaE+="<li class='milineaerror'>Usuario no registrado.</li>";
					cadenaE+="</ul>";
					miCampoErrorL("email_login");
				}else{
					miCampoValidoL("email_login");
					var arrayPass=new Array(6);
					elementos=document.getElementsByClassName("passText");
					for(var i=0;i<6;i++){
						if(elementos[i].value!=""||elementos[i].value!="•"){
							arrayPass[i]=elementos[i].value;
						}
					}
					console.log(arrayPass);
					var passDB=datos[2].split("");//6digitos
					console.log(passDB);
					var bolean =false;
					for(var i=0;i<arrayPass.length;i++){
						if(arrayPass[i]!="•"){
							if(arrayPass[i]==passDB[i]){
								miCampoValidoL("pass_login_"+i);
							}else{
								miCampoErrorL("pass_login_"+i);
								bolean=true;
							}
						}
					}
					if(!bolean){//si el boleano da falso pues de una entramos
						cadenaE+="<li class='milineavalida'>Bienvenido "+datos[0]+" "+datos[1]+"</li>";
						cadenaE+="</ul>";
						deshabilitaCampos();
					}else{
						cadenaE+="<li class='milineaerror'>La contraseña para el usuario "+datos[0]+" está mal escrita.</li>";//o poner no coinciden
						cadenaE+="</ul>";
						bolean=false;
					}
				}
			}
			document.getElementById("errores").innerHTML=cadenaE;
			console.log("eyy"+loginDB+"viene vacio???");
			//validarEmail(emailDB);
		}else{
			console.log("No se han podido recuperar datos.");
		}
	}	
}
function deshabilitaCampos(){
	document.getElementById("email_login").disabled=true;
	valor=document.getElementById("email_login").className;
	document.getElementById("email_login").className=valor+" deshabilitado";
	for(var i=0;i<6;i++){
		document.getElementById("pass_login_"+i).disabled=true
		valor=document.getElementById("pass_login_"+i).className;
		document.getElementById("pass_login_"+i).className=valor+" deshabilitado";
	}
	document.getElementById("botonTeclado").disabled=true;
	valor=document.getElementById("botonTeclado").className;
	document.getElementById("botonTeclado").className=valor+" deshabilitado";
	
	document.getElementById("botonLogin").disabled=true;
	valor=document.getElementById("botonLogin").className;
	document.getElementById("botonLogin").className=valor+" deshabilitado";
	
	for(var i=0;i<10;i++){
		document.getElementById("boton"+i).disabled=true
		valor=document.getElementById("boton"+i).className;
		document.getElementById("boton"+i).className=valor+" deshabilitado";
	}
	
	document.getElementById("borrar").disabled=true;
	valor=document.getElementById("borrar").className;
	document.getElementById("borrar").className=valor+" deshabilitado";
}

function obtener_login(){
	var nombre="";
	var apellido="";
	var dni="";
	var telefono="";
	var email=document.getElementById("email_login").value;
	var fechaN="";
	var fechaA="";
	var pass="";
	var accion="consulta_login";
	var cadena="<ul>";
	if(email==""){
		cadena+="<li class='milineaerror'>Debes introducir un email.</li>";
		cadena+="</ul>";
		miCampoErrorL("email_login");
		document.getElementById("errores").innerHTML=cadena;
	}else{
		peticion_http_valida_login=inicializa_xhr();
		peticion_http_valida_login.onreadystatechange=procesaRespuesta_login_php;
		peticion_http_valida_login.open("POST","./../librerias/php/validacion.php",true);// voy a necesitar dos de estas. Uno para el index y otro para el resto de mis paginas
		peticion_http_valida_login.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//peticion_http_socios_cine.send();
		//Si se envian datos.
		//recogeriamos la variable del html con un document.getElementById
		var query_login = "nombre_js="+encodeURIComponent(nombre)+"&apellido_js="+encodeURIComponent(apellido)+"&dni_js="+encodeURIComponent(dni)+"&telefono_js="+encodeURIComponent(telefono)+"&email_js=" + encodeURIComponent(email)+"&fechan_js="+encodeURIComponent(fechaN)+"&fechaa_js="+encodeURIComponent(fechaA)+"&pass_js="+encodeURIComponent(pass)+"&accion_js="+encodeURIComponent(accion)+"&nocache=";
		peticion_http_valida_login.send(query_login);
	}
}

function deshabilita(){
	//habilitamos campos previamente deshabilitados
	elementos=document.getElementsByClassName("passText");
	for(var i = 0; i < elementos.length; i++){
		elementos[i].disabled = false;
	}
	
	elementos=document.getElementsByClassName("passText");
	var inputs=new Array(3);
	var i=0;
	inputs[i]=aleatorio(0,5);
	for(i=1;i<inputs.length;i++){
		inputs[i]=aleatorio(0,5);
		for(var j=0;j<i;j++){
			if(inputs[i]==inputs[j]){
				i--;
			}
		}
	}
	
	for(var i = 0; i < inputs.length; i++){
		var cuadro=document.getElementById("pass_login_"+inputs[i]);//??
		cuadro.disabled = true;
		cuadro.value="•";
		cuadro.className="passText text-center micampovalido deshabilitado"
	}
}




var campoTexto = "";

function cambioFocoE (e){
	var cell = e.target || window.event.srcElement;
	if(cell.id="email_login"){
		campoTexto="email_login";
	}
}

function cambioFoco (e){
	var cell = e.target || window.event.srcElement;
	if(cell.id=="pass_login_0"){
		campoTexto="pass_login_0";
	}else if(cell.id=="pass_login_1"){
		campoTexto="pass_login_1";
	}else if(cell.id=="pass_login_2"){
		campoTexto="pass_login_2";
	}else if(cell.id=="pass_login_3"){
		campoTexto="pass_login_3";
	}else if(cell.id=="pass_login_4"){
		campoTexto="pass_login_4";
	}else if(cell.id=="pass_login_5"){
		campoTexto="pass_login_5";
	}
}

// var contadorGlobal=0;
function str1(e){
	if(campoTexto=="email_login"){
		focoSiguiente();
		console.log("no se puede escribir aquí con el teclado");
	}else{
		var boton = e.target || window.event.srcElement;
		var elemento=document.getElementById(campoTexto);    
		document.getElementById(campoTexto).focus();// foco del campo
		document.getElementById(campoTexto).value="";//borro el value del campo si no tiene
		document.getElementById(campoTexto).value=boton.value;
		// contadorGlobal++;
		focoSiguiente();
	}
}
//necesito un array con mis posiciones buenas o vacías (las que no llevan el caracter punto)
//Necesito un contador de pulsaciones




var arrayP=new Array(3);

function focoSiguiente(){
	console.log(arrayP);
	if(campoTexto=="email_login"){
		campoTexto="pass_login_"+arrayP[0];
		document.getElementById(campoTexto).focus();
	}
	else if(campoTexto=="pass_login_"+arrayP[0]){
		campoTexto="pass_login_"+arrayP[1];
		document.getElementById(campoTexto).focus();
	}else if(campoTexto=="pass_login_"+arrayP[1]){
		campoTexto="pass_login_"+arrayP[2];
		document.getElementById(campoTexto).focus();	
	}else if(campoTexto=="pass_login_"+arrayP[2]){
		console.log("nada");
		//tengo que hacer o que deje de escribir o me salga un mensaje
	}
}

function borrarCampo(){
	if(document.getElementById(campoTexto).value==""){
		focoAnterior();
		document.getElementById(campoTexto).focus();
		document.getElementById(campoTexto).value="";
	}else{
		document.getElementById(campoTexto).focus();
		document.getElementById(campoTexto).value="";
		focoAnterior();
	}
}

function focoAnterior(){
	if(campoTexto=="pass_login_"+arrayP[2]){
		campoTexto="pass_login_"+arrayP[1];
		document.getElementById(campoTexto).focus();
	}else if(campoTexto=="pass_login_"+arrayP[1]){
		campoTexto="pass_login_"+arrayP[0];
		document.getElementById(campoTexto).focus();	
	}else if(campoTexto=="pass_login_"+arrayP[0]){
		console.log("nada");
	}
}

function aleatorio(inicio,fin) {
	var rango=fin-inicio + 1; 
	var numAleatorio = parseInt((Math.random()*rango)+inicio);
	return numAleatorio;
}

function habilita(){
	elementos=document.getElementsByClassName("passText");
	for(var i = 0; i < elementos.length; i++){
		elementos[i].disabled = false;
		elementos[i].value="";
		elementos[i].className="passText text-center micampovalido"
	}
}

function generarTeclado(){
	habilita();
	var borrar="borrar";
	var tecladoAleatorio=new Array(10);
	var i=0;
	tecladoAleatorio[i]=aleatorio(0,9);
	for(i=1;i<tecladoAleatorio.length;i++){
		tecladoAleatorio[i]=aleatorio(0,9);
		for(var j=0;j<i;j++){
			if(tecladoAleatorio[i]==tecladoAleatorio[j]){
				i--;
			}
		}
	}
	var codigohtml="<table class='col-md'><tbody>";
	
	codigohtml+="<tr>";
	for(var k=0;k<6;k++){
		codigohtml+="<td><button style='width:100%' class='btn-primary btn-dark text-white' id='boton"+tecladoAleatorio[k]+"' value='"+tecladoAleatorio[k]+"' >"+tecladoAleatorio[k]+"</button></td>";
	}
	
	codigohtml+="</tr>";
	codigohtml+=" <tr>";
 
	for(var l=6;l<tecladoAleatorio.length;l++){
		codigohtml+="<td><button style='width:100%' class='btn-primary btn-dark text-white' id='boton"+tecladoAleatorio[l]+"' value='"+tecladoAleatorio[l]+"' >"+tecladoAleatorio[l]+"</button></td>";
	}
	codigohtml+="<td colspan='2'><button style='width:100%' class='btn-primary btn-dark text-white' id='borrar'>"+borrar+"</button></td>"
	codigohtml+="</tr>";
	codigohtml+="</tbody></table>";
	document.getElementById("tecladocol").innerHTML=codigohtml;
	for(var j=0;j<10;j++){
		botoncito=document.getElementById("boton"+j);
		botoncito.addEventListener("click",str1);
	}
	borrar=document.getElementById("borrar");
	borrar.addEventListener("click",borrarCampo);
	deshabilita();
	
	elementos=document.getElementsByClassName("passText");
	var contador=0;
	for(var i=0;i<elementos.length;i++){
		if(elementos[i].value!="•"){
			arrayP[contador]=i;
			contador++;
			miCampoNormalL("pass_login_"+i);
		}
	}
	console.log(arrayP[0]);
	document.getElementById("pass_login_"+arrayP[0]).focus();
	campoTexto="pass_login_"+arrayP[0];
}



function asignarEventos(){ //asigna cada uno de mis elementos los eventos adapatarlo a dos bucles for 00,01,02... (en tabla) cambiar el id
	if (document.readyState=="complete"){															//de los elementos de mi tabla
		boton=document.getElementById("botonLogin");
		boton.addEventListener("click",obtener_login);
		
		bodi=document.getElementsByTagName("body");
		bodi[0].addEventListener("click",cambioFoco);
		
		botoncito =document.getElementById("botonTeclado");
		botoncito.addEventListener("click",generarTeclado);
		
		//funcion para hacer focus en el email al abrir el modal
		var myModal = document.getElementById('exampleModal');
		var myInput = document.getElementById('email_login');

		myModal.addEventListener('shown.bs.modal', function () {
		  myInput.focus()
		})
	}
}

document.addEventListener("readystatechange",asignarEventos);

document.addEventListener("keyup", keyDownTextField, false);//keyup ejecuta la funcion foco anterior después de que el retroceso haya borrado

function keyDownTextField(e) {								//keydown me ejecuta primero la funcion y luego el borrado de la propia tecla retroceso
var keyCode = e.keyCode;
	if(campoTexto!="email_login"){
		if(keyCode==8) {
			focoAnterior();
		}
	}
}

function deshabilitaTodo(){
	//habilitamos campos previamente deshabilitadospuede sobrar
	elementos=document.getElementsByClassName("passText");
	for(var i = 0; i < elementos.length; i++){
		elementos[i].disabled = false;
		elementos[i].value="•";
		elementos[i].className="passText text-center micamponormal deshabilitado"
	}
}
window.onload=function(){
	deshabilitaTodo();//al cargar la page ejecuta la funcion 
}



