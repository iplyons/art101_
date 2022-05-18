/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
$("#challange").append(
  "<button class = 'blue one'>Blue Button</button>"
);

$("#probelms").append(
  "<button class = 'red two'>Red Button</button>"
);

$("#results").append(
  "<button class = 'green three'>Green Button</button>"
);

/* creating click events for buttons that toggle the 'special' class for the section the button is in */
$("button.blue").click(function(){
  $("#challange").toggleClass("special");
  $("#button.two").toggleClass("blue");
  $("#button.two").toggleClass("red");
  checkSpecial();
});

$("button.red").click(function(){
  $("#probelms").toggleClass("special");
  $("#button.one").toggleClass("red");
  $("#button.one").toggleClass("green");
  checkSpecial();
});

$("button.green").click(function(){
  $("#results").toggleClass("special");
  $("#button.one").toggleClass("green");
  $("#button.one").toggleClass("blue");
  checkSpecial();
});

function checkSpecial(){
  if ($("#challange").hasClass("special")|| $("#problems").hasClass("special") || $("#results").hasClass("special")){
    $("#output").removeClass("hidden");
  } else {
    $("#output").addClass("hidden");
  }
}
