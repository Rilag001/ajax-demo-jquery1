// JavaScript 

// Använd jQuery och AJAX

$('#my-button').click(function() { console.log("Knappen klickades på!") 
  
  
$.get("https://api.github.com/zen", function(data, textStatus, jqxHR) {
  
  // Visa texten från servern i stycket (<p>) med id:t show-server-text
  $('#show-server-text').text(data);
  
  // Vilken status
  console.log(textStatus);
} )
  
  
} );

