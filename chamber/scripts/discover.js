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
        let picCard = document.createElement("div");
        card.classList.add("place-card");
        description.classList.add("placeDescription");
        address.classList.add("placeAddress");
        // pic.classList.add("placePic");
        picCard.classList.add("placePicCard");

        name.textContent = `${place.name}`;
        description.textContent = `${place.description}`;
        address.textContent = `${place.address}`;
        button.innerHTML = `Learn More`;
        button.addEventListener("click", () => showDialog(place));
        pic.setAttribute("src", `${place.photo_url}`);
        pic.setAttribute("alt", `${place.name}`);
        pic.setAttribute("loading", "lazy");

        card.appendChild(name);
        // card.appendChild(pic);
        picCard.appendChild(pic);
        card.appendChild(picCard);
        card.appendChild(description);
        card.appendChild(address);
        card.appendChild(button);

        placesSection.appendChild(card);
        // placesSection.appendChild(picCard)
    });
}
displayPlaces(places);

// show dialog place details
const myDialog = document.querySelector("#myDialog");
const placeName = document.querySelector("#myDialog h2");
const placeDescription = document.querySelector("#myDialog p");
const closeDialog = document.querySelector("#myDialog button");

closeDialog.addEventListener("click", () => {
    myDialog.close();
    
});

function showDialog(place) {
    placeName.innerHTML = place.name;
    placeDescription.innerHTML = place.details;
    myDialog.classList.add("dialogDetails");
    myDialog.showModal();

}

