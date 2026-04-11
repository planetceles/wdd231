import { features } from "../data/features.mjs";

const featureSection = document.querySelector("#features-container");

const displayFeatures = (features) => {
    features.forEach((feature) => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        let description = document.createElement("p");
        let visual = document.createElement("p");
        let iconCard = document.createElement("div");
        card.classList.add("feature-card");
        iconCard.classList.add("icon-card");

        title.textContent = `${feature.title}`;
        description.textContent = `${feature.description}`;
        visual.textContent = `${feature.icon}`;

        iconCard.appendChild(visual);
        card.appendChild(iconCard);
        card.appendChild(title);
        card.appendChild(description);

        featureSection.appendChild(card);
    });
}
displayFeatures(features);