const exit = document.querySelector(".exit");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".no");


exit.addEventListener("click", () => {
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