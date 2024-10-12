<?php
/*Crea un array con una lista de 5 alumnos de la clase.Muestra primero
la lista de los 3 primeros alumnos del array y luego los dos últimos de
la lista usando las funciones array_slice y array_splice
*/
//array de 5 alumnos
$entrada=array("Miguel","Pepe","Juan","Julio","Pablo");

//modificar el tamaño
$salida=array_slice($entrada,0,3);

//mostrar el $array
foreach($salida as $actual){
  echo $actual . "<br>";
  echo "<p>";
}

//modificar otra vez
$salida=array_splice($entrada,0,3);

//muestro el array
echo 'Array devuelto' .'<br>';

foreach($salida as $actual){
  echo $actual . "<br>";
}

echo 'Array entrada'.'<br>';
foreach($entrada as $actual){
  echo $actual . "<br>";
}

 ?>
