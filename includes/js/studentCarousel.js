// Student Carousel - Simple slide animation
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".student-carousel");
    if (!carousel) return;

    const cardsContainer = carousel.querySelector(".student-cards");
    const cards = Array.from(cardsContainer.querySelectorAll(".student-card"));
    const prevBtn = carousel.querySelector(".carousel-btn.prev");
    const nextBtn = carousel.querySelector(".carousel-btn.next");

    let currentIndex = 0;
    const cardsToShow = 2; // Hiển thị 2 cards mỗi lần
    const totalCards = cards.length;
    const maxIndex = Math.max(0, totalCards - cardsToShow);

    // Thêm transition cho cards
    cards.forEach((card) => {
        card.style.transition = "transform 0.3s ease";
    });

    // Hàm cập nhật carousel
    function updateCarousel() {
        cards.forEach((card, index) => {
            if (index >= currentIndex && index < currentIndex + cardsToShow) {
                card.style.display = "block";
                card.style.transform = "translateX(0)";
            } else {
                card.style.display = "none";
            }
        });

        updateButtons();
    }

    // Hàm cập nhật trạng thái buttons
    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;

        if (prevBtn.disabled) {
            prevBtn.style.opacity = "0.3";
            prevBtn.style.cursor = "not-allowed";
        } else {
            prevBtn.style.opacity = "1";
            prevBtn.style.cursor = "pointer";
        }

        if (nextBtn.disabled) {
            nextBtn.style.opacity = "0.3";
            nextBtn.style.cursor = "not-allowed";
        } else {
            nextBtn.style.opacity = "1";
            nextBtn.style.cursor = "pointer";
        }
    }

    // Next button
    nextBtn.addEventListener("click", function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateCarousel();
        }
    });

    // Previous button
    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    // Initialize
    updateCarousel();
});
