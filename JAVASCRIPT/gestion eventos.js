window.onload = function(){ 
  			// aqui ponemos lo que queremos que se ejecute al principio
}

function asignarEventos() {
 
    if (document.readyState == 'complete') {
		for (i=0;i<10;i++)
			{
			 document.getElementById("btn"+i).addEventListener('click', alertRowCell_ir_a,false);
			document.getElementById("caja").addEventListener('mouseleave', otrafuncion,false);
			}
	
    }
	
	document.getElementById("menu_e").addEventListener("click",cargar_menu,false);

}

function alertRowCell_ir_a (e) {
  var cell = e.target || window.event;
 /*onsole.log("evento 1" + e);
  console.log("evento 2" + e.target);
  console.log("evento 3" + e.type);
  console.log("evento 4" + e.clientX + " " + e.clientY);
  console.log("evento 5" + e.currentTarget); //este es el elemento padre de la imagenm, poor lo tanto es la celda*/

}



document.addEventListener('readystatechange', asignarEventos, false)

