/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
function fizzBuzzBoom(maxNums, factorObj){
  //iterate over all of out numbers
  for (var num=0; num<maxNums;num++){
    //reset output string
    var outputStr = "";
    // iterate over the factors I got from the html
    for (var factor in factorObj) {
      //check to see if this num is a multpile of factors
      if (num % factor ==0){
        outputStr += factorObj[factor];

      }
    }
if (outputStr){
  outputStr = " - " + outputStr + "!";

}
outputToPage(num.toString()+ outputStr)
  }

}
function reportError(str){
  outputEl.innerHTML = "<div class='error'>" + str + "</div>";

}
document.getElementById("submit").addEventListener("click", function(){
  var max = document.getElementById("max").value;
  console.log("max:", max)
  if (! max){
    reportError("You must provide a maximum");
  }
}
