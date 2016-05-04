// JavaScript 

// Använd jQuery och AJAX

$('#my-button').click(function() { 
  console.log("Knappen klickades på!") 
  
  
$.get('http://api.spotify.com/v1/users/rilag001, function(data, textStatus, jqXHR) {
  
  // Visa texten från servern i stycket (<p>) med id:t show-server-text
  $('#show-server-text').text(data);
  
  // Vilken status
  console.log(textStatus);
} )
  
  
} );

