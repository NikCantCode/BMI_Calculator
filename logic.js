"use strict";

let selectImperial = 0;

const weightUnitDisplay = document.querySelector("#weightUnitSelected");
const heightUnitDisplay = document.querySelector("#heightUnitSelected");
const checkWeightInput = document.querySelector("#weightInput");
const checkHeightInput = document.querySelector("#heightInput");
const selectMetric = document.querySelector("#selectMetric");
const dataSubmit = document.querySelector("#dataSubmit");
const bmiValue = document.querySelector("#bmiValue");
const bmiResult = document.querySelector("#bmiResult");
const formControl = document.querySelectorAll(".form-control");

function unitSwitcher() {
  if (selectImperial === 0) {
    weightUnitDisplay.textContent = "LBS";
    heightUnitDisplay.textContent = "INCH";
    selectImperial = 1;
  } else {
    weightUnitDisplay.textContent = "KG";
    heightUnitDisplay.textContent = "CM";
    selectImperial = 0;
  }
}

function bmiCalc(weight, height) {
  if (selectImperial == 1) {
    return ((weight / (height * height)) * 703).toFixed(1);
  }
  return ((weight / (height * height)) * 10000).toFixed(1);
}

function checkInput() {
  for (let i = 0; i < formControl.length; i++) {
    if (formControl[i].value == "") {
      formControl[i].classList.add("is-invalid");
    } else {
      formControl[i].classList.remove("is-invalid");
    }
  }
}

function bmiClass(range) {
  if (range < 16) {
    return "Severe Thinness";
  }
  if (range <= 17) {
    return "Moderate Thinness";
  }
  if (range <= 18.5) {
    return "Mild Thinness";
  }
  if (range <= 25) {
    return "Normal";
  }
  if (range <= 30) {
    return "Overweight";
  }
  if (range <= 35) {
    return "Obese Class I";
  }
  if (range <= 40) {
    return "Obese Class II";
  }
  if (range > 40) {
    return "Obese Class III";
  }
}

// Event Handling
selectMetric.addEventListener("click", unitSwitcher);

dataSubmit.addEventListener("click", () => {
  checkInput();
  if (checkWeightInput.value !== "" || checkHeightInput.value !== "") {
    let result = bmiCalc(checkWeightInput.value, checkHeightInput.value);
    bmiValue.innerHTML = `BMI = ${result}kg/m<sup>2</sup>`;
    bmiResult.textContent = `BMI Category : ${bmiClass(result)}`;
    return;
  }
  bmiResult.innerHTML = "<small>Input is required !<small>";
});

// old code last update Aug 26, 2022

// check is freedom unit is seleted
// let selectImperial = 0;

// //btn to swicth between freedom unit or metric
// document.querySelector("#selectMetric").addEventListener("click", () => {
//   document.getElementById("weightUnitSelected").textContent = "KG";
//   document.getElementById("heightUnitSelected").textContent = "CM";
//   selectImperial = 0;
// });

// document.querySelector("#selectImperial").addEventListener("click", () => {
//   document.getElementById("weightUnitSelected").textContent = "LBS";
//   document.getElementById("heightUnitSelected").textContent = "INCH";
//   selectImperial = 1;
// });

// //user submit input
// document.getElementById("dataSubmit").addEventListener("click", () => {
//   let result, bmiValue, weight, height;
//   let checkWeightInput = document.getElementById("weightInput");
//   let checkHeightInput = document.getElementById("heightInput");

//   //check if input is empty
//   if (
//     checkWeightInput &&
//     checkWeightInput.value &&
//     checkHeightInput &&
//     checkHeightInput.value
//   ) {
//     weight = checkWeightInput.value;
//     height = checkHeightInput.value;
//   } else {
//     document.getElementById("bmiResult").innerHTML =
//       "<small>Input is required !<small>";
//     return;
//   }

//   //calculation
//   //BMI fomula (metric) = w / (h * h)
//   //BMI fomula (freedom unit) = 703 * (w / (h * h))
//   if (selectImperial == 0) {
//     result = ((weight / (height * height)) * 10000).toFixed(1);
//   } else {
//     result = ((weight / (height * height)) * 703).toFixed(1);
//   }

//   //compare BMI category
//   if (result <= 16) {
//     bmiValue = "Severe Thinness";
//   } else if (result <= 17) {
//     bmiValue = "Moderate Thinness";
//   } else if (result <= 18.5) {
//     bmiValue = "Mild Thinness";
//   } else if (result <= 25) {
//     bmiValue = "Normal";
//   } else if (result <= 30) {
//     bmiValue = "Overweight";
//   } else if (result <= 35) {
//     bmiValue = "Obese Class I";
//   } else if (result <= 40) {
//     bmiValue = "Obese Class II";
//   } else {
//     bmiValue = "Obese Class III";
//   }

//   //post result
//   document.getElementById("bmiValue").innerHTML =
//     "BMI = " + result + " kg/m<sup>2</sup>";
//   document.getElementById("bmiResult").textContent =
//     "BMI Category : " + bmiValue + "";
// });
