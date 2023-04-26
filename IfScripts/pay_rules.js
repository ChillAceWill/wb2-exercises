//Payrate
//HoursWorked
//grosspay
var payrateA = 12.5;
var payrateB = 25;
var payrateC = 17.3;

var hoursWorkedA = 20;
var hoursWorkedB = 40;
var hoursWorkedC = 45;

var grossPayA = 250;
var grossPayB = 1000;
var grossPayC = 821.75;

// Calculations
if (hoursWorkedC > 40) {
  var overTimeC = grossPayC * 1.5;
}

// Output
console.log(overTimeC);
