function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "42b3144f5bf24931abe133138252504";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;
  
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const info = document.getElementById("weatherInfo");
        info.innerHTML = `
          <h2>${data.location.name}, ${data.location.country}</h2>
          <img src="${data.current.condition.icon}" alt="weather icon" />
          <p><strong>${data.current.condition.text}</strong></p>
          <p>Temperature: ${data.current.temp_c}°C</p>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Wind Speed: ${data.current.wind_kph} kph</p>
          <p>Feels like: ${data.current.feelslike_c}°C</p>
        `;
      })
      .catch(err => {
        document.getElementById("weatherInfo").innerHTML = "<p style='color:red;'>City not found. Please try again.</p>";
        console.error("Error:", err);
      });
  }
  