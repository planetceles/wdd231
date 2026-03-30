// const myInfo = new URLSearchParams(window.location.search);

// console.log(myInfo);

// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

console.log(myInfo.get("fname"));
console.log(myInfo.get("last"));
console.log(myInfo.get("title"));
console.log(myInfo.get("email"));
console.log(myInfo.get("phone"));
console.log(myInfo.get("bname"));
console.log(myInfo.get("baddress"));
console.log(myInfo.get("website"));
console.log(myInfo.get("description"));
console.log(myInfo.get("memberLevel"));
console.log(myInfo.get("timestamp"));
console.log(myInfo.get("industry"));

document.querySelector("#fill-info").innerHTML = `
    <p>Application for ${myInfo.get("fname")} ${myInfo.get("last")}</p>
    <p>Title: ${myInfo.get("title")}</p>
    <p>Email Address: ${myInfo.get("email")}</p>
    <p>Phone: ${myInfo.get("phone")}</p>
    <p>Business Name: ${myInfo.get("bname")}</p>
    <p>Business Address: ${myInfo.get("baddress")}</p>
    <p>Website: ${myInfo.get("website")}</p>
    <p>Description: ${myInfo.get("description")}</p>
    <p>Member Level: ${myInfo.get("memberLevel")}</p>
    <p>Industry: ${myInfo.get("industry")}</p>
    <p>Date: ${myInfo.get("timestamp")}</p>
`;