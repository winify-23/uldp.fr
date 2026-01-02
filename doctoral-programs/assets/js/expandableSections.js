// Expandable sections
document.querySelectorAll(".expandable-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        const item = this.parentElement;
        item.classList.toggle("active");
    });
});
