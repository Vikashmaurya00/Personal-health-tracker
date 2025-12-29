document.getElementById("nameData").innerText =
    localStorage.getItem("user_name") || "--";

document.getElementById("ageData").innerText =
    localStorage.getItem("user_age") || "--";

document.getElementById("genderData").innerText =
    localStorage.getItem("user_gender") || "--";

let lastLogin = localStorage.getItem("last_login");
if (!lastLogin) {
    lastLogin = new Date().toDateString();
    localStorage.setItem("last_login", lastLogin);
}
document.getElementById("loginData").innerText = lastLogin;

// Welcome text change dynamically
let nm = localStorage.getItem("user_name");
document.getElementById("welcomeText").innerText =
    nm ? `Welcome back, ${nm}!` : "Welcome back!";


// SAFE JSON PARSE — NO CRASH
let bmiRaw = localStorage.getItem("bmi_last");
let bmiObj = bmiRaw ? JSON.parse(bmiRaw) : null;

let waterRaw = localStorage.getItem("water_today");
let waterObj = waterRaw ? JSON.parse(waterRaw) : null;

let sleepRaw = localStorage.getItem("sleep_last");
let sleepObj = sleepRaw ? JSON.parse(sleepRaw) : null;

let calRaw = localStorage.getItem("calories_today");
let calObj = calRaw ? JSON.parse(calRaw) : null;


// Display Health Summary
document.getElementById("bmiData").innerText =
    bmiObj ? `${bmiObj.value} (${bmiObj.category})` : "--";

document.getElementById("waterData").innerText =
    waterObj ? `${waterObj.total} ml / ${waterObj.goal} ml` : "--";

document.getElementById("sleepData").innerText =
    sleepObj ? `${sleepObj.text} (${sleepObj.status})` : "--";

document.getElementById("calData").innerText =
    calObj ? `${calObj.total} kcal / ${calObj.goal} kcal` : "--";
