let socket = io.connect();

socket.on('message', (message)=>{
	console.log(message);
});

socket.emit('clientmessage', 'hi there!');
//function myFunction() {
  //   alert("Hello!");
//}
//$(document).ready(function(){
//alert( "Hej" );
//})
//$( "btn" ).click(function() {
  //alert( "Hej" );
//});
var globen = undefined;
$(document).ready(function(){
    $("button").click(function(){
    	globen=$("#txt").val();
       //alert("Value: " + globen );
       $("textarea").val($('textarea').val() + "\n" + globen );
    });
});