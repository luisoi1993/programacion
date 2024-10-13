<?php
header('Content-Type: text/html;charset=utf8_spanish_ci'); //cambiar el charset al de la base de datos
header("Access-Control-Allow-Origin: *");

$ipserver="127.0.0.1";//mismo equipo, también vale localhost. Esto es porque realizo una petición a mi propio servidor
$userserver="root";
$passserver="root";
$dbserver="cinepaco";
$db=mysqli_connect($ipserver,$userserver,$passserver,$dbserver);
// $db=mysqli_connect($GLOBALS['DB_IP'],$GLOBALS['DB_USER'],$GLOBALS['DB_PASS']);
// $link=mysqli_select_db($GLOBALS['DB_NAME'],$db);
if(!$db){
	echo "No se pudo establecer conexión con la base de datos.";
	exit();
}

// if(mysqli_connect_errno()){
	// echo "No se pudo establecer conexión con la base de datos.";
	// exit();
// }

// $email_php = $_POST["email_js"];
// $consulta="SELECT * FROM where email='.$email_php.'";si queremos enviar solo un dato
$consulta="SELECT * FROM `socios`";
$result=mysqli_query($db,$consulta);
// $result=$db->query($consulta);
$respuesta="";

if(!$result){
	echo "Error en la consulta.";
}else{
	while($valor=mysqli_fetch_array($result)){//revisar otra forma de hacer est
		//$respuesta=$email; aquí recuperariamos la consulta del select from where...
		$nombreUs=$valor['nombreUs'];
		$apellidoUs=$valor['apellidoUs'];
		$telefonoUs=$valor['telefonoUs'];
		$correoUs=$valor['correoUs'];
		$fechaNacimiento=$valor['fechaNacimiento'];
		$fechaAlta=$valor['fechaAlta'];
		$passwordUs=$valor['passwordUs'];
		$respuesta.=($nombreUs.",".$apellidoUs .",".$telefonoUs.",".$correoUs.",".$fechaNacimiento.",".$fechaAlta.",".$passwordUs.";");
	}
	echo $respuesta;
}

mysqli_close($db);

?>