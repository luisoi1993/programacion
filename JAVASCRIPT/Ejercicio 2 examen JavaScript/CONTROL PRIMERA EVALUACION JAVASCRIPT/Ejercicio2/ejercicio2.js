var tr = document.getElementsByTagName('tr');
//5 elementos

//25 elementos


//Hacerlo con ids
var td;
var cadena;
for (var i = 0; i < (tr.length -1); i++) {
	td = tr[i].getElementsByTagName('td');
	for (var j = 0; j < td.length; j++) {
		// introducir los elemenetos
		cadena = "introduce el elemento " + j +" de la fila " + i + " ";
		td[j].innerHTML = prompt (cadena);
	}
}

/*var tr = document.getElementsByTagName('tr');
for (var i = 0; i < (tr.length -1); i++) {
	td = tr[i].getElementsByTagName('td');
	for (var j = 0; j < td.length; j++) {
		// introducir los elemenetos
		cadena = "El contenido del " + j +" de la fila " + i + " ";
		console.log (cadena + "---> " + td[j].innerHTML);
	}
}*/

for (var ii = 0; ii < 3; ii++) {
					var tr = document.getElementsByTagName('tr');
					td = tr[ii].getElementsByTagName('td');
/*
					for (var j = 0; j < 5; j++) {
						console.log("ORIGINAL--> " + j +" de la fila " + 0 + " es " + td[j].innerHTML);
						
					}*/


					var aux;
					for (var i = 0; i < 4; i++) {
						console.log ("vamos a dar la vuelta " + i + " de la fila " + ii);
						for (var j = 0; j < 4; j++) {
							console.log(" i " + i + " j " +j);
							console.log ("----->>>> i " + td[j].innerText + " j " + td[j+1].innerHTML);
							console.log("es verdadero? "+parseInt(td[j].innerHTML)<parseInt(td[j+1].innerHTML));

							if (parseInt(td[j].innerHTML)<(parseInt(td[j+1].innerHTML))){
								aux = td[j].innerHTML;
								td[j].innerHTML = td[j+1].innerHTML;
								td[j+1].innerHTML = aux;
							}

						}
						/*td = tr[0].getElementsByTagName('td');
						for (var jj = 0; jj < 5; jj++) {
						console.log("ordenacion--> " + i + " " + td[jj].innerHTML);*/
						
					}

					}
				
			


var aux;
var tr = document.getElementsByTagName('tr');

for (var ii = 0; ii < 3; ii++) {
	td = tr[ii].getElementsByTagName('td');
	for (var j = 0; j < 4; j++) {
	console.log("el elemento " + j +" de la fila " + 0 + " es " + td[j].innerHTML);
	
	}
}

suma = tr[3].getElementsByTagName('td');
num1 = tr[0].getElementsByTagName('td');
num2 = tr[1].getElementsByTagName('td');
num3 = tr[2].getElementsByTagName('td');

for (var i = 0; i < 5; i++) 
{

suma[i] = num1[i] + num2[i] + num3[i];

	
}




