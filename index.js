let convertBtn = document.getElementById("convert-btn");
let inputEl = document.getElementById("input");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let inputValue = inputEl.value;
  lengthEl.textContent = `${inputValue} meters = ${
    inputValue * meterToFeet
  } feet`;
  volumeEl.textContent = `${inputValue} `
});
