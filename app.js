
function relogio() {

const data = new Date ();

const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

if(horas < 10) {horas = "0" + horas};
if(minutos < 10) {minutos = "0" + minutos};
if(segundos < 10) { segundos = "0" + segundos};

document.getElementById("relogio").innerHTML = horas + ":" + minutos + ":" + segundos;

}
window.setInterval("relogio()", 1000);

