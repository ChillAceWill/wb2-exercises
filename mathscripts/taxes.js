// Federal taxes are 23% of your salary every month.
// You make X amount of money.How much is withheld?

var earnings = 10000.0;
var federalTax = 23 / 100;
var taxWithheld = earnings * federalTax;

// Output
console.log(taxWithheld.toFixed(2) + " will be withheld by Federal taxes.");
