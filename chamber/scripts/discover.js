import { places } from "../data/places.mjs";

const placesSection = document.querySelector("#places");

const displayPlaces = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let address = document.createElement("p");
        let pic = document.createElement("img");
        let button = document.createElement("button");
        card.classList.add("place-card");

        name.textContent = `${place.name}`;
        description.textContent = `${place.description}`;
        address.textContent = `${place.address}`;
        button.innerHTML = `Learn More`;
        pic.setAttribute("src", `${place.photo_url}`);
        pic.setAttribute("alt", `${place.name}`);
        pic.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(pic);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        placesSection.appendChild(card);
    });
}
displayPlaces(places);