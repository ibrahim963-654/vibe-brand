

let name = document.getElementById("name");
let password = document.getElementById("password");
let form = document.querySelector("form");

form.addEventListener("submit",function(e) {
e.preventDefault();

let username = name.value.trim();
let pass = password.value.trim();

if(name === "" || password ==="") {
    alert("من فضلك ادخل الاسم وكلمه السر");
} else {
    localStorage.setItem("vibeuser",username);
    window.location.href = "index.html";
}

});
