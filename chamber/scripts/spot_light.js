// spotlight
const url = "https://planetceles.github.io/wdd231/chamber/data/members.json";

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

        // let badge = document.createElement("span");
        // badge.textContent = spot.membership;
        // badge.classList.add("badge");


        info.appendChild(email);
        info.appendChild(phone);
        info.appendChild(membership);
        // info.appendChild(badge);
        info.appendChild(website);

        bodyDiv.appendChild(img);
        bodyDiv.appendChild(info);

        
        card.appendChild(titleDiv);
        card.appendChild(bodyDiv);

        spotCards.appendChild(card);
        
    });
}

// spot-title
const spotTitle = document.querySelector("#spot-title");
spotTitle.textContent = `Business Spotlights`;