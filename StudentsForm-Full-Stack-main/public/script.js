const Form = document.getElementById("student-form");
const Button = document.getElementById("submit-btn");

Form.addEventListener("submit", function (e) {
  e.preventDefault();
  Button.innerText = "Registering...";
  Button.disabled = true;
});

function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("course").value;

  if (!name || !email || !course) {
    alert("Please fill in all fields.");
    return false;
  }

  if (!validateEmail(email)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!validatePhone(phone)) {
    alert("Please enter a valid phone number.");
    return false;
  }

  return true;
}
