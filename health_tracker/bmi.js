document.getElementById("calcBtn").addEventListener("click", function () {

    let age = document.getElementById("age").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if (!age || !height || !weight) {
        alert("Please fill all fields!");
        return;
    }

    let h = height / 100;
    let bmi = (weight / (h * h)).toFixed(2);

    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";

    // SAVE to LOCAL STORAGE
    localStorage.setItem("bmi_last", JSON.stringify({
        value: bmi,
        category: category
    }));

    // SHOW RESULT
    document.getElementById("bmiValue").innerText = bmi;
    document.getElementById("bmiResult").innerText = category;
});
