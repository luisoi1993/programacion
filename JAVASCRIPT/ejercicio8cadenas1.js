/*Ejercicio 8 de cadenas*/
// 1.	Introducir dos cadenas de texto.
// 2.	Mostrar la longitud de cada una de ellas.
// 3.	Convertir a mayúsculas la primera cadena.
// 4.	Convertir a minúsculas la segunda cadena.
// 5.	Concatenar las dos cadenas de texto.
// 6.	Mostrar la longitud de la cadena concatenada.
// 7.	Mostrar el carácter central de la cadena, el primero y el último.
// 8.	Localizar las primera y última posición que ocupa un carácter introducido por teclado.
// 9.	Dividir la cadena en tres partes y obtener la segunda parte de las tres.
// 10.	Todo lo anterior se mostrará por pantalla.
// 11.	Convierte la cadena resultante de todas las operaciones anteriores en un array. La cadena del punto 5.
// 12.	Indicar y contar cuantas letras “a” hay en la cadena del punto 5 indicando la posición que ocupa cada una de las letras.

//1.leemos cadenas por teclado
var cadena1= prompt("Introduce la primera cadena");
var cadena2= prompt("Introduce la segunda cadena");

//2.Mostramos la longitud con el método .length
console.log("El tamaño de la primera cadena de texto es: "+cadena1.length);
console.log("El tamaño de la segunda cadena de texto es: "+cadena2.length);

//3. Convertimos en mayúscula la primera cadena
console.log("La primera cadena en mayúscula es: "+cadena1.toUpperCase());

//4. Convertimos en minúscula la segunda cadena
console.log("La segunda cadena en minúscula es: "+cadena2.toLowerCase());

//5. Concatenamos cadenas
var cadenaconcatenada=cadena1.concat(cadena2)
console.log("Las cadenas 1 y 2 concatenadas: "+cadenaconcatenada);

//6. Mostrar longitud de la cadena concatenada
console.log("La longitud de la cadenas concatenadas es de "+cadenaconcatenada.length);

//7. Mostrar carácter central de la cadena, primero y último
console.log("El primer caracter de la cadena es "+cadenaconcatenada.charAt(0));
console.log("El último caracter de la cadena es "+cadenaconcatenada.charAt(cadenaconcatenada.length-1));
console.log("El caracter central de la cadena es "+cadenaconcatenada.charAt(parseInt((cadenaconcatenada.length-1)/2)));

//8. Localizar primera y última posición de caracter introducido por teclado
var car=prompt("Introduce caracter a buscar en la cadena concatenada.");
console.log("La primera aparición del carácter "+car+" es "+ cadenaconcatenada.indexOf(car,0));
console.log("La última aparición del carácter "+car+" es "+ cadenaconcatenada.lastIndexOf(car,cadenaconcatenada.length-1)); 

//9 y 10. Dividimos la cadena en tres partes y mostramos por pantalla
var parte1=cadenaconcatenada.substring(0,parseInt(cadena1.length/2));
var parte2=cadenaconcatenada.substring(parseInt(cadena1.length/2),(cadenaconcatenada.length-(cadena2.length/2)));
var parte3=cadenaconcatenada.substring((cadenaconcatenada.length-(cadena2.length/2)),(cadenaconcatenada.length));
console.log("La primer trozo de la cadenaconcatenada: "+parte1);
console.log("La segundo trozo de la cadenaconcatenada: "+parte2);
console.log("La tercer trozo de la cadenaconcatenada: "+parte3);

//11. Convertir en un array la cadena concatenada
var arraycadena=cadenaconcatenada.split("");
console.log("Array de cadena concatenada: ");
for(i in arraycadena){
	console.log(arraycadena[i]);
}

//12.
var letra=prompt("Indica la letra que quieres buscar");
var contadorletra=0;
var posiciones= new Array(cadenaconcatenada.length);
var cadenacortada=cadenaconcatenada;
var j=0;
var posicion=0;
for(var i=0;i<cadenaconcatenada.length;i++){
	if(cadenacortada.indexOf(letra)<0){
		console.log("No se ha encontrado el caracter especificado.");
	}else{
		contadorletra++;
		posicion=cadenacortada.indexOf(letra);
		cadenacortada=cadenacortada.substring(posicion,cadenacortada.length);
	}

}

console.log("La letra "+letra+" ha aparecido "+contadorletra+" veces en las posiciones: ");


//instalar greenfish icon