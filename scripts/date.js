const year = document.querySelector("#current-year");
if (year) {
    const today = new Date();
    year.textContent = today.getFullYear();
}
const lastModified = document.querySelector("#last-modified");
if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}