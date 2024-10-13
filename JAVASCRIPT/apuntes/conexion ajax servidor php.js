
//  EN EL HTML

<html>


	<div id="mostrardatos"></div>


</html>
Ç




// EN EL JS
	
	1.- Evento de carga de formulario para ejecutar la funcion que queramos.
	
window.onload = function(){ 
  	obtener_socios_cine();	
	
}

	

function obtener_socios_cine()
{
2.- Instanciar o crear el objeto de conexion para el PHP en js.
	peticion_http_socios_cine = inicializa_xhr();
	
	
3.- declarar los propiedades de la conexión, es decir, del objeto peticion_http_socios_cine	
	
	primero: funcion que se ejecutara con cada cambio de estado en el objeto peticion_http_socios_cine.
	peticion_http_socios_cine.onreadystatechange = procesaRespuesta_socios_php;
	
	segundo: establecer el canal de conexión, es decir, indicar que PHP ejecutamos en el servidor
	peticion_http_socios_cine.open("POST", "./php/leer_socios.php", true);//podemos abrir de aquí archivos como los csv,html,txt,etc
	
	tercero: Indicar al PHP o servidor que le enviamos. Eso se hace con la bacecera.
	peticion_http_socios_cine.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
	
	cuarto: Se envia la petición. Se pueden enviar datos o no.
		cuarto_1: no se envian datos
		peticion_http_socios_cine.send();
	
		cuarto_2: Si se envian datos.
		var query_string = "email_js=" + encodeURIComponent(email) +	"&nocache=";
		peticion_http_socios_cine.send(query_string);
		
	
}

function procesaRespuesta_socios_php()
{
	
if(peticion_http_socios_cine.readyState == 4) 
	{
		if(peticion_http_socios_cine.status == 200) 
		{
			var cadena = peticion_http_socios_cine.responseText;
			
			// // // // // // document.getElementById("mostrardatos").innerHTML = cadena;
			
			var registros = cadena.split(";");
				for (i=0;i<registros.length;i++)
				{
					var campos = registros[i].split(",");
					
					// y aqui ya se hace lo que necesitemos.......
					
				}
			
		}
	}
	
	
}
function inicializa_xhr() {
	if(window.XMLHttpRequest) {
		return new XMLHttpRequest(); 
	}
	else if(window.ActiveXObject) {
		return new ActiveXObject("Microsoft.XMLHTTP");
	} 
}




// EN EL PHP leer_socios.php

 header('Content-Type: text/html;charset=ISO-8859-1');
 header("Access-Control-Allow-Origin: *");

$GLOBALS['DB_IP']   = '192.168.3.192';
$GLOBALS['DB_USER'] = 'root';
$GLOBALS['DB_PASS'] = 'root';
$GLOBALS['DB_NAME'] = 'cinescarlatti';


$db = mysql_connect($GLOBALS['DB_IP'], $GLOBALS['DB_USER'], $GLOBALS['DB_PASS']);



mysql_select_db($GLOBALS['DB_NAME'], $db);

// $email_php = $_POST["email_js"];

if (!$db) 
{
echo "No pudo conectarse a la BD: " . mysql_error();
exit();
}
	
	$consulta = "SELECT * FROM socios where email = '$email_php'";
	
	$result = mysql_query($consulta,$db);
	
	$respuesta ="";
	
	if (!$result) 
			{
				echo ("Error en la consulta".$result);
			} 
			else 
			{
				while ($valor = mysql_fetch_array($result))
				{
					$email = $valor['email'];
					$dni = $valor['dni'];
					$contraseña = $valor['contraseña'];
					$apellidos = $valor['apellidos'];
					$fecha_nacimiento = $valor['fecha_nacimiento'];
					$telefono = $valor['telefono'];
					$fecha_alta = $valor['fecha_alta'];
					$respuesta .= ($email+","+$dni +","+$contraseña+","+$apellidos +","+$fecha_nacimiento+","$telefono +","+$fecha_alta+";")
				}
			echo $respuesta;
	
				
			}
			

mysql_close($db);