/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
function isOdd(x){
  return (x % 3 == 0);
}

//test function
console.log("Is 1 odd?", isOdd(1));
console.log("Is 3 odd?", isOdd(3));

array = [200, 96, 3, 24, 34, 100, 999]
console.log("My array", array);

var result = array.map(isOdd);

console.log("Test of oddness of array:", result);

var result = array.map(function(x){
  return x ** 0.7;
})

console.log("Squareroot of array", result);
