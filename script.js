
// Contact Form Validation
function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    if (name === "" || email === "") {
        alert("Please fill all required fields!");
        return false;
    }

    // Simple email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email address!");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


function validateBookingForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let package = document.getElementById("package").value;

    // Check empty fields
    if (name === "" || email === "") {
        alert("Please fill all fields before booking!");
        return false;
    }

    // Email validation
    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email address!");
        return false;
    }

    // Success message
    alert("✅ Booking Confirmed!\n\nName: " + name + "\nPackage: " + package);

    return true;
}


// Gallery image click zoom effect
function enlargeImage(img) {
    img.style.transform = "scale(1.5)";
    img.style.transition = "0.3s";
}

function normalImage(img) {
    img.style.transform = "scale(1)";
}


// Navigation highlight
let links = document.querySelectorAll("nav a");
links.forEach(link => {
    link.addEventListener("click", function () {
        alert("Opening " + link.innerText + " page...");
    });
});