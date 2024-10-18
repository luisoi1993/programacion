Este código verifica si un archivo ha sido subido correctamente con el método POST, y luego valida el tipo y el tamaño del archivo. Si el archivo es una imagen JPEG o PNG y su tamaño es menor o igual a 1 MB, lo mueve a una carpeta de subidas y

$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$correo = mysqli_real_escape_string($conexion, $_POST['correo']);
$contraseña = mysqli_real_escape_string($conexion, $_POST['contraseña']);

$sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ('$nombre', '$correo', '$contraseña')";

if (mysqli_query($conexion, $sql)) {
    echo 'Usuario registrado correctamente.';
} else {
    echo 'Error al registrar usuario: ' . mysqli_error($conexion);
}

mysqli_close($conexion);



Este código utiliza la función mysqli_query() para ejecutar una consulta SELECT en una tabla de una base de datos MySQL, y luego utiliza un bucle while para mostrar los resultados en una tabla HTML.

$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

$sql = 'SELECT * FROM tabla';
$resultado = mysqli_query($conexion, $sql);

echo '<table>';
echo '<tr><th>ID</th><th>Nombre</th><th>Correo electrónico</th></tr>';

while ($fila = mysqli_fetch_assoc($resultado)) {
    echo '<tr>';
    echo '<td>' . $fila['id'] . '</td>';
    echo '<td>' . $fila['nombre'] . '</td>';
    echo '<td>' . $fila['correo'] . '</td>';
    echo '</tr>';
}

echo '</table>';

mysqli_free_result($resultado);
mysqli_close($conexion);


Este código establece una conexión a una base de datos MySQL utilizando la función mysqli_connect(). Debes reemplazar los valores de las variables usuario, contraseña y basedatos con los valores correctos para tu caso. También debes procesar las consultas dentro del bloque de código if, y cerrar la conexión a la base de datos al final del script.

Espero que estos ejemplos te sean útiles en tu proyecto. Si necesitas ayuda con alguna otra tarea específica en PHP, no dudes en preguntar.




Luis Oi
puedes darme mas codigo util para el examen?
¡Por supuesto! Aquí te proporciono algunos ejemplos de código adicionales que podrían ser útiles para tu examen de PHP:

Obtener datos de una tabla MySQL y mostrarlos en una tabla HTML:
php
Copy code
$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

$sql = 'SELECT * FROM tabla';
$resultado = mysqli_query($conexion, $sql);

echo '<table>';
echo '<tr><th>ID</th><th>Nombre</th><th>Correo electrónico</th></tr>';

while ($fila = mysqli_fetch_assoc($resultado)) {
    echo '<tr>';
    echo '<td>' . $fila['id'] . '</td>';
    echo '<td>' . $fila['nombre'] . '</td>';
    echo '<td>' . $fila['correo'] . '</td>';
    echo '</tr>';
}

echo '</table>';

mysqli_free_result($resultado);
mysqli_close($conexion);
Este código utiliza la función mysqli_query() para ejecutar una consulta SELECT en una tabla de una base de datos MySQL, y luego utiliza un bucle while para mostrar los resultados en una tabla HTML.

Enviar datos de un formulario a una base de datos MySQL:
php
Copy code
$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

$nombre = mysqli_real_escape_string($conexion, $_POST['nombre']);
$correo = mysqli_real_escape_string($conexion, $_POST['correo']);
$contraseña = mysqli_real_escape_string($conexion, $_POST['contraseña']);

$sql = "INSERT INTO usuarios (nombre, correo, contraseña) VALUES ('$nombre', '$correo', '$contraseña')";

if (mysqli_query($conexion, $sql)) {
    echo 'Usuario registrado correctamente.';
} else {
    echo 'Error al registrar usuario: ' . mysqli_error($conexion);
}

mysqli_close($conexion);
Este código toma los valores de un formulario enviado con el método POST, y los inserta en una tabla de una base de datos MySQL utilizando una consulta INSERT. También utiliza la función mysqli_real_escape_string() para prevenir ataques de inyección de SQL. Si la consulta se ejecuta correctamente, muestra un mensaje de éxito. De lo contrario, muestra un mensaje de error.

Validar un archivo de subida en PHP:
php
Copy code
if ($_FILES['archivo']['error'] == UPLOAD_ERR_OK) {
    $nombre = $_FILES['archivo']['name'];
    $tipo = $_FILES['archivo']['type'];
    $tamaño = $_FILES['archivo']['size'];
    $temp = $_FILES['archivo']['tmp_name'];

    if ($tipo != 'image/jpeg' && $tipo != 'image/png') {
        echo 'El archivo debe ser una imagen JPEG o PNG.';
    } else if ($tamaño > 1000000) {
        echo 'El archivo no debe ser mayor de 1 MB.';
    } else {
        move_uploaded_file($temp, 'uploads/' . $nombre);
        echo 'Archivo subido correctamente.';
    }
} else {
    echo 'Error al subir archivo: ' . $_FILES['archivo']['error'];
}
Este código verifica si un archivo ha sido subido correctamente con el método POST, y luego valida el tipo y el tamaño del archivo. Si el archivo es una imagen JPEG o PNG y su tamaño es menor o igual a 1 MB, lo mueve a una carpeta de subidas y




