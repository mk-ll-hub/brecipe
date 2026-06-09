const filters = document.querySelectorAll(".filter");
const grid = document.querySelector(".grid");
const toggleBtn = document.querySelector(".grid_toggle");
const icon = document.querySelector(".grid_toggle_icon");
const qrButton = document.querySelector(".qr_button");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

toggleBtn.addEventListener("click", () => {
    grid.classList.toggle("one-column");

    if (grid.classList.contains("one-column")) {
        icon.src = "../img/menu.png";
    } else {
        icon.src = "../img/check-box-empty.png";
    }
});

qrButton.addEventListener("click", () => {
    modal.classList.add("active");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active");
    }
});