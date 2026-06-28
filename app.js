const apiKey = "1e64cd5fa590dc29236b2bc0310416b0";

async function getWeather() {
  let city = document.getElementById("city").value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const res = await fetch(url);

  const data = await res.json();
  
  console.log(data);
  
  document.getElementById("location").innerHTML = data.name;

  document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";

  document.getElementById("humidity").innerHTML = data.main.humidity + "%";

  document.getElementById("wind").innerHTML = data.wind.speed + " km/h";

  document.getElementById("condition").innerHTML = data.weather[0].main;

  let weather = data.weather[0].main;

  let icon = document.getElementById("icon");

  if (weather == "Clear") {
    icon.innerHTML = "☀️";

    document.body.style.backgroundImage = "url(images/sunny.jpg)";
  } else if (weather == "Clouds") {
    icon.innerHTML = "☁️";

    document.body.style.backgroundImage = "url(images/cloudy.jpg)";
  } else if (weather == "Rain") {
    icon.innerHTML = "🌧️";

    document.body.style.backgroundImage = "url(images/rain.jpg)";
  } else if (weather == "Snow") {
    icon.innerHTML = "❄️";

    document.body.style.backgroundImage = "url(images/snow.jpg)";
  } else if (weather == "Thunderstorm") {
    icon.innerHTML = "⛈️";

    document.body.style.backgroundImage = "url(images/thunder.jpg)";
  } else if (weather == "Mist") {
    icon.innerHTML = "🌫️";

    document.body.style.backgroundImage = "url(images/mist.jpg)";
  }
}
