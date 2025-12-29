// Show Today's Date
let d = new Date();
let day = d.getDate();
let monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let month = monthNames[d.getMonth()];
let year = d.getFullYear();

document.getElementById("dateText").innerText = `${day} ${month}, ${year}`;



let goal = 0;
let total = 0;
let history = [];

// Set Goal
document.getElementById("setGoalBtn").onclick = () => {
    goal = Number(document.getElementById("goalInput").value);

    if (goal <= 0) {
        alert("Enter a valid calorie goal");
        return;
    }

    updateUI();
};

// Add Calories
document.getElementById("addCalBtn").onclick = () => {
    let cal = Number(document.getElementById("calInput").value);

    if (cal <= 0) {
        alert("Enter valid calories");
        return;
    }

    total += cal;
    history.push(cal);

    document.getElementById("calInput").value = "";
    updateUI();
};

const calInfo = {
    total: totalCalories,
    goal: dailyGoal
};

localStorage.setItem("calories_today", JSON.stringify(calInfo));


// Reset Day
document.getElementById("resetBtn").onclick = () => {
    total = 0;
    history = [];
    updateUI();
};

// Update UI
function updateUI() {
    document.getElementById("summaryText").innerText = `${total} / ${goal} kcal`;

    let percent = goal > 0 ? (total / goal) * 100 : 0;
    if (percent > 100) percent = 100;

    document.getElementById("progressFill").style.width = percent + "%";
    document.getElementById("percentText").innerText = Math.floor(percent) + "%";

    // Update History
    let list = document.getElementById("historyList");
    list.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement("li");
        li.innerText = `+${item} kcal`;
        list.appendChild(li);
    });

    // Suggestion
    let sug = document.getElementById("suggestionText");

    if (goal === 0) {
        sug.innerText = "";
        return;
    }

    if (total < goal * 0.5) {
        sug.innerText = "Low calories — eat enough healthy food.";
    }
    else if (total <= goal) {
        sug.innerText = "Good — you are within a healthy range!";
    }
    else {
        sug.innerText = "Too many calories — avoid overeating.";
    }
}
