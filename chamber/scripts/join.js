const membership = [
    {
        name: "Member",
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