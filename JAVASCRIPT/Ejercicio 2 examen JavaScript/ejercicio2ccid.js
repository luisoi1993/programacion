var tr=document.getElementsByTagName('tr');
var cadena;
var celda;
for(var i=0;i<(tr.length-1);i++){
	td=tr[i].getElementsByTagName('td');
	for(var j=0;j<td.length;j++){
		cadena="Introduce el elemento "+j+" de la fila "+i+":";
		celda=document.getElementById("c"+i+j);
		celda.innerHTML=prompt(cadena);
	}
}


var aux;//variable centinela
var num1;
var num2;
for (var k=0;k<4;k++){//las veces que llamamos al metodo de la burbuja
	for(var i=0;i<3;i++) {//filas
		for(var j=0;j<4;j++){//columnas
			num1=document.getElementById("c"+i+j);
			num2=document.getElementById("c"+i+(j+1));
			if(parseInt(num1.innerHTML)<parseInt(num2.innerHTML)){
				aux=num1.innerHTML;
				num1.innerHTML=num2.innerHTML;
				num2.innerHTML=aux;
			}
		}
	}	
}

var suma;
var total;
var valor;

for(var i=0;i<3;i++){
	for(var j=0;j<5;j++){
		total=document.getElementById("c3"+j);
		casilla=document.getElementById("c"+i+j);
		if(total.innerHTML==""){//porque si es nulo
			total.innerHTML=casilla.innerHTML;
		}else{
			valor=parseInt(total.innerHTML);
			suma=valor+parseInt(casilla.innerHTML);
			total.innerHTML=suma;
		}
	}
}
	





