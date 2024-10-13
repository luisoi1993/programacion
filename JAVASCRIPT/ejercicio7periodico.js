/*Ejercicio 7<>*/



//arrays con los valores de las encuestas
var periodicos_tabla=["","pais","ya","abc","mundo","diario-16","metro","total"];
var edad_sexo_tabla=["","15-20","21-30","31-50","51-60","+60","mujer","hombre"];
var edad_tabla=new Array(15,20,30,50,60,99);//mejor meter los mínimos de cada rango
var sexo_tabla= new Array("M","H");//no es necesario
//var per_encue=[];
//var edad_sexo_encue=[];

//variable que nos indica que la tabla esté creada
var estado_tabla=false;

//creo un array vacío
var array_tabla = new Array();
for(var i=0;i<edad_sexo_tabla.length;i++){
	array_tabla[i]=new Array(periodicos_tabla.length);
	for(var j=0;j<periodicos_tabla.length;j++){
		array_tabla[i][j]=0;
	}
}
console.log(array_tabla);


var periodico;
var edad;
var sexo;

var datos=[];
var contador=0;
function guardaEncuestado(){
	var encuestado;
	encuestado=document.getElementById("datos_encuestado").value;
	var trozos = encuestado.split(",",3); //lo debo poner en otro lado, mejor guardar el encuestado como string en las posiciones de un array
	datos[contador]=trozos;
	j++;
	alert("Se ha guardado al encuestado.");
}
//después debemos con un bucle for recorrer el array y hacer un split de los elementos asignando
//vamos chevere vamos a intentarlo
for(var i=0;i<array.length;i++){

}






// var array_tabla = new Array();
// for(var i=0;i<edad_sexo_tabla.length;i++){
	// array_tabla[i]=new Array(periodicos_tabla.length);
	// for(var j=0;j<periodicos_tabla.length;j++){
		// array_tabla[i][j]=0;
	// }
// }

function procesaDatos(){
	
	if(periodico.validaPeriodico()==true&&edad.validaEdad()==true&&sexo.validaSexo()==true){
		array_tabla
	}
	
	
	
	
	
	
	for(var i=0;i<datos.length;i++){
		for(var j=0;j<datos[i].length;j++){
			
		}
	}
}


var P=false;
var e=false;
var s=false;

function validaPeriodico(){
	var contador 1;
	while(p==false || contador < peridodicos_tabla.length ){
		if (datos[0]==periodicos_tabla[contador]){
			p==true;
		}
		contador++;
	}
	return p;
}

function validaEdad(){
	if ((datos[1]<15)&&(datos[1]>99)){
		e==false;
	}else{
		e==true;
	}
	return e;
}

function validaSexo(){
	var contador 6;
	while(s==false || contador < edad_sexo_tabla.length ){
		if (datos[2]==edad_sexo_tabla[contador]){
			s==true;
		}
		contador++;
	}
	return s;
}











// function sumaTotal(){
	
	
	// for(var i=0;i<1;i++){
		// for(var j=0;j<1;j++){
			// per_encue[i]=datos[i][j];
		// }
	// }
	
	// for(var i=0;i<datos.length;i++){
		// for(var j=1;j<datos.length;j++){
			// edad_sexo_encue[i][j]=datos[i][j];
		// }
	// }
	
	
	
	// if(datos[i][j]=periodicos[i]){
		// totales.splice(i,0,edad_sexo);
	// }
	// for(var i=0;i<datos.length;i++){
		// for(var j=0;j<datos[i].length;j++){
			// document.write(datos[i][j]+"<br>");
		// }
	// }
// }









