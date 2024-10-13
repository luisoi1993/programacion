var nuevoArray = new Array();
var contador_encuestados=0;
var Cadena_errores;


for (var i=0;i<3;i++)
{
	nuevoArray[i] = new Array(3);
{

for (var i=0;i<100;i++)
{
	for (var j=0;j<3;j++)
		{
			nuevoArray[i][j] = new Array(30);
		}

}

input = edad
input = peridico
input = sexo
boton guardar_encuestado
boton visualizar matriz de resultados

function guardar_encuestado()
{
			validar_datos_introducidos
			si (correcto)
			{
				nuevoArray[contador_encuestados][0] = edad del input
				nuevoArray[contador_encuestados][1] = pèriodico del inpuyt
				nuevoArray[contador_encuestados][2] = sexo del input
				
				// esto es como opcion a las tres lineas anteriores
				matriz.push(edad del input, pèriodico del inpuyt, sexo del input);
				
				contador_encuestados++;
			}
			else
			{
				mensaje (Cadena_errores);
			}


}

function procesar_encuesta()
{

	for (var i=0;i<contador_encuestados;i++)
	{
		procesar();
	}

	// si he utilizado push
	for (var i=0;i<nuevoArray.lenght-1;i++)
	{
		procesar();
	}


}


function validar_datos_introducidos()
{
	Cadena_errores="";
	//necesito saber exactamente que elemento voy a validar
	Si edad (>14 y <100) 
	correcto=true 
		else 
	correcto=false
	Cadena_errores = "error en la edad /n";
	
	
	Si sexo del input(uppercase) (=="M" or =="H") 
	correcto=true 
		else 
	correcto=false
	Cadena_errores = "error en el sexo /n";
	
	pèriodico del inpuyt
	
	var array_peeriodicos = ["EL PAIS","ABC"....."METRO",""]; 6 DE LONGITUD
	var contador=0;
	mientras (pèriodico del inpuyt <> array_peeriodicos[contrador] y contador <6)
	{
		contador++;
	}
	
	Si contador<=5
	correcto=true 
		else 
	correcto=false
	Cadena_errores = "error en el periodico /n";
	
	return correcto;
	
}


visualizar matriz de resultados

ENCUESTADO NUMERO		EDAD		SEXO 		PERIODICO LEIDO
1						18			Hombre		El pais
2						65			Muje		ABC
....
45						45			Hombre		Ya