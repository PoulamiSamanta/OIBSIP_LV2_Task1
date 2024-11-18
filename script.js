// Function to insert numbers and operators into the display
function insert(value) {
    document.getElementById("display").value += value;
}

// Function to clear the display
function clearScreen() {
    document.getElementById("display").value = "";
}

// Function to delete the last character
function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.substring(0, currentValue.length - 1);
}


// Function to convert degrees to radians
function toRadians(angle) {
    return angle * (Math.PI / 180);
}

// Function to calculate the final result
function calculate() {
    let expression = document.getElementById("display").value;
    try {
        document.getElementById("display").value = eval(expression);
    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}

// Function to toggle between dark and light theme
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");

    body.classList.toggle("dark");

    // Change icon based on theme
    if (body.classList.contains("dark")) {
        themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
        themeIcon.classList.replace("fa-sun", "fa-moon");
    }

    // Save the theme preference in local storage
    const currentTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
}

// Apply the saved theme on page load
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    const themeIcon = document.getElementById("theme-icon");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }
};
