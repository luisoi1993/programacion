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

// for (j=0;j<letrasnie.length;j++)
// {			if(letrasnie[j]==nifnie.charAt(0)){
				// alert("¡Encontrado! "+letrasnie[j]+" "+j);
				// sumadigitos=j;
			// }
		
// }
// alert ("no encontrado " + j);
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
	
//acoplarlo a mi código



// var sumadigitos=0;
// var noescorrecto;
// for(var j=1;j<8;j++){
	// if(isNaN(nifnie.charAt(j))==false){
		// noescorrecto=false;
	// }else{
		// noecorrecto=true;
		// break;
	// }
// }


// if(nifnie.length>8||nifnie.length<8){
	// alert("Se han introducido más o menos caracteres de los que se necesitan.")
// }else{
	// if(noescorrecto==false){
		
		
		// // if(nifnie.charAt(0))
		
		// // if (nifnie.charAt(0)=="X"||nifnie.charAt(0)=="Y"||nifnie.charAt(0)=="Z"){
			// // if(nifnie.charAt(0)=="X"){
				// // sumadigitos=0
				// // for(var i=1;i<8;i++){
					// // sumadigitos=sumadigitos+parseInt(nifnie.charAt(i));
				// // }
			// // }else if(nifnie.charAt(0)=="Y"){
				// // sumadigitos=1
				// // for(var i=1;i<8;i++){
					// // sumadigitos=sumadigitos+parseInt(nifnie.charAt(i));
				// // }
			// // }else if(nifnie.charAt(0)=="Z"){
				// // sumadigitos=2
				// // for(var i=1;i<8;i++){
					// // sumadigitos=sumadigitos+parseInt(nifnie.charAt(i));
				// // }
			// // }
		// }else{
			// for(var i=0;i<8;i++){
				// sumadigitos=sumadigitos+parseInt(nifnie.charAt(i));
			// }
		// }
		// var divi;
		// divi=Math.trunc(sumadigitos/23);
		// alert("La letra que corresponde el DNI/NIE "+nifnie+" es "+letras[divi]);
	// }else{
		// alert("El número de caracteres es correcto pero hay letras donde debería haber números");
	// }
// }

