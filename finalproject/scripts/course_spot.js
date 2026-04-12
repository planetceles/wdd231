const url = "https://planetceles.github.io/wdd231/finalproject/data/courses.json";
const cards = document.querySelector("#course-spot");

async function getCourseSpotLight() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        displayCourseSpot(data.courses);
    }
    catch (error) {
        console.error("Courses fetch error:", error);
    }
}
getCourseSpotLight();

const displayCourseSpot = (courses) => {
    spotCards.innerHTML = "";

    const 
}