// =========================================================
// GAUGE CONFIG
// =========================================================

const GAUGE_MAX = 40;
const GAUGE_RADIUS = 90;
const GAUGE_CIRCUMFERENCE = 2 * Math.PI * GAUGE_RADIUS;

// =========================================================
// UPDATE GAUGE
// =========================================================

function setGaugeProgress(bmi) {

    const gauge = document.getElementById("gaugeProgress");

    if (!gauge) return;

    const value = Math.min(Math.max(bmi, 0), GAUGE_MAX);

    const percentage = value / GAUGE_MAX;

    const offset =
        GAUGE_CIRCUMFERENCE -
        (GAUGE_CIRCUMFERENCE * percentage);

    gauge.style.strokeDasharray = GAUGE_CIRCUMFERENCE;
    gauge.style.strokeDashoffset = offset;

}

// =========================================================
// UPDATE SCALE MARKER
// =========================================================

function updateScaleMarker(bmi) {

    const marker =
        document.getElementById("scaleMarker");

    if (!marker) return;

    const value =
        Math.min(Math.max(bmi, 0), GAUGE_MAX);

    marker.style.left = (value / GAUGE_MAX * 100) + "%";

}

// =========================================================
// BMI COUNT UP
// =========================================================

function animateBMI(target) {

    const element =
        document.getElementById("bmiValue");

    if (!element) return;

    const duration = 800;

    const start = performance.now();

    function frame(now) {

        const progress =
            Math.min((now - start) / duration, 1);

        const value = target * progress;

        element.textContent =
            value.toFixed(1);

        if (progress < 1) {

            requestAnimationFrame(frame);

        }

    }

    requestAnimationFrame(frame);

}