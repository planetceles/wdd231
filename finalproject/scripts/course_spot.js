const url = "https://planetceles.github.io/wdd231/finalproject/data/courses.json";
const spotCards = document.querySelector("#course-spotlight");

async function getCourseSpotLight() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // console.log(data);
        displayCourseSpot(data.courses);
    }
    catch (error) {
        console.error("Courses fetch error:", error);
    }
}
getCourseSpotLight();

const displayCourseSpot = (courses) => {
    spotCards.innerHTML = "";

    const mathCourses = courses.filter(c => c.category === "Math");
    const codingCourses = courses.filter(c => c.category === "Coding");


    function getRandom(arr, count) {
        return arr.sort(() => 0.5 - Math.random()).slice(0, count);
    }

    const selected = [
        ...getRandom(mathCourses, 2),
        ...getRandom(codingCourses, 2)
    ];

    selected.forEach((spot) => {
        let card = document.createElement("div");
        card.classList.add("spot-card");

        let title = document.createElement("h3");
        let category = document.createElement("p");
        let description = document.createElement("p");

        title.textContent = spot.title;
        category.innerHTML = `<strong>Course Type: ${spot.category}</strong>`;
        description.textContent = spot.description;

        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);

        spotCards.appendChild(card);
    });
}