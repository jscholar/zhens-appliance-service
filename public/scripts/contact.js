
document.querySelector("#submit").addEventListener( "click",  (e) => {
    e.preventDefault();
    let form = document.querySelector(".message");
    let formData = new FormData(form);
    let data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/contact/message");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(data));
});
