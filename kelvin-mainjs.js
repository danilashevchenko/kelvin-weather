// Kelvin variable. The forecast today is 293 Kelvin.
const kelvib = 100;
// Celsius is 273 degrees less than Kelvin.
const celsius = kelvib-273;
var newton = celsius * (33/100);
var newton = Math.floor(newton);
//Fahrenheit = Celsius * (9/5) + 32
var fahrenheit = celsius * (9/5) + 32;
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable.
fahrenheit = Math.floor(fahrenheit);
console.log ('The temperature is ' + fahrenheit + ' degrees Fahrenheit.');
console.log (newton);