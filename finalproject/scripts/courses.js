const courseUrl = "https://planetceles.github.io/wdd231/finalproject/data/courses.json";
const cards = document.querySelector("#course");

async function getCoursesData() {
    try {
        const response = await fetch(courseUrl);
        const data = await response.json();

        console.log(data);

        displayCourses(data.courses);
    }
    catch (error) {
        console.error("Courses fetch error:", error);
    }
    
}
getCoursesData();

const displayCourses = (courses) => {
    courses.forEach((course) => {
        let card = document.createElement("section");
        let title = document.createElement("h3");
        let category = document.createElement("p");
        let description = document.createElement("p");
        let duration = document.createElement("p");
        let skills = document.createElement("p");

        card.classList.add("course-card");

        title.textContent = `${course.title}`;
        category.innerHTML = `<strong>Course Type: ${course.category}</strong>`;
        description.innerHTML = `${course.description}`;
        duration.innerHTML = `Duration: ${course.duration}`;
        skills.innerHTML = `Skills: ${course.skills.join(", ")}`;


        card.appendChild(title);
        card.appendChild(category);
        card.appendChild(description);
        card.appendChild(duration);
        card.appendChild(skills);

        if (cards) {
            cards.appendChild(card);
        }
        
    });
}