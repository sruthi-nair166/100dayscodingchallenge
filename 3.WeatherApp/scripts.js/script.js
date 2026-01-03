const cityNameInput = document.getElementById("city-name-input");
const searchBtn = document.getElementById("search-btn");
const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherCard = document.getElementById("weather-card");
const cityName = document.getElementById("city-name");
const dayOrNightText = document.getElementById("day-night");
const weatherIcon = document.getElementById("weather-icon");
const temperatureText = document.getElementById("temperature");
const descriptionText = document.getElementById("description");
const precipitationText = document.getElementById("precipitation");
const humidityText = document.getElementById("humidity");
const windSpeedText = document.getElementById("wind-speed");

const weatherIcons = {
  "01d": "fa-sun",
  "01n": "fa-moon",
  "02d": "fa-cloud-sun",
  "02n": "fa-cloud-moon",
  "03d": "fa-cloud",
  "03n": "fa-cloud",
  "04d": "fa-cloud",
  "04n": "fa-cloud",
  "09d": "fa-cloud-showers-heavy",
  "09n": "fa-cloud-showers-heavy",
  "10d": "fa-cloud-sun-rain",
  "10n": "fa-cloud-moon-rain",
  "11d": "fa-cloud-bolt",
  "11n": "fa-cloud-bolt",
  "13d": "fa-snowflake",
  "13n": "fa-snowflake",
  "50d": "fa-smog",
  "50n": "fa-smog",
};

function displayWeather(data) {
  const city = data.name;
  const isDay = data.dt >= data.sys.sunrise && data.dt < data.sys.sunset;
  const dayOrNight = isDay ? "Day ☀️" : "Night 🌙";
  const icon = weatherIcons[data.weather[0].icon] || "fa-sun";
  const temperature = Math.round(data.main.temp);
  const description = data.weather[0].description;
  const precipitation = data.rain ? data.rain["1h"] : 0;
  const humidity = data.main.humidity;
  const windSpeed = data.wind.speed;

  cityName.textContent = city;
  dayOrNightText.textContent = dayOrNight;
  weatherCard.style.background = isDay
    ? `linear-gradient(
    to left top, 
    #b75a1a, 
    #c36f13, 
    #cc840a, 
    #d39a01, 
    #d7b100, 
    #d8be20, 
    #d8ca34, 
    #d9d646, 
    #dbda61, 
    #ddde79, 
    #dfe290, 
    #e2e6a6)`
    : `linear-gradient(
    to left top,
    #181149,
    #191951,
    #1a225a,
    #1c2a62,
    #1d326a,
    #1c3775,
    #1a3c81,
    #16418d,
    #12439f,
    #1645b1,
    #2246c2,
    #3245d3
  )`;
  weatherIcon.className = `fa-solid ${icon}`;
  temperatureText.textContent = `${temperature}°C`;
  descriptionText.textContent = description;
  precipitationText.textContent = `${precipitation}mm`;
  humidityText.textContent = `${humidity}%`;
  windSpeedText.textContent = `${windSpeed}km/h`;
}

function reset() {
  cityName.textContent = "--";
  dayOrNightText.textContent = "--";
  weatherCard.style.background = "";
  weatherIcon.className = `fa-solid fa-sun`;
  temperatureText.textContent = "--°C";
  descriptionText.textContent = "---";
  precipitationText.textContent = "--mm";
  humidityText.textContent = "--%";
  windSpeedText.textContent = "--km/h";
}

async function getWeatherData(city) {
  try {
    loading.classList.remove("d-none");
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0ac0c9808044f1f82dbec770253eef75&units=metric`
    );
    loading.classList.add("d-none");

    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    displayWeather(data);
  } catch (err) {
    console.error(err);
    error.textContent =
      err.message === "City not found"
        ? "City not found"
        : "Failed to obtain data";
    error.classList.remove("d-none");
    reset();
  }
}

searchBtn.addEventListener("click", () => {
  error.classList.add("d-none");

  if (!cityNameInput.value.trim()) {
    console.log("yes");
    return;
  }
  getWeatherData(cityNameInput.value);
});
