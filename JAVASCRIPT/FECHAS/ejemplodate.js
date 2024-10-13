// var nuevahoraa=new Date(2022,0,23);
// console.log(nuevahoraa);
// var nuevahorab=new Date(2022,0,24);
// console.log(nuevahorab);
// console.log(nuevahorab-nuevahoraa);
// //alert(nuevahorab-nuevahoraa);

// var nuevafechac=new Date(2022,0,24,18,30,55);
// console.log("Podemos imprimir una fecha pasandole tambien horas, min y segundos: "+nuevafechac);

// var hoy=new Date();//si no se especifica nada te devuelve la fecha y horas de hoy
// var maniana=new Date(hoy);//le pongo la fecha de hoy
// maniana.setDate(maniana.getDate()+1);//saco el día y le sumo uno. Set date indica lo que voy a ponerle. Get date me devuelve el día
// console.log('Mañana con el set '+maniana);//como le he hecho un set estoy estableciendo el día
// console.log(hoy.getDate());//me devuelve el día de hoy
// console.log(hoy.getDate()+1); //me devuelve el día de hoy más uno

// var ahora=new Date;//si no se especifica nada te devuelve la fecha y horas de hoy
// var fecha=hoy.getDate()+"/"+hoy.getMonth()+'/'+hoy.getFullYear();
// console.log("Fecha creada a partir de método get (date,monthIndex,year): "+fecha);//me devuelve el index del mes, por lo que hasy que sumarle uno al mes para que te devuelva el mes actual
// var fecha=hoy.getDate()+"/"+(hoy.getMonth()+1)+'/'+hoy.getFullYear();
// console.log("Fecha creada a partir de método get (date,monthIndex+1,year): "+fecha);

// var fechaotra=new Date("January 14, 1995 03:24:00");
// console.log("Podemos formatear la fecha con un string indicando que fecha queremos: "+fechaotra);
// console.log("Podemos sacar que día fue esa fecha con getDay (devuelve index desde el 0=domingo): "+fechaotra.getDay());

/*

Como hacerlo con milisegundos, mucho más fácil, solución vanesa
array diassemana
var fecha = new Date();
var milisegundos= Date.parse(fecha);
var fechamin=Date.parse(new Date(0));//la fecha unix 1 de enero de 1970
var fechaaleatorio=new Date(aleatorio(fechamin,milisegundos));
var dia delasemana=dias_semana[fechaaleatorio.getDay()];




*/




var diasmes = [31,28,31,30,31,30,31,31,30,31,30,31];
var diasmesbisiesto = [31,29,31,30,31,30,31,31,30,31,30,31];
var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto",
		"Septiembre","Octubre","Noviembre","Diciembre"];
var dias=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];


function aleatorio(inicio,fin) {
	var rango=fin-inicio + 1; 
	var numAleatorio = parseInt((Math.random()*rango)+inicio);
	return numAleatorio;
}

function creaFecha(){
	var anio=aleatorio(1970,2020);
	var mes=aleatorio(0,11);
	var dia;
	
	if(bisiesto(anio)){
		dia=aleatorio(0,diasmesbisiesto[mes]);
	}else{
		dia=aleatorio(0,diasmes[mes]);
	}
	
	var fecha=new Date (anio,mes,dia);
	var fechaformateada=fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
	console.log("Objeto Date: "+fecha);
	console.log("La nueva fecha creada es: "+fechaformateada);
	var diafecha=fecha.getDay();
	console.log("El día "+fechaformateada+" cayó un "+dias[diafecha]);
	
	var nuevoaniomas=anio;
	var nuevomesmas=mes;
	var massietedias=dia+7;
	var diasmas=dia;
	
	var nuevoaniomenos=anio;
	var nuevomesmenos=mes;
	var menossietedias=dia-7;
	var diasmenos=dia;
	if(bisiesto(fecha.getFullYear())){
		console.log(fecha.getFullYear()+ " es un año bisiesto");
		if(massietedias>diasmesbisiesto[mes]){
			diasmas=massietedias-diasmesbisiesto[mes];
			nuevomesmas++;
			if(mes>11){
				nuevomesmas=0;
				nuevoaniomas++;
			}
		}else{
			diasmas=massietedias;
		}
		var fechamassiete=new Date(nuevoaniomas,nuevomesmas,diasmas);
		console.log("7 días después de la fecha: "+fechamassiete.getDate()+"/"+(fechamassiete.getMonth()+1)+"/"+fechamassiete.getFullYear());
		
		
		if(nuevomesmenos==0&&menossietedias<0){
			nuevoaniomenos--;
			diasmenos=menossietedias+diasmesbisiesto[11];
			nuevomesmenos=11;
		}else if(nuevomesmenos!=0&&menossietedias<0){
			diasmenos=menossietedias+diasmesbisiesto[11];
			nuevomesmenos--;	
		}else{
			diasmenos=menossietedias;
		}
		var fechamenossiete=new Date(nuevoaniomenos,nuevomesmenos,diasmenos);
		console.log("7 días después de la fecha: "+fechamenossiete.getDate()+"/"+(fechamenossiete.getMonth()+1)+"/"+fechamenossiete.getFullYear());

	}else{
		console.log(fecha.getFullYear()+ " no es un año bisiesto");
		if(massietedias>diasmesbisiesto[mes]){
			diasmas=massietedias-diasmes[mes];
			nuevomesmas++;
			if(mes>11){
				nuevomesmas=0;
				nuevoaniomas++;
			}
		}else{
			diasmas=massietedias;
		}
		var fechamassiete=new Date(nuevoaniomas,nuevomesmas,diasmas);
		console.log("7 días después de la fecha: "+fechamassiete.getDate()+"/"+(fechamassiete.getMonth()+1)+"/"+fechamassiete.getFullYear());
		
		if(nuevomesmenos==0&&menossietedias<0){
			nuevoaniomenos--;
			diasmenos=menossietedias+diasmes[11];
			nuevomesmenos=11;
		}else if(nuevomesmenos!=0&&menossietedias<0){
			diasmenos=menossietedias+diasmes[11];
			nuevomesmenos--;	
		}else{
			diasmenos=menossietedias;
		}
		var fechamenossiete=new Date(nuevoaniomenos,nuevomesmenos,diasmenos);
		console.log("7 días después de la fecha: "+fechamenossiete.getDate()+"/"+(fechamenossiete.getMonth()+1)+"/"+fechamenossiete.getFullYear());
	}
	
	console.log("");
	
}

function bisiesto(anio){
	var boleano=false;
	if(((anio%4==0)&&(anio%100!=0))||(anio%400==0)){
		boleano=true;
	}
	return boleano;
}

document.getElementById("generaAnio").addEventListener("click",creaFecha);