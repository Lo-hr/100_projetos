function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const resultDiv = document.getElementById("result");

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        resultDiv.innerHTML = "Por favor coloque valores válidos";
        return;
    }

    const bmi = calculateBMIValue(height, weight);
    const bmiCategory = getBMICategory(bmi);

    resultDiv.innerHTML = `Seu IMC é ${bmi.toFixed(2)} (${bmiCategory})`
};

function calculateBMIValue (height, weight) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
};

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Abaixo do peso"
    } else if (bmi < 24.9) {
        return "Peso Normal"
    } else if (bmi < 29.9) {
        return "Acima do peso"
    } else {
        return "Obeso"
    }
}
