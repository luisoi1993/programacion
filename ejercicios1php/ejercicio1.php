
<?php
/*Crea un array $dias con los dias de la semana y muestra todas
sus parejas indices/valores mediante un bucle foreach for.*/
$dias=array("Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo");

foreach($dias as $k=> $v){
  echo "Clave: $k => Valor: $v <br>";
}

for($i=0;$i<count($dias);$i++){
  echo "Valor: $dias[$i]: Key $i <br>";
}


 ?>
