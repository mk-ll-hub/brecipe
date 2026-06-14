const inputs = document.querySelectorAll("input");
const progress = document.querySelector(".progress");
const photoInput = document.getElementById("photoInput");
const preview = document.querySelector(".preview-image");
const icon = document.querySelector(".upload_icon");

photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.classList.add("active");

        icon.style.display = "none";
    }
});

function updateProgress() {
    let filled = 0;

    inputs.forEach(input => {
        if (input.type === "file") {
            if (input.files.length > 0) filled++;
        } else if (input.type === "checkbox") {
            if (input.checked) filled++;
        } else {
            if (input.value.trim() !== "") filled++;
        }
    });

    const percent = (filled / inputs.length) * 100;
    progress.style.width = percent + "%";
}

inputs.forEach(input => {
    input.addEventListener("input", updateProgress);
    input.addEventListener("change", updateProgress);
});

updateProgress();