Regenerate

$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

// Procesar consultas aquí

mysqli_close($conexion);

Este código utiliza la función mail() de PHP para enviar un correo electrónico a un destinatario específico. Debes reemplazar las direcciones de correo electrónico en las variables $para y $headers con las direcciones correctas para tu caso.

$para = 'destinatario@example.com';
$asunto = 'Mensaje de prueba';
$mensaje = 'Este es un mensaje de prueba.';

$headers = 'From: remitente@example.com' . "\r\n" .
    'Reply-To: remitente@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($para, $asunto, $mensaje, $headers);
Este código verifica si el formulario ha sido enviado con el método POST, y luego valida los campos nombre, correo y contraseña. Si alguno de los campos está vacío, muestra un mensaje de error. Si el correo electrónico no es válido, muestra otro mensaje de error. Si todos los campos son válidos, puedes procesar el formulario.


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $nombre = $_POST['nombre'];
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    if (empty($nombre) || empty($correo) || empty($contraseña)) {
        echo 'Por favor, rellena todos los campos.';
    } else if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
        echo 'El correo electrónico no es válido.';
    } else {
        // Procesar el formulario
    }
}


Este código primero realiza una conexión a la base de datos, luego ejecuta la consulta SQL que involucra un INNER JOIN, una operación GROUP BY y una operación SUM, y finalmente genera la tabla dinámica con los datos obtenidos. Cada fila de la tabla corresponde a un registro de la consulta, y las columnas corresponden a los campos de la consulta (nombre, fecha e importe_total).

Espero que este ejemplo te sea útil. Ten en cuenta que, como siempre, es importante tomar medidas de seguridad para proteger tu sitio web contra ataques y vulnerabilidades.

<?php
// Conexión a la base de datos (suponiendo que ya tienes una creada)
$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

// Verificar si hay errores en la conexión
if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

// Consulta para obtener los datos de la tabla 'usuarios' y 'pedidos' mediante INNER JOIN
$query = "SELECT usuarios.nombre, pedidos.fecha, SUM(pedidos.importe) AS importe_total FROM usuarios INNER JOIN pedidos ON usuarios.id = pedidos.id_usuario GROUP BY usuarios.nombre, pedidos.fecha";

// Ejecutar la consulta y obtener los resultados
$resultado = mysqli_query($conexion, $query);

// Generar la tabla dinámica
echo '<table>';
echo '<tr><th>Nombre</th><th>Fecha</th><th>Importe Total</th></tr>';
while ($fila = mysqli_fetch_assoc($resultado)) {
    echo '<tr>';
    echo '<td>' . $fila['nombre'] . '</td>';
    echo '<td>' . $fila['fecha'] . '</td>';
    echo '<td>' . $fila['importe_total'] . '</td>';
    echo '</tr>';
}
echo '</table>';

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>



En este ejemplo, el formulario de registro se encuentra en index.php, y cuando el usuario presiona el botón "Registrar", se envían los datos a registro.php, donde se realiza la conexión a la base de datos y se insertan los datos del nuevo usuario en la tabla "usuarios".

Ten en cuenta que este es solo un ejemplo básico, y hay muchas consideraciones de seguridad que debes tener en cuenta al trabajar con contraseñas y datos de usuario. Te recomiendo que investigues más sobre cómo proteger tu sitio web contra ataques y vulnerabilidades.


<?php
// Conexión a la base de datos (suponiendo que ya tienes una creada)
$conexion = mysqli_connect('localhost', 'usuario', 'contraseña', 'basedatos');

// Verificar si hay errores en la conexión
if (mysqli_connect_errno()) {
    echo 'Error de conexión: ' . mysqli_connect_error();
    exit;
}

// Recibir los datos del formulario de registro
$nombre_usuario = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];

// Encriptar la contraseña con el algoritmo bcrypt
$hash = password_hash($contrasena, PASSWORD_BCRYPT);

// Insertar los datos en la tabla 'usuarios'
$query = "INSERT INTO usuarios (nombre_usuario, contrasena) VALUES ('$nombre_usuario', '$hash')";
$resultado = mysqli_query($conexion, $query);

// Verificar si se realizó correctamente la inserción
if ($resultado) {
    echo 'Registro exitoso. Bienvenido, ' . $nombre_usuario . '.';
} else {
    echo 'Error al registrar el usuario.';
}

// Cerrar la conexión a la base de datos
mysqli_close($conexion);
?>


<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Registro de Usuario</title>
</head>
<body>
    <h1>Registro de Usuario</h1>
    <form action="registro.php" method="post">
        <label>Nombre de usuario:</label>
        <input type="text" name="nombre_usuario" required>
        <br><br>
        <label>Contraseña:</label>
        <input type="password" name="contrasena" required>
        <br><br>
        <input type="submit" value="Registrar">
    </form>
</body>
</html>

este y el de arriba completan el registro
