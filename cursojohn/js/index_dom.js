import hamburgerMenu from "./menu_hamburguesa.js";
import {digitalClock,alarm}from "./reloj.js";
import {moveBall,shortcuts} from "./tecclado.js";
import countdown from "./cuenta-regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js"
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busqueda.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";
import scrollSpy from "./scroll_espia.js";
import smartVideo from "./video_inteligente.js";
import contactFormValidations from "./validaciones_formulario.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj","#activar-reloj","#desactivar-reloj");
    alarm("./assets/alarma.mp3","#activar-alarma","#desactivar-alarma");
    countdown("countdown","May 23, 2024 03:23:19","oi");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width:1024px)",
        "Contenido Móvil",
        `<a href "https://youtu.be/cQ6-hMBoqWY" target="_blank" rel="nooper">Ver video</a>`,
        `iframe width="560" height="315" src="https://www.youtube.com/embed/cQ6-hMBoqWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
        );
    responsiveMedia(
        "gmaps",
        "(min-width:1024px)",
        "Contenido Móvil",
        `<a href "https://goo.gl/maps/HBEiD4L7Ts28f4TYA" target="_blank" rel="nooper">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24437.97848268506!2d-3.623221071674886!3d40.03642082118293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4205bb08bcc227%3A0x8b5e47be83a41f16!2sPalacio%20Real%20de%20Aranjuez!5e0!3m2!1ses!2ses!4v1685150257639!5m2!1ses!2ses" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
        );

        responsiveTester("responsive-tester");
        //userDeviceInfo("user-device");
        webCam("webcam");
        getGeolocation("geolocation");
        searchFilters(".card-filter",".card");
        draw("#winner-btn",".player");
        slider();
        scrollSpy();
        smartVideo();
        contactFormValidations();
   
});

d.addEventListener("keydown",(e)=>{
    shortcuts(e);
    moveBall(e, ".ball",".stage");
});

darkTheme(".dark-theme-btn","dark-mode");
networkStatus();
speechReader();