function Showhome() {
    document.querySelector("section").innerHTML = `
        <h2>Home</h2>
        <img src="./moto.jpg" class="section-img" alt="image">
        <p>Welcome to our website. This is the home section.</p>
    `;
}


function Showabout() {
    document.querySelector("main section").innerHTML = `
        <h2>About Us</h2>
        <p>We are a team learning web development using HTML, CSS, and JavaScript.</p>
    `;
}

function Showservices() {
    document.querySelector("main section").innerHTML = `
        <h2>Services</h2>
        <p>We provide simple web design and development services.</p>
    `;
}

function ShowhContact() {
    document.querySelector("main section").innerHTML = `
        <h2>Contact</h2>
        <p>Phone: 8796897887</p>
        <p>Email: example@gmail.com</p>
    `;
}
