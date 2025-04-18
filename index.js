/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("header-input");
const lengthCard = document.getElementById("length");
const volumeCard = document.getElementById("volume");
const massCard = document.getElementById("mass");

function converter() {
  if (input.value != "") {
    lengthCard.innerHTML = `${input.value} meters = ${(
      input.value * 3.281
    ).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.281).toFixed(
      3
    )} meters`;
    volumeCard.innerHTML = `${input.value} liters = ${(
      input.value * 0.264
    ).toFixed(3)} gallons | ${input.value} gallons = ${(
      input.value / 0.263
    ).toFixed(3)} liters `;
    massCard.innerHTML = `${input.value} kilos = ${(
      input.value * 2.204
    ).toFixed(3)} pounds | ${input.value} pounds = ${(
      input.value / 2.204
    ).toFixed(3)} kilos`;
  }
}
