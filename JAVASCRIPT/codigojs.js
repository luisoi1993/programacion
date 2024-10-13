/*alert("Hola \nmundo");
alert("Hola \tmundo\t");
alert("Hola \'mundo\'");
alert("Hola \"mundo\"");
alert("Hola \\mundo\\"); //caracteres escape
*/
//3 variables numericas y mostrarlas por pantalla. Cual es la mayor, cual es la menor

var variable1;
var variable2;
var variable3;

variable1=prompt("Introduce el numero1","numero1");
variable2=prompt("Introduce el numero2","numero2");
variable3=prompt("Introduce el numero3","numero3");

var mayor;
var mediano;
var peque;

if(variable1>variable2&&variable1>variable3){
	mayor=variable1;
}else if (variable1>variable2&&variable1<variable3||variable1<variable2&&variable1>variable3){
	mediano=variable1;
}else if (variable1<variable3&&variable1<variable2){
	peque=variable1;
}

if(variable2>variable1&&variable2>variable3){
	mayor=variable2;
}else if (variable2>variable1&&variable2<variable3||variable2<variable1&&variable2>variable3){
	mediano=variable2;
}else if (variable2<variable3&&variable2<variable1){
	peque=variable2;
}

if(variable3>variable2&&variable3>variable1){
	mayor=variable3;
}else if (variable3>variable2&&variable3<variable1||variable3<variable2&&variable3>variable1){
	mediano=variable3;
}else if (variable3<variable1&&variable3<variable2){
	peque=variable3;
}

alert ("El mayor: "+mayor+"\n El mediano: "+mediano+"\n El pequenio: "+peque);
//darle una pensada y sacarlo más corto
//><
var var1;
var var2;
var var3;

var1=prompt("Introduce el numero 1","numero 1");
var2=prompt("Introduce el numero 2","numero 2");
var3=prompt("Introduce el numero 3","numero 3");

var elMayor;
var elMediano;
var elMenor;
var centinela;

/*if(var1>var2&&var1>var3){
	elMayor=var1;
	if(var2>var3){
		elMediano=var2;
		elMenor=var3
	}else{
		elMediano=var3;
		elMenor=var2;
	}
}else if(var1>var2&&var1<var3||var1<var2&&var1>var3){
	elMediano=var1;
	if(var2>var3){
		elMayor=var2;
		elMenor=var3;
	}else{
		elMayor=var3;
		elMenor=var2;
	}
}else if(var1<var2&&var1<var3){
	elMenor=var1;
	if(var2>var3){
		elMayor=var2;
		elMediano=var3
	}else{
		elMediano=var2;
		elMayor=var3;
}
}*/

if(var1>var2){
	if(var1>var3){
		elMayor=var1;
		if(var2>var3){
			elMediano=var2;
			elMenor=var3;
		}else{
			elMediano=var3;
			elMenor=var2;
		}
	}else{
		elMayor=var3;
		elMediano=var1;
		elMenor=var2;
		}
}else if(var2>var1){
	if(var2>var3){
		elMayor=var2;
		if(var1>var3){
			elMediano=var1;
			elMenor=var3;
		}else{
			elMediano=var3;
			elMenor=var1;
		}
	}else{
		elMayor=var3;
		elMediano=var2;
		elMenor=var1;
	}
}


alert ("El mayor: "+elMayor+"\n El mediano: "+elMediano+"\n El pequenio: "+elMenor);

