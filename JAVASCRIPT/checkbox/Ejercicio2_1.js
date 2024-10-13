var nombres = ['', 'Jorge', 'Darius', 'Iria', 'Maria', 'Lucia', 'Irene', 'Daniel'];


crearTabla();


function crearTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
	tabla.setAttribute("id","tabla_elementos");
	tabla.setAttribute("style","text-align:center;width:60%;border-collapse:collapse");
    var tblBody = document.createElement("tbody");
    var boton = document.createElement("button");
    var check = "<input type=checkbox>";
    //pongo i = 1 para a la hora de decir la posicion decir la exacta
    for (var i = 1; i < 8; i++) {
        var tr = document.createElement("tr");
        for (var j = 1; j < 3; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            // // // // // // // // // // // var id = i + "" + j;
            // // // // // // // // // // // td.setAttribute("id", id);
            if (j == 1) {
                td.innerHTML = check;
            }
            if (j == 2) {
                td.innerHTML = nombres[i];
            }
        }
        tblBody.appendChild(tr);
    }
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    body.appendChild(boton);
    boton.style.marginLeft = "46%";
    boton.style.marginTop = "5px";
    boton.innerHTML = "Enviar";
	boton.setAttribute("id","envio");
    tabla.setAttribute("border", "2");
    tabla.style.margin = "auto";
}

function saberNombre(e) {
	// console.log ("Has pulsado en la tabla");
	
	
	var celda = e.target;
	var columna = parseInt(celda.cellIndex);
	var fila = parseInt(celda.parentNode.rowIndex);
	var tipo = celda.type;
	// console.log (" celda.type  " + celda.type);
	if(celda.type=="checkbox")
	{
		var celda_padre = celda.parentNode;
		var columna = parseInt(celda_padre.cellIndex);
		var fila = parseInt(celda_padre.parentNode.rowIndex);
	}
	
	
	
	
	
}



//SOLUCION CON PROPIEDAD ROWS, CELLS
function mostrarceldaspulsadas()
{
	var nombre_mostrar;
	var chekc_mostrar;
	
	  for (var i = 0; i < 7; i++) 
	  {
			chekc_mostrar = ((document.getElementById('tabla_elementos').rows[i].cells[0]).firstChild).checked;
			// console.log (" CHECK " + i + " --- " + chekc_mostrar);
			if (((document.getElementById('tabla_elementos').rows[i].cells[0]).firstChild).checked)
			{
				nombre_mostrar = (document.getElementById('tabla_elementos').rows[i].cells[1]).innerHTML;
				console.log (" POSICION    --->   " + i + " NOMBRE --- " + nombre_mostrar);
			}		
	  
	  }
	
	
	
	// console.log (" FILA  " + fila + " COLUMNA " + columna);
	
}

//TAGNAME
// function mostrarceldaspulsadas()
// {
	
	// var checkboxes =document.getElementsByTagName("input");
	// console.log(checkboxes);
	// // console.log(document.getElementById('tabla_elementos').cells[0]);
	// for(var i=0;i<checkboxes.length;i++){
		// if(checkboxes[i].checked){
			// nombre_mostrar = (document.getElementById('tabla_elementos').rows[i].cells[1]).innerHTML;
			// console.log (" Posición    --->   " + i + "  Nombre  ---> " + nombre_mostrar);
		// }
	// }

	
// }
	
	
	
	// console.log (" FILA  " + fila + " COLUMNA " + columna);

	
	
	




function asignarEventos() {
    if (document.readyState == "complete") {
      
        // // // // // // // for (var i = 1; i < 8; i++) {
            // // // // // // // for (var j = 1; j < 3; j++) {
                // // // // // // // var id = i + "" + j;
                // // // // // // // document.getElementById(id).addEventListener("click", saberNombre, false);
            // // // // // // // }
        // // // // // // // }
		document.getElementById("tabla_elementos").addEventListener("click", saberNombre, false);
		document.getElementById("envio").addEventListener("click", mostrarceldaspulsadas, false);
		
    }
}

document.addEventListener("readystatechange", asignarEventos, false);