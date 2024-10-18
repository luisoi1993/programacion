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
	<h1>PERSONALIZAR POSTALES</h1>
	<div>
		<?php
			//VARIABLES GLOBALES
			$ruta="img";
			$temas = array();
			$num_temas = 0;

			echo "<form action='elegir_postal.php' method='POST' enctype='application/x-www-form-urlencoded'>";
				echo "<table>";
					echo "<tr>";
						obtener_nombre_carpeta($ruta);
					echo "</tr>";
				echo "</table>";
				echo "<label>No seleccionar ninguna imagen: </label>";
				echo "<input type='radio' name='tema' value='0'><br>";
				echo "<input type='submit' name='elegir' value='Siguiente paso'>";
			echo "</form>";

			//FUNCIONES
			function obtener_nombre_carpeta($ruta){
			    //IF PARA COMPROBAR QUE ES UN DIRECTORIO
			    if (is_dir($ruta)){
			        $gestor = opendir($ruta);

			        //LEER ELEMENTOS MIENTRAS HAYA
			        while (($archivo = readdir($gestor)) !== false)  {

			            $ruta_completa = $ruta . "/" . $archivo;

			            // Se muestran todos los archivos y carpetas excepto "." y ".."
			            if ($archivo != "." && $archivo != "..") {

			                echo "<td>";
				                if (is_dir($ruta_completa)) {
				                	array_push($GLOBALS['temas'], $ruta_completa);
				                    echo "<h2>" . $archivo . "<input type='radio' name='tema' value=".$GLOBALS['temas'][$GLOBALS['num_temas']]."></h2>";

				                    obtener_archivo($ruta_completa);
				                    $GLOBALS['num_temas']++ ;
				                }

			                echo "</td>";
			            }
			        }

			        closedir($gestor);

			    } else {
			        echo "Ruta de directorio incorrecta";
			    }

			}

			function obtener_archivo($ruta){
				if (is_dir($ruta)){
					//VARIABLE
					$es_imagen = false;

			        $gestor = opendir($ruta);
		            while (($archivo = readdir($gestor)) !== false && $es_imagen == false)  {
		            	$ruta_completa = $ruta . "/" . $archivo;

		               if($archivo != "." && $archivo != "..") {
		               	echo "<img src= '". $ruta_completa."'>";
		               	$es_imagen = true;
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
