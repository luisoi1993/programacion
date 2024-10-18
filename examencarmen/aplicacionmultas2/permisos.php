<?php
function filtrado($datos){
    $datos = trim($datos); // Elimina espacios antes y después de los datos
    $datos = stripslashes($datos); // Elimina backslashes \
    $datos = htmlspecialchars($datos); // Traduce caracteres especiales en entidades HTML
    return $datos;
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    $matricula = filtrado($_POST["matricula"]);
    $categoria = filtrado($_POST["categoria"]);
    $fechain = filtrado($_POST["fechain"]);
    $fechafin = filtrado($_POST["fechafin"]);
    $direccion = filtrado($_POST["direccion"]);

}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    $an=$_COOKIE['matricula'];
    // El nombre y contraseña son campos obligatorios
    if(empty($_POST["matricula"])){
        $errores[] = "El numero de matricula es requerido";
    }
    if(empty($_POST["categoria"]) ){
        $errores[] = "La categoria no puede estar vacia";
    }
    if(empty($_POST["fechain"]) ){
        $errores[] = "La Fecha de inicio  no puede estar vacia";
    }

    if(empty($_POST["fechafin"]) ){
        $errores[] = "La fecha del fin de permiso no puede estar vacia";
    }



    if(empty($_POST["direccion"]) ){
        $errores[] = "La direccion no puede estar vacia";
    }

    if($an==$_POST["matricula"]){
        $errores[] = "La matricula no se puede repetir";
    }



    // Si el array $errores está vacío, se aceptan los datos y se asignan a variables
    if(empty($errores)) {
      $matricula = filtrado($_POST["matricula"]);
      $categoria = filtrado($_POST["categoria"]);
      $fechain = filtrado($_POST["fechain"]);
      $fechafin = filtrado($_POST["fechafin"]);
      $direccion = filtrado($_POST["direccion"]);

      $fp = fopen('residentesYHoteles.txt', 'a');
        fwrite($fp, "$matricula;$categoria;$fechain;$fechafin;$direccion". PHP_EOL);
        fclose($fp);

      setcookie('matricula',$matricula,time()+604800);

    }

    if (is_uploaded_file ($_FILES['imagen']['tmp_name'] )){
    $nombreDirectorio = "img/";
    $nombreFichero = $_FILES['imagen']['name'];
    $nombreCompleto = $nombreDirectorio.$nombreFichero;
    if (is_dir($nombreDirectorio)){ // es un directorio existente
    $idUnico = time();
    $nombreFichero = $idUnico."-".$nombreFichero;
    $nombreCompleto = $nombreDirectorio.$nombreFichero;
    move_uploaded_file ($_FILES['imagen']['tmp_name'],$nombreCompleto);
    echo "Fichero subido con el nombre: $nombreFichero<br>";
    }
    else echo "Directorio definitivo inválido";
    }
   else
    print ("No se ha podido subir el fichero\n");

}

$an=$_COOKIE['matricula'];
echo "$an";

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
       Matricula:
       <input type="text" name="matricula" maxlength="50">
       Tipo de permiso:
       <select name="categoria">
         <option value="residente">Residente</option>
         <option value="hotel" selected="selected">Hotel</option>
       </select> <br>
       Fecha inicial:
       <input type="date" name="fechain" >
       Fecha fin:
       <input type="date" name="fechafin" ><br>
       Direccion:
       <input type="text" name="direccion">
       Justificante:
       <input type='text' name='usuario'/>
       <input type='file' name='imagen'/><br/>

      <input type="submit" name="submit" value="Enviar" onclick="return confirmacion()">


 <ul>
 <?php if(isset($errores)){
     foreach ($errores as $error){
         echo "<li> $error </li>";
     }
 }
 ?>
 </ul>

   </body>
 </html>
