const username = document.getElementById("username");
const input_username = document.getElementById("input-username");
const input_profile = document.getElementById("input-profile")
const profile = document.getElementById("profile");
const phoneTable = document.getElementById("phone-table");
const phoneInput = document.getElementById("input-phone");
const phoneNameInput = document.getElementById("input-phone-name")
let phonenumber = []
let num = 0

function change_image(){
    profile.style.backgroundImage = "url("+input_profile.value+")"
    input_profile.value = ""
}

function change_username(){
    console.log(input_username.value)
    username.textContent = input_username.value+"'s phone book"
    input_username.value = ""
}

function add_phone(){
    let row = phoneTable.insertRow()
    num = num+1
    let cell1 = row.insertCell(0)
    let cell2 = row.insertCell(1)
    let cell3 = row.insertCell(2)
    cell1.innerHTML = num
    cell2.innerHTML = phoneNameInput.value
    cell3.innerHTML = phoneInput.value
    phonenumber.push([phoneNameInput.value,phoneInput.value])
    phoneInput.value = ""
    phoneNameInput.value = ""
    console.log(phonenumber)
}

function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n"); // Convert array to CSV string
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
};
