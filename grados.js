const prompt = require('prompt-sync')();
let grados = parseFloat(prompt("Ingrese los grados celsius: "));


  if (isNaN(grados)) {
    console.log("Error!! no ingresó un numero")
    
  } else {
     fahrenheit = grados *1.8+32;
     kelvin = grados + 273.15;
  }

console.log("Grados fahrenheit:"+ fahrenheit);
console.log("Grados kelvin:"+ kelvin);