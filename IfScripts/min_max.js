var a = 15;
var b = 40;
var c = 9;

// Max of Numbers
var max;
if (a > b && a > c) {
  max = a;
}
if (b > a && b > c) {
  max = b;
}
if (c > a && c > b) {
  max = c;
}
console.log(`${max} is the max out of ${a}, ${b}, ${c}`);

// Min of Numbers
var min;
if (a < b && a < c) {
  min = a;
}
if (b < a && b < c) {
  min = b;
}
if (c < a && c < b) {
  min = c;
}
// Output
console.log(`${min} is the min out of ${a}, ${b}, ${c}`);
