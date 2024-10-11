const username = document.getElementById("username");
const input_username = document.getElementById("input-username");
const input_profile = document.getElementById("input-profile")
const profile = document.getElementById("profile");
username.textContent = "Cyan";
console.log("123");
console.log(input_username.value);

function change_image(){
    profile.style.backgroundImage = "url("+input_profile.value+")"
    input_profile.value = ""
}

function change_username(){
    console.log(input_username.value)
    username.textContent = input_username.value
    input_username.value = ""
}