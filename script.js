// get the form element
const form = document.querySelector("form");

// get the input fields
const usernameInput = document.querySelector(".username");
const passwordInput = document.querySelector(".password");

// add event listener to the SIGN IN button
document.querySelector(".sign").addEventListener("click", (event) => {
  // prevent the default link behavior
  event.preventDefault();

  // check if the username and password fields are empty
  if (usernameInput.value.trim() === "") {
    // add a red border to the username input field
    usernameInput.style.borderColor = "red";
  }

  if (passwordInput.value.trim() === "") {
    // add a red border to the password input field
    passwordInput.style.borderColor = "red";
  }

  // if any of the input fields are empty, don't open the link
  if (usernameInput.value.trim() === "" || passwordInput.value.trim() === "") {
    return;
  }

  // open the link in a new tab
  window.open(event.target.href, "_blank");
});

// add event listener to the input fields to remove the red border when the user starts typing
usernameInput.addEventListener("input", () => {
  usernameInput.style.borderColor = "";
});

passwordInput.addEventListener("input", () => {
  passwordInput.style.borderColor = "";
});
