const membership = [
    {
        name: "NP Membership (Free)",
        price: "Free",
        description: "For charities and community organizations.",
        benefits: [
            "Basic directory listing",
            "Access to public events",
            "Community exposure",
            "Networking opportunities"
        ]
    },
    {
        name: "Bronze Membership",
        price: "Entry level",
        description: "For small businesses and startups.",
        benefits: [
            "Directory listing",
            "Contact details display",
            "Networking events",
            "Email updates"
        ]
    },
    {
        name: "Silver Membership",
        price: "Mid-tier",
        description: "For growing businesses.",
        benefits: [
            "Enhanced listing",
            "Featured placement",
            "Spotlight eligibility",
            "Event discounts",
            "Workshops access"
        ]
    },
    {
        name: "Gold Membership",
        price: "Premium",
        description: "Maximum exposure and promotion.",
        benefits: [
            "Premium listing",
            "Homepage spotlight",
            "Priority advertising",
            "Exclusive events",
            "Social media promotion"
        ]
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const selectMember = document.querySelector("#memberLevel");

    membership.forEach(level => {
        const option = document.createElement("option");
        option.textContent = level.name;

        selectMember.appendChild(option);
    });
});

// display membership information
const membershipInfo = document.querySelector("#membership-info");
const myDialog = document.querySelector("#myDialog");
const membershipHeading = document.querySelector("#myDialog h2");
const benefits = document.querySelector("#myDialog h3");
const membershipBenefits = document.querySelector("#myDialog p");
const closeButton = document.querySelector("#myDialog button");

closeButton.addEventListener("click", () => {
    myDialog.close();
});

function displayMembershipInfo(levels) {
    levels.forEach(level => {
        const card = document.createElement("div");
        
        const heading = document.createElement("h3");
        const description = document.createElement("p");
        const button = document.createElement("button");

        card.classList.add("membership-card");

        heading.textContent = `${level.name}`;
        description.textContent = `${level.description}`;
        button.textContent = "See Benefits";
        button.addEventListener('click', () => showDialogInfo(level));

        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(button);

        membershipInfo.appendChild(card);
    });
}
displayMembershipInfo(membership);

// show dialog information
function showDialogInfo(level) {
    membershipHeading.innerHTML = level.name;
    benefits.innerHTML = `Your benefits`;
    membershipBenefits.innerHTML = level.benefits.join(", ");
    myDialog.showModal();
}