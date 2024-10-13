//CREAR TABLA HACER TABLA DE 10 filas y 15 columnas por fila
//pintar tabla por dom, id clase o imagen con 4 tipos de imagen asiento ocupado, libre, preasignado
function creartabla(){
nuevatabla=document.createElement("table");
document.body.appendChild(nuevatabla);
nuevoth=document.createElement("th");
nuevatabla.appendChild(nuevoth);
for(i<5){
	nuevotr=document.createElement("tr");
	nuevatabla.appendChild(nuevotr);
	for(j<5){
		nuevotd=document.createElement("td");
		nuevotd.setAttribute("id","celda"+i+j);
		nuevotd.setAttribute("class","verde");
		nuevotr.appendChild(nuevotd);
		celda=document.getElementById("celda"+i+j);
		celda.addEventListener("click",cambiocolor);
	}
}
}

window.onload=function(){
	creartabla();//al cargar la page ejecuta la funcion 
};