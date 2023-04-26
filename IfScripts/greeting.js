// Variables
var currentHour = 9.59;
var greeting;
if (currentHour <= 9.59) {
  greeting = "Good Morning!";
} else if (currentHour <= 16.59) {
  greeting = "Good Day!";
} else if (currentHour <= 23.59) {
  greeting = "Good Evening!";
}

// Output
console.log(greeting);
