
function logic() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "12345") {
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";
    } else {
        document.getElementById("error").innerText = "Invalid login details";
    }
}


function checkLogin() {
    if (localStorage.getItem("loggedIn") !== "true") {
        window.location.href = "login.html";
    }
}


function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}


function loadPage(page) {
    const content = document.getElementById("content");

    if (page === "home") {
        document.body.className = "home-bg";
        content.innerHTML = `
            <h2>Home</h2>
            <img src="image(10).jpg" />
        `;
    } else if (page === "about") {
        document.body.className = "about-bg";
        content.innerHTML = `
            <h2>About</h2>
            <p>Information about us.</p>
        `;
    } else if (page === "services") {
        document.body.className = "services-bg";
        content.innerHTML = `
            <h2>Services</h2>
            <p>Our services details.</p>
        `;
    } else if (page === "contact") {
        document.body.className = "contact-bg";
        content.innerHTML = `
            <h2>Contact</h2>
            <p>Contact us here.</p>
        `;
    }
}
