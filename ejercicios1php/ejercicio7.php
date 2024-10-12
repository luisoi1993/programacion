<?php
/*Obtén el número de valores iguales al valor 2 contenidos en un array de 10
valores generados aleatoriamente con valores de 1 a 10.*/

$numeros =[];
$contador=0;

for($i=0;$i<10;$i++){
  $numeros[$i]=rand(1, 10);
  if($numeros[$i]==2){
    $contador++;
  }
}

print_r($numeros);
echo "<br>";
echo "$contador";





 ?>
