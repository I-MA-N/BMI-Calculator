const weightElem = document.getElementById("weight");
const heightElem = document.getElementById("height");
const weightTextElem = document.getElementById("weightText");
const heightTextElem = document.getElementById("heightText");
const resultElem = document.getElementById("result");
const statuesElem = document.getElementById("statues");

function calculateBmi() {
    let weightNum = weightElem.value;
    let heightNum = heightElem.value / 100;

    weightTextElem.innerHTML = weightNum + 'kg';
    heightTextElem.innerHTML = heightElem.value + 'cm';

    let BMI = (weightNum / (heightNum * heightNum)).toFixed(2);
    resultElem.innerHTML = BMI;

    if(BMI <= 18.5) {
        resultElem.className = 'under-weight';
        statuesElem.innerHTML = 'Underweight';
    } else if (BMI <= 24.9) {
        resultElem.className = 'normal-weight';
        statuesElem.innerHTML = 'Normal weight';
    } else if (BMI <= 29.9) {
        resultElem.className = 'over-weight';
        statuesElem.innerHTML = 'Over weight';
    } if (BMI >= 30) {
        resultElem.className = 'obese';
        statuesElem.innerHTML = 'Obese';
    }
}

weightElem.addEventListener('input', calculateBmi);
heightElem.addEventListener('input', calculateBmi);