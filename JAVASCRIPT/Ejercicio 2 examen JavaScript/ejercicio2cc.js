var tr = document.getElementsByTagName('tr');
var td;
var cadena;
for (var i=0;i<(tr.length-1);i++){//para no llegar a la fila final donde se harán las sumas
	td=tr[i].getElementsByTagName('td');
	for (var j=0;j<td.length;j++) {
		cadena="Introduce el elemento "+j+" de la fila "+i+":";
		td[j].innerHTML = prompt (cadena);
	}
}

for(var k=0;k<3;k++) { //ordenamos cada uno de los trs que tiene la tabla
	tr = document.getElementsByTagName('tr');
	td = tr[k].getElementsByTagName('td');
	var aux;//variable centinela
	for(var i=0;i<4;i++) {
		for(var j=0;j<4;j++) {
			if(parseInt(td[j].innerHTML)<parseInt(td[j+1].innerHTML)){//método de ordenación de la burbuja. Aprenderlo
				aux = td[j].innerHTML;
				td[j].innerHTML=td[j+1].innerHTML;
				td[j+1].innerHTML=aux;
			}
		}
	}
}
//cutre UWU
suma=tr[3].getElementsByTagName('td');
num1=tr[0].getElementsByTagName('td');
num2=tr[1].getElementsByTagName('td');
num3=tr[2].getElementsByTagName('td');
var n1;
var n2;
var n3;
var sumaT;
//suma[i] = num1[i] + num2[i] + num3[i];
for(var i=0;i<5;i++){
	n1=parseInt(num1[i].innerHTML);//hay que parsearlo, ya que si intentamos sumar sin parsear, solo se concatenan ya que es una cadena de texto
	n2=parseInt(num2[i].innerHTML);
	n3=parseInt(num3[i].innerHTML);
	sumaT=n1+n2+n3;
	suma[i].innerHTML=sumaT;
}
+



