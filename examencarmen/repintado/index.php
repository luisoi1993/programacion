<?php
function filtrado($datos){
    $datos = trim($datos); // Elimina espacios antes y después de los datos
    $datos = stripslashes($datos); // Elimina backslashes \
    $datos = htmlspecialchars($datos); // Traduce caracteres especiales en entidades HTML
    return $datos;
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    $nombre = filtrado($_POST["nombre"]);
    $password = filtrado($_POST["password"]);
    $educacion = filtrado($_POST["educacion"]);
    $nacionalidad = filtrado($_POST["nacionalidad"]);
    // Utilizamos implode para pasar el array a string
    $idiomas = filtrado(implode(", ", $_POST["idiomas"]));
    $email = filtrado($_POST["email"]);
    $sitioweb = filtrado($_POST["sitioweb"]);
}


if(isset($_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST"){
    // El nombre y contraseña son campos obligatorios
    if(empty($_POST["nombre"])){
        $errores[] = "El nombre es requerido";
    }
    if(empty($_POST["password"]) || strlen($_POST["password"]) < 5){
        $errores[] = "La contraseña es requerida y ha de ser mayor a 5 caracteres";
    }
    // El email es obligatorio y ha de tener formato adecuado
    if(!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL) || empty($_POST["email"])){
        $errores[] = "No se ha indicado email o el formato no es correcto";
    }
    // El sitio web es obligatorio y ha de tener formato adecuado
    if(!filter_var($_POST["sitioweb"], FILTER_VALIDATE_URL) || empty($_POST["sitioweb"])){
        $errores[] = "No se ha indicado sitio web o el formato no es correcto";
    }
    // Si el array $errores está vacío, se aceptan los datos y se asignan a variables
    if(empty($errores)) {
        $nombre = filtrado($_POST["nombre"]);
        $password = filtrado($_POST["password"]);
        $educacion = filtrado($_POST["educacion"]);
        $nacionalidad = filtrado($_POST["nacionalidad"]);
        // Utilizamos implode para pasar el array a string
        $idiomas = filtrado(implode(", ", $_POST["idiomas"]));
        $email = filtrado($_POST["email"]);
        $sitioweb = filtrado($_POST["sitioweb"]);
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
    <h2>Formulario:</h2>
<form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
    Nombre:
    <input type="text" name="nombre" maxlength="50"><br>
    Contraseña:
    <input type="password" name="password"><br>
    Educacion:
    <select name="educacion">
        <option value="sin-estudios">Sin estudios</option>
        <option value="educacion-obligatoria" selected="selected">Educación Obligatoria</option>
        <option value="formacion-profesional">Formación profesional</option>
        <option value="universidad">Universidad</option>
    </select> <br>
    Nacionalidad:
    <input type="radio" name="nacionalidad" value="hispana">Hispana</input>
    <input type="radio" name="nacionalidad" value="otra">Otra</input><br>
    Idiomas:
    <input type="checkbox" name="idiomas[]" value="español" checked="checked">Español</input>
    <input type="checkbox" name="idiomas[]" value="inglés">Inglés</input>
    <input type="checkbox" name="idiomas[]" value="francés">Francés</input>
    <input type="checkbox" name="idiomas[]" value="aleman">Alemán</input><br>
    Email:
    <input type="text" name="email"><br>
    Sitio Web:
    <input type="text" name="sitioweb"><br>
    // Botón de enviar
    <input type="submit" name="submit" value="Enviar">
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


 <?php if(isset($_POST["submit"])): ?>
<h2>Mostrar datos enviados</h2>
Nombre : <?php isset($nombre) ? print $nombre : ""; ?> <br>
Contraseña : <?php isset($password) ? print $password : ""; ?> <br>
Educación : <?php isset($educacion) ? print $educacion : ""; ?> <br>
Nacionalidad : <?php isset($nacionalidad) ? print $nacionalidad : "";?> <br>
Idiomas : <?php isset($idiomas) ? print $idiomas : ""; ?> <br>
Email : <?php isset($email) ? print $email : ""; ?> <br>
Sitio web : <?php isset($sitioweb) ? print $sitioweb : ""; ?> <br>
<?php endif; ?>
