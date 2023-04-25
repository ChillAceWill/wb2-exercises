// You want to buy 10% more tiles than you actually need
// How many will you buy
// There are 12 (1x1 foot) tiles per box
var lenght = 10;
var widht = 15;
var tilesPerBox = 12;
//perform calculation
var areaOfRoom = lenght * widht;
var numberOfTiles = areaOfRoom * 1.1;
var numberOfBoxes = Math.ceil(numberOfTiles / tilesPerBox);
// Output
console.log("Room Lenght:", lenght);
console.log("Room Widht:", widht);
console.log("Number of Boxes", numberOfBoxes);
console.log("Number Of tiles", numberOfTiles);
