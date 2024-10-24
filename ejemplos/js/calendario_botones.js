$(function() {
$( "#datepicker" ).datepicker();
});

$("#datepicker").datepicker({
firstDay: 1
});


$(function() {
$( "#datepicker" ).datepicker({
changeMonth: false,
changeYear: false,
yearRange: "1900:2013"
});
});


$(function () {
$("#off").click(function () {				//Al pulsar sobre el boton con ID off, ejecuta la funcion , de agregar al calendario la propiedad HIDE (ocultar)
$("#datepicker").datepicker().hide();
});
});
$(function () {
$("#on").click(function () {
$("#datepicker").datepicker().show();		//Al pulsar sobre el boton con ID on, ejecuta la funcion , de agregar al calendario la propiedad show (Mostrar)
});
});

