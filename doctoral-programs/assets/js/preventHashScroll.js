// Prevent # links from scrolling to top
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href="#"]');
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            return false;
        });
    });
});
