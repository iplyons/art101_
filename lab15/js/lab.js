/*
* Author: Izzy Lyons
* Created: May 2
* License: Public Domain
*/
function appendText(text){
  $("#output").html(text);
}

var apiEndpoint = "https:api.chucknorris.io/jokes/random";

function apiClick(){
  $.ajax({

    url: apiEndpoint,

    data: { },

    type:"GET",

    dataType : "json",

    sucess: function( data ){
      str = ""
      str += "<p>" + data.value + "</p>";

      appendText(str);
    }
  })

  fail(function( xhr, status, errorThrown ){
    console.log("Failure.");
    appendText("This sucks.");

  })
}
$("#activate").click(apiClick);
