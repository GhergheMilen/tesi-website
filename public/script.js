document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorALL("nav ul li a");
    const sections = document.querySelectorAll("section");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1); // Remove the '#' symbol
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Remove highlight class from all sections
                sections.forEach(function (section) {
                    section.classList.remove("highlight");
                });

                // Add highlight class to the target section
                targetSection.classList.add("highlight");
            }
        });
    });
});
