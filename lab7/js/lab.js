function sortUserName () {
  var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
  console.log("userName =", userName);
  // split string to array
  var nameArray= userName.split('');
  console.log("nameArray =", nameArray);
  // sort the array
  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  //join array back to string
  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  return nameSorted;
}

//output
document.writeln("Oh hey, I have fixed your name:",
  sortUserName(), "</br>");
