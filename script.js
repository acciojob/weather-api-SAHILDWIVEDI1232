// Create button
const button = document.createElement("button");
button.innerText = "Get Current Weather";

// Create output div
const weatherDiv = document.createElement("div");
weatherDiv.id = "weatherData";

// Append to body
document.body.appendChild(button);
document.body.appendChild(weatherDiv);

// Click handler
button.addEventListener("click", () => {
    const url =
        "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de";

    fetch(url)
        .then(response => response.json())
        .then(data => {
            weatherDiv.innerText =
                `Current weather in London: ${data.weather[0].main}`;
        })
        .catch(() => {
            weatherDiv.innerText = "Error fetching weather data";
        });
});
