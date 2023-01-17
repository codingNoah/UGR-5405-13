const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const textarea = document.getElementById("textarea");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  message.textContent = "registered";
  name.value = "";
  email.value = "";
  phone.value = "";
  textarea.value = "";
});
