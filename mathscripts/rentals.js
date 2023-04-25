//Vans needed

var numberOfPeople = 38;
var passengersPerVan = 15;

var vanCostPerDay = 250;

// calculations
var vansNeeded = Math.ceil(numberOfPeople / passengersPerVan);
var totalCost = vanCostPerDay * vansNeeded;
var costPerPerson = totalCost / numberOfPeople;
//output
console.log("Vans Needed", vansNeeded);
console.log("Cost", totalCost);
console.log("Cost Per Person", costPerPerson.toFixed(2));
console.log();
