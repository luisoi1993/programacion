<?php
function filtrado($datos){
    $datos = trim($datos); // Elimina espacios antes y después de los datos
    $datos = stripslashes($datos); // Elimina backslashes \
    $datos = htmlspecialchars($datos); // Traduce caracteres especiales en entidades HTML
    return $datos;
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    $numero = filtrado($_POST["numero"]);
    $categoria = filtrado($_POST["categoria"]);
    $incidencia = filtrado($_POST["incidencia"]);
    $descripcion = filtrado($_POST["descripcion"]);

    $email = filtrado($_POST["email"]);
    $fecha = filtrado($_POST["fecha"]);
    $hora = filtrado($_POST["hora"]);
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    // El nombre y contraseña son campos obligatorios
    if(empty($_POST["numero"])){
        $errores[] = "El numero de incidencia es requerido";
    }
    if(empty($_POST["categoria"]) ){
        $errores[] = "La categoria no puede estar vacia";
    }
    if(empty($_POST["incidencia"]) ){
        $errores[] = "La indcidencia no puede estar vacia";
    }

    if(empty($_POST["descripcion"]) ){
        $errores[] = "La descripcion no puede estar vacia";
    }

    if(empty($_POST["fecha"]) ){
        $errores[] = "La fecha no puede estar vacia";
    }

    if(empty($_POST["hora"]) ){
        $errores[] = "La hora no puede estar vacia";
    }


    // El email es obligatorio y ha de tener formato adecuado
    if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) || empty($_POST["email"])){
        $errores[] = "No se ha indicado email o el formato no es correcto";
    }

    // Si el array $errores está vacío, se aceptan los datos y se asignan a variables
    if(empty($errores)) {
      $numero = filtrado($_POST["numero"]);
      $categoria = filtrado($_POST["categoria"]);
      $incidencia = filtrado($_POST["incidencia"]);
      $descripcion = filtrado($_POST["descripcion"]);

      $email = filtrado($_POST["email"]);
      $fecha = filtrado($_POST["fecha"]);
      $hora = filtrado($_POST["hora"]);

      $fp = fopen('fincidencias.txt', 'w');
        fwrite($fp,"nueva consulta");
        fwrite($fp, "$numero;$categoria;$incidencia;$descripcion;$email;$fecha;$hora");
        fclose($fp);
    }
}

 ?>

 <!DOCTYPE html>
 <html lang="en" dir="ltr">
   <head>
     <meta charset="utf-8">
     <title></title>
   </head>
   <body>
     <h2>Recogida de incidencias</h2>
 <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
     Numero de incidencia:
     <input type="text" name="numero" maxlength="50"><br>
     Categoria:
     <select name="categoria">
         <option value="parques-infantiles">Parques infantiles</option>
         <option value="calzada" selected="selected">Calzada</option>
         <option value="iluminacion">Iluminacion</option>
         <option value="universidad">Jardines</option>
     </select> <br>
     Direccion incidencia:
     <input type="text" name="incidencia" maxlength="100"><br>
     Descripcion:
    <input type="text" name="descripcion" maxlength="100"><br>
      <br>

     Email:
     <input type="text" name="email"><br>
     Fecha:
     <input type="text" name="fecha"><br>

     Hora:
     <input type="text" name="hora"><br>




     // Botón de enviar
     <input type="submit" name="submit" value="Enviar">
 </form>
 Inserción de la fotografía del usuario:
 <form action="inserta.php" method="post" enctype="multipart/form-data">
 <?php
 echo "Nombre usuario:<input type='text' name='usuario'/><br/>";
 echo "Fichero con su fotografía:<input type='file' name='imagen'/><br/>";
 ?>
 <input type="submit" value="Enviar">
 </form>

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
