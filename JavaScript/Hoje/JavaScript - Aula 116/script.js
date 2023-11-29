const long = document.querySelector("#long");
const lati = document.querySelector("#lati");

if(navigator.geolocation){
    
    navigator.geolocation.getCurrentPosition(mostrarLocalizacao)
}else{
    console.log("Geolocalização não suportado");
}

function mostrarLocalizacao(pos){
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    console.log(pos);
}