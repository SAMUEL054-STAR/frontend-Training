const username = document.querySelector("#Username");
const password = document.querySelector("#password");
const loginBtn = document.querySelector("#login-btn");

const createAccount = document.querySelector("#create-account");
const forgotPassword = document.querySelector("#forgot-password");

loginBtn.addEventListener("click", function () {
  let savedUsername = localStorage.getItem("username");
  let savedPassword = localStorage.getItem("password");

  if (username.value === savedUsername && password.value === savedPassword) {
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong username or password");
  }
});

createAccount.addEventListener("click", function (e) {
  e.preventDefault();

  let newUsername = prompt("Create a username or email:");
  let newPassword = prompt("Create a password:");

  if (newUsername && newPassword) {
    localStorage.setItem("username", newUsername);
    localStorage.setItem("password", newPassword);

    alert("Account created successfully!");
  }
});

forgotPassword.addEventListener("click", function (e) {
  e.preventDefault();

  let savedUsername = localStorage.getItem("username");

  let enteredUsername = prompt("Enter your username or email:");

  if (enteredUsername === savedUsername) {
    let newPassword = prompt("Enter your new password:");

    if (newPassword) {
      localStorage.setItem("password", newPassword);

      alert("Password changed successfully!");
    }
  } else {
    alert("Account not found");
  }
});
