<?php
/*Crea un array llamado pila como éste:
$pila = array(“cinco” => 5, “uno”=>1, “cuatro”=>4, “dos”=>2, “tres”=>3);
Muestra el array ordenado por asort, arsort, ksort, sort, rsort*/

$pila=array("cinco"=> 5,"uno"=> 1,"cuatro"=>4,"dos"=>2,"tres"=>3);

asort($pila);
foreach ($pila as $key => $val) {
    echo "$key = $val\n";
  }

  echo "<br>";

  arsort($pila);
  foreach ($pila as $key => $val) {
      echo "$key = $val\n";
    }

    echo "<br>";

    ksort($pila);
    foreach ($pila as $key => $val) {
        echo "$key = $val\n";
      }

      echo "<br>";

      sort($pila);
      foreach ($pila as $key => $val) {
          echo "$key = $val\n";
        }

        echo "<br>";

        rsort($pila);
        foreach ($pila as $key => $val) {
            echo "$key = $val\n";
          }

          echo "<br>";


 ?>
