// const apikey = "0ad00a8e06d5832e50d23d507c00e7fe"; // Replace with your actual new API key
// const city = "bangalore"; // Ensure city name is correct and matches OpenWeatherMap's database
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

// async function getWeather() {
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching weather data:', error);
//     }
// }
// getWeather();

// 2nd method

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

const apikey = "0ad00a8e06d5832e50d23d507c00e7fe";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Corrected URL concatenation and removed unnecessary function call
async function getWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);
  const data = await response.json();
  console.log(data); // Log the weather data

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "mist.png";
  }

  document.querySelector(".weather").style.display="block"
}
searchBtn.addEventListener("click", () => {
  getWeather(searchbox.value); // Call the function to fetch and display the weather data
});
