// =========================================================
// BMI ENGINE
// =========================================================

function getBMI(weight, height) {

    const heightMeter = height / 100;

    return weight / (heightMeter * heightMeter);

}

function getBMIStatus(bmi) {

    if (bmi < 18.5) {

        return {
            category: "Kurang Berat",
            color: "#3B82F6",
            description:
                "Berat badan anda berada di bawah julat yang disyorkan."
        };

    }

    if (bmi < 25) {

        return {
            category: "Ideal",
            color: "#22C55E",
            description:
                "Tahniah! Berat badan anda berada dalam julat yang sihat."
        };

    }

    if (bmi < 30) {

        return {
            category: "Berat Berlebihan",
            color: "#F59E0B",
            description:
                "Berat badan anda melebihi julat yang disyorkan."
        };

    }

    return {

        category: "Obes",

        color: "#EF4444",

        description:
            "BMI anda berada dalam kategori obes. Pertimbangkan gaya hidup yang lebih sihat."

    };

}

function calculateBMIResult(weight, height) {

    const bmi = getBMI(weight, height);

    const status = getBMIStatus(bmi);

    return {

        bmi: bmi.toFixed(2),

        category: status.category,

        color: status.color,

        description: status.description

    };

}