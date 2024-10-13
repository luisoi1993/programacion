var boleano =false;
var contador=0;
while(!boleano&&contador<2){
	console.log(boleano);
	console.log(contador);
	if(contador==3){
		boleano=true;
		
	}
	contador++;
}
console.log(boleano);



/*Ejercicio 7<>*/
/*var periodicos=[];
var datos;
datos=prompt("Introduce datos del encuestado","encuestado");

lo que tenia al principio
var datos=[];
var owo;
var j=0;
owo=prompt("Introduce los datos de los encuestados","periodico,edad,sexo");
var encuestado = owo.split(",",3);
while(owo!=0){
	var encuestado = owo.split(",",3);
	datos[j]=encuestado;
	j++;
	owo=prompt("Introduce los datos de los encuestados","periodico,edad,sexo");
}

for(var i=0;i<datos.length;i++){
	for(var y=0;y<datos[i].length;y++){
		document.write(datos[i][y]+"<br>");
	}
}














*/


var periodicos=["pais","ya","abc","mundo","diario-16","metro"];
var per_encue=[];
var edad_sexo=["15-20","21-30","31-50","51-60","+60","mujer","hombre"];
var edad_sexo_encue=[];

var totales=[];
var datos=[];
var j=0;

function guardaEncuestado(){
	var encuestado;
	encuestado=document.getElementById("datos_encuestado").value;
	var trozos = encuestado.split(",",3);
	datos[j]=trozos;
	j++;
	alert("Se ha guardado al encuestado.");
}


function procesaDatos(){
	alert("Procesando datos...");
	for(var i=0;i<datos.length;i++){
		for(var j=0;j<datos[i].length;j++){
			document.write(datos[i][j]+"<br>");
		}
	}
	
}


function sumaTotal(){
	
	
	for(var i=0;i<1;i++){
		for(var j=0;j<1;j++){
			per_encue[i]=datos[i][j];
		}
	}
	
	for(var i=0;i<datos.length;i++){
		for(var j=1;j<datos.length;j++){
			edad_sexo_encue[i][j]=datos[i][j];
		}
	}
	
	
	
	if(datos[i][j]=periodicos[i]){
		totales.splice(i,0,edad_sexo);
	}
	for(var i=0;i<datos.length;i++){
		for(var j=0;j<datos[i].length;j++){
			document.write(datos[i][j]+"<br>");
		}
	}
}









