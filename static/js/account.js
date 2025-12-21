// Login form handler
const loginForm = document.getElementById("loginForm")
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    console.log("Login form submitted")
    // Add your login logic here
    alert("Вход выполнен успешно!")
  })
}

// Signup form handler
const signupForm = document.getElementById("signupForm")
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    console.log("Signup form submitted")
    // Add your signup logic here
    alert("Регистрация выполнена успешно!")
  })
}

// Forgot password form handler
const forgotForm = document.getElementById("forgotForm")
if (forgotForm) {
  forgotForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const formData = new FormData(this)
    console.log("Password reset form submitted")
    // Add your password reset logic here
    alert("Инструкции отправлены на ваш email!")
  })
}

// Social button handlers
const socialButtons = document.querySelectorAll(".social-button")
socialButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const label = this.getAttribute("aria-label")
    console.log(`Social login clicked: ${label}`)
    alert(`${label}`)
  })
})
