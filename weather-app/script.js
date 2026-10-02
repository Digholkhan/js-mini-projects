const form = document.querySelector('#form');
const cityInput = document.querySelector('#city');
const status = document.querySelector('#status');
const weather = document.querySelector('#weather');
form.addEventListener('submit', async event => {
    event.preventDefault();
    const city = cityInput.value.trim(); status.textContent = 'Loading...'; weather.hidden = true; try {
        const locationResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`);
        const location = await locationResponse.json(); if (!location.results?.length) throw new Error('City not found');
        const place = location.results[0];
        const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${place.latitude}&longitude=${place.longitude}&current=temperature_2m,wind_speed_10m`);
        const data = await weatherResponse.json();
        document.querySelector('#place').textContent = `${place.name}, ${place.country}`;
        document.querySelector('#temperature').textContent = `${data.current.temperature_2m}°C`;
        document.querySelector('#wind').textContent = `Wind: ${data.current.wind_speed_10m} km/h`; status.textContent = 'Current weather'; weather.hidden = false;
    }
    catch (error) { status.textContent = error.message; }
});