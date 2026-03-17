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
        let website = document.createElement("p");
        let portrait = document.createElement("img");
        card.classList.add("member-card");

        fullName.textContent = `${member.name} ${member.lastname}`;
        phone.textContent = `Phone Number: ${member.phone}`;
        website.innerHTML = `Website: <a href="${member.website}" target="_blank">${member.website}</a>`;
        portrait.setAttribute("src", member.imageurl);
        portrait.setAttribute("alt", `${member.name}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "400");
        portrait.setAttribute("height", "auto");

        card.appendChild(portrait);
        card.appendChild(fullName);
        card.appendChild(phone);
        card.appendChild(website);
        

        cards.appendChild(card);

        if (member.membership === "Gold") {
        card.classList.add("gold");
}
    });
}

// toggle the views
const gridButton = document.querySelector("#grid-button");
const listButton = document.querySelector("#list-button");
const memberContainer = document.querySelector("#member");

gridButton.addEventListener("click", () => {
    memberContainer.classList.add("grid");
    memberContainer.classList.remove("list");
});
listButton.addEventListener("click", () => {
    memberContainer.classList.add("list");
    memberContainer.classList.remove("grid");
});