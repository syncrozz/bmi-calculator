// =========================================================
// UI ELEMENTS
// =========================================================

const UI = {

    weight: document.getElementById("weight"),
    height: document.getElementById("height"),

    calculateBtn: document.getElementById("calculateBtn"),
    resetBtn: document.getElementById("resetBtn"),

    bmiValue: document.getElementById("bmiValue"),
    bmiCategory: document.getElementById("bmiCategory")

};

// =========================================================
// INITIALIZE
// =========================================================

init();

function init() {

    bindEvents();

}

// =========================================================
// EVENTS
// =========================================================

function bindEvents() {

    UI.calculateBtn.addEventListener("click", calculateBMI);

    UI.resetBtn.addEventListener("click", resetBMI);

    UI.weight.addEventListener("keydown", handleEnter);

    UI.height.addEventListener("keydown", handleEnter);

}

function handleEnter(event) {

    if (event.key === "Enter") {

        calculateBMI();

    }

}

// =========================================================
// CALCULATE BMI
// =========================================================

function calculateBMI() {

    clearErrors();

    const weight = parseFloat(UI.weight.value);
    const height = parseFloat(UI.height.value);

    if (!isValidInput(weight, height)) {

        if (isNaN(weight) || weight <= 0) {

            showError(
                "weightError",
                "Masukkan berat yang sah."
            );

        }

        if (isNaN(height) || height <= 0) {

            showError(
                "heightError",
                "Masukkan tinggi yang sah."
            );

        }

        return;

    }

    const result = calculateBMIResult(weight, height);

    updateResult(result);

}

// =========================================================
// VALIDATION
// =========================================================

function isValidInput(weight, height) {

    return !(

        isNaN(weight) ||
        isNaN(height) ||
        weight <= 0 ||
        height <= 0

    );

}

// =========================================================
// RESET
// =========================================================

function resetBMI() {

    clearErrors();

    resetResult();

}