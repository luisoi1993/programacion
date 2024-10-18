<?php

	//DATOS RECOGIDOS
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];


	if ($email == "0") {
		require "enlace.php";

		//SACAR LOS NOMBRES DE LOS USUARIOS
		$consulta = "SELECT email FROM usuarios ORDER BY email";
		$resultado = mysqli_query($connection, $consulta);
		$email = array();

		while ($fila = mysqli_fetch_row($resultado)){
			foreach($fila as $value){
				array_push($email, $value);
			}
		}
	}

	enviarEmail($email, $asunto, '', '');
	
	//Enviar email
	function enviarEmail($email, $asunto, $body, $attach){
	    require('PHPMailer-master/src/PHPMailer.php');
	    require('PHPMailer-master/src/SMTP.php');

	    $mail = new PHPMailer();
	    $mail -> isSMTP();
	    $mail -> Mailer = "SMTP";
	    $mail -> SMTPAuth = true;
	    $mail -> isHTML(true);
	    $mail -> SMTPAutoTLS = false;
	    $mail -> Port = 25;
	    $mail -> CharSet = 'UTF-8';
	    $mail -> Host = "localhost";
	    $mail -> Username = "---";
	    $mail -> Password = "---";
	    $mail -> setFrom('---');

	    //Compruebo si es un correo o son varios
	    if(is_array($email)){
	    	foreach($email as $value){
	    		$mail->addAddress($value);
	    	}
	    }else {
	    	$mail -> addAddress($email);
	    }

	    if (isset($_POST['imagen'])) {
			$imagen = $_POST['imagen'];
			$mail->AddEmbeddedImage($imagen, 'imagen');
		}

	    $mail -> Subject = $asunto;
				
	    $body = "";
	    $body .= "<html lang='es'>";
		    $body .= "<head>";
		    $body .= "<style>";
		    	$body .= "h3{
							font-size: 25px;
							text-align: left;
						}

						img{
							height: 120px;
							width: 250px;
						}";
		    $body .= "</style>";
		    
		    $body .= "</head>";
		    $body .= "<body>";
		   		$body .= "<h3>".$GLOBALS['asunto']."</h3>";
		    	$body .= "<p>".$GLOBALS['mensaje']."</p>";
		    	if (isset($_POST['imagen'])) {
					$imagen = $_POST['imagen'];
					if ($imagen != "0") {
						$body .= "<img src='cid:imagen'></img>";
					}
				}
	    	$body .= "</body>";
	    $body .= "</html>";

		$mail -> Body = $body;

	    if(!$mail -> send()){
	        echo $mail->ErrorInfo;
	    }else {
	    	echo "<h3>".$GLOBALS['asunto']."</h3>";
	    	echo "<p>".$GLOBALS['mensaje']."</p>";
	    	if (isset($_POST['imagen'])){
				$imagen = $_POST['imagen'];
				
				if ($imagen != "0") {
					echo "<img src='".$imagen."'></img>";
				}
			}

	    }

	} 
	
?>