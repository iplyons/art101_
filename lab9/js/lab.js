/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
// using getElementById() to get the output id from the index file
let outputE1 = document.getElementById('output');

// creating a new element assinging it to a newE1 and changing its HTML
let newE1 = document.createElement('p');
new1E1.innerHTML = 'Never gonna give you up!';

//creating another new element ans assining it to a new2E1 and chaning its HTML
let new2E1 = document.createElement('p');
new2E1.innerHTML = 'Never gonna let you down!';

// appending new1E1 and new2E1 to outputE1
outputE1.appendChild(new1E1);
outputE1.appendChild(new2E1);

// editing the css using JS
document.getElementById('challenge').style.color = '#ECEBE4';
document.getElementById('results').style.color = '#ECEBE4';
