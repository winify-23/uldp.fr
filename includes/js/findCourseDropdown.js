// Find Course Dropdown
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".sidebar-find-course .list");

    dropdowns.forEach((dropdown) => {
        const title = dropdown.querySelector(".title");
        const listItems = dropdown.querySelectorAll(".list_content li");

        // Toggle dropdown
        title.addEventListener("click", function (e) {
            e.stopPropagation();
            // Close other dropdowns
            dropdowns.forEach((other) => {
                if (other !== dropdown) {
                    other.classList.remove("active");
                }
            });
            dropdown.classList.toggle("active");
        });

        // Select item
        listItems.forEach((item) => {
            item.addEventListener("click", function () {
                const selectedText = this.textContent;
                title.textContent = selectedText;
                title.setAttribute("data-id", this.getAttribute("data-id"));
                dropdown.classList.remove("active");
            });
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".sidebar-find-course .list")) {
            dropdowns.forEach((dropdown) => {
                dropdown.classList.remove("active");
            });
        }
    });
});
