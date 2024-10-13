<?php
header('Content-Type: text/html;charset=utf8_spanish_ci'); 
header("Access-Control-Allow-Origin: *");

$ipserver="127.0.0.1";
$userserver="root";
$passserver="root";
$dbserver="cinepaco";
$db=mysqli_connect($ipserver,$userserver,$passserver,$dbserver);

if(!$db){
	echo "No se pudo establecer conexión con la base de datos.";
	exit();
}

$dni_php=$_POST["dni_js"];
$fechan_php=$_POST["fechan_js"];
$pass_php=$_POST["pass_js"];

$consulta="SELECT * FROM examen where dni='".$dni_php."'";//si queremos enviar solo un dato
$result=mysqli_query($db,$consulta);
$respuesta="";

if(!$result){
	$respuesta="incorrecto";
}else{
	while($valor=mysqli_fetch_array($result)){//revisar otra forma de hacer est
		$dni=$valor['dni'];
		$fechaN=$valor['fechaN'];
		$password=$valor['password'];
		
		$respuesta.=($dni.",".$fechaN.",".$password);
		
	}
	
	
}	
echo $respuesta;




mysqli_close($db);

?>