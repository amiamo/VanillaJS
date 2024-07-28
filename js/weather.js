const API_KEY = "3af57cba1274e3a51a3f7d2f198b293c";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const tempCel = document.querySelector("#weather span:first-child");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const city = document.querySelector("#weather span:last-child");
            
            const temperature = Math.round(data.main.temp);
            
            weather.innerText = `${data.weather[0].main}`;
            tempCel.innerText = `${temperature}°C`;
            city.innerText = `@${data.name}`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
}

function onGeoError() {
    alert("Can't find your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);