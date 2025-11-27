// select elements
let form = document.querySelector('form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let emailerror = document.querySelector('#emailerror');
let passworderror = document.querySelector('#passworderror');
let result = document.querySelector('#result');
let submit = document.querySelector('#submit');
let header = document.querySelector('h2');

// patterns (fine to keep these)
const emailpattern = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-z][a-z0-9]+(?:[._%+-][a-z0-9]+)*@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[A-Za-z]{2,}$/;
const passwordpattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit', function(e) {
    e.preventDefault(); // stop default submit

    // get trimmed values
    const emailvalue = email.value.trim();
    const passwordvalue = password.value.trim();

    // test patterns
    const emailvalid = emailpattern.test(emailvalue);
    const passwordvalid = passwordpattern.test(passwordvalue);

    // email validation function
    function emailvalidate() {
        if (emailvalue === "") {
            emailerror.style.display = "block";
            emailerror.textContent = "Email is required";
            return false;
        } else if (!emailvalid) {
            emailerror.style.display = "block";
            emailerror.textContent = "Please enter a valid email address";
            return false;
        } else {
            emailerror.style.display = "none";
            emailerror.textContent = "";
            return true;
        }
    }

    // password validation function
    function passwordvalidate() {
        if (passwordvalue === "") {
            passworderror.style.display = "block";
            passworderror.textContent = "Password is required";
            return false;
        } else if (!passwordvalid) {
            passworderror.style.display = "block";
            passworderror.textContent = "Password must be 8+ chars and include uppercase, lowercase, digit and special char.";
            return false;
        } else {
            passworderror.style.display = "none";
            passworderror.textContent = "";
            return true;
        }
    }

    let isemailvalid = emailvalidate();
    let ispasswordvalid = passwordvalidate();

    if (isemailvalid && ispasswordvalid) {
        // success UI
        form.style.display = "none";
        header.style.display = "none";
        result.style.display = "block";
        result.textContent = "Login successful 🎉";
        result.style.color = "green";

        // optional: clear values
        email.value = "";
        password.value = "";

        // optional: hide submit (or disable)
        submit.disabled = true;
    }
});
