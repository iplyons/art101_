/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
//declare variable that holds the button
var button = document.getElementById("my-button");

//sort - function that sorts letters of a name

function sortName(){
  // take in user input
  var userName = document.getElementById("user-name").values;

  var nameSorted = document.createElement('p');
  nameSorted.innerHTML = userName.split('').sort().join('');

  document.getElementById("output").appendChild(nameSorted);

}

button.addEventListener("click",sortName);
