//60. WEB APIs
/*
console.log(window);
        console.log(document);

        let texto = "Hola, soy tu amigo y docente digital ... Jonatan Mircha"
        const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

        hablar(texto);
        */

//61.DOM:introduccion
/*
console.log("********ELEMENTOS DEL DOCUMENTO *******");
console.log(window.document);
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(()=>{
    console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el DOM</h2>");

*/
//62 DOM: Nodosm, Elementos y Selectores
/*
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el)=> console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelector("#menu li"));
console.log(document.querySelectorAll("#menu li"));
*/

//63.DOM: ATributos y data atributes
/*
console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("href", "https://youtube.com");


//Data-Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
*/

//64.DOM:Estilos y VAriables CSS
/*
const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAling = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//variables CSS - Custom Properties CSS
const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor,varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor);

*/

//65. DOM: clases CSS
/*
const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);

console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.contains("rotate-45");
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");
$card.classList.add("opacity-80","sepia");
$card.classList.remove("opacity-80","sepia");
$card.classList.toggle("opacity-80","sepia");
*/

//66. DOM : texto y html
/*
const $whatIsDOM = document.getElementById("que-es");

let text = `
<p>
El modelo de objetos del Documento (<b><i>DOM</i></b>)es una API para documentos html y XMML
</p>
<p>
Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion visual mediante codigo JS
</p>
<p>
<mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
</p>
`;
//$whatisDOM.innerText = text;
$whatIsDOM.textContent = text;
$whatIsDOM.innerHTML = text;
$whatIsDOM.outerHTML = text;
*/

//67. DOM Traversing : Recorriendo el DOM
/*
const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstElementChild);
console.log($cards.lastElementChild);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
//console.log($cards.children[3].closest("section"));
*/

//68. DOM: Creando Elementos y Fragmentos
/*
const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards"),
$figure2 = document.createElement("figure");

$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","Animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

    document.write("<h3>Estaciones del año</h3>");
    document.body.appendChild($ul);

    estaciones.forEach((el)=>{
        const $li = document.createElement("li");
        $li.textContent = el;
        $ul.appendChild($li);
    });

    const continentes = ["Africa", "America","Asia","Europa","Oceania"],
        $ul2 = document.createElement("ul");

    document.write("<h3>Continentes de mundo</h3>");
    document.body.appendChild($ul2);
    $ul2.innerHTML = "";
    continentes.forEach((el)=>($ul2.innerHTML += `<li>${el}</li>`));

    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Novimbre",
        "Diciembre",

    ],
        $ul3 = document.createElement("ul");
        $fragment = document.createDocumentFragment();

        meses.forEach((el)=>{
            const $li = document.createElement("li");
            $li.textContent = el;
            $fragment.appendChild($li);
        });

        document.write("<h3>Meses del Año</h3>");
        $ul3.appendChild($fragment);
        document.body.appendChild($ul3);
*/

//69. DOM: Templates HTML
/*
const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContent = [
    {
        title: "Tecnologia",
        img: "https://placeimg.com/200/200/tech",
    },
     {
        title: "Animales",
        img: "https://placeimg.com/200/200/animal",
     },
    {
        title: "Arquitectura",
        img: "https://placeimg.com/200/200/arch",
    },
    {
        title: "Gente",
        img: "https://placeimg.com/200/200/people",
    },
    {
        title: "Naturaleza",
        img: "https://placeimg.com/200/200/nature",
    },
];

cardContent.forEach((el)=>{
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);
*/

//70.Modifficando elementos
/*
const $cards = document.querySelector(".cards");
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
<img src="https://placeimg.com/200/200/any" alt="Any">
<figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//$cards.replaceChild($newCard,$cards.children[2]);
//$cards.removeChild($cards.lastElementChild);
//$cards.insertBefore($newCard,$cards.firstelementChild);
document.body.appendChild($cloneCards);
*/
//71.DOM: Modificando Elementos (cool Style)

/*
.inserAdjacent...
.insertAdjacentElement(position,el)
.insertAdjacentHTML(position, html)
.insetAdjacenText(poaition, text)

posiciones:
beforebegin(hermano anterior)
afterbegin(primer hijo)
beforeend(ultimo hijo)
afterend(hermano siguiente)*/

/*
const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard = `
<img src="https//placeimg.com/200/200/any" alt="Any">
<figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend",$contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");
$cards.insertAdjacentElement("afterbegin",$newCard);

//$cards.prepend($newCard);
//$cards.append($newCard);
//$cards.after($newCard);

*/

//72. DOM: Manejadores de Eventos y 73.DOM:Eventos con Parametros y Remover Eventos
/*
function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
    $eventoMultiple = document.getElementById("evento-multiple"),
    $eventoRemover = document.getElementById("evento-remover");

$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function (e){
    alert("Hola Mundo Manejador de Eventos Semantico");
    console.log(e);
    console.log(event);
}

$eventoMultiple.addEventListener("click",holaMundo);
$eventoMultiple.addEventListener("click",(e)=>{
    alert("Hola Mundo Manejador de Eventos Mútiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});

$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("luis");
});

//no funciona

const removerDobleClik = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);

}

$eventoRemover.addEventListener("dblclick", removerDobleClick);
*/

//74.DOM: flujo de eventos (burbuja y captura) 75. DOM: stopPropagation & preventDefault 76. Delegacion de Eventos
/*

const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click",(e) =>{
    console.log("Click en",e.target);
    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }
    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tu amigo oi");
        e.preventDefault();
    }
});
*/
/*
$divsEventos.forEach((div) => {
    //Fase de burbuja
    //div.addEventListener("click",flujoEventos);
    //div.addEventListener("click", flujoEventos,true);
    div.addEventListener("click",flujoEventos,false);
    //fase de captura
    //div.addEventListener("click",flujoEventos,true);
    div.addEventListener("click",flujoEventos,{
        capture:false,
        once:true,
    });

});

$linkEventos.addEventListener("click",(e) =>{
    alert("Hola soy oi");
    e.preventDefault();
    e.stopPropagation();
});

*/

//77. BOM: Propiedades y eventos
/*

window.addEventListener("resize",(e)=>{
    console.clear();
    console.log("****** Evento Resize *******");
    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);
    console.log(e);
});


window.addEventListener("scroll", e=>{
    console.clear();
    console.log("****** Evento Scroll");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});

window.addEventListener("load",(e)=>{
    console.log("******* Evento Load ******");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

document.addEventListener("DOMContentLoaded",(e)=>{
    console.log("******** Evento DOMContentLoaded *********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

*/

//78. BOM: metodos

//window.alert("Alerta");
//window.confirm("Confirmacion");
//window.prompt("Aviso");
/*
const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

    $btnAbrir.addEventListener("click",(e)=>{
        window.open("https//youtube.com");
    });

    $btnCerrar.addEventListener("click",(e)=>{
        window.close();
    });

    $btnImprimir.addEventListener("click",(e) =>{
        window.print();
    });
*/

//79. BOM: URL, Historial y Navegador

/*
console.log("****** Objeto URL (location) *******");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
location.reload();
*/

console.log("****** Objeto Historial (history)");
console.log(history);
console.log(history.length);
console.log(history.forward(1));
history.go(-3);
history.go(2);

console.log("******* objeto Navegador (navigator)");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
