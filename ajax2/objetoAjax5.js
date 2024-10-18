//crear objeto XMLHttpRequest
function creaObjetoAjax () {
     var obj; //variable que recogerá el objeto
     if (window.XMLHttpRequest) { //código para mayoría de navegadores
        obj=new XMLHttpRequest();
        }
     else { //para IE 5 y IE 6
        obj=new ActiveXObject(Microsoft.XMLHTTP);
        }
     return obj; //devolvemos objeto
     }
//función constructora del objeto:
function ObjetoAjax () {
     var nuevoajax=creaObjetoAjax()
     this.objeto=nuevoajax;
     this.pedirTexto=pedirTextoAjax;
		 this.cargaXML=cargarXML;
     this.cargaTexto=cargarTexto;
     }
//función para el método objeto.pedirTexto(url,id)
function pedirTextoAjax(url,id) {
     var nuevoajax=this.objeto;
     var idajax=id;
     nuevoajax.open("GET",url,true);
     nuevoajax.onreadystatechange=function () {
        if (nuevoajax.readyState==4 && nuevoajax.status==200) {
           var textoAjax=nuevoajax.responseText;
           document.getElementById(idajax).innerHTML=textoAjax;
           }
        }
     nuevoajax.send();
     }
/*función del método cargaXML: devuelve el DOM del XML
como parámetro de la función que le pasamos*/
function cargarXML(url,funcion) {
     var nuevoajax=this.objeto;
     var funcionXML=funcion
     nuevoajax.open("GET",url,true);
     nuevoajax.onreadystatechange=function() {
        if (nuevoajax.readyState==4) {
           var propiedad=nuevoajax.responseXML;
           funcionXML(propiedad);
           }
        }
     nuevoajax.send();
     }
//función del método cargaTexto:
//devuelve el texto del archivo en el parámetro.
function cargarTexto(url,funcion) {
     var nuevoajax=this.objeto;
     var funcionTexto=funcion
     nuevoajax.open("GET",url,true);
     nuevoajax.onreadystatechange=function() {
        if (nuevoajax.readyState==4 && nuevoajax.status==200) {
           var nuevoTexto=nuevoajax.responseText;
           funcionTexto(nuevoTexto);
           }
        }
     nuevoajax.send();
     }

//Método pedirPost: envia datos por POST y devolver en un id:
function pedirPorPost(url,id,datos) {
     var nuevoajax=this.objeto;
     var idajax=id;
     var datosajax=datos;
     nuevoajax.open("POST",url,true);
     nuevoajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     nuevoajax.setRequestHeader("Content-length", datosajax.length);
     nuevoajax.setRequestHeader("Connection", "close");
     nuevoajax.onreadystatechange=function () {
        if (nuevoajax.readyState==4 && nuevoajax.status==200) {
           var textoAjax=nuevoajax.responseText;
           document.getElementById(idajax).innerHTML=textoAjax;
           }
        }
     nuevoajax.send(datosajax);
     }
ObjetoAjax.prototype.pedirPost=pedirPorPost;

//Método cargaPost: envia datos por post y recoge el resultado en el parámetro de una función:
function cargarPost(url,funcion,datos) {
     var nuevoajax=this.objeto;
     var funcionTexto=funcion
     var datosajax=datos;
     nuevoajax.open("POST",url,true);
     nuevoajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
     nuevoajax.setRequestHeader("Content-length", datosajax.length);
     nuevoajax.setRequestHeader("Connection", "close");
     nuevoajax.onreadystatechange=function() {
        if (nuevoajax.readyState==4 && nuevoajax.status==200) {
           var nuevoTexto=nuevoajax.responseText;
           funcionTexto(nuevoTexto);
           }
        }
     nuevoajax.send(datosajax);
     }
ObjetoAjax.prototype.cargaPost=cargarPost;
