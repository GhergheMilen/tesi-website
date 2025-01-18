document.addEventListener("DOMContentLoaded", function () {
    fetch("./reusable/navbar.html")
        .then((response) => response.text())
        .then((data) => {
            document.querySelector("#navbar-placeholder").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading navbar", error);
        });

    fetch("./reusable/contacte.html")
        .then((response) => response.text())
        .then((data) => {
            document.querySelector("#contacte-placeholder").innerHTML = data;
        })
        .catch((error) => {
            console.error("Error loading footer", error);
        });
});
