const form = document.getElementById('username');
function checkUserName(username) {
    const myRegex = /^[A-Za-z]+$/;
    return myRegex.test(username);
}
form.addEventListener("submit", event => {
    const nameInput = document.querySelector("#username");
    if (!checkUserName(nameInput.value)) {
        event.preventDefault();
        alert("Please use only lowercase or uppercase letters");
        return;
    }
});

const passwordForm = document.getElementById("password");
function checkPassword(password) {
    const rules = {
        password: {
            required: true,
            minlength: 8,
        }
    };
    const messages = {
        password: {
            required: "Please enter a password",
            minlength: "A valid password must have 8 characters",
        }
    };
    return { rules, messages };
}
