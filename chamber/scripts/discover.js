import { places } from "../data/places.mjs";

const placesSection = document.querySelector("#places");

const displayPlaces = (places) => {
    places.forEach((place) => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let description = document.createElement("p");
        let address = document.createElement("p");
        let pic = document.createElement("img");
        card.classList.add("place-card");

        name.textContent = `${place.name}`;

        card.appendChild(name);

        placesSection.appendChild(card);
    });
}