// JavaScript 

// Använd jQuery och AJAX

$('#my-button').click(function() { 
  console.log("Knappen klickades på!") 
  
$.get('http://mardby.se/AJK15G/lorem_text.php', function(data, textStatus, jqXHR) {
  
  // Vilken status
  console.log(textStatus);
  console.log(jqXHR);
  
  // Visa texten från servern i stycket (<p>) med id:t show-server-text
  $('#show-server-text').text(data);

} ).fail(function(jqXHR, errorStatus, errorThrown) { 
  console.log("Request gav fel!");
  console.log("jqHRX:" + jqXHR);
  console.log("errorStatus" + errorStatus);
  console.log("errorThrown" + errorThrown);
  
  })
} 
);

// klicka på spotifyknappen
$('spotify-button').click(function() {
  // Gör en request med jQuery mot Spotify's API
  var url = "http://api.spotify.com/v1/users/rickylagerkvist";
  
  $.get(url, funktion(data, textStatus, jqXHR) {
    $('spotify-response').text(data);
  })
});

