const API_KEY = "11890e122e694c45a36172225262109"; 
const languaje = 'es';
const input_city = document.getElementById('input-ciudad');

async function obtenerClima() {

  const city = input_city.value;

  if (!city) {
      alert('Por favor, ingresa una ciudad');
      return;
  }

  const apiClimaActual = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&lang=${languaje}&aqi=no`;

  const response = await fetch(apiClimaActual);
  const data = await response.json();

  mostrarClima(data);
}

function mostrarClima(data) {
  document.querySelector(".clima-icono").src = 'https:' + data.current.condition.icon;
  document.querySelector('.clima-texto').innerHTML = data.current.condition.text;
  document.querySelector('.temp').innerHTML = data.current.temp_c + 'ºC';
  document.querySelector('.ciudad').innerHTML = data.location.name;
  document.querySelector('.humedad').innerHTML = data.current.humidity + '%';
  document.querySelector('.viento').innerHTML = data.current.wind_kph + ' km/h';
}