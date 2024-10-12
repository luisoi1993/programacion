<?php
/*Crea un array con los países de la Unión Europea y sus capitales. Muestra por
cada uno de ellos la frase: “La capital de <<país>> es <<capital>>”. Luego
ordena la lista por el nombre del país y luego por el nombre de la capital.
*/

$paises=array("españa"=> "madrid","francia"=> "paris","portugal"=>"lisboa","alemania"=>"berlin");

foreach($paises as $k=> $v){
  echo "La capital de $k => es $v <br>";
}


natcasesort($paises);
print_r($paises);
echo "<br>";
ksort($paises);
print_r($paises);


 ?>
