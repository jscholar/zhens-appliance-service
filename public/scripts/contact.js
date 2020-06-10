console.log("script works");

function submitForm() {
    let form = document.querySelector(".email-form");
    for (let field of form) {
        console.log(field.checkValidity());
        console.log(field.name);
    }
    let formData = new FormData(form);
    let data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/contact/message", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
    return false;
}

function validateField(field) {
    field.checkValidity();
}
