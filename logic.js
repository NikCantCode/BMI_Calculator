//check is freedom unit is seleted
let selectImperial = 0;

//btn to swicth between freedom unit or metric
document.querySelector("#selectMetric").addEventListener("click", () => {
  document.getElementById("weightUnitSelected").textContent = "KG";
  document.getElementById("heightUnitSelected").textContent = "CM";
  selectImperial = 0;
});

document.querySelector("#selectImperial").addEventListener("click", () => {
  document.getElementById("weightUnitSelected").textContent = "LBS";
  document.getElementById("heightUnitSelected").textContent = "INCH";
  selectImperial = 1;
});

//user submit input
document.getElementById("dataSubmit").addEventListener("click", () => {
  let result, bmiValue, weight, height;
  let checkWeightInput = document.getElementById("weightInput");
  let checkHeightInput = document.getElementById("heightInput");

  //check if input is empty
  if (
    checkWeightInput &&
    checkWeightInput.value &&
    checkHeightInput &&
    checkHeightInput.value
  ) {
    weight = checkWeightInput.value;
    height = checkHeightInput.value;
  } else {
    document.getElementById("bmiResult").innerHTML =
      "<small>Input is required !<small>";
    return;
  }

  //calculation
  //BMI fomula (metric) = w / (h * h)
  //BMI fomula (freedom unit) = 703 * (w / (h * h))
  if (selectImperial == 0) {
    result = ((weight / (height * height)) * 10000).toFixed(1);
  } else {
    result = ((weight / (height * height)) * 703).toFixed(1);
  }

  //compare BMI category
  if (result <= 16) {
    bmiValue = "Severe Thinness";
  } else if (result <= 17) {
    bmiValue = "Moderate Thinness";
  } else if (result <= 18.5) {
    bmiValue = "Mild Thinness";
  } else if (result <= 25) {
    bmiValue = "Normal";
  } else if (result <= 30) {
    bmiValue = "Overweight";
  } else if (result <= 35) {
    bmiValue = "Obese Class I";
  } else if (result <= 40) {
    bmiValue = "Obese Class II";
  } else {
    bmiValue = "Obese Class III";
  }

  //post result
  document.getElementById("bmiValue").innerHTML =
    "BMI = " + result + " kg/m<sup>2</sup>";
  document.getElementById("bmiResult").textContent =
    "BMI Category : " + bmiValue + "";
});
