<?php
	//ESTABLECER CONEXIÓN
	$servidor = "127.0.0.1";
	$root = "---";
	$password = "---";
	$nombreDB = "postales";

	//crear la conexión al servidor
	$connection = new mysqli($servidor, $root, $password);
	$connection->select_db($nombreDB);
	$connection->set_charset('utf8');

	//verificar la conexión
	if (mysqli_connect_errno()) {
		echo "Conexión fallida: ", mysqli_connect_errno();
		exit();
	} else{
		//echo "Conexión realizada con éxito";
		if (mysqli_connect ($servidor, $root, $password) ){
			//echo "Este usuario tiene permiso para ejecutar consultas";
		}else{
			//echo "Este usuario no tiene permiso para ejecutar consultas";
		}
	}

?>