const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const error = document.querySelector(".error");

const validatePasswords = () => {
    if (password.value && confirmPassword.value) {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setAttribute('aria-invalid', 'true');
            error.textContent = "Passwords do not match.";
            error.style.display = "block";
            error.style.color = "red";
            error.style.fontSize  = "0.7rem";
        } else {
            confirmPassword.setAttribute('aria-invalid', 'false');
            error.style.display = "none";
        }
    } else {
        error.style.display = "none";
    }
};

password.addEventListener("input", validatePasswords);
confirmPassword.addEventListener("input", validatePasswords);