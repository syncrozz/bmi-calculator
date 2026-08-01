// =========================================================
// UI RENDERER
// =========================================================

function updateResult(result) {

    animateBMI(parseFloat(result.bmi));

    UI.bmiCategory.textContent = result.category;

    UI.bmiCategory.style.color = result.color;

    // Tukar warna Gauge secara automatik
    document.documentElement.style.setProperty(
        "--gauge-color",
        result.color
    );

    const description = document.getElementById("bmiDescription");

    if (description) {

        description.textContent = result.description;

    }

    // Gerakkan Gauge mengikut BMI
    setGaugeProgress(parseFloat(result.bmi));

}

function resetResult() {

    UI.weight.value = "";

    UI.height.value = "";

    UI.bmiValue.textContent = "0.0";

    UI.bmiCategory.textContent = "Semak BMI Anda";

    UI.bmiCategory.style.color = "#64748B";

    // Reset warna Gauge
    document.documentElement.style.setProperty(
        "--gauge-color",
        "#2563EB"
    );

    // Reset kedudukan Gauge
    setGaugeProgress(0);

    const description = document.getElementById("bmiDescription");

    if (description) {

        description.textContent =
            "Masukkan berat dan tinggi untuk mengetahui status BMI anda.";

    }

    setGaugeProgress(0);

    updateScaleMarker(0);

    UI.weight.focus();

}

function clearErrors(){

    document.getElementById("weightError").textContent = "";

    document.getElementById("heightError").textContent = "";

}

function showError(field,message){

    document.getElementById(field).textContent = message;

}