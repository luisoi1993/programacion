<?php
$colores =array("fuertes"=>array("rojo"=> "FF0000","verde"=> "00FF00","azul"=> "0000FF"),
"suaves"=> array("rosa"=> "FE9ABC","amarillo"=> "FDF189","malva"=> "BC8F8F"));

echo "table";

foreach($colores as $k=>$tipo){
  echo "<tr><td>colores $k:</td>";
  foreach($tipo as $color=>$codigo){
    echo"<td bgcolor=\"$codigo\">".$codigo.":".$color."<td>";

  }
  echo "</tr>";
}
echo"</table>";

$color="FF8800";

if (in_array("$color",$colores["fuertes"])){
  echo "Se ha encontrado el valor $color y es color fuerte";
}

elseif(in_array("$color",$colores["suaves"])){
  echo "Se ha encontrado el valor $color y es un color suave";

}

else {
  echo "El color $color No se ha encontrado<br>";

}

foreach($colores as $key => $categoria){
  if(in_array("$color",$categoria)){
    echo "Se ha encontrado el valor $color y es un color $key";
  }
}

 ?>
