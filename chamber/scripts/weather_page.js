
// 330b7220e2077644f7c5da65c0c532e4 api key
// a3029d5192117c81294072d3b3d9ac9b
// -26.206419632331176, 28.0286715192244


const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-26.20&lon=28.02&appid=330b7220e2077644f7c5da65c0c532e4&units=metric";
// const weatherUrls = "https://api.openweathermap.org/data/2.5/weather?lat=-26.20&lon=28.02&appid=a3029d5192117c81294072d3b3d9ac9b&units=metric";
const today = document.querySelector("#today");
const tomorrow = document.querySelector("#tomorrow");
const nextDay = document.querySelector("#next-day");

const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const todayIndex = new Date().getDay();

today.textContent = daysOfWeek[(todayIndex) % 7];
tomorrow.textContent = daysOfWeek[(todayIndex + 1) % 7];
nextDay.textContent = daysOfWeek[(todayIndex + 2) % 7];

const currentTemp = document.querySelector("#current-temp");
const humidity = document.querySelector("#humidity");
const weatherIcon = document.querySelector("#weather-icon");

async function weatherFetchData() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeatherData(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}
weatherFetchData();

function displayWeatherData(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let description = data.weather[0].description;
    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", description);

}

const todayTemp = document.querySelector("#today-temp");
const tomorrowTemp = document.querySelector("#tomorrow-temp");
const nextTDay = document.querySelector("#next-day-temp");

const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-26.20&lon=28.02&appid=330b7220e2077644f7c5da65c0c532e4&units=metric";

async function apiFetchForecastData() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            displayForecastData(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

function displayForecastData(data) {
    const filter = data.list.filter(item => item.dt_txt.includes("12:00:00"));

    todayTemp.innerHTML = `${filter[0].main.temp}&deg;C`;
    tomorrowTemp.innerHTML = `${filter[1].main.temp}&deg;C`;
    nextTDay.innerHTML = `${filter[2].main.temp}&deg;C`;

}
apiFetchForecastData();