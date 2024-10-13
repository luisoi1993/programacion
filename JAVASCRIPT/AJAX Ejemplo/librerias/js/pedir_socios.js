//para pedir datos a la base de datos necesitaremos hacer lo siguiente


//readyState tiene 5 estados:
// 0.
// 1.
// 2. 
// 3. La petición está en proceso
// 4. Procesada y correcta

//status te dice que si la respuesta del servidor es correcta(codigo 200, importante), 
//o que no se encuentra (codigo 404 not found), etc etc (hay muchas).

//ejercicio establecer una conexión y recuperar datos. Ejercicio básico html que ejecute un 
//formulario js que desde este js se hace una petición.

//con esta función inicializamos objetos para conexión
function inicializa_xhr(){
	if(window.XMLHttpRequest){
		return new XMLHttpRequest();
	}else if(window.ActiveXObject){
		return new ActiveXObject("Microsoft.XMLHTTP");
	}
}



function procesaRespuesta_socios_php(){

	if(peticion_http_socios_cine.readyState==4){
		if(peticion_http_socios_cine.status==200){
			var cadena=peticion_http_socios_cine.responseText;
			var arrayCampos=["Nombre","Apellidos","Teléfono","Correo","Fecha de nacimiento","Fecha de alta","Contraseña"];
			var campos=[];
			var cadenaS="<table>";
			var registros=cadena.split(";");
			for(var i=0;i<registros.length;i++){
				campos[i]=registros[i].split(",");
			}
			cadenaS+="<tr>";
			for(var j=0;j<arrayCampos.length;j++){
				cadenaS+="<th>"+arrayCampos[j]+"</th>";
			}
			cadenaS+="</tr>";
			console.log(campos);
			for(var k=0;k<registros.length;k++){
				cadenaS+="<tr>";
				for(var l=0;l<campos[k].length;l++){
					cadenaS+="<td>"+campos[k][l]+"</td>";
				}
				cadenaS+="</tr>";
				
			}
			cadenaS+="</table>";
			document.getElementById("contenido").innerHTML=cadenaS;
			// nuevatabla=document.createElement("table");
			// document.body.appendChild(nuevatabla);
			// for(var b=0;b<1;b++){
				// nuevotr1=document.createElement("tr");
				// nuevatabla.appendChild(nuevotr1);
				// for(var c=0;c<campos[0].length;c++){
					// nuevotd1=document.createElement("td");
					// nuevotr1.appendChild(nuevotd1);
					// nuevotexto1=document.createTextNode(campos[c]);
					// nuevotr1.appendChild(nuevotexto1);
				// }
			// }
			// for(var j=0;j<campos.length;j++){
				// nuevotr=document.createElement("tr");
				// nuevatabla.appendChild(nuevotr);
				// for(var k=0;j<campos[j].length;k++){
					// nuevotd=document.createElement("td");
					// nuevotr.appendChild(nuevotd);
					// nuevotexto=document.createTextNode(campos[j][k]);
					// nuevotr.appendChild(nuevotexto);
				// }
			// }
		}else{
			console.log("No se han podido recuperar datos.");
		}
	}else{
		console.log("ReadyState="+peticion_http_socios_cine.readyState);
	}
}


function obtener_socios_cine(){
	
	peticion_http_socios_cine=inicializa_xhr();
	peticion_http_socios_cine.onreadystatechange=procesaRespuesta_socios_php;
	peticion_http_socios_cine.open("POST","./librerias/php/leer_socios.php",true);;//podemos abrir de aquí archivos como los csv,html,txt,etc
	peticion_http_socios_cine.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	peticion_http_socios_cine.send();
	//Si se envian datos.
	//var email =document.getElementById("email").value;//recogeriamos la variable del html con un document.getElementById
	// var query_string = "email_js=" + encodeURIComponent(email) +	"&nocache=";
	// peticion_http_socios_cine.send(query_string);
		
}


//minificadores hacen que el código vaya mucho más rápido

function asignarEventos(){ //asigna cada uno de mis elementos los eventos adapatarlo a dos bucles for 00,01,02... (en tabla) cambiar el id
	if (document.readyState=="complete"){															//de los elementos de mi tabla
		boton=document.getElementById("boton");
		boton.addEventListener("click",obtener_socios_cine);
	}
}

document.addEventListener("readystatechange",asignarEventos);

// window.onload = function(){ 
  	// obtener_socios_cine();
// }