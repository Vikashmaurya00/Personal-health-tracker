// Recommended sleep based on age
document.getElementById("showRecommended").onclick = function () {
    let age = Number(document.getElementById("ageInput").value);
    let rec = "";

    if (age >= 18 && age <= 64) rec = "7–9 hours";
    else if (age >= 65) rec = "7–8 hours";
    else rec = "8–10 hours";

    document.getElementById("recommendedText").innerText = "Recommended: " + rec;
};


// Calculate sleep duration (VERY SIMPLE)
document.getElementById("calculateBtn").onclick = function () {
    let s = document.getElementById("sleepTime").value;
    let w = document.getElementById("wakeTime").value;

    if (!s || !w) {
        alert("Please enter both times");
        return;
    }
    
    const sleepInfo = {
    text: sleepDurationText,
    status: sleepStatus
};

localStorage.setItem("sleep_last", JSON.stringify(sleepInfo));

    // Convert to Date objects (simple)
    let start = new Date("2000-01-01 " + s);
    let end = new Date("2000-01-01 " + w);

    // If wake time is earlier → next day
    if (end < start) {
        end = new Date("2000-01-02 " + w);
    }

    let diff = end - start;
    let hrs = Math.floor(diff / (1000 * 60 * 60));
    let mins = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("sleepResult").innerText = hrs + " hrs " + mins + " min";


    // Sleep quality (only 3 simple rules)
    if (hrs < 6) {
        document.getElementById("statusText").innerText = "Poor Sleep";
        document.getElementById("tipText").innerText = "Try to sleep more.";
    }
    else if (hrs <= 9) {
        document.getElementById("statusText").innerText = "Good Sleep";
        document.getElementById("tipText").innerText = "Great! Keep it up.";
    }
    else {
        document.getElementById("statusText").innerText = "Oversleeping";
        document.getElementById("tipText").innerText = "Too much sleep is not ideal.";
    }
};


// Reset (super simple)
document.getElementById("resetBtn").onclick = function () {
    document.getElementById("sleepResult").innerText = "--";
    document.getElementById("statusText").innerText = "";
    document.getElementById("tipText").innerText = "";
    document.getElementById("historyList").innerHTML = "";
};
