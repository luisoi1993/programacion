var filas = document.getElementsByTagName('tr');
var columnas;

//RELLENAR SOLO 3 FILAS
var filas_a_rellenar = 3;
var numero_aleatorio;
for (var i = 0; i < filas_a_rellenar; i++) {
	columnas = filas[i].getElementsByTagName('td');
	for (var j = 0; j < columnas.length; j++) {
		//INTRODUCIR LOS NÚMEROS
		numero_aleatorio = Math.floor(Math.random() * (100 - 0)) + 0;
		columnas[j].innerHTML = numero_aleatorio;
	}
}

////ORDENAR LOS VALORES INTRODUCIDOS
for (var i = 0; i < filas_a_rellenar; i++) {
	columnas = filas[i].getElementsByTagName('td');

	//BURBUJA--------------------
	var k, l, aux;
	for (k = 1; k < columnas.length; k++) {
		for (l = 0; l < (columnas.length - k); l++) {
			if (parseInt(columnas[l].innerHTML) < parseInt(columnas[l + 1].innerHTML)) {
				aux = columnas[l].innerHTML;
				columnas[l].innerHTML = columnas[l + 1].innerHTML;
				columnas[l + 1].innerHTML = aux;
			}
		}
	}
	//---------------------
}

//RELLENAR ÚLTIMA FILA
var fila_totales = filas[3].getElementsByTagName('td');
var suma = 0;
for (var j = 0; j < columnas.length; j++) {
	
	for (var i = 0; i < filas_a_rellenar; i++) {
		columnas = filas[i].getElementsByTagName('td');
		suma += parseInt(columnas[j].innerHTML);
	}
	fila_totales[j].innerHTML = suma;
	suma = 0;
}