/*Ejercicio 9 de cadenas<>*/
// 1.	Introduce en una cadena de texto un conjunto de números, sin espacios en blanco. Los números a introducir se validarán y estarán comprendidos entre 1 y 9.
// 2.	Cada uno de estos números serán elementos de un array. Convierte la cadena a array.
// 3.	Indica cuentos elementos tiene el array resultante.
// 4.	Concatena al array, el mismo array, es decir, duplica el array.
// 5.	Ordena el array.
// 6.	Elimina del array todas los números 1 que encuentres.
// 7.	Elimina del mismo array todos los números 9 que encuentres.
// 8.	Ahora cuenta los números 5 que hay y por cada numero 5 añadirás un elemento al final del array y otro al principio del array.
// 9.	Cada uno de los elementos añadidos será un numero 5.
// 10.	Ordena el array en orden inverso.
// 11.	Todos los elementos se irán visualizando en el navegador.


//1.
var cadena=prompt("Introduce los números");
var j=0;
// while((j<cadena.length)&&(isNaN(parseInt(cadena.charAt(j)))==false)){
	// console.log(cadena.charAt(j));
	// j++;
// }	

for(var i =0;i<cadena.length;i++){
	if(isNaN(cadena.charAt(i))==false){
		console.log(cadena.charAt(i)+" es un número.");
	}
}

//2 y 3. CONVERTIRLO CON UN SPLICE
var arraynum=[];
var elementos=0;
for(var i =0;i<cadena.length;i++){
	if(isNaN(cadena.charAt(i))==false){
		arraynum[i]=cadena.charAt(i);
		elementos++;
	}
}
console.log("El array numérico tiene "+elementos+" elementos.");
for(i in arraynum){
	console.log(arraynum[i]);
}

//4.
console.log("Array concatenado: ");
var nuevoarray=arraynum.concat(arraynum);
for(j in nuevoarray){
	console.log(nuevoarray[j]);
}

//5.
console.log("Array num ordenado:");
arraynum.sort();
for(j in arraynum){
	console.log(arraynum[j]);
} //hacerlo sin sort con el método de la burbuja o intercambio, es sencillo se necesita otro array y una variable auxiliar


//6.
var num=prompt("Indica el número a eliminar del array:");
var arraymodificado=arraynum;
// for(var j=0;j<arraymodificado.length;j++){
	// if(arraymodificado[j]==num){
		// arraymodificado.splice(j,1); con split o poner ese elemento algo vacío ""
		// j=0;
	// }
// } //longitud=array.length;
var j=0;
while(j<arraymodificado.length&&arraymodificado[j]==num){
	arraymodificado.splice(j,1);
	if(arraymodificado[j]==num){
		j=0;
	}else{
		j++;
	}
}



console.log("Array eliminando número "+num+":");

for(l in arraymodificado){
	console.log(arraymodificado[l]);
}

//7.????? me falla algo en la lógica de la programacion del ejercicio 6 que me serviría para eliminar todos los elementos que quiera en el array

//8 y 9. 
var numm=prompt("Indica el número a buscar del array:");
numm=parseInt(numm);
var arraynuevo=arraynum;
for(var i=0;i<arraynum.length;i++){
	if(arraynum[i]==numm){
		console.log("Puto programa de mierdaaaaaaaaa");// me peta el programa si hago array push y array unshift en esste pedazo de código. me pasa lo mismo con while
	}
}

console.log("Array añadiendo número "+numm+":");

for(l in arraynuevo){
	console.log(arraynuevo[l]);
}

//10. hacer el 5 e imprimirlo inversamente (orden inverso) //también hay una propiedad llamada reverse(),