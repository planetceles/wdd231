// navigation
const navButton = document.querySelector("#nav-button");
const navBar = document.querySelector("#nav-bar");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navBar.classList.toggle("show");
});

// dates
const year = document.querySelector("#current-year");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModified = document.querySelector("#last-modified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// fetch data
const url = "https://planetceles.github.io/wdd231/chamber/data/members.json";
const cards = document.querySelector("#member");

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.members);
}
getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h3");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let membership = document.createElement("p");
        let website = document.createElement("p");
        let portrait = document.createElement("img");
        card.classList.add("member-card");

        fullName.textContent = `${member.name} ${member.lastname}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        address.textContent = `Addresss: ${member.address}`;
        membership.textContent = `Membership: ${member.membership}`;
        website.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
        portrait.setAttribute("src", member.imageurl);
        portrait.setAttribute("alt", `${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "400");
        portrait.setAttribute("height", "auto");

        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(membership);
        card.appendChild(website);
        
        if (cards) {
            cards.appendChild(card);
        }
        

        if (member.membership === "Gold") {
        card.classList.add("gold");
}
    });
}
const spotCards = document.querySelector("#spot-light");
async function getSpotlight() {
    const response = await fetch(url);
    const data = await response.json();
    displaySpotlight(data.members);
}
getSpotlight();

const displaySpotlight = (members) => {
    spotCards.innerHTML = "";

    const goldMembers = members.filter(m => m.membership === "Gold");
    const silverMembers = members.filter(m => m.membership === "Silver");

    

    function getRandom(arr, count) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    const selected = [
        ...getRandom(goldMembers, 2),
        ...getRandom(silverMembers, 1)
        // ...goldMembers.slice(0, 2),
        // ...silverMembers.slice(0, 1)
    ];
    selected.forEach((spot) => {
        let card = document.createElement("div");
        card.classList.add("business");

        if (spot.membership === "Gold") {
            card.classList.add("gold");
        }
        else if (spot.membership === "Silver") {
            card.classList.add("silver");
        }

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("title");

        let name = document.createElement("h2");
        name.textContent = spot.name;

        let tag = document.createElement("p");
        tag.textContent = `Business Tag Line`;

        titleDiv.appendChild(name);
        titleDiv.appendChild(tag);

        let bodyDiv = document.createElement("div");
        bodyDiv.classList.add("img-bus");

        let img = document.createElement("img");
        img.src = spot.imageurl;
        img.alt = spot.name;

        let info = document.createElement("div");
        info.classList.add("business-info");

        let email = document.createElement("p");
        email.innerHTML = `<strong>Email</strong>: ${spot.email}`;

        let phone = document.createElement("p");
        phone.innerHTML = `<strong>Phone</strong>: ${spot.phone}`;

        let website = document.createElement("p");
        website.innerHTML = `<a href="${spot.website}" target="_blank">Visit Website</a>`;

        let membership = document.createElement("p");
        membership.innerHTML = `<strong>Membership</strong>: ${spot.membership}`;

        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(membership);
        info.appendChild(website);

        bodyDiv.appendChild(img);
        bodyDiv.appendChild(info);

        card.appendChild(titleDiv);
        card.appendChild(bodyDiv);

        spotCards.appendChild(card);
        
    });
}
    


// toggle the views
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const memberContainer = document.querySelector("#member");

if (gridButton && listButton) {
    gridButton.addEventListener("click", () => {
        memberContainer.classList.add("grid");
        memberContainer.classList.remove("list");
    });
    listButton.addEventListener("click", () => {
        memberContainer.classList.add("list");
        memberContainer.classList.remove("grid");
    });
}


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