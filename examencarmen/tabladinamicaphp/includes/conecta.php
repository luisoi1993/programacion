<?php
//declarar las variables en donde se guardaran los valores de la conexion
$servidor = "127.0.0.1";
$usuario = "root";
$password = "root";
$bd = "bar";
$conecta = mysqli_connect($servidor,$usuario,$password,$bd);
if($conecta->connect_error){
  die("Error al conectar la ase de datos".$conecta->connect_error);
}
else{
  echo "conexion";
}

 ?>
