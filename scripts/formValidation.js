let name = document.querySelector("#name");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let text = document.querySelector("#text");

let form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (name.value === "" || name.value === null) {
    messages.push("Name is required");
    showErrorMessage("name");
  } else {
    removeErrorMessage("name");
  }

  if (phone.value === "" || phone.value === null) {
    messages.push("Phone is required");
    showErrorMessage("phone");
  } else {
    removeErrorMessage("phone");
  }

  if (email.value === "" || email.value === null) {
    messages.push("Email is required");
    showErrorMessage("email");
  } else {
    removeErrorMessage("email");
  }

  if (messages.length > 0) {
    e.preventDefault();
  } else {
    alert(`${name.value}, \n${email.value}, \n${phone.value}, \n${text.value}`);
  }
});

const showErrorMessage = (fieldName) => {
  let errorMsg = document.querySelector(".error-" + fieldName);
  errorMsg.style.visibility = "visible";
};

const removeErrorMessage = (fieldName) => {
  let errorMsg = document.querySelector(".error-" + fieldName);
  errorMsg.style.visibility = "hidden";
};
