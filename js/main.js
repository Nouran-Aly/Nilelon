const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const signUpSection = document.querySelector("#signUpSection")
const loginSection = document.querySelector("#loginSection")
// form
const closedEye = document.querySelector("#closedEye")
const openEye = document.querySelector("#openEye")
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('repassword');

signUpBtn.addEventListener("click", function () {
    signUpSection.classList.replace("d-none", "d-block")
    loginSection.classList.add("d-none")
    console.log("opa");
})

loginBtn.addEventListener("click", function () {
    loginSection.classList.replace("d-none", "d-block")
    signUpSection.classList.add("d-none")

})

// Form Validation

document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    const userName = document.getElementById('userName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const date = document.getElementById('date').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('repassword').value;
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = ''; // Clear previous error messages

    let isValid = true;

    // Remove existing error icons
    document.querySelectorAll('.error-icon').forEach(icon => icon.remove());

    // Validate userName
    if (userName === '') {
        isValid = false;
        showErrorIcon('userName');
        errorMessages.innerHTML += '<p>Full Name is required.</p>';
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        showErrorIcon('email');
        errorMessages.innerHTML += '<p>Invalid email address.</p>';
    }

    // Validate phone
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        isValid = false;
        showErrorIcon('phone');
        errorMessages.innerHTML += '<p>Phone number must be 10 digits long.</p>';
    }

    // Validate gender
    if (!gender) {
        isValid = false;
        errorMessages.innerHTML += '<p>Gender is required.</p>';
    }

    // Validate date of birth
    if (date === '') {
        isValid = false;
        showErrorIcon('date');
        errorMessages.innerHTML += '<p>Date of birth is required.</p>';
    }

    // Validate password
    if (password.length < 6) {
        isValid = false;
        showErrorIcon('password');
        errorMessages.innerHTML += '<p>Password must be at least 6 characters long.</p>';
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        isValid = false;
        showErrorIcon('confirmPassword');
        errorMessages.innerHTML += '<p>Passwords do not match.</p>';
    }

    if (isValid) {
        // If form is valid, you can submit it or handle it as needed
        this.submit();
    }
});

function showErrorIcon(inputId) {
    const inputBox = document.getElementById(inputId).parentElement;
    const errorIcon = document.createElement('i');
    errorIcon.className = 'fa fa-exclamation-circle error-icon';
    inputBox.appendChild(errorIcon);
}

document.querySelectorAll(".eye-icon").forEach(icon => {
    // icon.addEventListener("click", function () {
    //     closedEye.classList.add("d-none")
    //     openEye.classList.replace("d-none", "d-flex")
    //     console.log("opa");
    // })
    icon.addEventListener("click", togglePasswordVisibility)
})

function togglePasswordVisibility() {
    confirmPasswordInput.setAttribute('type', 'text')
    passwordInput.setAttribute('type', 'text')
}

// closedEye.addEventListener("click", function () {
//     closedEye.classList.add("d-none")
//     openEye.classList.replace("d-none", "d-flex")
//     confirmPasswordInput.setAttribute('type', 'text')
//     passwordInput.setAttribute('type', 'text')

// })

// openEye.addEventListener("click", function () {
//     openEye.classList.add("d-none")
//     closedEye.classList.replace("d-none", "d-flex")
//     confirmPasswordInput.setAttribute('type', 'password')
// })

