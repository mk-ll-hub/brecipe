const username = document.querySelector(".username");
const password = document.querySelector(".password");

const button = document.querySelector(".done");

// глазики
const eye = document.querySelector(".eye");
const eye2 = document.querySelector(".eye2");



// проверка полей
function checkInputs() {
  const filled =
    username.value.trim() !== "" &&
    password.value.trim() !== "" ;


  // 6 И БОЛЬШЕ
  const passwordLength =
    password.value.length >= 6;

  button.disabled = !(
    filled 
  );
}

[username, password].forEach(input => {
  input.addEventListener("input", checkInputs);
});

checkInputs();