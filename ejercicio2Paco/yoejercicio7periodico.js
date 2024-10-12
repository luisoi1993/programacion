/*
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

*/

var periodicos=["pais","ya","abc","mundo","diario-16","metro"];
var per_encue=[0,0,0,0,0,0];
var sexo_encue=[0,0];
var contador_edad=[0,0,0,0,0];
var intervalos=[20,30,50,60];
var edad_sexo=["15-20","21-30","31-50","51-60","+60","mujer","hombre"];
var edad_array=["15-20","21-30","31-50","51-60","+60"];
var sexo=["hombre","mujer"];
var edad_sexo_encue=[];
var recorer_intervalos=0;

var totales=[];
var datos=[];
var j=0;



function guardaEncuestado(){
	var encuestado;
	encuestado=document.getElementById("datos_encuestado").value;
	var trozos = encuestado.split(",",3);

	for(var i=0;i<periodicos.length;i++){
		if(trozos[0]==periodicos[i]){
			per_encue[i]== per_encue[i]++;
			console.log(per_encue[i]);
		}


	}

	for(s=0;s<3;s++){
		if(trozos[1]<=intervalos[s] ){
			contador_edad[s]==contador_edad[s]++;
			console.log(contador_edad[s]);
				s=3;
			}


		else if(trozos[1]>60){
				contador_edad[4]++;
				console.log(contador_edad[4]);
				s=3;
			}
}

for(var i=0;i<sexo.length;i++){
	if(trozos[2]==sexo[i]){
		sexo_encue[i]== sexo_encue[i]++;
		console.log(sexo_encue[i]);
	}
}


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
		document.write("<br>");
	}

	document.write("<br>");
	for(var i=0;i<periodicos.length;i++){
		document.write(periodicos[i]+"&nbsp;&nbsp;");

	}
	document.write("<br>");
	for(var i=0;i<per_encue.length;i++){
		document.write(per_encue[i]+"&nbsp;&nbsp;");
	}
	document.write("<br>");
	for(var i=0;i<edad_array.length;i++){
		document.write(edad_array[i]+"&nbsp;&nbsp;");

	}
		document.write("<br>");
		for(var i=0;i<contador_edad.length;i++){
			document.write(contador_edad[i]+"&nbsp;&nbsp;");
		}
		document.write("<br>");
		for(var i=0;i<sexo.length;i++){
			document.write(sexo[i]+"&nbsp;&nbsp;");

		}
			document.write("<br>");
			for(var i=0;i<sexo_encue.length;i++){
				document.write(sexo_encue[i]+"&nbsp;&nbsp;");
			}


}

/*
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
*/
