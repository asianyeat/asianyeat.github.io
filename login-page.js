const loginForm = document.getElementById("login");
const loginButton = document.getElementById("submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "asianyeat" && password === "gang") {
        alert("You have successfully logged in.");
        location.assign("https://www.youtube.com/playlist?list=PLSXdyTsvFkk2RJS03YE1hSVEcztG1RIp2");
    } else {
        
    }
})