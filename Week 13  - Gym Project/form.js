function validateForm() {
    const name = document.getElementById("Fname").value;
    const Lname = document.getElementById("Lname").value;
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const password = document.getElementById("password").value;
    const subject = document.getElementById("subject").value;
    const agree = document.getElementById("agree").checked;

    const nameError = document.getElementById("name-error");
    const LnameError = document.getElementById("Lname-error");
    const cityError = document.getElementById("city-error");
    const addressError = document.getElementById("address-error");
    const emailError = document.getElementById("email-error");
    const phoneError = document.getElementById("phone-error");
    const passwordError = document.getElementById("password-error");
    const subjectError = document.getElementById("subject-error");
    const agreeError = document.getElementById("agree-error");

    nameError.textContent = "";
    LnameError.textContent = "";
    addressError.textContent = "";
    cityError.textContent= "";
    emailError.textContent = "";
    phoneError.textContent = "";
    passwordError.textContent = "";
    subjectError.textContent = "";
    agreeError.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your First name properly.";
        isValid = false;
    }

    if (Lname === "" || /\d/.test(name)) {
        LnameError.textContent =
            "Please enter your Last name properly.";
        isValid = false;
    }

    if (address === "") {
        addressError.textContent =
            "Please enter your address properly.";
        isValid = false;
    }

    if (city === "") {
        addressError.textContent =
            "Please enter your city.";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent =
            "Please enter a valid email address.";
        isValid = false;
    }

    if (phone === "" || phone.includes("/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im")) {
        phoneError.textContent =
            "Please enter a valid phone number .";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passwordError.textContent =
            "Please enter a password with at least 6 characters.";
        isValid = false;
    }

    if (subject === "") {
        subjectError.textContent =
            "Please select your State.";
        isValid = false;
    }

    if (!agree) {
        agreeError.textContent =
            "Please agree to the above information.";
        isValid = false;
    }

    return isValid;
}