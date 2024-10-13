// /*Ejercicio 10 aleatorio<>*/
// // Realizar un ejercicio que calcule:
// // 1.	5 números aleatorios entre 0 y 1.
// // 2.	5 números aleatorios entre 3 y 7.
// // 3.	5 números aleatorios entre 15 y 70.
// // 4.	Que nos pida por teclado dos números y calcules 15 números entre el intervalo introducido.
// // 5.	Que calcule 150 números enteros entre 1 y 10.

// //funcion que me da un número aleatorio en el rango que elija
function aleatorio(inicio,fin) {
	var rango=fin-inicio + 1; 
	var numAleatorio = parseInt((Math.random()*rango)+inicio);
	return numAleatorio;
}

// //1.
// console.log("Números aleatorios entre 0 y 1: ");
// for(var i=0;i<5;i++){
	// console.log(Math.random());
// }

// //2.
// console.log("Números aleatorios entre 7 y 3: ");
// for(var i=0;i<5;i++){
	// console.log(aleatorio(3,7));//llamo a la funcion
// }
// // for(var i=0;i<5;i++){
	// // console.log(parseInt(Math.random()*(7-3+1)+3)); //7-3+1 numeros en rango, +3 para empezar desde ese
// // }
// //3.

// console.log("Números aleatorios entre 15 y 70: ");
// for(var i=0;i<5;i++){
	// console.log(aleatorio(15,70));
// }
 
// // for(var i=0;i<5;i++){
	// // console.log(parseInt(Math.random()*(70-15)+15+1));//con el +1 llegamos a 70
// // }

// //4. 
var num1=prompt("Escribe el primer numero (inicio)");
var num2=prompt("Escribe el segundo numero(fin)");
num1=parseInt(num1);//todo lo que lea por prompt numerico tengo que convertirlo a INT porque el puto JS no me lo hace
num2=parseInt(num2);
console.log("Números aleatorios entre "+num1+" y "+num2+": ");
for(var i=0;i<15;i++){
	console.log(aleatorio(num1,num2));
} 														

// for(var i=0;i<15;i++){
	// console.log(parseInt(Math.random()*(num2-num1)+num1));// por que esto no me coge los numeros que pongo ????? preguntar a PACO SI O SI. RESPUESTA
// } 														  //RESPUESTA: hay que hacer un parseInt antes de procesar los datos


// //5.
// var numa=1;
// var numb=10;

// console.log("Números entre 1 y 10");
// for(var i=0;i<150;i++){
	// console.log(aleatorio(numa,numb));
// } 														  
// // for(var i=0;i<150;i++){
	// // console.log(parseInt(Math.random()*10+1));//primero se multiplica por 10 y luego se le suma una ya que así evitamos algún 0
// // } 
//6.
// Que calcule 1500 números enteros entre 1 y 10 contando la aparición de cada uno de ellos, es decir, indicando el número de 1, el número de 2, etc



var arraynumeros=new Array(1500);

console.log("CREAMOS ARRAY CON 1500 NUMEROS ALEATORIOS ENTRE 1 y 10: ");
for(var i=0;i<1500;i++){
	arraynumeros[i]=aleatorio(1,10);
} 	


var contador=[0,0,0,0,0,0,0,0,0,0,0];  // inicialmente están cero
var indice = 0;
for(var i=0; i<arraynumeros.length; i++){ 
	indice = arraynumeros[i]; 
	contador[indice]++;
}

for(var j=1;j<contador.length;j++){
	console.log("El elemento "+j+" ha aparecido "+contador[j]+" veces."); //así mejor por empiezo a leer desde el 1
}

// for(i in contador){
	// console.log("El elemento "+i+" ha aparecido "+contador[i]+" veces.");
// }







