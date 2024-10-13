/*Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por
pantalla los doce nombres utilizando la función alert() usando un solo alert.
Hacer el mismo ejercicio mostrando los meses del año con el comando console.log
Hacer el mismo ejercicio mostrando los meses con el comando document.write*/

var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
var cadena="Meses del anio: ";
for(var i=0;i<12;i++){
	cadena+="\n"+meses[i];
} 
alert (cadena);
/*console.log(cadena);
document.write(cadena);*/

for(var i=0;i<12;i++){
	console.log(meses[i]);
}

for(var i=0;i<12;i++){
	document.write(meses[i]+"<br>");
}
