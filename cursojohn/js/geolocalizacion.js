const d = document,
n = navigator;

export default function getGeolocation(id){
    const $id = d.getElementById(id),
    options = {
        enableHighAccuary : true,
        timeout: 5000,
        maxiumAge:0
    };

    const success = (position) => {
        let coords = position.coords;
        console.log(position);

        $id.innerHTML = `
        <p>Tu posicion actual es :</p>
        <ul>
            <li>Latitud: <b>${coords.latitude}</b></li>
            <li>${coords.longitude}</li>
            <li>${coords.accuracy}</li>
        </ul>
        <a href="https://wwww.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
        `;
    };

    const error = (err) => {
        console.log(`Error ${err.code}: ${err.message}`);
    }

    n.geolocation.getCurrentPosition(success,error, options);

}