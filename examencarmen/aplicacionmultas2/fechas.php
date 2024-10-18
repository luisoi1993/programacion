<?php

function filtrado($datos){
    $datos = trim($datos); // Elimina espacios antes y después de los datos
    $datos = stripslashes($datos); // Elimina backslashes \
    $datos = htmlspecialchars($datos); // Traduce caracteres especiales en entidades HTML
    return $datos;
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    $fechain = filtrado($_POST["fechain"]);
    $fechafin = filtrado($_POST["fechafin"]);

}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){


    if(empty($_POST["fechain"]) ){
        $errores[] = "La Fecha de inicio  no puede estar vacia";
    }

    if(empty($_POST["fechafin"]) ){
        $errores[] = "La fecha del fin de permiso no puede estar vacia";
    }

    if($fechain > $fechafin) {
      $errores[]='La fecha inicial no puede ser mayor que la fecha final';
    }


    // Si el array $errores está vacío, se aceptan los datos y se asignan a variables
    if(empty($errores)) {
      $fechain = filtrado($_POST["fechain"]);
      $fechafin = filtrado($_POST["fechafin"]);


    }
}

 ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <script type="text/javascript">
   function confirmacion() {
     var respuesta = confirm("¿Desea enviar esta informacion?");
     if(respuesta ==true){
       return true;
     }else{
       return false;
     }
   }

   </script>
   <body>
     <h2>Seleccione las fechas</h2>
     <br>
     <a href="menu.php">Cerrar sesion</a>
     <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>"  method="post" enctype="multipart/form-data">

       Fecha inicial:
       <input type="date" name="fechain" >
       Fecha fin:
       <input type="date" name="fechafin"><br>


      <input type="submit" name="submit" value="Enviar" oncl>


 <ul>
 <?php

 function buscarInfractores($fechain,$fechafin){
   // Abriendo el archivo
   $archivo = fopen("vehiculos.txt", "r");
   while(!feof($archivo)){
     // Leyendo una linea
   $traer = fgets($archivo);
   $porciones = explode(" ", $traer);
   $fecha= date("j F, Y", strtotime( $porciones[3]));
   $fechainicial= date("j F, Y", strtotime( $fechain));
   $fechafinal= date("j F, Y", strtotime( $fechafin));
   $matricula =$porciones[0];

   if($porciones == "electronica" || $fecha < $fechainicial || $fecha > $fechafinal){
   }
   else{
     comprobar($matricula);
     if($comprobacion == "logistica"){
       echo "oi";
     }
   }

 }
 fclose($archivo);

/*
 $contents=file_get_contents("vehiculos.txt");
$lines=explode("\n",$contents);
foreach($lines as $line){
  $palabra=explode(" ",$line);
 echo $line.'<br>';
if($palabra[0]=="diesel"){
  echo "oi";
}
}
*/
 }

 function comprobar($matricula){
   $comprobacion="0";
   $archivo2 = fopen("logistica.txt", "r");
   while(!feof($archivo2)){
     // Leyendo una linea
   $traer = fgets($archivo2);
   $porciones = explode(" ", $traer);
   $matriculacomp =$porciones[0];

   if($matricula == $matriculacomp){
     $comprobacion = "logistica";
   }

 }

 fclose($archivo2);
 return $comprobacion;
 }

  if(isset($errores)){
     foreach ($errores as $error){
         echo "<li> $error </li>";
     }
 }
 else{
   echo "<li> Los infractores entre el rango de fecha indicado son:";
   buscarInfractores($fechain,1);
 }
 ?>
 </ul>

   </body>
 </html>
