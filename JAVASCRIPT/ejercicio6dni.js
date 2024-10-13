/*Ejercicio de DNI para mañana*/
/*X → 0
  Y → 1
  Z → 2*/

var letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
var letrasnie=["X","Y","Z"];

var nifnie;
nifnie=prompt("Introduce la tu dni/nie:","dni/nie");
var errorletra=false;
var j=0;

if(nifnie.length>8||nifnie.length<8){
	alert("Has introducido más o menos caracteres de los que necesitas.");
}else{
	if(isNaN(nifnie.charAt(0))){
		while(j<letrasnie.length&&letrasnie[j]!=nifnie.charAt(0)){
			j++;
		}
		if(j<3){
			for(var i=1;i<8;i++){
				if(isNaN(nifnie.charAt(i))){
					alert("Has escrito una letra donde debería ir un numero");//reducirlo a un while
					errorletra=true;
				}else{
					j+=parseInt(nifnie.charAt(i));
				}
			}
			if(!errorletra){
				divi=Math.trunc(j/23);
				alert("La letra que corresponde al NIE "+nifnie+" es "+letras[divi]);
			}
		}else{
			alert("Has introducido una letra distinta a X,Y o Z en la primera posición.");
		}
	}else{
		for(var i=0;i<8;i++){
			if(isNaN(nifnie.charAt(i))){
				alert("Has escrito una letra donde debería ir un numero");//reducirlo a un while
				errorletra=true;
			}else{
				j+=parseInt(nifnie.charAt(i));
			}
		}
		if(!errorletra){
			divi=Math.trunc(j/23);
			alert("La letra que corresponde al NIE "+nifnie+" es "+letras[divi]);
		}
	}
}
