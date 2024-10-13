<?php
header('Content-Type: text/html;charset=utf8_spanish_ci'); //cambiar el charset al de la base de datos
header("Access-Control-Allow-Origin: *");

$ipserver="127.0.0.1";//mismo equipo, también vale localhost. Esto es porque realizo una petición a mi propio servidor
$userserver="root";
$passserver="root";
$dbserver="cinepaco";
$db=mysqli_connect($ipserver,$userserver,$passserver,$dbserver);

if(!$db){
	echo "No se pudo establecer conexión con la base de datos.";
	exit();
}

$idSa_php=$_POST['idSa_js'];
$accion_php=$_POST['accion_js'];

if($accion_php=="cargar_butacas"){
	$consulta="SELECT * FROM sala where idSa like $idSa_php";//si queremos enviar solo un dato
	$result=mysqli_query($db,$consulta);
	$respuesta="";
	if(!$result){
		$respuesta.="Error al realizar la consulta";
	}else{
		while($valor=mysqli_fetch_array($result)){//revisar otra forma de hacer est
			$capacidadSa=$valor['capacidadSa'];
			$butacas=$valor['butaca'];
			$maxButacas=$valor['maxButacas'];
			$respuesta.=$capacidadSa.'/'.$butacas.'/'.$maxButacas;
		}
	}
	echo $respuesta;
}else{
	$consulta="SELECT * FROM sala";//si queremos enviar solo un dato
	$result=mysqli_query($db,$consulta);
	$respuesta="";
	if(!$result){
		$respuesta.="Error al realizar la consulta";
	}else{
		while($valor=mysqli_fetch_array($result)){//revisar otra forma de hacer est
			$idSa=$valor['idSa'];
			$respuesta.=$idSa.';';
		}
	}
	echo $respuesta;
}
	
mysqli_close($db);

?>