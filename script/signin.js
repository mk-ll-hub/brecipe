const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordVer = document.querySelector(".password_ver");

const button = document.querySelector(".done");

// глазики
const eye = document.querySelector(".eye");
const eye2 = document.querySelector(".eye2");



// проверка полей
function checkInputs() {
  const filled =
    username.value.trim() !== "" &&
    password.value.trim() !== "" &&
    passwordVer.value.trim() !== "";

  const passwordsMatch =
    password.value === passwordVer.value;

  // 6 И БОЛЬШЕ
  const passwordLength =
    password.value.length >= 6;

  button.disabled = !(
    filled &&
    passwordsMatch &&
    passwordLength
  );
}

[username, password, passwordVer].forEach(input => {
  input.addEventListener("input", checkInputs);
});

checkInputs();