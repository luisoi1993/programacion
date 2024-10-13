var nombres = ['', 'Jorge', 'Darius', 'Iria', 'Maria', 'Lucia', 'Irene', 'Daniel'];

function crearTabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla = document.createElement("table");
	tabla.setAttribute("id","tabla_elementos");
	tabla.setAttribute("style","text-align:center;width:100%;border-collapse:collapse");
    var tblBody = document.createElement("tbody");
    var boton = document.createElement("button");
    var check = "<input type=checkbox>";
    //pongo i = 1 para a la hora de decir la posicion decir la exacta
    for (var i = 1; i < 8; i++) {
        var tr = document.createElement("tr");
        for (var j = 1; j < 3; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
            var id = i + "" + j;
            td.setAttribute("id", id);
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
    tabla.setAttribute("border", "2");
    tabla.style.marginLeft = "45%";
    tabla.style.marginTop = "15%";
}

function saberNombre(e) {
	
	var elemento=e.target||window.event.srcElement;
	console.log("celda valor:"+elemento.tagName);
	console.log("celda valor:"+elemento.type);
	// console.log (" has puldao en el checbox " + this.id );
	var posicion_chek = (this.id/10) -1;
	console.log (" has puldao en el checbox " + parseInt(posicion_chek));
	var nombre = (parseInt(posicion_chek)+1)+ "2";
	console.log (" has puldao en el checbox " + nombre);
	console.log (" El nombre asociado es  " +  document.getElementById(nombre).innerHTML);
    // var tabla_leida = document.getElementsByTagName("table");
	// console.log ("la tabla " + tabla_leida[0].innerHTML);
	// var check_leidos = (tabla_leida[0]).getElementsByTagName("td");
	// for (var i = 1; i < 8; i++) 
	// {
		// var id = i + "" + 1;
		// console.log ("la tabla " + check_leidos [i].innerHTML);
	// }
		 
		 // console.log ("En la posición " + i + " el chek esta en " + document.getElementById(id).innerHTML + " -->" + valor_chek);
			
}

function asignarEventos() {
    if (document.readyState == "complete") {
        crearTabla();
        for (var i = 1; i < 8; i++) {
            for (var j = 1; j < 3; j++) {
                var id = i + "" + j;
                document.getElementById(id).addEventListener("click", saberNombre, false);
            }
        }
    }
}

document.addEventListener("readystatechange", asignarEventos, false);