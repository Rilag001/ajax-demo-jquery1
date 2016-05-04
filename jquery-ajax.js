// JavaScript 

// Använd jQuery och AJAX

$('#my-button').click(function() { console.log("Knappen klickades på!") } );

$.get("http://feber.se/video/", function(data, textstatus, jqxHR) {
  
  // Visa texten från servern i stycket (<p>) med id:t show-server-text
  $('#show-server-text').text(data);
  
  // Vilken status
  console.log(textstatus);
} )
