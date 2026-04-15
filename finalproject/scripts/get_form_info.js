const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("fname"));
console.log(myInfo.get("last"));
console.log(myInfo.get("email"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("coursesChoice"));
console.log(myInfo.get("timestamp"));

document.querySelector("#fill-info").innerHTML = `
    <p>Application for ${myInfo.get("fname")} ${myInfo.get("last")}</p>
    <p>Email Address: ${myInfo.get("email")}</p>
    <p>Phone: ${myInfo.get("phone")}</p>
    <p>Course: ${myInfo.get("coursesChoice")}</p>
    <p>Date: ${myInfo.get("timestamp")}</p>
`;