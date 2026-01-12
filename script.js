//your JS code here. If required.
// Create button
const button = document.createElement("button");
button.innerText = "Get Current Weather";

// Create div to display weather data
const weatherDiv = document.createElement("div");
weatherDiv.id = "weatherData";

// Append elements to body
document.body.appendChild(button);
document.body.appendChild(weatherDiv);

// Button click event
button.addEventListener("click", function () {
    const apiKey = "YOUR_API_KEY_HERE"; // Replace with your OpenWeather API key
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch weather data");
            }
            return response.json();
        })
        .then(data => {
            const weather = data.weather[0].main;
            weatherDiv.innerText = `Current weather in London: ${weather}`;
        })
        .catch(error => {
            weatherDiv.innerText = "Error fetching weather data";
            console.error(error);
        });
});
