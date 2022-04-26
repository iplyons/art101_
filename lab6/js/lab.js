myTransport =["Tesla X", "bike", "bus"
];

myMainRide = {
  make: "Tesla",
  model: "X",
  color: "Black",
  year: "2019",
  age: function(){
    return 2017 + 2;
  }
}
document.writeln("Kinds of transportion I use:", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
JSON.stringify(myMainRide, null, '\t'), "</pre>");
