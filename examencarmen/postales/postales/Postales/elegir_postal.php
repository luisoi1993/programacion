<!DOCTYPE html>
<html lang="es">
<head>
	<meta name="">
	<meta charset="utf-8">
	<title>Postales</title>

	<!--Estilo-->
	<link rel="stylesheet" type="text/css" href="./css/estilos.css">
</head>
<body>
	<h1><a href="./index.php"><button><</button></a> PERSONALIZAR POSTALES</h1>
	<div>
		<?php

			//VARIABLES
			$validacion_asunto = "/^[A-Z\p{L}\s\d\.\,\)\(\?\¿\!\¡]{2,50}$/ui";
			$validacion_mensaje = "/^[A-Z\p{L}\s\d\t\.\,\)\(\?\¿\!\¡]{2,150}$/ui";

			if (isset($_POST['enviar'])) {

				if (!isset($_POST['email'])) {
					$_POST['email'] = "0";
				}

				if (isset($_POST['asunto']) && isset($_POST['mensaje'])) {
					if (preg_match($validacion_asunto, $_POST['asunto']) != 1) {
						$_POST['asunto'] = "Correo automático";
					}

					if (preg_match($validacion_mensaje, $_POST['mensaje']) != 1) {
						$_POST['mensaje'] = "Este mensaje es automático";
					}
				}

				require 'enviar_postal.php';

			} else{

				echo "<form action='elegir_postal.php' method='POST' enctype='application/x-www-form-urlencoded'>";

					//CONEXIÓN
					require "enlace.php";

					//SACAR LOS NOMBRES DE LOS USUARIOS
					$consulta = "SELECT email FROM usuarios ORDER BY email";
					$resultado = mysqli_query($connection, $consulta);

					if (isset($_POST['tema'])) {
						$directorio = $_POST['tema'];

						if ($directorio != "0") {
							echo "<table>";
								echo "<tr>";
									obtener_archivo($directorio);
								echo "</tr>";
							echo "</table>";
							echo "<label>No seleccionar ninguna imagen: </label>";
							echo "<input type='radio' name='imagen' value='0'><br>";
						}

					}

					echo "<p>Correo: </p>";
					generaSelectMultiple('email[]', $resultado);
					echo "<p>Asunto: <input type='text' name='asunto'></p>";
					echo "<p>Mensaje: </p>";
					echo "<textarea name='mensaje' rows='5' cols='60'></textarea>";

					echo "<br>";

					echo "<input type='submit' name='enviar' value='Enviar'>";
				echo "</form>";

			}


			//CREAR SELECT
			function generaSelectMultiple($email, $array){
				echo "<select name='$email' multiple size='3'>";
					echo "<option value='0'>Todos</option>";
					while ($fila = mysqli_fetch_row($array)){
						foreach ($fila as $value) {
							echo "<option value='$value'>$value</option>";
						}
					}
				echo "</select>";
			}

			function obtener_archivo($ruta){
				if (is_dir($ruta)){
			        $gestor = opendir($ruta);
		        	while (($archivo = readdir($gestor)) !== false)  {
		            	$ruta_completa = $ruta . "/" . $archivo;

		               if($archivo != "." && $archivo != "..") {
			               	echo "<td>";
			               		echo "<img src= '". $ruta_completa."'>";
			               		echo "<br>";
			               		echo "<input type='radio' name='imagen' value='".$ruta_completa."'><br>";
			               	echo "</td>";
		               }
		            }
			        closedir($gestor);

			    } else {
			        echo "Ruta de directorio incorrecta";
			    }
			}

		?>
	</div>
</body>
</html>
