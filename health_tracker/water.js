let goal = 0;
let total = 0;
let history = [];

const goalInput = document.getElementById("goalInput");
const setGoalBtn = document.getElementById("setGoalBtn");

const totalText = document.getElementById("totalText");
const percentText = document.getElementById("percentText");
const progressFill = document.getElementById("progressFill");

const historyList = document.getElementById("historyList");

const quickButtons = document.querySelectorAll(".quick");
const customInput = document.getElementById("customInput");
const addCustomBtn = document.getElementById("addCustomBtn");
const resetBtn = document.getElementById("resetBtn");

// Set Goal
setGoalBtn.onclick = () => {
  goal = Number(goalInput.value);
  if (goal > 0) {
    updateUI();
  } else {
    alert("Enter a valid goal");
  }
};

// Add Quick
quickButtons.forEach(btn => {
  btn.onclick = () => {
    let ml = Number(btn.dataset.ml);
    addWater(ml);
  };
});

// Add custom
addCustomBtn.onclick = () => {
  let ml = Number(customInput.value);
  if (ml > 0) addWater(ml);
  customInput.value = "";
};

// Add water function
function addWater(ml) {
  total += ml;
  history.push(ml);
  updateUI();
}

const waterInfo = {
    total: totalWater,
    goal: dailyGoal
};

localStorage.setItem("water_today", JSON.stringify(waterInfo));



// Reset
resetBtn.onclick = () => {
  total = 0;
  history = [];
  updateUI();
};

// Update UI
function updateUI() {
  totalText.innerText = `${total} / ${goal} ml`;

  let percent = goal > 0 ? (total / goal) * 100 : 0;
  percent = Math.min(percent, 100);

  percentText.innerText = `${Math.floor(percent)}%`;
  progressFill.style.width = percent + "%";

  historyList.innerHTML = "";
  history.forEach(val => {
    let li = document.createElement("li");
    li.innerText = `+${val} ml`;
    historyList.appendChild(li);
  });
}
