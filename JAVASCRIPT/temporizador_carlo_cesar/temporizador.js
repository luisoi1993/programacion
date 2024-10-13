function valordecimales(){
	var minutos=document.getElementById("minutos").innerHTML;
	var segundos=document.getElementById("segundos").innerHTML;
	var decimales=document.getElementById("decimales").innerHTML;
	decimales=parseInt(decimales);
	if(decimales<9){
		decimales++;
		document.getElementById("decimales").innerHTML="0"+decimales;
	}else if(decimales==9){
		document.getElementById("decimales").innerHTML="00";
		if(segundos<9){
			segundos++;
			document.getElementById("segundos").innerHTML="0"+segundos;
		}else if(segundos<59){
			segundos++;
			document.getElementById("segundos").innerHTML=segundos;
		}else if(segundos==59){
			document.getElementById("segundos").innerHTML="00";
			if(minutos<9){
				minutos++;
				document.getElementById("minutos").innerHTML="0"+minutos;
			}else if(segundos<59){
				segundos++;
				document.getElementById("minutos").innerHTML=minutos;
			} else if(segundos==59){
				document.getElementById("minutos").innerHTML="00";
			}
		}
		
	}
	console.log(document.getElementById("decimales").innerHTML);
}

function cambiarDecimales(){
	document.getElementById("play").removeEventListener("click",cambiarDecimales);
	
	decimales=setInterval(valordecimales, 100);
	// segundos=setInterval(valorsegundos,1000);
	// minutos=setInterval(valorminutos,60000)
	
	document.getElementById("pause").addEventListener("click",stop);
	document.getElementById("loop").addEventListener("click",loop);
	document.getElementById("resetear").addEventListener("click",resetear);
}

function play(){
	document.getElementById("play").addEventListener("click",cambiarDecimales);
}


function stop(){
	clearInterval(decimales);
	// clearInterval(segundos);
	// clearInterval(minutos);
	document.getElementById("play").addEventListener("click",cambiarDecimales);
}
var contador=1;

function loop(){
	var decimales=document.getElementById("decimales").innerHTML;
	var segundos=document.getElementById("segundos").innerHTML;
	var minutos=document.getElementById("minutos").innerHTML;
	var nuevoli =document.createElement("li");
	var nuevotexto = document.createTextNode("Marca "+contador+": "+minutos+":"+segundos+":"+decimales);
	nuevoli.appendChild(nuevotexto);
	document.getElementById("marcas").appendChild(nuevoli);
	contador++;
}

function resetear(){
	contador=0;
	document.getElementById("marcas").innerHTML="";
	clearInterval(decimales);
	// clearInterval(segundos);
	// clearInterval(minutos);
	document.getElementById("decimales").innerHTML="00";
	document.getElementById("segundos").innerHTML="00";
	document.getElementById("minutos").innerHTML="00";
	
	document.getElementById("pause").removeEventListener("click",stop);
	document.getElementById("loop").removeEventListener("click",loop);
	document.getElementById("resetear").removeEventListener("click",resetear);
	document.getElementById("play").addEventListener("click",cambiarDecimales);
}

window.onload=function(){
	play();
}