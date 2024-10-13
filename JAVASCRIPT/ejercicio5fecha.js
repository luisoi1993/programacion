/*Ejercicio 5. Hacer comprobacion de una fecha. Recoger la en variables dia mes y
anio y validar la fecha. Sacar por consola si la fecha introducida es correcta o incorrecta.
Hacerlo con un array de días máximos*/
//cada variable nueva que pido depende de la validacion de la anterior
alert("Hola mundo");
var dia;
var mes;
var anio;



dia=prompt("Introduce el dia del año","dia del anio");
mes=prompt("Introduce el mes del anio","mes del anio");
anio=prompt("Introduce el anio","anio");

dia=parseInt(dia);
mes=parseInt(mes);
anio=parseInt(anio);

var dias = [0,31,28,31,30,31,30,31,31,30,31,30,31];
var diasb = [0,31,29,31,30,31,30,31,31,30,31,30,31];
var diasc=[" ","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
		"Septiembre","Octubre","Noviembre","Diciembre"];
//hay que validar datos de la fecha antes de hacer los calculos
var resto1=anio%4;
var resto2=anio%100
var resto3=anio%400;
var bisiesto =false;

if((resto1==0&&resto2!=0)||resto3==0){
	bisiesto==true;
}


if(mes>12||dia==0){
	alert("La fecha introducida es incorrecta.");
}else if (bisiesto==true){
	if(dia<=diasb[mes]){
		alert("La fecha "+dia+"/"+diasc[mes]+"/"+anio+" introducida es correcta y ademas el añoo es bisiesto");
	}else{
		alert("La fecha introducida es incorrecta.")
	}
}else{
	if(dia<=dias[mes]){
		alert("La fecha "+dia+"/"+diasc[mes]+"/"+anio+" introducida es correcta");
	}else{
		alert("La fecha introducida es incorrecta.")
	}
}
	



