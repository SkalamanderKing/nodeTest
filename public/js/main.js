let socket = io.connect();
var globen = undefined;


//socket.emit('clientmessage', 'hi there!');
//function myFunction() {
  //   alert("Hello!");
//}
//$(document).ready(function(){
//alert( "Hej" );
//})
//$( "btn" ).click(function() {
  //alert( "Hej" );
//});

$(document).ready(function(){
    $("button").click(function(){
    	globen=$("#txt").val();
       //alert("Value: " + globen );
       
       socket.emit('chat', {value: globen});
    });
});

//socket.on('message', (message)=>{
//	console.log(message);
//});
socket.on('message', (data)=>{
 console.log(data);
 $("textarea").val($('textarea').val() + "\n" + data );
});