<?php
include 'includes/conecta.php';
$consulta="SELECT * FROM Alumnos";
$guardar = $conecta->query($consulta);
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div class="">
      <h3>tabla dinamica</h3>
      <div class="table-responsive table-hover" id="tablaconsulta">
        <table class="table">
          <thead>
            <th>Nombre</th>
            <th>apellido</th>
            <th>oi</th>
          </thead>
        </table>
        <tbody>
          <?php while($row = $guardar->fecth_assoc()){ ?>
          <tr>
            <td><?php echo $row['nombre'] ?></td>
            <td><?php echo $row['nombre'] ?></td>
          </tr>
        <?php } ?>
        </tbody>
      </div>
    </div>
  </body>
</html>
